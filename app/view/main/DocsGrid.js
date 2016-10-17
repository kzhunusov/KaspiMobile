/**
 * This view is an example list of people.
 */
Ext.define('KaspiMobile.view.main.DocsGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'docsGrid',

    requires: [
        'KaspiMobile.store.Docs'
    ],

    store: {
        type: 'docs'
    },
    columns: [
        { text: 'Тип',  dataIndex: 'type', flex: 1},
        { text: 'Серия, номер', dataIndex: 'serialNum', flex: 1},
        { text: 'Выдан', dataIndex: 'givenBy', flex: 1},
        { text: 'Период действия', dataIndex: 'period', flex: 1}
    ]
});
