/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.auth.ViewPinCodeError', {
    extend: 'Ext.form.Panel',
    xtype: 'authPinCodeError',
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
            src : 'resources/redlock.png',
            mode : 'image'
        },

        {
            xtype: 'label',
            style: {
                'display': 'inline-block',
                'margin' : '0 auto',
                'text-align':'center',
                'width':'50%',

            },
            name: 'mainMessage',
            html: '<p>Вы ввели неправильный пин код. </br></br>' +
                  'Если ввести пин-код неправильно еще несколько раз, все не синхронизированные данные будут удалены.</br></br></p>'

        },
        {
            xtype: 'label',
            style: {
                'display': 'inline-block',
                'margin' : '0 auto'

            },
            name: 'attemptMessage',
            html: 'Осталось попыток: 2'

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
                    text: 'Повторить',
                    action: 'repincode',
                    maxWidth: '130',
                    scope: this,
                    ui: 'action',

                },
                {
                    text: 'Выйти',
                    maxWidth: '130',
                    action: 'exit',
                    scope: this,
                    ui: 'action',

                }
            ]
        }
    ]
});