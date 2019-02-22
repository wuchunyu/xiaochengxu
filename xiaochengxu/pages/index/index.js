Page({

  /**
   * 页面的初始数据
   */
  data: {
    yang:[],  //
    list:[],   //轮播图
    kezhao:[],  //每日客照
    current_tag:3,
    pn:"",
    ph:"",
    open: false
  },
  tiao0:function(e){
    var t = e.currentTarget.dataset.id;
    console.log(t);
    if(t == 1){
      wx.navigateTo({ url: "/pages/index/index" });
    }else if(t == 2){
      wx.navigateTo({ url: "/pages/kezhao/kezhao" });
    }else{
      wx.navigateTo({ url: "/pages/yangzhao/yangzhao" });
    }
  },
  fan:function(e){
    this.setData({
      open:false
    })
  },
  clickedAction:function(e){
    var id = e.target.dataset.id;
    this.setData({
      current_tag:id,
    })
  },
  checkForm:function(e){
    //1:通过事件对象获取用户输入 pname price
    // console.log(e);
    var san = e.detail.value.san;
    var pname = e.detail.value.pname;
    var phone = e.detail.value.phone;
    //2:创建正则表达式验证商品价格
    //3:如果验证不成功 提示错误消息
    if (!pname) {
      wx.showToast({
        title: '名字不能为空',
      });
      return;
    }
    if(!phone){
      wx.showToast({
        title: '手机号不能为空',
      });
      return;
    }
    var reg = /^1[34578]\d{9}$/;
    if (!reg.test(phone)) {
      wx.showToast({ title: "手机号格式不正确" });
      return;
    }
    //4发送ajax将 pname 发送服务器
    var url2 = "http://127.0.0.1:3000/saveP";
    wx.request({
      url: url2,  //发送请求程序服务器地址
      data:{pname:pname,phone:phone,san:san},
      success:(res)=>{//接收服务器返回数据
        if(res.data.code==1){
          wx.showToast({title:"添加成功"});
          setTimeout(function(){
            wx.hideToast();
          },1500)
        }
      }    
    })
    //5如果发送成功清空原有价格和数据
  },
  handleTap: function (e) {
    console.log("2:父元素 tap事件");
    console.log("事件类型:" + e.type);
    console.log("当前事件对象");
    console.log(e.currentTarget);
    console.log("触发事件元素");
    console.log(e.target);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getImages();
    this.getyang();
    this.getkezhao();
  },
  getkezhao:function(){
    var url = "http://127.0.0.1:3000/getkezhao";
    wx.request({
      url: url,
      success:(res)=>{
        console.log(res);
        this.setData({
          kezhao:res.data
        });
      },
    })
  },
  /* */
  getyang:function(){
    var url = "http://127.0.0.1:3000/getyang";
    wx.request({
      url: url,
      success:(res)=>{
        console.log(res);
        this.setData({
          yang:res.data
        });
      },
    })
  },
  /*轮播图*/ 
  getImages:function(){
    var url2 = "http://127.0.0.1:3000/getImages";
    wx.request({
      url: url2,
      success:(res)=>{
        this.setData({
          list:res.data
        });
      },
    })
  },
  dian: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // created
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