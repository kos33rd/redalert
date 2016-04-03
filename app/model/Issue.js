Ext.define('RedAlert.model.Issue', {
    extend: 'RedAlert.model.Base',
    requires: [
        'RedAlert.utils.RestProxy',
        'RedAlert.model.Project'
    ],
    fields: [
        {name: 'id', type: 'int'},
        {name: 'project', reference: 'Project'}
    ],
    proxy: {
        type: 'backendrest',
        url: 'issues.json',
        reader: {
            rootProperty: 'issues'
        }
    }
});