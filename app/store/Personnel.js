Ext.define('KaspiMobile.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'number', 'good', 'sum', 'debt'
    ],

    data: { items: [
        { number: 'R12312313-CRD2', good: "Утюг", sum: "1000000" ,debt: "2000" },
        { number: 'R12312313-CRD3', good: "Телефон", sum: "21313" ,debt: "223" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});