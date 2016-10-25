Ext.define('KaspiMobile.controller.auth.PinCode', {
    extend: 'KaspiMobile.controller.Base',

    config: {
        refs: {
            view       : 'authPinCode',
            button0    : 'authPinCode button[action=zero]',
            button1    : 'authPinCode button[action=one]',
            button2    : 'authPinCode button[action=two]',
            button3    : 'authPinCode button[action=three]',
            button4    : 'authPinCode button[action=four]',
            button5    : 'authPinCode button[action=five]',
            button6    : 'authPinCode button[action=six]',
            button7    : 'authPinCode button[action=seven]',
            button8    : 'authPinCode button[action=eight]',
            button9    : 'authPinCode button[action=nine]',
            buttonDelete    : 'authPinCode button[action=delete]',
            buttonOk    : 'authPinCode button[action=ok]',
            mainMessage  : 'authPinCode label[name=mainMessage]',
            code1: 'authPinCode image[name=code1]',
            code2: 'authPinCode image[name=code2]',
            code3: 'authPinCode image[name=code3]',
            code4: 'authPinCode image[name=code4]',
            code5: 'authPinCode image[name=code5]',
            code6: 'authPinCode image[name=code6]',



            //PinCode Error page
            errorView       : 'authPinCodeError',
            buttonRetype    : 'authPinCodeError button[action=repincode]',
            buttonExit    : 'authPinCodeError button[action=exit]',
            attemptMessage  : 'authPinCodeError label[name=attemptMessage]',

        },

        control: {
            view       : {
                show: 'onShow',
            },
            errorView       : {
                show: 'onShowErrorView',
            },
            button0: {
                tap: 'onButton0Tap',
            },
            button1: {
                tap: 'onButton1Tap',
            },
            button2: {
                tap: 'onButton2Tap',
            },
            button3: {
                tap: 'onButton3Tap',
            },
            button4: {
                tap: 'onButton4Tap',
            },
            button5: {
                tap: 'onButton5Tap',
            },
            button6: {
                tap: 'onButton6Tap',
            },
            button7: {
                tap: 'onButton7Tap',
            },
            button8: {
                tap: 'onButton8Tap',
            },
            button9: {
                tap: 'onButton9Tap',
            },
            buttonDelete: {
                tap: 'onButtonDeleteTap',
            },
            buttonOk: {
                tap: 'onButtonOkTap',
            },
            buttonRetype: {
                tap: 'onButtonRetypeTap',
            },
            buttonExit: {
                tap: 'onButtonExitTap',
            },

        },
    },

    pinCode: '',
    pinCodeAttemps: 3,



    onShow: function () {
        this.pinCode='';

        this.getMainMessage().setDisabled(false);
        this.getMainMessage().setHtml('Введите пин-код');
        this.setAllCodeNotTyped();
        this.updateOk();

    },

    onShowErrorView: function () {
        this.getAttemptMessage().setHtml('Осталось попыток: '+this.pinCodeAttemps+' (fakePincode=111111)');

    },



    checkPinCode: function () {
        var value = this.pinCode;
        var tmp = '';
        for (var i = 0, n = value.length; i < n; i++) {
            var c = value.charAt(i);
            if ('0' <= c && c <= '9') {
                tmp += c;
            }
        }

        if (tmp.length == 6) return tmp;
        return null;
    },

    updateOk: function () {
        this.getButtonOk().setDisabled(!this.checkPinCode());

        this.getButton0().setDisabled(this.checkPinCode());
        this.getButton1().setDisabled(this.checkPinCode());
        this.getButton2().setDisabled(this.checkPinCode());
        this.getButton3().setDisabled(this.checkPinCode());
        this.getButton4().setDisabled(this.checkPinCode());
        this.getButton5().setDisabled(this.checkPinCode());
        this.getButton6().setDisabled(this.checkPinCode());
        this.getButton7().setDisabled(this.checkPinCode());
        this.getButton8().setDisabled(this.checkPinCode());
        this.getButton9().setDisabled(this.checkPinCode());

        if(this.pinCode.length>0){
            this.getButtonDelete().setDisabled(false);
        }else {
            this.getButtonDelete().setDisabled(true);
        }
    },

    updateCode: function () {
        this.setAllCodeNotTyped();
        var value = this.pinCode;
        for (var i = 1, n = value.length; i <= n; i++) {
            this.setCodeTyped(i);
        }


    },

    updatePinCode: function(code){
      if(this.pinCode==null){
          this.pinCode='';
      }
      this.pinCode+=code;
    },

    deletePinCode: function(){
        if(this.pinCode==null){
            this.pinCode='';
        }
        if(this.pinCode.length>0){
            this.pinCode=this.pinCode.substring(0,this.pinCode.length-1);
        }
    },

    setCodeTyped: function(i){
        var blueSrc='resources/blue.png'
        if(i==1){
            this.getCode1().setSrc(blueSrc);
        }
        if(i==2){
            this.getCode2().setSrc(blueSrc);
        }
        if(i==3){
            this.getCode3().setSrc(blueSrc);
        }
        if(i==4){
            this.getCode4().setSrc(blueSrc);
        }
        if(i==5){
            this.getCode5().setSrc(blueSrc);
        }
        if(i==6){
            this.getCode6().setSrc(blueSrc);
        }
    },
    setAllCodeNotTyped: function () {
        var graySrc='resources/gray.png';
        this.getCode1().setSrc(graySrc);
        this.getCode2().setSrc(graySrc);
        this.getCode3().setSrc(graySrc);
        this.getCode4().setSrc(graySrc);
        this.getCode5().setSrc(graySrc);
        this.getCode6().setSrc(graySrc);
    },

    onButton0Tap: function () {
        this.updatePinCode('0');
        this.updateCode();
        this.updateOk();
    },
    onButton1Tap: function () {
        this.updatePinCode('1');
        this.updateCode();
        this.updateOk();
    },
    onButton2Tap: function () {
        this.updatePinCode('2');
        this.updateCode();
        this.updateOk();
    },
    onButton3Tap: function () {
        this.updatePinCode('3');
        this.updateCode();
        this.updateOk();
    },
    onButton4Tap: function () {
        this.updatePinCode('4');
        this.updateCode();
        this.updateOk();
    },
    onButton5Tap: function () {
        this.updatePinCode('5');
        this.updateCode();
        this.updateOk();
    },
    onButton6Tap: function () {
        this.updatePinCode('6');
        this.updateCode();
        this.updateOk();
    },
    onButton7Tap: function () {
        this.updatePinCode('7');
        this.updateCode();
        this.updateOk();
    },
    onButton8Tap: function () {
        this.updatePinCode('8');
        this.updateCode();
        this.updateOk();
    },
    onButton9Tap: function () {
        this.updatePinCode('9');
        this.updateCode();
        this.updateOk();
    },
    onButtonDeleteTap: function () {
        this.deletePinCode();
        this.updateCode();
        this.updateOk();
    },
    onButtonOkTap: function () {
        this.getButtonOk().setDisabled(true);
        this.getButtonDelete().setDisabled(true);
        Ext.Ajax.request({
            url: service("auth/pincode"),
            params: {
                pincode: this.pinCode,
            },
            scope: this,
            success: function (response, opts) {
                var answer = JSON.parse(response.responseText);
                if (answer.success) {
                    // localStorage.setItem('__last_username__', this.getFieldName().getValue());
                    this.showView('sync.ViewSync');
                } else {
                    this.pinCodeAttemps=this.pinCodeAttemps-1;

                    if(this.pinCodeAttemps==0){
                        this.showView('auth.ViewLogin');
                    }else
                        this.showView('auth.ViewPinCodeError');
                }
            },
            failure: function (response, opts) {
                console.log('failed pincode service!!!');
            },
        });

    },

    onButtonRetypeTap: function () {
        this.showView('auth.ViewPinCode');
    },
    onButtonExitTap: function () {
        this.showView('auth.ViewLogin');
    },

    //
    // onButtonBackTap: function () {
    //     this.showView('auth.ViewLogin');
    // },


});