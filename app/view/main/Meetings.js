Ext.define('KaspiMobile.view.main.Meetings', {
    extend: 'Ext.tab.Panel',
    xtype: 'MeetingsPage',
    id: 'meetings',
    controller: 'meetings',
    requires: [
        'KaspiMobile.view.main.MeetingsList'
    ],

    cls: 'demo-solid-background',
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
            title: 'Все выезды',
            items: [{
                xtype: 'listMeetings'
            }],
            cls: 'card'
        },
        {
            title: 'Исполненные',
            items: [{
                xtype: 'listMeetings'
            }],
            cls: 'card'
        },
        {
            title: 'Не исполненные',
            items: [{
            xtype: 'listMeetings'
        }],
            cls: 'card'
        }
    ]
});