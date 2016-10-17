/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.TranchesGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'tranchesGrid',

    requires: [
        'KaspiMobile.store.Personnel'
    ],

    store: {
        type: 'personnel'
    },
    columns: [
        { text: 'Номер',  dataIndex: 'number', flex: 1},
        { text: 'Товар', dataIndex: 'good', flex: 1},
        { text: 'Сумма', dataIndex: 'sum', flex: 1},
        { text: 'Долг', dataIndex: 'debt', flex: 1}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
