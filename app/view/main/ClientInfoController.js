Ext.define('KaspiMobile.view.main.ClientInfoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clientInfo',



    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
});