Ext.define('RedAlert.Environment', {
    singleton: true,
    alternateClassName: 'Env',

    config_url: 'env.json',
    
    variables: {},
    initialize: function(callback){
        var me = this;
        Ext.Ajax.request({
            url: me.config_url,
            timeout: 5000,
            success: function (resp) {
                try {
                    me.variables = Ext.JSON.decode(resp.responseText);
                    Ext.log({msg: 'Config successfully loaded.', level: 'info'});
                }
                catch (exception) {
                    Ext.log({msg: 'Config parsing failed. Check your "env.json" in project root.', level: 'error'});
                }
                finally {
                    callback();
                }
            },
            failure: function (resp) {
                Ext.log({
                    msg: 'Config load failed. Check if "env.json" file exists and available in project root folder.',
                    level: 'error', dump: resp
                });
            }
        });
    },

    get: function(variable){
        if(variable && this.variables[variable]) return this.variables[variable];
        return null;
    }
});