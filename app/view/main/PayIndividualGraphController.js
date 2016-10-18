Ext.define('KaspiMobile.view.main.PayIndividualGraphController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.payindividualGraph',

    onChangePayIndClick: function() {
        console.log('ENTERED !!!!!');




        Ext.getCmp('payIndGrid').hide();
        Ext.getCmp('payIndForm').show();



        console.log('FINISHED !!!!!');
    }


});