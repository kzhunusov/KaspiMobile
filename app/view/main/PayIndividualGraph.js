/**
 * Created by kaydar on 10/18/16.
 */


Ext.define('KaspiMobile.view.main.PayIndividualGraph', {
    extend: 'Ext.form.Panel',
    xtype: 'PayindividualGraph',
    controller: 'payindividualGraph',


    requires: [
        'KaspiMobile.view.main.PayIndividualGraphController'
    ],


    items: [
        {
            xtype: 'PayIndividualGrid',
            layout : 'fit',
            height: 400,
            width: '100%'
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin: 1em',
                flex: 1
            },
            layout: {
                type: 'hbox',
                pack: 'middle'
            },
            items: [
                {
                    text: 'Изменить',
                    id: 'btnChangePayIndForm',
                    ui: 'action',
                    maxWidth: '100',
                    hasDisabled: false,
                    handler: 'onChangePayIndClick'

                },
                {
                    text: 'Сохранить',
                    maxWidth: '100',
                    ui: 'action'

                }
            ]
        }
    ]
}
);