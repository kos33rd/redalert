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
    },

    // FIXME: first item selected on load for debug purpose. Remove method after development.
    initComponent: function(){
        this.callParent(arguments);
        var me = this;
        this.getStore().on('load', function(store){
            me.select(store.first());
            me.fireEvent('select', me, store.first());
        })
    }
});