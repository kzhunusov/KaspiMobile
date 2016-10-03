/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'mainlist',

//     requires: [
//         'KaspiMobile.store.Personnel'
//     ],
//
    title: 'Hard Collection Mobile',
//
//     store: {
//         type: 'personnel'
//     },
//
//     columns: [
//         { text: 'Name',  dataIndex: 'name', width: 100 },
//         { text: 'Email', dataIndex: 'email', width: 230 },
//         { text: 'Phone', dataIndex: 'phone', width: 150 }
//     ],
//
//     listeners: {
//         select: 'onItemSelected'
//     }
// });

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
        'KaspiMobile.view.main.LoginController',
        'KaspiMobile.view.main.Main',
        'Ext.tab.Panel',
        'Ext.form.Panel'
    ],
    id: 'basicform',
    controller: 'login',
    items: [
        {
            xtype : 'image',
            style: {
                'display': 'inline-block',
                'margin' : '0 auto'

            },
            src : 'resources/user.png',
            mode : 'image',
            width: '100'
        },
        {
            xtype: 'fieldset',
            id: 'fieldset1',
            style: 'margin: 1em',
            defaults: {
                labelWidth: '35%',
                width: '400'
            },
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [

                {
                    xtype: 'textfield',
                    name: 'login',
                    label: 'Логин',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    name : 'password',
                    label: 'Пароль',
                    clearIcon: true
                }
            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin: 1em',
                flex: 1,
            },
            layout: {
                type: 'hbox',
                pack: 'middle'
            },
            items: [
                {
                    text: 'Вход',
                    ui: 'action',
                    scope: this,
                    maxWidth: '200',
                    hasDisabled: false,
                    handler: function(btn){

                        Ext.getCmp('basicform').destroy();
                        Ext.getCmp('basicform').add( Ext.create('app-main'));
                        // Add the main view to the viewport

                        console.log('Login controller');
                        // var fieldset1 = Ext.getCmp('fieldset1');
                        //
                        // if (btn.hasDisabled) {
                        //     fieldset1.enable();
                        //     btn.hasDisabled = false;
                        // } else {
                        //     fieldset1.disable();
                        //     btn.hasDisabled = true;
                        // }




                    }

                },
                {
                    text: 'Отмена',
                    maxWidth: '200',
                    ui: 'action',
                    handler: function(){
                        Ext.getCmp('basicform').reset();
                    }
                }
            ]
        }
    ]
});