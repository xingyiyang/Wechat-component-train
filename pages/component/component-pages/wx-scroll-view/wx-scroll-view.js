// pages/component/component-pages/wx-scroll-view/wx-scroll-view.js
var order = ['green', 'red', 'yellow', 'blue', 'green']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: "green"
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  scrollToTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  tap: function(e){
    for(var i=0; i<order.length; ++i){
      if (order[i] === this.data.toView){
        this.setData({
          toView: order[i+1],
          scrollTop: (i+1)*400
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})