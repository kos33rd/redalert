Ext.define('RedAlert.view.workspace.Board', {
    extend: 'Ext.container.Container',
    xtype: 'ws-board',
    requires: [
        'RedAlert.view.workspace.column.BacklogColumn'
    ],

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'col-backlog',
            flex: 1,
            border: 5
        }, {
            xtype: 'col-backlog',
            title: 'New',
            flex: 1
        }, {
            xtype: 'col-backlog',
            title: 'In progress',
            flex: 1
        }, {
            xtype: 'col-backlog',
            title: 'Done',
            flex: 1
        }
    ]
});