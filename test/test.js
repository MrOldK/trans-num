
;(function(factory) {
    if (typeof define === 'function' && define.amd) {
      define(factory)
    }
    if (typeof exports === 'object') {
      module.exports = factory()
    }
    if (window) {
      window.linearNum = factory()
    }
  }(function () {
    class linearNum {
        static author = 'mok'
        static version = '1.0'
        static repository = 'https://github.com/MrOldK/trans-num'
    
        constructor (opts, cb) {
          this.flag = 0
          // HTML id
          this.el = document.getElementById(opts.el)
     
          // 初始值
          this.from = opts.from
    
          // 动态值
          this.dyna = opts.from
    
          // 最终值
          this.to = opts.to
    
          // 增长值
          this.increase = opts.increase
    
          // 初始值+增长值
          this.transEnd = opts.increase ? opts.increase + opts.from : opts.to
    
          // 差值
          this.diff = opts.increase ? Math.abs(opts.increase) : Math.abs(opts.to - opts.from)
    
          // 变化速度
          this.speed = opts.speed || 50
    
          // true: from值上升 false: from值下降
          this.direct = opts.to ? (opts.to > opts.from ? true : false) : (opts.increase > 0 ? true : false)
    
          // 是否大于10 true: 大于10 false: 小于等于10
          this.compareTen = opts.increase ? Math.abs(opts.increase) > 10 : Math.abs(opts.to - opts.from) > 10
          
          // 大于10后的余数
          this.remainder = opts.increase ? (opts.increase > 10 ? opts.increase % 10 : '') : (opts.to - opts.from > 10 ? Math.abs(opts.to - opts.from) % 10 : '')
    
          // 回调函数
          this.cb = cb ? cb : ''
          
          this.init()
        }
    
        init () {
          this.checkToAndDiff()
          this.linear()
        }
    
        linear () {
          this.interval = setInterval(() => {
            this.el.innerHTML = this.dyna
            this.dyna === this.transEnd ? this.clearTheInterval() : this.transBegin()
          }, this.speed)
        }
    
        clearTheInterval () {
          clearInterval(this.interval)
    
          if (this.cb) {
            this.cb()
          }
        }
    
        checkToAndDiff () {
          this.to && this.increase ? this.throwErr('to and diff can not coexist') : ''
        }
    
        addTen () {
          this.direct ? this.dyna += 10 : this.dyna -= 10
        }
        
        addOne () {
          this.direct ? this.dyna++ : this.dyna--
        }
    
        transBegin () {
          if (this.compareTen) {
            if (this.flag === this.remainder) {
              this.addTen()
            } else {
              this.addOne()
              this.flag++
            }
          } else {
            this.addOne()
          }
        }
    
        throwErr (msg) {
          throw new Error(msg)
        }
      }
    
      return linearNum
  }));