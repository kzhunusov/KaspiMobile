Ext.define('KaspiMobile.view.main.MeetingsList', {
    extend: 'Ext.Container',
    xtype: 'listMeetings',
    controller: 'listMeetings',
    requires: ['KaspiMobile.model.Meeting',
               'KaspiMobile.store.List',
               'KaspiMobile.view.main.MeetingsListController'
],
    cls: 'demo-list',
    layout:  'fit',

    items: [{
        xtype: 'list',
        onItemDisclosure: 'onOkClick',
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