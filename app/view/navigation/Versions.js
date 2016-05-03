Ext.define('RedAlert.view.navigation.Versions', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'nav-versions',
    reference: 'versionscombo',
    store: 'ext-empty-store',
    displayField: 'name',
    valueField: 'id',
    queryMode: 'local',
    editable: false,
    emptyText: 'Select a version',
    listeners: {
        select: 'onversioncomboselect'
    }
});