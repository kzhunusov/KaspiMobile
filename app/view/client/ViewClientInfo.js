/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.client.ViewClientInfo', {
    xtype: 'clientClientInfo',

    extend: 'Ext.Container',




    items: [


        {
            xtype: 'panel',
            title: 'Информация о заемщике',
            tools: [
                {
                    iconCls: 'x-fa fa-arrow-down',
                    action: 'clientInfoPanelHide'

                },
                {
                    iconCls: 'x-fa fa-arrow-left',
                    action: 'clientInfoPanelShow'
                }
            ],
            items: [
                {
                    name: 'infoPanel',
                    xtype: 'fieldset',
                    defaults: {
                        labelWidth: '35%',
                        labelWrap: true
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'fio',
                            name: 'fio',
                            label: 'Ф.И.О',
                            labelAlign: 'left',
                            value: 'Лебединский Владимир Владимирович',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'iin',
                            name: 'iin',
                            label: 'ИИН',
                            labelAlign: 'left',
                            value: '8012312421412',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'contractNum',
                            name: 'contractNum',
                            label: 'Номер договора',
                            labelAlign: 'left',
                            value: 'R1231221-001',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'totalSum',
                            name: 'totalSum',
                            label: 'Общая задолженность',
                            labelAlign: 'left',
                            value: '1231231 тг.',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'totalArrears',
                            name: 'totalArrears',
                            label: 'Общая просрочка',
                            labelAlign: 'left',
                            value: '231',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'workPlace',
                            name: 'workPlace',
                            label: 'Место работы',
                            labelAlign: 'left',
                            value: 'ТОО "Рога и Копыта"',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'job',
                            name: 'job',
                            label: 'Должность',
                            labelAlign: 'left',
                            value: 'Менеджер по продажам',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'workPlaceHusband',
                            name: 'workPlaceHusband',
                            label: 'Место работы супруга',
                            labelAlign: 'left',
                            value: '',
                            readOnly: true
                        },

                    ]
                },
            ]
        },
        {
            xtype: 'panel',
            title: 'Фото',
            tools: [
                {
                    iconCls: 'x-fa fa-arrow-down',
                    action: 'clientPhotoPanelHide',
                },
                {
                    iconCls: 'x-fa fa-arrow-left',
                    action: 'clientPhotoPanelShow',
                }
            ],
            items: [
                {
                    xtype : 'image',
                    name: 'photoPanel',
                    width: '100%',
                    style: {
                        'display': 'inline-block',
                        'margin' : '0 auto'

                    },
                    src : 'resources/ANDROID.png',
                    mode : 'image'
                }
            ]
        },
        {
            xtype: 'panel',
            title: 'Информация по траншам',
            tools: [
                {
                    iconCls: 'x-fa fa-arrow-down',
                    action: 'clientTranchesPanelHide',
                },
                {
                    iconCls: 'x-fa fa-arrow-left',
                    action: 'clientTranchesPanelShow',
                }
            ],
            items: [
                {
                    name: 'tranchesPanel',
                    xtype: 'clientTranchesGrid',
                    width: '100%',
                    height: 300
                },
            ]
        },
        {
            xtype: 'panel',
            title: 'Адреса',
            tools: [
                {
                    iconCls: 'x-fa fa-arrow-down',
                    action: 'clientAddressPanelHide',
                },
                {
                    iconCls: 'x-fa fa-arrow-left',
                    action: 'clientAddressPanelShow',
                }
            ],
            items: [
                {
                    name: 'addressPanel',
                    xtype: 'fieldset',
                    defaults: {
                        labelWidth: '35%',
                        labelWrap: true
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'addressReg',
                            name: 'addressReg',
                            label: 'Адрес регистрации',
                            labelAlign: 'left',
                            width: '80%',
                            value: 'Алматинская область, г.Алматы, ул. Алтынсарина 282 ка 1',
                            readOnly: true
                        },


                        {
                            xtype: 'textfield',
                            id: 'addressLive',
                            name: 'addressLive',
                            label: 'Адрес проживания',
                            labelAlign: 'left',
                            width: '80%',
                            value: 'Алматинская область, г.Алматы, ул. Алтынсарина 282 ка 1',
                            readOnly: true
                        },
                        {
                            xtype: 'container',
                            defaults: {
                                labelWidth: '35%',
                                labelWrap: true
                            },
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'addressFact',
                                    name: 'addressFact',
                                    label: 'Адрес фактический',
                                    width: '80%',
                                    labelAlign: 'left',
                                    value: 'Алматинская область, г.Алматы, ул. Алтынсарина 282 ка 1',
                                    readOnly: true
                                },
                                {
                                    text: 'Изменить адрес',
                                    xtype: 'button',
                                    id: 'editAddFact',
                                    width: '20%',
                                    ui: 'action',
                                    maxWidth: '100',
                                    hasDisabled: false

                                }
                            ]
                        },


                    ]
                },
            ]
        },
        {
            xtype: 'panel',
            title: 'Телефоны',
            tools: [
                {
                    iconCls: 'x-fa fa-arrow-down',
                    action: 'clientPhonePanelHide',
                },
                {
                    iconCls: 'x-fa fa-arrow-left',
                    action: 'clientPhonePanelShow',
                }
            ],
            items: [
                {
                    name: 'phonesPanel',
                    xtype: 'panel',
                    items: [
                        {
                            xtype: 'container',
                            defaults: {
                                labelWidth: '35%',
                                labelWrap: true
                            },
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'homePhone',
                                    name: 'homePhone',
                                    label: 'Дом. тел.',
                                    width: '80%',
                                    labelAlign: 'left',
                                    value: '87172222222',
                                    readOnly: true
                                },
                                {
                                    text: 'Позвонить',
                                    xtype: 'button',
                                    id: 'callHomePhone',
                                    width: '20%',
                                    ui: 'action',
                                    maxWidth: '100',
                                    hasDisabled: false

                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            defaults: {
                                labelWidth: '35%',
                                labelWrap: true
                            },
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'workPhone',
                                    name: 'workPhone',
                                    label: 'Раб. тел.',
                                    width: '80%',
                                    labelAlign: 'left',
                                    value: '87172555555',
                                    readOnly: true
                                },
                                {
                                    text: 'Позвонить',
                                    xtype: 'button',
                                    id: 'callWorkPhone',
                                    width: '20%',
                                    ui: 'action',
                                    maxWidth: '100',
                                    hasDisabled: false

                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            defaults: {
                                labelWidth: '35%',
                                labelWrap: true
                            },
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'mobilePhone',
                                    name: 'mobilePhone',
                                    label: 'Моб. тел.',
                                    width: '80%',
                                    labelAlign: 'left',
                                    value: '87172222222',
                                    readOnly: true
                                },
                                {
                                    text: 'Позвонить',
                                    xtype: 'button',
                                    id: 'callMobilePhone',
                                    width: '20%',
                                    ui: 'action',
                                    maxWidth: '100',
                                    hasDisabled: false

                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            xtype: 'panel',
            title: 'Контакты',
            tools: [
                {
                    iconCls: 'x-fa fa-arrow-down',
                    action: 'clientContactsPanelHide',
                },
                {
                    iconCls: 'x-fa fa-arrow-left',
                    action: 'clientContactsPanelShow',
                }
            ],
            items: [
                {
                    name: 'contactsPanel',
                    xtype: 'panel',
                    items: [
                        {
                            xtype: 'container',
                            defaults: {
                                labelWidth: '35%',
                                labelWrap: true
                            },
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'contact2',
                                    name: 'contact2',
                                    label: 'Татьяна',
                                    width: '80%',
                                    labelAlign: 'left',
                                    value: '87172222222',
                                    readOnly: true
                                },
                                {
                                    text: 'Позвонить',
                                    xtype: 'button',
                                    id: 'callContact2Phone',
                                    width: '20%',
                                    ui: 'action',
                                    maxWidth: '100',
                                    hasDisabled: false

                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            defaults: {
                                labelWidth: '35%',
                                labelWrap: true
                            },
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'contact1',
                                    name: 'contact1',
                                    label: 'Андрей, брат',
                                    width: '80%',
                                    labelAlign: 'left',
                                    value: '87172555555',
                                    readOnly: true
                                },
                                {
                                    text: 'Позвонить',
                                    xtype: 'button',
                                    id: 'callContact1Phone',
                                    width: '20%',
                                    ui: 'action',
                                    maxWidth: '100',
                                    hasDisabled: false

                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            defaults: {
                                labelWidth: '35%',
                                labelWrap: true
                            },
                            layout: {
                                type: 'hbox',
                                pack: 'middle'
                            },
                            items: [
                                {
                                    align: 'middle',
                                    text: 'Добавить контакт',
                                    xtype: 'button',
                                    id: 'addClientContact',
                                    width: '20%',
                                    ui: 'action',
                                    maxWidth: '300',
                                    hasDisabled: false

                                }
                            ]
                        },

                    ]
                },
            ]
        },
        {
            xtype: 'panel',
            title: 'Документы удостоверяющие личность',
            tools: [
                {
                    iconCls: 'x-fa fa-arrow-down',
                    action: 'clientDocsPanelHide',
                },
                {
                    iconCls: 'x-fa fa-arrow-left',
                    action: 'clientDocsPanelShow',
                }
            ],
            items: [
                {
                    name: 'docsPanel',
                    xtype: 'clientDocsGrid',
                    width: '100%',
                    height: 300

                },
            ]
        },
        {
            xtype: 'panel',
            title: 'Мероприятия',
            tools: [
                {
                    iconCls: 'x-fa fa-arrow-down',
                    action: 'clientActsPanelHide',
                },
                {
                    iconCls: 'x-fa fa-arrow-left',
                    action: 'clientActsPanelShow',
                }
            ],
            items: [
                {
                    name: 'actsPanel',
                    xtype: 'fieldset',
                    defaults: {
                        labelWidth: '35%',
                        labelWrap: true
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'activityDate',
                            name: 'activityDate',
                            label: '<b>Дата</b>',
                            labelAlign: 'left',
                            value: '01/05/2015',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'activityType',
                            name: 'activityType',
                            label: 'Тип',
                            labelAlign: 'left',
                            value: 'Выезд',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'activityResponse',
                            name: 'activityResponse',
                            label: 'Ответ',
                            labelAlign: 'left',
                            value: '',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'activityComment',
                            name: 'activityComment',
                            label: 'Комментарий',
                            labelAlign: 'left',
                            value: 'Обещает заплотить',
                            readOnly: true
                        }

                    ]
                },
            ]
        }

]
});