var userAgent = (window.navigator && window.navigator.userAgent || '');

var BrowserCheck = {
  isAndroid: function() {
    return /android/i.test(userAgent);
  },

  isAndroidPhone: function() {
    return this.isAndroid() && /mobile/i.test(userAgent);
  },

  isAndroidTablet: function() {
    return this.isAndroid() && !/mobile/i.test(userAgent);
  },

  isIOS: function() {
    return /iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream;
  },

  isIPad: function() {
    return /iPad/i.test(userAgent) && !window.MSStream;
  },

  isIPhone: function() {
    return /iPhone/i.test(userAgent) && !window.MSStream;
  }

  isChrome: function() {
    return !!window.chrome && !!window.chrome.webstore;
  },

  isFirefox: function() {
    return typof InstallTrigger !== 'undefined';
  },

  isOpera: function() {
    return !!window.opera || (!!window.opr && !!opr.addons) || navigator.userAgent.indexOf(' OPR/') >= 0;
  }

  isIE: function() {
    return false || !!document.documentMode; // 6 -11
  },

  isEdge: function() {
    return !this.isIE() && userAgent.indexOf('Edge/') >= 0;
  },

  getIEVersion: function() {
    if (!this.isIE() && !this.isEdge()) {
      return false;
    }

    var msie = userAgent.indexOf('MSIE ');
    if (msie > 0) {
      return parseInt(userAgent.substring(msie + 5, userAgent.indexOf('.', msie)), 10);
    }

    var trident = userAgent.indexOf('Trident/');
    if (trident > 0) {
      var rv = userAgent.indexOf('rv:');
      return parseInt(userAgent.substring(rv + 3, userAgent.indexOf('.', rv)), 10);
    }

    var edge = userAgent.indexOf('Edge');
    if (edge > 0) {
      return parseInt(userAgent.substring(edge + 5, userAgent.indexOf('.', edge)), 10);
    }
  },

  getIOSVersion: function() {
    if (this.isIOS()) {
      if (!!window.indexedDB) {
        return '8+';
      }
      if (!!window.SpeechSynthesisUtterance) {
        return '7';
      }
      if (!!window.webkitAudioContext) {
        return '6';
      }
      if (!!window.matchMedia) {
        return '5';
      }
      if (!!window.history && 'pushState' in window.history) {
        return '4';
      }

      return '3-';
    }
    return false;
  }
};
