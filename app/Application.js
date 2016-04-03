/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('RedAlert.Application', {
    extend: 'Ext.app.Application',
    
    name: 'RedAlert',
    requires: [
        'RedAlert.Env'
    ],

    stores: [
        'RedAlert.store.Issues',
        'RedAlert.store.Projects'
    ],

    constructor: function (config) {
        var callback = Ext.bind(this.self.superclass.superclass.constructor, this, arguments);
        RedAlert.Env.initialize(callback);
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
