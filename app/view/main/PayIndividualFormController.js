Ext.define('KaspiMobile.view.main.PayIndividualFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.payindividualForm',

    onCalcClick: function() {
        console.log('ENTERED !!!!!');
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.




        // Add the main view to the viewport
        Ext.getCmp('payIndForm').hide();

        Ext.getCmp('payIndGrid').show();


        console.log('FINISHED !!!!!');
    }


});