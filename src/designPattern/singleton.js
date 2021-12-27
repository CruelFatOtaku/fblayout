// 单独单例子模式
// let setManager = function(name) {
//   this.name = name;
// }
// setManager.prototype.getName = function () {
//   console.log(this.name)
// }

// let singletonManager = function(){
//   let manager = null;
//   return function (name) {
//     if (manager === null) {
//       manager = new setManager(name);
//     } 
//     return manager;
//   }
// }();
// singletonManager("a").getName();
// singletonManager("b").getName();
// singletonManager("c").getName();

// 模块化的单例子模式
let setManager = function(name) {
  this.name = name;
}
setManager.prototype.getName = function () {
  console.log(this.name);
}
let setHr = function(name) {
  this.name = name;
}
setHr.prototype.getName = function() {
  console.log(this.name);
}

let getSingleton = function(fn) {
  var inst = null;
  return function() {
      if (!inst) {
        inst = fn.apply(this, arguments);
      }
      return inst;
  }
};

var managerSingleton = getSingleton(function(name) {
  return new setManager(name);
});

managerSingleton("a").getName();
managerSingleton("b").getName();
managerSingleton("c").getName();

var hrSibgleton = getSingleton(function(name) {
  return new setHr(name);
});
hrSibgleton("a").getName();
hrSibgleton("b").getName();
hrSibgleton("c").getName();
