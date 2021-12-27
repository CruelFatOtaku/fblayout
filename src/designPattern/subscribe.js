// 使用闭包来访问唯一的订阅对象
var _EnventCenter = (function(){
  // 使用对象属性保存多种不同事件及其订阅方法
  var subscribers = {},
    subscribe, publish, unsubscribe;

  /**
   * 订阅
   * @event {String} 类型
   * @fn {Function} 处理事件方法
   * */
  subscribe = function(event, fn){
      if(!subscribers[event]){
        subscribers[event]=[];
      }
      subscribers[event].push(fn);
  };

  /**
   * 发布消息
   * */
  publish = function () {
      var event = [].shift.call(arguments),// 获取事件名称
          fns = subscribers[event];// 取出处理函数数组
      if(!fns || fns.length === 0){
          return false;
      }
      for(let i = 0; i < fns.length; i++){
        let fn = fns[i];
        fn.apply(this, arguments);
      }
  };
  /**
   * 删除订阅
   * @key {String} 类型
   * @fn {Function} 回调函数
   * */
  unsubscribe = function(event, fn){
      var fns = subscribers[event];// 取出处理函数数组
      if(!fns){//没有订阅直接返回
          return false;
      }
      if (!fn) {//如果没有传入具体的回调，则表示需要取消所有订阅
          fns && (fns.length = 0);
      } else {
          for(let i = fns.length - 1; i >= 0; i--){//遍历回调函数列表
              if(fn === fns[i]){
                  fns.splice(i, 1);//删除订阅者
              }
          }
      }
  };
  return {
      subscribe,
      unsubscribe,
      publish
  }
})();


_EnventCenter.subscribe("事件1",function(d,all){
  console.log("a接到消息：来自" + d + "，内容：" + all);
});
_EnventCenter.subscribe("事件1",function(d,all){
  console.log("b接到消息：来自" + d + "，内容：" + all);
})
_EnventCenter.publish("事件1","ljc","发布的第一条消息");

