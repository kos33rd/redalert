Ext.define('RedAlert.model.Status', {
    extend: 'RedAlert.model.Base',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'}
    ],
    proxy: {
        type: 'backendrest',
        url: 'issue_statuses.json',
        reader: {
            rootProperty: 'issue_statuses'
        }
    }
});