Ext.define('KaspiMobile.view.meetings.ViewMeetingsList', {
    extend: 'Ext.Container',
    xtype: 'meetingsMeetingsList',

    layout:  'fit',

    items: [{
        xtype: 'list',
        name: 'meetingsList',
        scope: this,
        onItemDisclosure: true,
        store : {
            type : 'meetingsData'
        },
        itemTpl: '<div style=\"border-left: 2px solid ' +
                        '<tpl if="kind == \'done\'">'+
                          'LimeGreen'+
                        '</tpl>'+
                        '<tpl if="kind == \'notdone\'">'+
                            'red'+
                        '</tpl>'+
                '; padding-left: 10px; margin-left: 10px;\">' +
                    '<b>{firstName} {lastName}</b></br>' +
                    '<p style="color:darkgray">{info}</p>' +
                    '<p>{status}</p>' +
                '</div>'

    }]
});