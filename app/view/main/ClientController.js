Ext.define('KaspiMobile.view.main.ClientController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.client',


     onSyncClick: function() {
        console.log('ENTERED !!!!!');
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true

        // Remove Login Window
        this.getView().destroy();


        // Add the main view to the viewport
        Ext.Viewport.setActiveItem({
            xtype : 'MeetingsPage'
        });

        console.log('FINISHED !!!!!');
    }

});