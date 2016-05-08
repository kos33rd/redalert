Ext.define('RedAlert.view.workspace.column.SprintColumn', {
    extend: 'RedAlert.view.workspace.column.Column',
    xtype: 'col-sprint',
    title: 'Sprint column',
    store: 'ext-empty-store',
    config: {
        status: null
    },

    initComponent: function(){
        if(!this.status){
            Ext.log({
                level: 'warn',
                msg: '[RedAlert.view.workspace.column.SprintColumn] SprintColumn initialized with no status.',
                stack: true
            });
        } else {
            var status = this.status.get('id');
            this.store = Ext.create('Ext.data.ChainedStore', {
                source: 'issues',
                filters: [{
                    filterFn: function(item) {
                        return item.getStatus().get('id') == status;
                    }
                }]
            });
        }
        this.callParent(arguments);
    }
});