/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.List', {
    extend: 'Ext.form.Panel',
    xtype: 'mainlist2',

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
        'Ext.field.Radio'
    ],
    id: 'basicform',
    items: [
        {
            xtype: 'fieldset',
            id: 'fieldset1',
            defaults: {
                labelWidth: '35%'
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
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    text: 'Вход',
                    ui: 'action',
                    scope: this,
                    hasDisabled: false,
                    handler: function(btn){
                        var fieldset1 = Ext.getCmp('fieldset1'),
                            fieldset2 = Ext.getCmp('fieldset2');

                        if (btn.hasDisabled) {
                            fieldset1.enable();
                            fieldset2.enable();
                            btn.hasDisabled = false;
                            btn.setText('Disable fields');
                        } else {
                            fieldset1.disable();
                            fieldset2.disable();
                            btn.hasDisabled = true;
                            btn.setText('Enable fields');
                        }
                    }
                },
                {
                    text: 'Отмена',
                    ui: 'action',
                    handler: function(){
                        Ext.getCmp('basicform').reset();
                    }
                }
            ]
        }
    ]
});