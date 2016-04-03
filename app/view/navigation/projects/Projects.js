Ext.define('RedAlert.view.navigation.projects.Projects', {
    extend: 'Ext.panel.Panel',
    xtype: 'nav-projects',
    requires: ['Ext.list.Tree'],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    border: 1,
    items: [
        {
            xtype: 'treelist',
            store: 'RedAlert.store.Projects'
        }
    ]
});