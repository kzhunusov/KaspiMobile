
Ext.application({
    name: 'KaspiMobile',

    requires: ['Ext.MessageBox'],

    controllers: [
        'KaspiMobile.controller.Main',
        'auth.Login',
        'auth.PinCode',
        'sync.Sync',
        'meetings.Meetings',
        'client.Client',
        'billMovements.BillMovements',
        'payIndividual.PayIndividual',
    ],

    views: [
        'auth.ViewLogin',
        'auth.ViewPinCodeError',
        'auth.ViewPinCode',
        'billMovements.ViewBillMovementsGrid',
        'client.ViewClient',
        'client.ViewClientInfo',
        'client.ViewDocsGrid',
        'client.ViewTranchesGrid',
        'meetings.ViewMeetings',
        'meetings.ViewMeetingsList',
        'payIndividual.ViewPayIndividualForm',
        'payIndividual.ViewPayIndividualGraph',
        'payIndividual.ViewPayIndividualGrid',
        'sync.ViewSync',
        'util.ViewTitleBar',
    ],

    mainView: 'auth.ViewLogin',



    onUpdated: function () {
        Ext.Msg.confirm("Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

});

