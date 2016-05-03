Ext.define('RedAlert.model.Issue', {
    extend: 'RedAlert.model.Base',
    requires: [
        'RedAlert.utils.RestProxy',
        'RedAlert.model.User',
        'RedAlert.model.Category',
        'RedAlert.model.Version',
        'RedAlert.model.Priority',
        'RedAlert.model.Project',
        'RedAlert.model.Status',
        'RedAlert.model.Tracker'
    ],
    fields: [
        {name: 'id', type: 'int'},
        {name: 'assigned_to', reference: 'User'},
        {name: 'author', reference: 'User'},
        {name: 'category', reference: 'Category'},
        {name: 'created_on', type: 'date'},
        {name: 'description', type: 'string'},
        {name: 'done_ratio', type: 'int'},
        {name: 'estimated_hours', type: 'float'},
        {name: 'fixed_version', reference: 'Version'},
        {name: 'priority', reference: 'Priority'},
        {name: 'project', reference: 'Project'},
        {name: 'start_date', type: 'date'},
        {name: 'status', reference: 'Status'},
        {name: 'subject', type: 'string'},
        {name: 'tracker', reference: 'Tracker'},
        {name: 'updated_on', type: 'date'}
    ],
    proxy: {
        type: 'backendrest',
        url: 'issues.json',
        reader: {
            rootProperty: 'issues'
        }
    }
});