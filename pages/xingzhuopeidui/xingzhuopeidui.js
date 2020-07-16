Page({

  /**
   * 页面的初始数据
   */
  data: {
    'input_1': '',
    'input_2': '',
    'grade':'',
    'content':''
  },

  inputtxt_1: function(e) {
    this.setData({
      'input_1': e.detail.value
    })
  },

  inputtxt_2: function(e) {
    this.setData({
      'input_2': e.detail.value
    })
  },

  peidui: function(e) {
    var _this = this;

    // 调用星座配对接口
    wx.request({
      url: 'http://api.tianapi.com/txapi/xingzuo/index',
      method: 'GET',
      data: {
        key: '191b0aad948d01bc6ca59169c1832403',
        me: _this.data.input_1,
        he: _this.data.input_2
      },
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res); // res 接口返回的数据实列
        var res_data = res.data.newslist;
        console.log(res_data[0].title);
        console.log(res_data[0].grade);
        console.log(res_data[0].content);
        _this.setData({
          'title': res_data[0].title,
          'grade': res_data[0].grade,
          'content':res_data[0].content
        });
      }
    });
  },

  clickview: function(e) {
    console.log('点击了view标签，事件触发成功...');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 基于对象格式json数据的解析步骤
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
