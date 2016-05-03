Ext.define('RedAlert.view.workspace.column.ColumnView', {
    extend: 'Ext.view.View',
    requires: [
        'RedAlert.view.workspace.issue.Issue'
    ],
    xtype: 'col-view',
    store: 'ext-empty-store',
    itemSelector: 'div.component',
    margin: 10,
    tpl: [
        '<tpl for=".">',
            '<div class="component"></div>',
        '</tpl>'
    ],
    plugins: {
        xclass: 'Ext.ux.DataView.Animated'
    },
    listeners: {
        refresh: function(view, opts){
            Ext.suspendLayouts();
            var nodes = view.getNodes(),
                len = nodes.length,
                i = 0;
            for(; i < len; i++){
                var node = nodes[i],
                    record = view.getRecord(node),
                    issueForm;

                issueForm = Ext.create('RedAlert.view.workspace.issue.Issue', {
                    renderTo: node
                });
                issueForm.setIssue(record);
            }
            Ext.resumeLayouts(true);
        }
    }
});