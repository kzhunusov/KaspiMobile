/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.BillMovementsGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'billMovementsGrid',

    requires: [
        'KaspiMobile.store.BillMovements',
        'KaspiMobile.view.main.BillMovementsInfoController'
    ],

    controller: 'billMovementsInfo',

    store: {
        type: 'billMovements'
    },
    columns: [
        { text: 'Дата',  dataIndex: 'date', flex: 1},
        { text: 'Сумма', dataIndex: 'sum', flex: 1},
        { text: 'Операция', dataIndex: 'oper', flex: 1}
    ]

});
