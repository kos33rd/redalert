Ext.define('RedAlert.store.Issues', {
    extend: 'Ext.data.Store',
    model: 'RedAlert.model.Issue',
    storeId: 'issues',
    autoLoad: true,
    remoteFilter: true,

    constructor: function () {
        var me = this;
        me.callParent(arguments);
        Nav.on('projectset', function (project) {
            me.getProxy().setExtraParams(
                {
                    project_id: version.get('project')
                }
            );
            me.load();
        });
    }
});