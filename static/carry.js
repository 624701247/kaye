
var carry = {}

carry.vueData = {
    ruleVisible: false    
}


// utils
!function (utils) {
    // 判断是否在微信端内置浏览器
    var checkIsWx = function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }
    var checkIsiOS = function () {
        if (/Mac/i.test(navigator.userAgent)) {
            return true
        }
        return false
    }
    utils.isWx = checkIsWx()
    utils.isIos = checkIsiOS()

    var getUrlParam = function (url) {
        var get = {}
        url = url || window.location.href.toString()
        var q = url.split("?")[1];
        if (typeof (q) == "string") {
            q = q.split("#")[0];
            q = q.split("&");
            for (var i in q) {
                var j = q[i].split("=");
                get[j[0]] = j[1];
            }
        }
        return get
    }
    utils.urlParam = getUrlParam()

    utils.randomInt = function (min, max) {
        var r = Math.random()   //  Math.random() 返回0 -- 1的开区间，即 0 < x < 1
        r = Math.ceil(r * (max - (min - 1)))
        return (r + (min - 1))
    }

    utils.isDemo = (window.location.host == "demo.h5.aiwanpai.com")
    utils.isLocal = (window.location.host.indexOf('aiwanpai') == -1)

    var el_clog = null
    utils.clog = function(txt) {
        if(this.isDemo || this.isLocal) {            
        }
        else {
            return 
        }
        
        if(el_clog == null) {
            el_clog = document.createElement('div')
            el_clog.style.cssText = "position:absolute; z-index:9999; color:white; font-size: 0.4rem;"
            document.body.appendChild(el_clog)
        }

        el_clog.innerHTML += (txt + ' ` ')
    }
} (carry)


// dom & css
!function (docs) {
    docs.addClass = function (elId, cls) {
        cls = ' ' + cls
        var el = null
        if (typeof (elId) == "string") {
            el = document.getElementById(elId)
        }
        else {
            el = elId
        }
        if (el && el.className.indexOf(cls) == -1) {
            el.className += cls
        }
    }

    docs.removeClass = function (elId, cls) {
        cls = ' ' + cls
        var el = null
        if (typeof (elId) == "string") {
            el = document.getElementById(elId)
        }
        else {
            el = elId
        }
        if (el) {
            el.className = el.className.replace(cls, "")
        }
    }

    // 给定dom对象，宽适配，设置对应的em单位
    docs.initEm = function (el, cw_em) {
        if (cw_em == null) {
            cw_em = 7.5
        }
        var ch = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        var cw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        var ch_em = ch / cw * cw_em
        el.style.fontSize = (cw / cw_em) + 'px';
    }

    // 弱提示
    docs.weakHint = function(desc) {
        var node = document.createElement('div')
        node.className = "cont-weakhint"
        var str = '';
        str += '<span>' + desc + '</span>'
        node.innerHTML = str;
        document.body.appendChild(node);
        carry.initEm(node)

        setTimeout(function() {
            node.remove()
        }, 500 + 400)
    }

} (carry)

carry.slide = (carry.slide || {})
!function (slide) {
    var _gapTime = 1000 //触摸时间低于该值才触发事件
    var _gapPer = 1.2
    var _moveDist = 100 //触摸移动距离大于该值才触发事件
    var _startTp = null
    slide.init = function () {
        document.body.addEventListener('touchstart', function (ev) {
            var touch = ev.touches[0];
            _startTp = {
                sx: touch.clientX,
                sy: touch.clientY,
                t: ev.timeStamp
            }
        }, true);
        document.body.addEventListener('touchend', function (ev) {
            if (ev.timeStamp - _startTp.t > _gapTime) {
                console.log('触摸时间过长')
                _startTp = null
                return
            }

            var touch = ev.changedTouches[0];
            var gapx = touch.clientX - _startTp.sx
            var gapy = touch.clientY - _startTp.sy

            if (Math.abs(gapy) / Math.abs(gapx) > _gapPer) {
                if (gapy > _moveDist) {
                    console.log('down')
                    var ev = new Event('carry-slide-down')
                    document.dispatchEvent(ev)
                }
                else if (gapy < -_moveDist) {
                    console.log('up~~~~~~~~~~~~~~~~~~~')
                    var ev = new Event('carry-slide-up')
                    document.dispatchEvent(ev)
                }
            }
            if (Math.abs(gapx) / Math.abs(gapy) > _gapPer) {
                if (gapx > _moveDist) {
                    console.log('right')
                    var ev = new Event('carry-slide-right')
                    document.dispatchEvent(ev)
                }
                else if (gapx < -_moveDist) {
                    console.log('left')
                    var ev = new Event('carry-slide-left')
                    document.dispatchEvent(ev)
                }
            }

        }, true);
    }

    // 
    slide.addUpEvent = function(func, that) {
        document.addEventListener('carry-slide-up', func.bind(that))
    }
    // 
    slide.addDownEvent = function(func, that) {
        document.addEventListener('carry-slide-down', func.bind(that))
    }
    // 
    slide.addLeftEvent = function(func, that) {
        document.addEventListener('carry-slide-left', func.bind(that))
    }
    // 
    slide.addRightEvent = function(func, that) {
        document.addEventListener('carry-slide-right', func.bind(that))
    }
} (carry.slide)


// 摇一摇事件封装
/**/
carry.shake = {}
!function(shake) {
    var shake_tereshold = 1000;  
    var last_update = 0; 
    var x = y = z = last_x = last_y = last_z = 0;   
    var onDeviceMotion = function(eventData) {
        var curTime = new Date().getTime();  
        // carry.clog((curTime - last_update) + '')
        if ((curTime - last_update) < 100) {  
            return 
        }
        
        var diffTime = curTime - last_update;  
        last_update = curTime;  

        var acceleration = eventData.accelerationIncludingGravity;  // 移动加速度
        x = acceleration.x;   // 西向东
        y = acceleration.y;   // 南向北 
        z = acceleration.z;   // 垂直地面

        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;  

        if (speed > shake_tereshold) {   
            
            var ev = new Event('carry-shake')
            document.dispatchEvent(ev)
        }  
        last_x = x;  
        last_y = y;  
        last_z = z;  
    }
    // 启动检测摇一摇事件
    shake.turnon = function() {
        if (window.DeviceMotionEvent) {  
            window.addEventListener('devicemotion', onDeviceMotion, false);  
        } 
        else {  
            alert('not support devicemotion');  
        }  
    }
    // 关闭检测
    shake.turnoff = function() {
        // if (window.DeviceMotionEvent) {  
        //     window.removeEventListener('devicemotion', onDeviceMotion, false);  
        // } 
    }

    shake.addTriggerEvent = function(func, that) {
        document.addEventListener('carry-shake', func.bind(that))
    }

}(carry.shake)

