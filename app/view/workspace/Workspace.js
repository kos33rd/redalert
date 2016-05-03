Ext.define('RedAlert.view.workspace.Workspace', {
    extend: 'Ext.panel.Panel',
    requires: [
        'RedAlert.view.workspace.Board'
    ],
    xtype: 'app-workspace',
    layout: {
        type: 'card'
    },
    items: [
        {
            xtype: 'ws-board',
            title: 'Agile scrum board'
        }
        // ,{
        //     xtype: 'ws-project'
        //     html: 'Project details'
        // },{
        //     xtype: 'ws-version',
            // html: 'Version details'
        //}
    ]
});