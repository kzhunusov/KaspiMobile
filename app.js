/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'KaspiMobile',

    extend: 'KaspiMobile.Application',

    requires: [
        'KaspiMobile.view.main.Login',
        'KaspiMobile.view.main.PinCode',
        'KaspiMobile.view.main.Sync',
        'KaspiMobile.view.main.TitleBar',
        'KaspiMobile.view.main.Meetings',
        'KaspiMobile.view.main.MeetingsList',
        'KaspiMobile.view.main.Client',
        'KaspiMobile.view.main.ClientInfo',
        'KaspiMobile.view.main.TranchesGrid',
        'KaspiMobile.view.main.DocsGrid',
        'KaspiMobile.view.main.BillMovementsGrid',
        'KaspiMobile.view.main.PayIndividualForm',
        'KaspiMobile.view.main.PayIndividualGrid',
        'KaspiMobile.view.main.PayIndividualGraph'






    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'KaspiMobile.view.main.Login'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to KaspiMobile.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
