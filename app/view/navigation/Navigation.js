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

    // no header and non-empty title is intentional - used for WAI-ARIA accessibility
    title: 'Navigation',
    header: false,

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
            flex: 1,
            reference: 'navigation_spacer'
        },
        {
            xtype: 'box',
            width: 1,
            reference: 'statuses_selector'
        },
        {
            // xtype: 'nav-userinfo'
            xtype: 'panel',
            width: 150,
            title: 'Userinfo',
            reference: 'user_info'
        }
    ]
});