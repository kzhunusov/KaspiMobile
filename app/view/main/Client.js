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
                // xtype: 'listMeetings'
            }],
            cls: 'card'
        },
        {
            title: 'Движения',
            items: [{
                // xtype: 'listMeetings'
            }],
            cls: 'card'
        },
        {
            title: 'График ИГ',
            items: [{
                // xtype: 'listMeetings'
            }],
            cls: 'card'
        }

    ]
});