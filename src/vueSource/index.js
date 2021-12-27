// 定义响应式数据，收集依赖
function defineReactive(data, key, val) {
  let dep = [];// 依赖数组
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      dep.push(window.target);
      return val;
    },
    set: function(newVal) {
      if(val === newVal) {
        return;
      }
      // 触发更新事件
      for (let i = 0; i < dep.length; i ++) {
        dep[i](newVal, val);
      }
      val = newVal;
    },
  });
}
