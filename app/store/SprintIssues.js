Ext.define('RedAlert.store.SprintIssues', {
    extend: 'Ext.data.Store',
    model: 'RedAlert.model.Issue',
    storeId: 'issues',
    autoLoad: true,
    remoteFilter: true,

    constructor: function () {
        var me = this;
        me.callParent(arguments);
        Nav.on('versionset', function (version) {
            me.getProxy().setExtraParams(
                {
                    fixed_version_id: version.get('id')
                }
            );
            me.load();
        });
    }
});