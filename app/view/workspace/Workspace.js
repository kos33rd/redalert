Ext.define('RedAlert.view.workspace.Workspace', {
    extend: 'Ext.panel.Panel',
    requires: [
        'RedAlert.view.workspace.Board'
    ],
    xtype: 'app-workspace',

    // no header and non-empty title is intentional - used for WAI-ARIA accessibility
    title: 'Main workspace',
    header: false,

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