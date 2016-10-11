/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    title: 'Hard Collection Mobile',
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
        'Ext.tab.Panel',
        'Ext.form.Panel'
    ],
    id: 'basicform',
    controller: 'login',
    items: [
        {
            xtype : 'image',
            id: 'loginImg',
            style: {
                'display': 'inline-block',
                'margin' : '0 auto'

            },
            src : 'resources/login.svg',
            mode : 'image',
            width: '50'
        },
        {
            xtype: 'fieldset',
            id: 'fieldset1',
            style: 'margin: 1em',
            defaults: {
                labelWidth: '35%',
                width: '80%'
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
                flex: 1
            },
            layout: {
                type: 'hbox',
                pack: 'middle'
            },
            items: [
                {
                    text: 'Вход',
                    id: 'btnLogin',
                    ui: 'action',
                    maxWidth: '100',
                    hasDisabled: false,
                    handler: 'onLoginClick'

                },
                {
                    text: 'Отмена',
                    maxWidth: '100',
                    ui: 'action'

                }
            ]
        }
    ]
});