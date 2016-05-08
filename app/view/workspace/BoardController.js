Ext.define('RedAlert.view.navigation.BoardController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'RedAlert.Navigation',
        'RedAlert.view.workspace.column.SprintColumn'
    ],

    alias: 'controller.board',

    init: function () {
        Nav.on('activestatusadded', this.addSprintColumn, this);
        Nav.on('activestatusremoved', this.removeSprintColumn, this);
    },

    addSprintColumn: function (status) {
        var col = Ext.create('RedAlert.view.workspace.column.SprintColumn', {
            flex: 1,
            title: status.get('name'),
            statusId: status.get('id'),
            status: status
        });
        //1+status.store.data.items.indexOf(status) is used to naturally order a list of statuses with place for backlog
        this.getView().insert(1 + status.store.data.items.indexOf(status), col);
    },

    removeSprintColumn: function (status) {
        this.getView().remove(this.getView().down('col-sprint[statusId=' + status.get('id') + ']'))
    }
});
