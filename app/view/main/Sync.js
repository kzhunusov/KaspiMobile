/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.Sync', {
    extend: 'Ext.form.Panel',
    xtype: 'SyncPage',
    id: 'sync',
    controller: 'sync',
    requires: [
        'KaspiMobile.view.main.SyncController'
    ],
    viewModel: {
        data: {
            progress: 0
        },
        formulas: {
            itemPercent: function(get) {
                    progress = get('progress'),
                    itemPercent = 1;

                return Math.round(((progress / itemPercent) % 1) * 100);
            },
            percent: function(get) {
                var progress = get('progress');
                return Math.round(progress * 100);
            }


        }
    },
    items: [
        {
            xtype: 'barTitle'

        },
        {
            xtype : 'image',
            width: '100',
            height: '100',
            style: {
                'display': 'inline-block',
                'margin' : '0 auto'

            },
            src : 'resources/sync.png',
            mode : 'image'
        },

        {
            xtype: 'label',
            margin: '0 0 10 0',
            style: {
            'display': 'inline-block',
            'margin' : '0 auto'

        },
            bind: {
                html: 'Синхронизация {itemPercent}%'
            }
        },

        {
            xtype: 'progress',
            width: '40%',
            minWidth: '230',
            style: {
                'display': 'inline-block',
                'margin' : '0 auto'

            },
            bind: {
                value: '{progress}'
            }
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
                    handler: 'onSyncClick',
                    hasDisabled: false

                },
                {
                    text: 'Не синхронизировать',
                    ui: 'action',
                    width: '40%',
                    minWidth: '230',
                    hasDisabled: false

                },
                {
                    text: 'Отменить',
                    ui: 'action',
                    width: '40%',
                    minWidth: '230'

                }
            ]
        }
    ]
});