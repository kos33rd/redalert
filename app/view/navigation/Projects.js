Ext.define('RedAlert.view.navigation.Projects', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'nav-projects',
    reference: 'projectscombo',
    store: 'projects',
    displayField: 'name',
    valueField: 'id',
    queryMode: 'local',
    editable: false,
    emptyText: 'Select a project',
    listeners: {
        select: 'onprojectcomboselect'
    }
});