/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.sync.ViewSync', {
    extend: 'Ext.form.Panel',
    xtype: 'syncSync',


    items: [
        {
            xtype: 'barTitle'

        },
        {
            xtype : 'image',
            width: '80',
            height: '80',
            style: {
                'display': 'inline-block',
                'margin' : '0 auto'

            },
            src : 'resources/sync.png',
            mode : 'image'
        },

        {
            xtype: 'label',
            name: 'syncMessage',
            margin: '0 0 10 0',
            style: {
            'display': 'inline-block',
            'margin' : '0 auto'
            },
        },

        {
            xtype: 'progress',
            name: 'progress',
            width: '40%',
            minWidth: '230',
            style: {
                'display': 'inline-block',
                'margin' : '0 auto'
            },

        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin: 1em'
            },
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    text: 'Синхронизировать',
                    ui: 'action',
                    width: '40%',
                    minWidth: '230',
                    action:'sync',

                },
                {
                    text: 'Не синхронизировать',
                    ui: 'action',
                    width: '40%',
                    minWidth: '230',
                    action:'notsync',

                },
                {
                    text: 'Отменить',
                    ui: 'action',
                    width: '40%',
                    minWidth: '230',
                    action:'cancel',

                }
            ]
        }
    ]
});