Page({
  data:{
    items:[
      {name: 'USA', value: '美国'},
      {name: 'CHA', value: '中国', checked: 'true' },
      {name: 'FRA', value: '法国' },
      {name: 'AUS', value: '澳大利亚' }
    ]
  },
  checkboxChange: function(e){
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})