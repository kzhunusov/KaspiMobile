/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.TitleBar', {
    extend: 'Ext.TitleBar',
    xtype: 'barTitle',
    titleAlign: 'center',

    docked: 'top',

    title: 'Hard Collection Mobile',
    items: [{
        iconCls: 'x-fa fa-ellipsis-v',
        align: 'right'
    }]

});