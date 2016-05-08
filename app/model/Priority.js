Ext.define('RedAlert.model.Priority', {
    extend: 'RedAlert.model.Base',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'}
    ],
    proxy: {
        type: 'backendrest',
        url: 'enumerations/issue_priorities.json',
        reader: {
            rootProperty: 'issue_priorities'
        }
    }
});