Ext.define('RedAlert.view.navigation.Navigation', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-navigation',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            // xtype: 'nav-userinfo'
            xtype: 'panel',
            height: 150,
            title: 'Userinfo'
        },{
            xtype: 'nav-projects',
            autoScroll: true,
            // title: 'Projects',
            flex: 1
        }
    ]
});