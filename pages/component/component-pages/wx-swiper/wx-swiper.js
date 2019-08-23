// pages/component/component-pages/wx-swiper/wx-swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['green', 'red', 'yellow'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    duration: 1000,
    interval: 3000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeVertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})