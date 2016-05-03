Ext.define('RedAlert.view.workspace.column.Column', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.ux.DataView.Animated',
        'RedAlert.view.workspace.column.ColumnView'
    ],

    scrollable: 'vertical',
    layout: 'fit',
    titleAlign: 'center',
    items: [{
        xtype: 'col-view'
    }],

    initComponent: function () {
        this.items[0].store = this.store;
        this.callParent(arguments);
    }
});