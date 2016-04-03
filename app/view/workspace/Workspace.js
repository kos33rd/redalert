Ext.define('RedAlert.view.workspace.Workspace', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-workspace',
    layout: {
        type: 'card'
    },
    items: [
        {
            // xtype: 'ws-empty',
            xtype: 'panel',
            title: 'Initial panel',
            html: 'Empty initial panel'
        },{
            // xtype: 'ws-project'
            xtype: 'panel',
            html: 'Project details'
        },{
            // xtype: 'ws-version',
            xtype: 'panel',
            html: 'Version details'
        }
    ]
});