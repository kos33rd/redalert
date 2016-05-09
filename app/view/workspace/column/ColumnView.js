Ext.define('RedAlert.view.workspace.column.ColumnView', {
    extend: 'Ext.view.View',
    requires: [
        'RedAlert.view.workspace.issue.Issue'
    ],
    xtype: 'col-view',
    store: 'ext-empty-store',
    scrollable: 'vertical',
    focusable: false,
    itemSelector: 'div.component',
    tpl: [
        '<tpl for=".">',
            '<div class="component"></div>',
        '</tpl>'
    ],
    plugins: {
        xclass: 'Ext.ux.DataView.Animated'
    },
    issues: [],
    listeners: {
        refresh: function(view, opts){
            Ext.suspendLayouts();
            var nodes = view.getNodes(),
                len = nodes.length,
                i = 0;
            this.issues = [];
            for(; i < len; i++){
                var node = nodes[i],
                    record = view.getRecord(node),
                    issueForm;
                issueForm = Ext.create('RedAlert.view.workspace.issue.Issue', {
                    renderTo: node,
                    issue: record
                });
                this.issues.push(issueForm);
            }
            Ext.resumeLayouts(true);
        },
        resize: function(){
            Ext.suspendLayouts();
            Ext.Array.each(this.issues, function(issueCard){
                issueCard.updateLayout();
            });
            Ext.resumeLayouts(true);
        }
    }
});