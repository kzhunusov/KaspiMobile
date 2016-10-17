Ext.define('KaspiMobile.view.main.PayIndividualFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.payindividualForm',

    onCalcClick: function() {
        console.log('ENTERED !!!!!');
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.



        console.log('FINISHED !!!!!');
    }


});