Ext.define('KaspiMobile.controller.meetings.Meetings', {
    extend: 'KaspiMobile.controller.Base',

    config: {

        refs: {
            view: 'meetingsMeetings',
            meetingslist: 'meetingsMeetingsList list[name=meetingsList]',
            // clientTitleBar: 'clientClient toolbar[action=clientTitleBar]',

        },

        control: {
            view              : {
                show: 'onShow',
            },
            meetingslist: {
                itemtap: 'onMeetingListTapClick',
            }

        },
    },

    onShow: function () {

    },
    onMeetingListTapClick: function(  index , target , record ) {

        // this.showView('client.ViewClient');
        // this.getClientTitleBar().setTitle(record.get('firstName') + ' ' + record.get('lastName'));
        // Ext.getCmp('clientTitleBar').setTitle(record.get('firstName') + ' ' + record.get('lastName'));
        // Ext.getCmp('fio').setValue(record.get('firstName') + ' ' + record.get('lastName'));



        this.showView('client.ViewClient');

    }

});