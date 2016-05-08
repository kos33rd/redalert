Ext.define('RedAlert.view.workspace.issue.Issue', {
    extend: 'Ext.form.Panel',
    xtype: 'issue',
    title: 'Issue',
    height: 190,
    margin: 5,
    border: true,
    titleAlign: 'center',
    ui: 'issue-urgent',
    config: {
        issue: null
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaultType: 'displayfield',
    items: [
        {
            xtype: 'fieldcontainer',
            height: 30,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'status_name',
                    fieldLabel: 'Status',
                    hideLabel: true,
                    allowBlank: false,
                    flex: 1
                }, {
                    xtype: 'textfield',
                    name: 'estimated_hours',
                    hideLabel: true,
                    fieldLabel: 'Estimated hours',
                    flex: 1
                }, {
                    xtype: 'label',
                    text: 'Hr',
                    width: 15
                }
            ]
        }, {
            name: 'subject',
            height: 10
        }, {
            name: 'description',
            height: 45
        }, {
            fieldLabel: 'Assigned to',
            xtype: 'combobox',
            hideLabel: false,
            height: 20,
            name: 'assigned_to_name'
        }
    ],

    initComponent: function () {
        var issue = this.getIssue();
        if (!issue) {
            Ext.log({level: 'error', msg: '[' + this.$className + '] Issue is not specified in constructor.'});
            return;
        }
        var priority = issue.getPriority();
        this.ui = this.getPriorityUi(issue.getPriority());
        this.title = '#' + issue.get('id');
        this.callParent(arguments);
        this.loadRecord(issue);
    },

    getPriorityUi: function (priority) {
        var ui = 'default';
        switch (priority.get('name')) {
            case 'Low':
                ui = 'issue-low';
                break;
            case 'Normal':
                ui = 'issue-normal';
                break;
            case 'High':
                ui = 'issue-high';
                break;
            case 'Urgent':
                ui = 'issue-urgent';
                break;
            case 'Immediate':
                ui = 'issue-immediate';
                break;
            default:
                ui = 'issue-default';
        }
        return ui;
    }
});