Ext.define('RedAlert.Application', {
    extend: 'Ext.app.Application',
    
    name: 'RedAlert',
    requires: [
        'RedAlert.Environment',
        'RedAlert.Navigation'
    ],

    stores: [
        'RedAlert.store.Issues',
        'RedAlert.store.Projects'
    ],

    constructor: function (config) {
        var callback = Ext.bind(this.self.superclass.superclass.constructor, this, arguments);
        Env.initialize(callback);
        return null;
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
