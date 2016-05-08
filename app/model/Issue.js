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
        {name: 'assigned_to_name', calculate: function(data){return data.assigned_to?data.assigned_to.name:null;}},
        {name: 'author', reference: 'User'},
        {name: 'author_name', calculate: function(data){return data.author.name;}},
        {name: 'category', reference: 'Category'},
        {name: 'category_name', calculate: function(data){return data.category?data.category.name:null;}},
        {name: 'created_on', type: 'date'},
        {name: 'description', type: 'string'},
        {name: 'done_ratio', type: 'int'},
        {name: 'estimated_hours', type: 'float'},
        {name: 'fixed_version', reference: 'Version'},
        {name: 'fixed_version_name', calculate: function(data){return data.fixed_version?data.fixed_version.name:null;}},
        {name: 'priority', reference: 'Priority'},
        {name: 'priority_name', calculate: function(data){return data.priority.name;}},
        {name: 'project', reference: 'Project'},
        {name: 'project_name', calculate: function(data){return data.project.name;}},
        {name: 'start_date', type: 'date'},
        {name: 'status', reference: 'Status'},
        {name: 'status_name', calculate: function(data){return data.status.name;}},
        {name: 'subject', type: 'string'},
        {name: 'tracker', reference: 'Tracker'},
        {name: 'tracker_name', calculate: function(data){return data.tracker.name;}},
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