Ext.define('KaspiMobile.view.main.SyncController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sync',



    init: function() {
        var me = this,
            view = me.getView(),
            vm = this.getViewModel(),
            progress;

        me._interval = setInterval(function() {
            if (view.isDestroyed) {
                clearInterval(me._interval);
                return;
            }
            progress = vm.get('progress');
            progress += 0.01;
            if (progress > 1) {
                progress = 0;
            }
            vm.set('progress', progress);
        }, 150);
    },

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