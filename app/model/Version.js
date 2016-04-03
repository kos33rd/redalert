Ext.define('RedAlert.model.Version', {
    extend: 'RedAlert.model.Base',
    requires: [
        'RedAlert.utils.RestProxy'
    ],
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'project_id', reference: 'Project'},
        {name: 'text', depends: 'name', calculate: function(data){return data.name;}}
    ],

    proxy: {
        type: 'backendrest',
        url: 'projects/{project_id}/versions.json',
        reader: {
            rootProperty: 'versions'
        }
    }
});