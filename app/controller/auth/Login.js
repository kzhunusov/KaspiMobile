Ext.define('KaspiMobile.controller.auth.Login', {
    extend: 'KaspiMobile.controller.Base',


    config: {
        refs: {
            view: 'authLogin',

            errorMessage: 'authLogin label[name=errorMessage]',

            fieldName: 'authLogin textfield[name=name]',
            fieldPassword: 'authLogin passwordfield[name=password]',

            loginButton: 'authLogin button[action=login]',
            exitButton: 'authLogin button[action=exit]',
        },

        control: {
            view: {
                show: 'onShow',
            },
            exitButton: {
                tap: 'onExitButtonTap',
            },

            loginButton: {
                tap: 'onLoginButtonTap',
            },

            fieldName: {
                keyup: 'updateLoginButton',
            },
        },
    },

    onShow: function () {
        console.log('LOGIN PAGE CONTROLLER onSHOW');
        this.getFieldName().setValue(localStorage.getItem('__last_username__') || '');
        this.getFieldPassword().setValue('');
        this.updateLoginButton();
        this.getErrorMessage().hide();
    },

    updateLoginButton: function () {
        var name = this.getFieldName().getValue();
        this.getLoginButton().setDisabled(name.length == 0);
    },

    onExitButtonTap: function (button, event, options, eventController) {
        this.showView('auth.ViewLogin');
    },

    onLoginButtonTap: function () {
        this.getLoginButton().setDisabled(true);
        Ext.Ajax.request({
            url: service("auth/login"),
            params: {
                name: this.getFieldName().getValue(),
                password: this.getFieldPassword().getValue(),
            },
            scope: this,
            success: function (response, opts) {
                this.getFieldPassword().setValue('');
                var answer = JSON.parse(response.responseText);
                if (answer.success) {
                    localStorage.setItem('__last_username__', this.getFieldName().getValue());
                    this.showView('auth.ViewPinCode');
                } else {
                    if (answer.message) {
                        this.getErrorMessage().setHtml(answer.message);
                        this.getErrorMessage().show();
                    } else {
                        this.getErrorMessage().hide();
                    }

                    this.updateLoginButton();
                }
            },
            failure: function (response, opts) {
                this.updateLoginButton();
                this.getFieldPassword().setValue('');
            },
        });
    }
});