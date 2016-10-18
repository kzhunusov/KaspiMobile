/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.PayIndividualGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'PayIndividualGrid',

    requires: [
        'KaspiMobile.store.PayIndividual',
        'KaspiMobile.view.main.PayIndividualGridController'
    ],

    controller: 'payIndividualGrid',

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
