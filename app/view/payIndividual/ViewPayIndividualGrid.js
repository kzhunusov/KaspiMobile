/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.payIndividual.ViewPayIndividualGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'payIndividualPayIndividualGrid',

    requires: [
        'KaspiMobile.store.PayIndividual',
    ],


    store: {
        type: 'payIndividual'
    },
    columns: [
        { text: 'Номер',  dataIndex: 'number', flex: 1},
        { text: 'Дата',  dataIndex: 'date', flex: 1},
        { text: 'Сумма', dataIndex: 'sum', flex: 1},
        { text: 'Остаток', dataIndex: 'remain', flex: 1}
    ]


});
