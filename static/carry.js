var BIN_VER;
var carry = {}

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

    // 首字母大写
    utils.capitalize = function(value) {
        if (!value) {
            return ''
        }
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
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

/* 预加载相关 */ 
!function(perload) {
    perload.loadImg = function(url, cbFun, that) {
        var img = new Image();
        img.onload = function() {
            cbFun.call(that, true, img.src)
        }
        img.onerror = function() {
            cbFun.call(that, false, img.src)
        };
        img.src = url
    }
    perload.loadImgByAry = function(imgAry, func) {
            var count = 0
            var totalCount = imgAry.length
            var onLoad = function(ev) {
                count++
                func(count, totalCount)
            }
            var onerror = function(ev) {
                console.error("加载图片失败： " + ev.path[0].currentSrc)
            }
            for(var idx = 0; idx < totalCount; idx++) {
                var img = new Image();
                img.onload = onLoad
                img.onerror = onerror
                img.src = "./static/img/" + imgAry[idx] + '?' + BIN_VER;
            }
        }
}(carry)


