Ext.define('KaspiMobile.controller.client.Client', {
    extend: 'KaspiMobile.controller.Base',


    config: {

        refs: {
            view: 'clientClient',
            backButton: 'barTitle button[action=backButton]',

            infoPanelHideButton: 'clientClientInfo tool[action=clientInfoPanelHide]',
            infoPanelShowButton: 'clientClientInfo tool[action=clientInfoPanelShow]',
            infoPanel: 'clientClientInfo fieldset[name=infoPanel]',


            photoPanelHideButton: 'clientClientInfo tool[action=clientPhotoPanelHide]',
            photoPanelShowButton: 'clientClientInfo tool[action=clientPhotoPanelShow]',
            photoPanel: 'clientClientInfo image[name=photoPanel]',


            tranchesPanelHideButton: 'clientClientInfo tool[action=clientTranchesPanelHide]',
            tranchesPanelShowButton: 'clientClientInfo tool[action=clientTranchesPanelShow]',
            tranchesPanel: 'clientClientInfo grid[name=tranchesPanel]',


            addressPanelHideButton: 'clientClientInfo tool[action=clientAddressPanelHide]',
            addressPanelShowButton: 'clientClientInfo tool[action=clientAddressPanelShow]',
            addressPanel: 'clientClientInfo fieldset[name=addressPanel]',


            phonesPanelHideButton: 'clientClientInfo tool[action=clientPhonePanelHide]',
            phonesPanelShowButton: 'clientClientInfo tool[action=clientPhonePanelShow]',
            phonesPanel: 'clientClientInfo panel[name=phonesPanel]',

            contactsPanelHideButton: 'clientClientInfo tool[action=clientContactsPanelHide]',
            contactsPanelShowButton: 'clientClientInfo tool[action=clientContactsPanelShow]',
            contactsPanel: 'clientClientInfo panel[name=contactsPanel]',

            docsPanelHideButton: 'clientClientInfo tool[action=clientDocsPanelHide]',
            docsPanelShowButton: 'clientClientInfo tool[action=clientDocsPanelShow]',
            docsPanel: 'clientClientInfo clientDocsGrid[name=docsPanel]',

            actsPanelHideButton: 'clientClientInfo tool[action=clientActsPanelHide]',
            actsPanelShowButton: 'clientClientInfo tool[action=clientActsPanelShow]',
            actsPanel: 'clientClientInfo fieldset[name=actsPanel]',


            payIndForm: 'clientClient payIndividualPayIndividualForm[name=payIndForm]',
            payIndGraph: 'clientClient payIndividualPayIndividualGraph[name=payIndGraph]',

            payIndCalcButton: 'payIndividualPayIndividualForm button[action=calcPayInd]',
            payIndChangeButton: 'payIndividualPayIndividualGraph button[action=changePayIndForm]',

        },

        control: {
            view              : {
                show: 'onShow',
            },
            backButton: {
                tap: 'onButtonBackTap',
            },
            infoPanelHideButton: {
                click: 'onButtonInfoPanelHideClick',
            },
            infoPanelShowButton: {
                click: 'onButtonInfoPanelShowClick',
            },

            photoPanelHideButton: {
                click: 'onButtonPhotoPanelHideClick',
            },
            photoPanelShowButton: {
                click: 'onButtonPhotoPanelShowClick',
            },

            tranchesPanelHideButton: {
                click: 'onButtonTranchesPanelHideClick',
            },
            tranchesPanelShowButton: {
                click: 'onButtonTranchesPanelShowClick',
            },

            addressPanelHideButton: {
                click: 'onButtonAddressPanelHideClick',
            },
            addressPanelShowButton: {
                click: 'onButtonAddressPanelShowClick',
            },

            phonesPanelHideButton: {
                click: 'onButtonPhonesPanelHideClick',
            },
            phonesPanelShowButton: {
                click: 'onButtonPhonesPanelShowClick',
            },

            contactsPanelHideButton: {
                click: 'onButtonContactsPanelHideClick',
            },
            contactsPanelShowButton: {
                click: 'onButtonContactsPanelShowClick',
            },

            docsPanelHideButton: {
                click: 'onButtonDocsPanelHideClick',
            },
            docsPanelShowButton: {
                click: 'onButtonDocsPanelShowClick',
            },

            actsPanelHideButton: {
                click: 'onButtonActsPanelHideClick',
            },
            actsPanelShowButton: {
                click: 'onButtonActsPanelShowClick',
            },
            payIndCalcButton: {
                tap: 'onPayIndCalcButtonTap',
            },
            payIndChangeButton: {
                tap: 'onPayIndChangeButtonTap',
            },


        },
    },

    onShow: function () {
        this.getBackButton().show();

        this.getInfoPanelHideButton().show();
        this.getInfoPanelShowButton().hide();
        this.getInfoPanel().show();


        this.getPhotoPanelHideButton().show();
        this.getPhotoPanelShowButton().hide();
        this.getPhotoPanel().show();


        this.getTranchesPanelHideButton().show();
        this.getTranchesPanelShowButton().hide();
        this.getTranchesPanel().show();

        this.getAddressPanelHideButton().show();
        this.getAddressPanelShowButton().hide();
        this.getAddressPanel().show();

        this.getPhonesPanelHideButton().show();
        this.getPhonesPanelShowButton().hide();
        this.getPhonesPanel().show();

        this.getContactsPanelHideButton().show();
        this.getContactsPanelShowButton().hide();
        this.getContactsPanel().show();

        this.getDocsPanelHideButton().show();
        this.getDocsPanelShowButton().hide();
        this.getDocsPanel().show();

        this.getActsPanelHideButton().show();
        this.getActsPanelShowButton().hide();
        this.getActsPanel().show();



        this.getPayIndForm().show();
        this.getPayIndGraph().hide();

    },

    onButtonBackTap: function() {

        console.log('BACK BUTTON TAPPED');
        this.showView('meetings.ViewMeetings');

    },
    onButtonInfoPanelHideClick: function() {
        this.getInfoPanel().hide();
        this.getInfoPanelHideButton().hide();
        this.getInfoPanelShowButton().show();


    },
    onButtonInfoPanelShowClick: function() {
        this.getInfoPanel().show();
        this.getInfoPanelHideButton().show();
        this.getInfoPanelShowButton().hide();
    },


    onButtonPhotoPanelHideClick: function() {
        this.getPhotoPanel().hide();
        this.getPhotoPanelHideButton().hide();
        this.getPhotoPanelShowButton().show();


    },
    onButtonPhotoPanelShowClick: function() {
        this.getPhotoPanel().show();
        this.getPhotoPanelHideButton().show();
        this.getPhotoPanelShowButton().hide();
    },

    onButtonTranchesPanelHideClick: function() {
        this.getTranchesPanel().hide();
        this.getTranchesPanelHideButton().hide();
        this.getTranchesPanelShowButton().show();


    },
    onButtonTranchesPanelShowClick: function() {
        this.getTranchesPanel().show();
        this.getTranchesPanelHideButton().show();
        this.getTranchesPanelShowButton().hide();
    },

    onButtonAddressPanelHideClick: function() {
        this.getAddressPanel().hide();
        this.getAddressPanelHideButton().hide();
        this.getAddressPanelShowButton().show();


    },
    onButtonAddressPanelShowClick: function() {
        this.getAddressPanel().show();
        this.getAddressPanelHideButton().show();
        this.getAddressPanelShowButton().hide();
    },
    onButtonPhonesPanelHideClick: function() {
        this.getPhonesPanel().hide();
        this.getPhonesPanelHideButton().hide();
        this.getPhonesPanelShowButton().show();


    },
    onButtonPhonesPanelShowClick: function() {
        this.getPhonesPanel().show();
        this.getPhonesPanelHideButton().show();
        this.getPhonesPanelShowButton().hide();
    },
    onButtonContactsPanelHideClick: function() {
        this.getContactsPanel().hide();
        this.getContactsPanelHideButton().hide();
        this.getContactsPanelShowButton().show();


    },
    onButtonContactsPanelShowClick: function() {
        this.getContactsPanel().show();
        this.getContactsPanelHideButton().show();
        this.getContactsPanelShowButton().hide();
    },
    onButtonDocsPanelHideClick: function() {
        this.getDocsPanel().hide();
        this.getDocsPanelHideButton().hide();
        this.getDocsPanelShowButton().show();


    },
    onButtonDocsPanelShowClick: function() {
        this.getDocsPanel().show();
        this.getDocsPanelHideButton().show();
        this.getDocsPanelShowButton().hide();
    },
    onButtonActsPanelHideClick: function() {
        this.getActsPanel().hide();
        this.getActsPanelHideButton().hide();
        this.getActsPanelShowButton().show();


    },
    onButtonActsPanelShowClick: function() {
        this.getActsPanel().show();
        this.getActsPanelHideButton().show();
        this.getActsPanelShowButton().hide();
    },

    onPayIndCalcButtonTap: function() {
        this.getPayIndForm().hide();
        this.getPayIndGraph().show();
    },

    onPayIndChangeButtonTap: function() {
        this.getPayIndForm().show();
        this.getPayIndGraph().hide();
    },
});