Ext.define('KaspiMobile.store.PayIndividual', {
    extend: 'Ext.data.Store',

    alias: 'store.payIndividual',

    fields: [
        'number','date',  'sum', 'remain'
    ],

    data: { items: [
        { number: '1', date: '05/03/15', sum: "213123.12" ,remain: "3413412" },
        { number: '2', date: '05/03/15', sum: "213123.12" ,remain: "5323" },
        { number: '3', date: '05/03/15', sum: "213123.12" ,remain: "78676" },
        { number: '4', date: '05/03/15', sum: "213123.12" ,remain: "22221231414" },
        { number: '5', date: '05/03/15', sum: "213123.12" ,remain: "56345333" },
        { number: '6', date: '05/03/15', sum: "213123.12" ,remain: "124151513" },
        { number: '7', date: '05/03/15', sum: "213123.12" ,remain: "1356642" },
        { number: '8',  date: '05/03/15', sum: "213123.12" ,remain: "1235121" },
        { number: '9', date: '05/03/15', sum: "213123.12" ,remain: "125353" },
        { number: '10', date: '05/03/15', sum: "213123.12" ,remain: "12412412414" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});