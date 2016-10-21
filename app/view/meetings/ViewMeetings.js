Ext.define('KaspiMobile.view.meetings.ViewMeetings', {
    extend: 'Ext.tab.Panel',
    xtype: 'meetingsMeetings',


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
                xtype: 'meetingsMeetingsList'
            }],
        },
        {
            title: 'Исполненные',
            items: [{
                xtype: 'meetingsMeetingsList'
            }],
        },
        {
            title: 'Не исполненные',
            items: [{
                xtype: 'meetingsMeetingsList'
            }],
        }
    ]
});