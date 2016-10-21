/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.auth.ViewPinCode', {
    extend: 'Ext.form.Panel',
    xtype: 'authPinCode',
    title: 'Hard Collection Mobile',




    items: [
        {
            xtype : 'image',
            width: '80',
            height: '80',
            style: {
                'display': 'inline-block',
                'margin' : '0 auto'

            },
            src : 'resources/lock.svg',
            mode : 'image'
        },

        {
            xtype: 'label',
            style: {
             'display': 'inline-block',
                'margin' : '0 auto'

            },
            name: 'mainMessage',
            html: 'Введите пин-код'
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'image',
                style: 'margin: 5px',
                mode : 'image',
                width: '20',
                height: '20',
            },
            layout: {
                type: 'hbox',
                pack: 'middle',
                align: 'center'
            },
            items: [
                {
                    name : 'code1',
                    src : 'resources/gray.png',
                },
                {
                    name : 'code2',
                    src : 'resources/gray.png',

                },
                {
                    name: 'code3',
                    src : 'resources/gray.png',

                },
                {

                    name: 'code4',
                    src : 'resources/gray.png',

                },
                {

                    name: 'code5',
                    src : 'resources/gray.png',

                },
                {

                    name: 'code6',
                    src : 'resources/gray.png',

                }
            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: {
                    'display': 'inline-block',
                    'margin': '1em',
                    'border-radius':'100%',
                    'background-color':'#0094FF',
                    'padding-top':'15px'

                },
                minHeight: '50',
                maxWidth: '50',
                flex: 1
            },
            layout: {
                type: 'hbox',
                pack: 'middle'
            },
            items: [
                {
                    text: '1',
                    ui: 'action',
                    action: 'one',

                },
                {
                    text: '2',
                    ui: 'action',
                    action: 'two',
                },
                {
                    text: '3',
                    ui: 'action',
                    action: 'three',
                }

            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: {
                    'display': 'inline-block',
                    'margin': '1em',
                    'border-radius':'100%',
                    'background-color':'#0094FF',
                    'padding-top':'15px'

                },
                minHeight: '50',
                maxWidth: '50',
                flex: 1
            },
            layout: {
                type: 'hbox',
                pack: 'middle'
            },
            items: [
                {
                    text: '4',
                    ui: 'action',
                    action: 'four',
                },
                {
                    text: '5',
                    ui: 'action',
                    action: 'five',
                },
                {
                    text: '6',
                    ui: 'action',
                    action: 'six',
                }

            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: {
                    'display': 'inline-block',
                    'margin': '1em',
                    'border-radius':'100%',
                    'background-color':'#0094FF',
                    'padding-top':'15px'

                },
                minHeight: '50',
                maxWidth: '50',
                flex: 1
            },
            layout: {
                type: 'hbox',
                pack: 'middle'
            },
            items: [
                {
                    text: '7',
                    ui: 'action',
                    action: 'seven',
                },
                {
                    text: '8',
                    ui: 'action',
                    action: 'eight',
                },
                {
                    text: '9',
                    ui: 'action',
                    action: 'nine',
                }

            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: {
                    'display': 'inline-block',
                    'margin': '1em',
                    'border-radius':'100%',
                    'background-color':'#0094FF',
                    'padding-top':'15px'

                },
                minHeight: '50',
                maxWidth: '50',
                flex: 1
            },
            layout: {
                type: 'hbox',
                pack: 'middle'
            },
            items: [
                {
                    text: '<-',
                    action: 'delete',
                    ui: 'action',
                },
                {
                    text: '0',
                    ui: 'action',
                    action: 'zero',
                },
                {
                    text: 'OK',
                    ui: 'action',
                    action: 'ok',
                }

            ]
        }
    ]
});