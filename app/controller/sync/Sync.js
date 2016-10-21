Ext.define('KaspiMobile.controller.sync.Sync', {
    extend: 'KaspiMobile.controller.Base',


    config: {
        refs: {
            view: 'syncSync',

            syncMessage: 'syncSync label[name=syncMessage]',
            progress: 'syncSync progress[name=progress]',
            syncButton:     'syncSync button[action=sync]',
            notSyncButton:     'syncSync button[action=notsync]',
            cancelButton:     'syncSync button[action=cancel]',
        },

        control: {
            view              : {
                show: 'onShow',
            },
            cancelButton: {
                tap: 'onCancelButtonTap'
            },

            syncButton: {
                tap: 'onSyncButtonTap',
            },

            notSyncButton: {
                tap: 'redirectToMeetings',
            },
        },
    },
    progress: 0,
    stopped: true,

    onShow: function () {
        this.getSyncMessage().hide();
        this.getProgress().hide();
        this.getCancelButton().hide();
        this.getSyncMessage().setHtml('');
        this.getProgress().setValue(0);

    },

    redirectToMeetings: function () {
        this.showView('meetings.ViewMeetings');
    },
    onCancelButtonTap: function (button, event, options, eventController) {
        that.stopped=true;
        this.showView('sync.ViewSync');
    },


    // viewModel: {
    //     data: {
    //         progress: 0
    //     },
    //     formulas: {
    //         itemPercent: function(get) {
    //             progress = get('progress'),
    //                 itemPercent = 1;
    //
    //             return Math.round(((progress / itemPercent) % 1) * 100);
    //         },
    //         percent: function(get) {
    //             var progress = get('progress');
    //             return Math.round(progress * 100);
    //         }
    //
    //
    //     }
    // },
    // init: function() {
    //     var me = this,
    //         view = me.getView(),
    //         vm = this.getViewModel(),
    //         progress;
    //
    //     me._interval = setInterval(function() {
    //         if (view.isDestroyed) {
    //             clearInterval(me._interval);
    //             return;
    //         }
    //         progress = vm.get('progress');
    //         progress += 0.01;
    //         if (progress > 1) {
    //             progress = 0;
    //         }
    //         vm.set('progress', progress);
    //     }, 150);
    // },

    onSyncButtonTap: function() {
        this.progress = 0;
        this.stopped=false;

        that=this;

        _interval = setInterval(function() {
            if (that.stopped) {
                clearInterval(_interval);
                return;
            }
            that.progress += 0.01;
            that.getSyncMessage().setHtml('Синхронизация... '+Math.round(that.progress * 100)+'%');
            that.getProgress().setValue(that.progress);

            if (that.progress > 1) {
                that.progress = 0;
                that.stopped=true;
                that.showView('meetings.ViewMeetings');
            }

        }, 10);

        this.getSyncMessage().show();
        this.getProgress().show();
        this.getCancelButton().show();

        this.getSyncButton().hide();
        this.getNotSyncButton().hide();



    }

});