/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.ClientInfo', {
    xtype: 'ClientInfoPage',
    id: 'clientInfo',
    controller: 'clientInfo',
    requires: [
        'KaspiMobile.view.main.ClientInfoController',
        'KaspiMobile.view.main.TranchesGrid'
    ],

    extend: 'Ext.Container',




    items: [


        {
            xtype: 'panel',
            title: 'Информация о заемщике',
            tools: [
                {iconCls: 'x-fa fa-arrow-down',
                    handler: function() {
                        Ext.getCmp("panel1").hide();
                    }},
                {iconCls: 'x-fa fa-arrow-left',
                    handler: function() {
                        Ext.getCmp("panel1").show();
                    }
                }
            ],
            items: [
                {
                    id: 'panel1',
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
                            value: 'SMT',
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
                {iconCls: 'x-fa fa-arrow-down',
                    handler: function() {
                        Ext.getCmp("panel2").hide();
                    }},
                {iconCls: 'x-fa fa-arrow-left',
                    handler: function() {
                        Ext.getCmp("panel2").show();
                    }
                }
            ],
            items: [
                {
                    xtype : 'image',
                    id: 'panel2',
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
                {iconCls: 'x-fa fa-arrow-down',
                    handler: function() {
                        Ext.getCmp("panel3").hide();
                    }},
                {iconCls: 'x-fa fa-arrow-left',
                    handler: function() {
                        Ext.getCmp("panel3").show();
                    }
                }
            ],
            items: [
                {
                    id: 'panel3',
                    xtype: 'tranchesGrid',
                    width: '100%',
                    height: 300
                },
            ]
        },
        {
            xtype: 'panel',
            title: 'Адреса',
            tools: [
                {iconCls: 'x-fa fa-arrow-down',
                    handler: function() {
                        Ext.getCmp("panel4").hide();
                    }},
                {iconCls: 'x-fa fa-arrow-left',
                    handler: function() {
                        Ext.getCmp("panel4").show();
                    }
                }
            ],
            items: [
                {
                    id: 'panel4',
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
                {iconCls: 'x-fa fa-arrow-down',
                    handler: function() {
                        Ext.getCmp("panel5").hide();
                    }},
                {iconCls: 'x-fa fa-arrow-left',
                    handler: function() {
                        Ext.getCmp("panel5").show();
                    }
                }
            ],
            items: [
                {
                    id: 'panel5',
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
                {iconCls: 'x-fa fa-arrow-down',
                    handler: function() {
                        Ext.getCmp("panel6").hide();
                    }},
                {iconCls: 'x-fa fa-arrow-left',
                    handler: function() {
                        Ext.getCmp("panel6").show();
                    }
                }
            ],
            items: [
                {
                    id: 'panel6',
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
                {iconCls: 'x-fa fa-arrow-down',
                    handler: function() {
                        Ext.getCmp("panel7").hide();
                    }},
                {iconCls: 'x-fa fa-arrow-left',
                    handler: function() {
                        Ext.getCmp("panel7").show();
                    }
                }
            ],
            items: [
                {
                    id: 'panel7',
                    xtype: 'docsGrid',
                    width: '100%',
                    height: 300

                },
            ]
        },
        {
            xtype: 'panel',
            title: 'Мероприятия',
            tools: [
                {iconCls: 'x-fa fa-arrow-down',
                    handler: function() {
                        Ext.getCmp("panel8").hide();
                    }},
                {iconCls: 'x-fa fa-arrow-left',
                    handler: function() {
                        Ext.getCmp("panel8").show();
                    }
                }
            ],
            items: [
                {
                    id: 'panel8',
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