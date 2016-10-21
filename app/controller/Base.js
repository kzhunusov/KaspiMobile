Ext.define('KaspiMobile.controller.Base', {
  extend: 'Ext.app.Controller',

  showView: function (viewClass) {
    Ext.Viewport.removeAll(true, true);
    Ext.Viewport.add(Ext.create('KaspiMobile.view.' + viewClass));
  },

});
