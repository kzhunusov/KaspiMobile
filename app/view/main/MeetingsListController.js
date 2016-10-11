Ext.define('KaspiMobile.view.main.MeetingsListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.listMeetings',



    onOkClick: function(record, btn, index) {
        Ext.Msg.alert('ALERT', 'HELLO ' + record.get('firstName')+' '+record.get('lastName'), Ext.emptyFn);
        console.log('ENTERED !!!!!');
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true

        // Remove Login Window
        this.getView().destroy();

        var client = Ext.create('KaspiMobile.view.main.Client', {
        });

        Ext.getCmp('clientTitleBar').setTitle(record.get('firstName')+' '+record.get('lastName'));


        Ext.Viewport.setActiveItem(client);

        // Add the main view to the viewport
        // Ext.Viewport.setActiveItem({
        //     xtype : '',
        //     someDate: record.get('firstName')
        // });

        console.log('FINISHED !!!!!');
    }
});