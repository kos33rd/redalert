Ext.define('RedAlert.store.Issues', {
    extend: 'Ext.data.Store',
    model: 'RedAlert.model.Issue',
    storeId: 'issues',
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