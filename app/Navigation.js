Ext.define('RedAlert.Navigation', {
    extend: 'Ext.util.Observable',
    alternateClassName: 'Nav',
    singleton: true,
    config: {
        project: null,
        version: null
    },

    applyProject: function (project) {
        return this.assertObjectType(project, RedAlert.model.Project);
    },

    updateProject: function (project) {
        this.fireEvent('projectset', project);
    },

    applyVersion: function (version) {
        return this.assertObjectType(version, RedAlert.model.Version);
    },

    updateVersion: function (version) {
        this.fireEvent('versionset', version);
    },

    assertObjectType: function(object, type) {
        if (object && !(object instanceof type)) {
            Ext.log({
                level: 'warn',
                msg: '[Navigation] Attempt to set wrong type of object. Expected "' + type.$className + '".',
                stack: true
            });
            return null;
        }
        return object;
    }

});
