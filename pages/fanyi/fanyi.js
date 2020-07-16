// pages/fanyi/fanyi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'text_1': '',
    'en': '英文',
    'zh': '中文',
    'from_1': 'en',
    'to': 'zh',
    'appid': '20200114000375405',
    'salt': '1435660287',
    'sign': ''
  },

  textarea_1: function(e) {
    this.setData({
      'text_1': e.detail.value
    });
  },

  change: function(e) {
    var _this = this;
    var data = this.data;
    // console.log(e);

    if (data.en == '英文') {
        _this.setData({
          'en': '中文',
          'zh': '英文',
          'from_1': 'zh',
          'to': 'en',
        });
    } else {
        _this.setData({
          'en': '英文',
          'zh': '中文', 
          'from_1': 'en',
          'to': 'zh',
        });
    }
    console.log(data);
  },

  fanyi: function(e) {
    var _this = this;
    var utilMd5 = require('../../utils/md5.js');
    var password1 = _this.data.appid + _this.data.text_1 + _this.data.salt + 'Hk60MUL3FiEBMPcP8Upg'
    // console.log(_this.data.appid + _this.data.text_1 + _this.data.salt + 'Hk60MUL3FiEBMPcP8Upg');
    // console.log(_this);

    var password = utilMd5(password1);

    // md5.js使用实例
    // md5 = require('../../utils/md5.js');
    // md5('Message to hash');
    // var hash = md5.create();
    // hash.update('Message to hash');
    // hash.hex();

    // console.log(hash);


    // console.log(password);

    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      method: 'GET',
      data: {
        'q': _this.data.text_1,
        'from': _this.data.from_1,
        'to': _this.data.to,
        'appid': _this.data.appid,
        'salt': _this.data.salt,
        'sign': password
      },
      dataType: 'json',
      success: function(res) {
        // console.log(res);
        // console.log(_this.data.text_1);
        _this.setData({
          'text_1': '',
          text_1: res.data.trans_result[0].dst
        });
        // console.log(_this.data.text_1);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})