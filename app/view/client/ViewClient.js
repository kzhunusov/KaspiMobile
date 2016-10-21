/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.client.ViewClient', {
    extend: 'Ext.tab.Panel',
    xtype: 'clientClient',

    tabBar: {
        layout: {
            pack: 'center'
        }
    },
    activeTab: 1,
    defaults: {
        scrollable: true
    },
    items: [
        {
            xtype: 'barTitle'

        },
        {
            xtype  : 'titlebar',
            titleAlign: 'center',
            docked : 'top',
            action: 'clientTitleBar',
            title  : 'Лебединский Владимир Владимирович'
        },
        {
            title: 'Заёмщик',
            items: [{
                xtype: 'clientClientInfo'
            }],
        },
        {
            title: 'Движения',
            items: [{

                id: 'billMovements',
                xtype: 'billMovementsGrid',
                layout : 'fit',
                height: 600,
                width: '100%'

            }],
        },
        {
            title: 'График ИГ',
            items: [{
                 xtype: 'payIndividualPayIndividualForm',
                 name:'payIndForm',
            },{
                xtype: 'payIndividualPayIndividualGraph',
                name:'payIndGraph',
            }
            ],
        }

    ]
});