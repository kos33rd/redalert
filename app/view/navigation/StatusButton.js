Ext.define('RedAlert.view.navigation.StatusButton', {
    extend: 'Ext.button.Button',
    stateful: true,
    stateId: undefined,
    stateEvents: [
        'toggle'
    ],
    getState: function () {
        return {pressed: this.pressed};
    },
    applyState: function (state) {
        this.toggle(state.pressed);
    }
});