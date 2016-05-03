Ext.define('RedAlert.view.workspace.column.BacklogColumn', {
    extend: 'RedAlert.view.workspace.column.Column',
    xtype: 'col-backlog',
    title: 'Backlog',

    requires: [
        'Ext.ux.DataView.Animated',
        'RedAlert.view.workspace.column.ColumnView'
    ],

    layout: 'fit',
    items: [{
        xtype: 'col-view'
    }],
    store: 'issues',

    initComponent: function(){
        this.items[0].store = this.store;
        this.callParent(arguments);
    }
});