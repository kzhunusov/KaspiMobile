Ext.define('KaspiMobile.store.Docs', {
    extend: 'Ext.data.Store',

    alias: 'store.docs',

    fields: [
        'type', 'serialNum', 'givenBy', 'period'
    ],

    data: { items: [
        { type: 'Уд.л', serialNum: "2222", givenBy: "МЮ РК" ,period: "2000" },
        { type: 'Паспорт', serialNum: "2222", givenBy: "МЮ РК" ,period: "2000" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});