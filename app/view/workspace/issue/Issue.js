Ext.define('RedAlert.view.workspace.issue.Issue', {
    extend: 'Ext.form.Panel',
    xtype: 'issue',
    title: 'Issue',
    height: 100,
    padding: 10,
    titleAlign: 'center',

    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'First Name',
            name: 'subject',
            allowBlank: false
        }
    ],

    setIssue: function(issue){
        this.loadRecord(issue);
        this.setTitle('#'+issue.get('id'));
    }
});