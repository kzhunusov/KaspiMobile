Ext.define('KaspiMobile.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'firstName', 'lastName', 'phone'
    ],

    data: { items: [
        { firstName: 'Jean Luc', lastName: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { firstName: 'Worf',     lastName: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { firstName: 'Deanna',   lastName: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { firstName: 'Data',     lastName: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
