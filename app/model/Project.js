Ext.define('RedAlert.model.Project', {
    extend: 'RedAlert.model.Base',
    requires: [
        'RedAlert.utils.RestProxy',
        'RedAlert.model.Version'
    ],
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'identifier', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'created_on', type: 'date'},
        {name: 'updated_on', type: 'date'},
        {name: 'is_public', type: 'bool'},
        {name: 'text', depends: 'name', convert: function(v, rec){return rec.get('name');}}
    ],

    proxy: {
        type: 'backendrest',
        url: 'projects.json',
        reader: {
            rootProperty: 'projects'
        }
    }
});