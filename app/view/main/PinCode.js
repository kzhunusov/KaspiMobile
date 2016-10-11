/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.PinCode', {
    extend: 'Ext.form.Panel',
    xtype: 'pinCodePage',
    title: 'Hard Collection Mobile',
    id: 'pinCode',
    controller: 'pincode',


    requires: [
        'KaspiMobile.view.main.PinCodeController'
    ],

    items: [
        {
            xtype : 'image',
            width: '50',
            height: '50',
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
            html: 'Введите пин-код'
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'image',
                style: 'margin: 5px'
            },
            layout: {
                type: 'hbox',
                pack: 'middle',
                align: 'center'
            },
            items: [
                {
                    id: 'lock1',
                    src : 'resources/gray.png',
                    mode : 'image',
                    width: '15',
                    height: '15',
                },
                {
                    id: 'lock2',
                    src : 'resources/gray.png',
                    mode : 'image',
                    width: '15',
                    height: '15',
                },
                {
                    id: 'lock3',
                    src : 'resources/gray.png',
                    mode : 'image',
                    width: '15',
                    height: '15',
                },
                {

                    id: 'lock4',
                    src : 'resources/gray.png',
                    mode : 'image',
                    width: '15',
                    height: '15',
                },
                {

                    id: 'lock5',
                    src : 'resources/gray.png',
                    mode : 'image',
                    width: '15',
                    height: '15',
                },
                {

                    id: 'lock6',
                    src : 'resources/gray.png',
                    mode : 'image',
                    width: '15',
                    height: '15',
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
                    id: "button1",
                    ui: 'action',
                    handler: function(btn){
                        Ext.Msg.alert('test','asd');

                    }

                },
                {
                    text: '2',
                    ui: 'action',
                    handler: function(){
                        Ext.Msg.alert('test','asd');
                    }
                },
                {
                    text: '3',
                    ui: 'action',
                    handler: function(){
                        Ext.Msg.alert('test','asd');
                    }
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
                    id: "button4",
                    ui: 'action',
                    handler: function(btn){

                        Ext.Msg.alert('test','asd');

                    }

                },
                {
                    text: '5',
                    ui: 'action',
                    handler: function(){

                        Ext.Msg.alert('test','asd');
                    }
                },
                {
                    text: '6',
                    ui: 'action',
                    handler: function(){

                        Ext.Msg.alert('test','asd');
                    }
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
                    id: "button7",
                    ui: 'action',
                    handler: function(btn){

                        Ext.Msg.alert('test','asd');

                    }

                },
                {
                    text: '8',
                    ui: 'action',
                    handler: function(){

                        Ext.Msg.alert('test','asd');
                    }
                },
                {
                    text: '9',
                    ui: 'action',
                    handler: function(){

                        Ext.Msg.alert('test','asd');
                    }
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
                    id: "buttonErase",
                    ui: 'action',
                    handler: function(btn){


                    }

                },
                {
                    text: '0',
                    ui: 'action',
                    handler: function(){

                    }
                },
                {
                    text: 'OK',
                    ui: 'action',
                    handler: 'onOkClick'
                }

            ]
        }
    ]
});