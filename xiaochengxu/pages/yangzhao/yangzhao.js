// pages/yangzhao/yangzhao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  quan:function(e){
    // var id = e.currentTarget.dataset.id;
    console.log(e);
    var id = null;
    if (e != undefined) {
      id = e.currentTarget.dataset.id;
    } else {
      id = 1;
    }
    // var id = 1;
    wx.request({
      url: 'http://127.0.0.1:3000/getquan',
      data:{id:id},
      success: (res) => {//接收服务器返回数据
        console.log(res);
        this.setData({
          list: res.data
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.quan();
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