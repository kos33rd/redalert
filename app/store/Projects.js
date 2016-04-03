Ext.define('RedAlert.store.Projects', {
    extend: 'Ext.data.TreeStore',
    model: 'RedAlert.model.Project',

    listeners: {

        /*
        NB: A little hack to "join" Projects and Versions as one-to-many relationship entities.
        At this moment there is no way in ExtJS to load into TreeStore heterogenous data from different sources/proxies.
        We have to made it manually and transparent to NodeInterface,
        so in case of request of unloaded childs of Project (his Versons) during node ```expand``` call,
        we are requesting them manually by relation (```node.versions().load```), appending them as children,
        marking Project record as loaded and calling an expand over Project again, giving a second chance to NodeInterface.
         */
        nodebeforeexpand: function (node) {
            if (node instanceof RedAlert.model.Project) {
                var project = node;
                if(!project.get('loaded')){
                    project.versions().load(
                        {
                            params: {project_id: project.get('id')},
                            callback: function (versions) {
                                project.appendChild(versions);
                                project.set('loaded', true);
                                project.expand();
                                console.log(project);
                            }
                        }
                    );
                    return false;
                }
            }
        }
    },
    constructor: function () {
        this.callParent(arguments);
        var root = Ext.create('Ext.data.TreeModel', {expanded: true});
        this.setRoot(root);
    }
});
