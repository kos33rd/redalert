Ext.define('RedAlert.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        // 'Ext.plugin.Viewport',
        'RedAlert.view.main.MainController',
        'RedAlert.view.navigation.Navigation',
        'RedAlert.view.workspace.Workspace'
    ],

    controller: 'main',

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'app-navigation',
        border: true,
        region: 'west',
        width: 250
    }, {
        xtype: 'app-workspace',
        border: true,
        region: 'center'
    }]
});
