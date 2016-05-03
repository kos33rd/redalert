Ext.define('RedAlert.view.navigation.NavigationController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'RedAlert.store.Statuses',
        'RedAlert.view.navigation.StatusButton'
    ],

    alias: 'controller.navigation',

    onprojectcomboselect: function (combo, project) {
        Nav.setProject(project);
    },

    onversioncomboselect: function (combo, version) {
        Nav.setVersion(version);
    },

    init: function () {
        var me = this;
        Nav.on('projectset', function (project) {
            var versionsStore = project.versions();
            versionsStore.load();
            me.lookupReference('versionscombo').setStore(versionsStore);
            me.lookupReference('versionscombo').setVisible(true);
        });
        Ext.getStore('issue_statuses').on('datachanged', me.buildStatusesSelector, this);
    },

    buildStatusesSelector: function (store) {
        var me = this,
            items = [],
            old_selector = me.lookupReference('statuses_selector'),
            navigation = me.getView(),
            idx = navigation.items.indexOf(old_selector);

        navigation.remove(old_selector);
        Ext.Array.each(store.getData().items, function (status) {
            items.push(
                Ext.create('RedAlert.view.navigation.StatusButton', {
                    text: me.shortname(status.get('name')),
                    stateId: 'statusbtn-' + status.get('id'),
                    tooltip: status.get('name'),
                    status: status.get('id'),
                    listeners: {
                        toggle: function(btn){
                            me.statusselectionchanged(btn, btn.pressed);
                        }
                    }
                })
            );
        });
        var selector = Ext.create('Ext.button.Segmented', {
            allowMultiple: true,
            reference: 'statuses_selector',
            items: items
        });
        navigation.insert(idx, selector);
    },

    shortname: function (name) {
        return Ext.String.splitWords(name).map(function (w) {
            return w[0].toUpperCase();
        }).join('');
    },

    statusselectionchanged: function (button, status) {
        console.log(arguments);
    }
});
