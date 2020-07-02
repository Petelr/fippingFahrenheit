//app.js
import locales from '/utils/locales'
import T from '/utils/i18n'

T.registerLocale(locales);
T.setLocaleByIndex(wx.getStorageSync('langIndex') || 0);
wx.T = T;

App({
  onLaunch: function () {
    
  }
})