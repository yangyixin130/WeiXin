// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'input_1':'',
    'real':'',
    'date': '',
    'week':'',
    'weather': '',
    'highest': '',
    'lowest': '',
    'wind':'',
    'city':''

  },
  weahter: function (options) {
    var _this = this;
    wx.request({
      url: 'http://api.tianapi.com/txapi/tianqi/index',
      method: 'GET',
      data: { 'city':'_this.data.input_1', 'key': '793ec107e7f64578adc95e8281b0a551' },
      dataType: 'json',
      success: function (res) {
        console.log(res);
        var res_data = res.data.newslist;
        console.log(res_data);
        console.log(res_data[0].real);
        console.log(res_data[0].date);
        console.log(res_data[0].week);
        console.log(res_data[0].weather);
        console.log(res_data[0].highest);
        console.log(res_data[0].lowest);
        console.log(res_data[0].wind);
       

        _this.setData({
          'real': res_data[0].real,
          'date': res_data[0].date,
          'week': res_data[0].week,
          'weather': res_data[0].weather,
          'highest': res_data[0].highest,
          'lowest': res_data[0].lowest,
          'wind':res_data[0].wind
        });
      }
    })

  },
  inputtxt_1: function(e) {
    this.setData({
      'input_1': e.detail.value

    })
  },
   click: function(e) { // 按钮事件 
       console.log(_this.data.input_1);  
    },

 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})