var CookieHelper = {
    set: function (name, value, days) {
        var expires = '';
        if(days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = ';expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires;
    },
    get: function (name) {
        var nameEQ = name + '=';
        var cookieArr = document.cookie.split(';');
        for(var i = 0; i < cookieArr.length; i++) {
            var theCookie = cookieArr[i];
            while(theCookie.charAt(0) == ' ') {
                theCookie = theCookie.substring(1, theCookie.length);
            }
            if(theCookie.indexOf(nameEQ) === 0) {
                return theCookie.substring(nameEQ.length, theCookie.length);
            }
        }
        return null;
    },
    remove(name) {
        this.set(name, '', -1);
    },
    clearAll() {
        document.cookie = null;
    }
};
