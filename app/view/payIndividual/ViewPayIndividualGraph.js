/**
 * Created by kaydar on 10/18/16.
 */


Ext.define('KaspiMobile.view.payIndividual.ViewPayIndividualGraph', {
    extend: 'Ext.form.Panel',
    xtype: 'payIndividualPayIndividualGraph',



    items: [
        {
            xtype: 'payIndividualPayIndividualGrid',
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
                    action: 'changePayIndForm',
                    ui: 'action',
                    maxWidth: '200',

                },
                {
                    text: 'Сохранить',
                    maxWidth: '200',
                    ui: 'action'

                }
            ]
        }
    ]
}
);