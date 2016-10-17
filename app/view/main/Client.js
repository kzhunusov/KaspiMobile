/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.Client', {
    extend: 'Ext.tab.Panel',
    xtype: 'ClientPage',
    id: 'client',
    controller: 'client',
    requires: [
        'KaspiMobile.view.main.ClientController'
    ],
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
            id: 'clientTitleBar',
            titleAlign: 'center',
            docked : 'top',
            title  : ''
        },
        {
            title: 'Заёмщик',
            items: [{
                xtype: 'ClientInfoPage'
            }],
            cls: 'card'
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
            cls: 'card'
        },
        {
            title: 'График ИГ',
            items: [{
                 xtype: 'payIndForm'
            }],
            cls: 'card'
        }

    ]
});