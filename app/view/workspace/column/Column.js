Ext.define('RedAlert.view.workspace.column.Column', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.ux.DataView.Animated',
        'RedAlert.view.workspace.column.ColumnView'
    ],
    flex: 1,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    titleAlign: 'center',
    items: [{
        xtype: 'col-view',
        flex: 1
    }],

    initComponent: function () {
        this.items[0].store = this.store;
        this.callParent(arguments);
    }
});