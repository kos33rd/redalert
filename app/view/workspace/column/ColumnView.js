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
            '<div class="component">',
                '<div class="columnview-dropzone" style="display: none;"></div>',
            '</div>',
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
        },

        render: function(){
            var me = this;
            this.dropZone = Ext.create('Ext.dd.DropZone', this.getEl(), {
                // ddGroup: 'columns',
                getTargetFromEvent: function(e) {
                    return e.getTarget(me.itemSelector);
                },
                onNodeEnter : me.showDropZone,
                onNodeOut: me.hideDropZone,
                onNodeOver : function(target, dd, e, data){
                    return Ext.dd.DropZone.prototype.dropAllowed;
                },
                onNodeDrop : function(target, dd, e, data){
                    return false;
                }
            });
        }
    },

    showDropZone: function(nodeData, source, e, data){
        var itemEl = Ext.fly(nodeData);
        // var itemYCenter = itemEl.getXY()[1] + itemEl.getHeight()/2;
        //
        // // if mouse pointer is below underlying card's center, show dropzone below
        // if (e.xy[1] > itemYCenter){
        //     itemEl = itemEl.next();
        // }
        if (itemEl){
            var dropzone = itemEl.child('.columnview-dropzone'),
                dropzoneHeight = Ext.fly(source.getDragEl()).getHeight();
            dropzone.setDisplayed(true);
            dropzone.setHeight(dropzoneHeight, {duration : 250});
        }
        //debugger;
    },
    hideDropZone: function(nodeData, source, e, data){
        var itemEl = Ext.fly(nodeData);
        if (itemEl){
            var dropzone = itemEl.child('.columnview-dropzone');
            dropzone.setDisplayed(false);
            dropzone.setHeight(0);
        }
    }
});