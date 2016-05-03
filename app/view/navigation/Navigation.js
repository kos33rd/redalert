Ext.define('RedAlert.view.navigation.Navigation', {
    extend: 'Ext.panel.Panel',
    requires: [
        'RedAlert.view.navigation.Projects',
        'RedAlert.view.navigation.Versions'
    ],
    xtype: 'app-navigation',
    controller: 'navigation',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'nav-projects',
            width: 350
        },{
            xtype: 'nav-versions',
            width: 350,
            hidden: true
        },
        {
            xtype: 'box',
            flex: 1
        },
        {
            // xtype: 'nav-userinfo'
            xtype: 'panel',
            width: 150,
            title: 'Userinfo'
        }
    ]
});