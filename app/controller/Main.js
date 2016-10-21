Ext.define('KaspiMobile.controller.Main', {
  extend: 'KaspiMobile.controller.Base',

  launch: function () {



    console.log('MAIN!!!!!!!!!! ENTERED !!!!!');
    window.interaction = {};

    // Ext.fly('appLoadingIndicator').destroy();

    this.showView('auth.ViewLogin');
  },

});
