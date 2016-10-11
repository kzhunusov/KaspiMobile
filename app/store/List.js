Ext.define("KaspiMobile.store.List", {
    extend: 'Ext.data.Store',
    alias: 'store.meetingsData',
    config: {
        model: 'KaspiMobile.model.Meeting',
        sorters: 'firstName',
        grouper: {
            groupFn: function(record) {
                return record.get('firstName')[0];
            }
        },
        autoLoad: true,


        data: [
            {firstName: 'Julio', lastName: 'Benesh', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', status:'Контакт с заемщиком установлен', kind:'done'},
            {firstName: 'Julio', lastName: 'Minich', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', status:'Контакт с заемщиком установлен', kind:'notdone'},
            {firstName: 'Tania', lastName: 'Ricco', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', kind:'done'},
            {firstName: 'Odessa', lastName: 'Steuck', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', kind:'done'},
            {firstName: 'Nelson', lastName: 'Raber', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', kind:'notdone'},
            {firstName: 'Tyrone', lastName: 'Scannell', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', kind:'done'},
            {firstName: 'Allan', lastName: 'Disbrow', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', status:'Контакт с заемщиком установлен', kind:'done'},
            {firstName: 'Cody', lastName: 'Herrell', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', kind:'done'},
            {firstName: 'Julio', lastName: 'Burgoyne', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', kind:'done'},
            {firstName: 'Jessie', lastName: 'Boedeker', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', status:'Контакт с заемщиком установлен', kind:'notdone'},
            {firstName: 'Allan', lastName: 'Leyendecker', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', status:'Контакт с заемщиком установлен', kind:'notdone'},
            {firstName: 'Javier', lastName: 'Lockley', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', kind:'notdone'},
            {firstName: 'Guy', lastName: 'Reasor', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', status:'Контакт с заемщиком установлен', kind:'notdone'},
            {firstName: 'Jamie', lastName: 'Brummer', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', kind:'notdone'},
            {firstName: 'Jessie', lastName: 'Casa', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', status:'Контакт с заемщиком установлен', kind:'notdone'},
            {firstName: 'Marcie', lastName: 'Ricca', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', kind:'notdone'},
            {firstName: 'Gay', lastName: 'Lamoureaux', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', status:'Контакт с заемщиком установлен', kind:'notdone'},
            {firstName: 'Althea', lastName: 'Sturtz', info: 'Алматинская область, г.Алматы, ул. Алтынсарина, 219, кв 19.', status:'Контакт с заемщиком установлен', kind:'notdone'}
        ]
    }
});