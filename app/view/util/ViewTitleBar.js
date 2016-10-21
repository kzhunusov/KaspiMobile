/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.util.ViewTitleBar', {
    extend: 'Ext.TitleBar',
    xtype: 'barTitle',
    titleAlign: 'center',

    docked: 'top',

    title: 'Hard Collection Mobile',
    items: [{
        iconCls: 'x-fa fa-ellipsis-v',
        align: 'right'
    },{
        iconCls: 'x-fa fa-arrow-left',
        align: 'left',
        hidden: true,
        action: 'backButton',
    }
    ]

});