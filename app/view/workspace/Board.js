Ext.define('RedAlert.view.workspace.Board', {
    extend: 'Ext.container.Container',
    xtype: 'ws-board',
    requires: [
        'RedAlert.view.navigation.BoardController',
        'RedAlert.view.workspace.column.BacklogColumn'
    ],
    controller: 'board',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'col-backlog',
            flex: 1,
            maxWidth: 500,
            border: 5
        }
        // , {
        //     xtype: 'col-sprint',
        //     title: 'New',
        //     flex: 1
        // }, {
        //     xtype: 'col-sprint',
        //     title: 'In progress',
        //     flex: 1
        // }, {
        //     xtype: 'col-sprint',
        //     title: 'Done',
        //     flex: 1
        // }
    ]
});