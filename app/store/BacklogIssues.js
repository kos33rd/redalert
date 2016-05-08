Ext.define('RedAlert.store.BacklogIssues', {
    extend: 'Ext.data.Store',
    model: 'RedAlert.model.Issue',
    storeId: 'backlog_issues',
    remoteFilter: true,

    constructor: function () {
        var me = this;
        me.callParent(arguments);
        Nav.on('projectset', function (project) {
            me.getProxy().setExtraParams(
                {
                    project_id: project.get('id')
                }
            );
            me.load();
        });
    }
});