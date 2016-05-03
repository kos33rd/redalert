Ext.define('RedAlert.view.navigation.NavigationController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.navigation',

    onprojectcomboselect: function(combo, project){
        Nav.setProject(project);
    },

    onversioncomboselect: function(combo, version){
        Nav.setVersion(version);
    },

    init: function(){
        var me = this;
        Nav.on('projectset', function(project){
            var versionsStore = project.versions();
            versionsStore.load();
            me.lookupReference('versionscombo').setStore(versionsStore);
            me.lookupReference('versionscombo').setVisible(true);
        });
    }
});
