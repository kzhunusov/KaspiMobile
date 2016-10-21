/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.payIndividual.ViewPayIndividualForm', {
    extend: 'Ext.form.Panel',
    xtype: 'payIndividualPayIndividualForm',




    items: [
        {
            xtype: 'fieldset',
            style: 'margin: 1em',
            defaults: {
                labelWidth: '35%',
                width: '100%',
                labelWrap: true,
                labelAlign: 'left'
            },
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'selectfield',
                    name: 'payType',
                    label: 'Вид расчёта',
                    autoCapitalize: true,
                    required: true,
                    options: [{
                        text: 'От суммы взноса',
                        value: 'first'
                    }, {
                        text: 'От суммы долга',
                        value: 'second'
                    }]
                },
                {
                    xtype: 'numberfield',
                    label: 'Ежемесячная сумма взноса',
                    minValue: 0,
                    name: 'monthlyPaySum'
                },
                {
                    xtype: 'numberfield',
                    label: 'Сумма общей задолженности',
                    minValue: 0,
                    value:'777',
                    name: 'totalSum'
                },
                {
                    xtype: 'datepickerfield',
                    label: 'Дата первого взноса',
                    name: 'startPayDate',
                    value: new Date()
                },
                {
                    xtype: 'datepickerfield',
                    label: 'Дата подписания ИГ',
                    name: 'signedDate',
                    value: new Date()
                },
                {
                    xtype: 'numberfield',
                    label: 'Первоначальный взнос',
                    minValue: 0,
                    name: 'firstPaySum'
                },
                {
                    xtype: 'datepickerfield',
                    label: 'Дата первоначального взноса',
                    name: 'firstPayDate',
                    value: new Date()
                },
                {
                    xtype: 'selectfield',
                    name: 'phones',
                    label: 'Номер телефона',
                    autoCapitalize: true,
                    required: true,
                    options: [{
                        text: '+77015555555',
                        value: 'first'
                    }, {
                        text: '+77774443322',
                        value: 'second'
                    }]
                }
            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin: 1em',
                flex: 1
            },
            layout: {
                type: 'hbox',
                pack: 'middle'
            },
            items: [
                {
                    text: 'Расчитать',
                    action: 'calcPayInd',
                    ui: 'action',
                    maxWidth: '200',
                    hasDisabled: false,

                }

            ]
        }
    ]

});
