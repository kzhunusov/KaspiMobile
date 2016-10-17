Ext.define('KaspiMobile.store.BillMovements', {
    extend: 'Ext.data.Store',

    alias: 'store.billMovements',

    fields: [
        'date',  'sum', 'oper'
    ],

    data: { items: [
        { date: '05/03/15', sum: "213123.12" ,oper: "Взнос наличных" },
        { date: '05/03/15', sum: "213123.12" ,oper: "Взнос наличных" },
        { date: '05/03/15', sum: "213123.12" ,oper: "Взнос наличных" },
        { date: '05/03/15', sum: "213123.12" ,oper: "Взнос наличных" },
        { date: '05/03/15', sum: "213123.12" ,oper: "Взнос наличных" },
        { date: '05/03/15', sum: "213123.12" ,oper: "Взнос наличных" },
        { date: '05/03/15', sum: "213123.12" ,oper: "Взнос наличных" },
        { date: '05/03/15', sum: "213123.12" ,oper: "Взнос наличных" },
        { date: '05/03/15', sum: "213123.12" ,oper: "Взнос наличных" },
        { date: '05/03/15', sum: "213123.12" ,oper: "Взнос наличных" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});