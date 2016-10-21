/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.auth.ViewLogin', {
    extend: 'Ext.form.Panel',
    xtype: 'authLogin',
    title: 'Hard Collection Mobile',

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
            width: '80',
            height: '80',
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
                    name: 'name',
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
            xtype: 'label',
            name : 'errorMessage',
            html : 'error message',
            style: 'margin: .5em; color: red; text-align: center;',

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
                    action: 'login',
                    maxWidth: '100',
                    scope: this,
                    ui: 'action',

                },
                {
                    text: 'Отмена',
                    maxWidth: '100',
                    action: 'exit',
                    scope: this,
                    ui: 'action',

                }
            ]
        }
    ]
});