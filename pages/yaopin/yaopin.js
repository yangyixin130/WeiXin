// pages/yaopin/yaopin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'input_1':'',
    'title':'',
    'content':''
    
  },
  peidui: function (options) {
    var _this = this;
    wx.request({
      url: 'http://api.tianapi.com/txapi/yaopin/index',
      method: 'GET',
      data: { 'key': '793ec107e7f64578adc95e8281b0a551', 'word':_this.data.input_1},
      dataType: 'json',
      success: function (res) {
        console.log(res);
        var res_data = res.data.newslist;
        console.log(res_data);
        console.log(res_data[0].title);
        console.log(res_data[0].content);
        
        _this.setData({
          'title': res_data[0].title,
          'content': res_data[0].content
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
   * 生命周期函数--监听页面加载
   */
  

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