/* eslint-disable */
require('./progresshud.css');
const whir = window.whir || {};
    whir.loading =
    {
      add: function (title, opacity) {
        opacity = opacity == undefined ? 0.4 : opacity;  
        var arr = this.getPageSize();  
        var width = parseInt(arr[2]);  
        var height = parseInt(arr[3]);  
  
        //背景遮罩  
        var mask = document.createElement("div");  
        mask.id = 'mask';  
        mask.style.position = 'fixed';  
        mask.style.left = '0';  
        mask.style.top = '0';  
        mask.style.width = '100%';  
        mask.style.height = parseInt(arr[1]) + "px";  
        mask.style.background = "rgba(100,100,100,.8);";  
        mask.style.filter = "alpha(opacity=" + opacity * 100 + ")";  
        mask.style.zIndex = "10000";  
        mask.addEventListener('touchstart', function (e) { e.preventDefault(); }, false);   //触摸事件  
        mask.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);    //滑动事件  
        mask.addEventListener('touchend', function (e) { e.preventDefault(); }, false);         //离开元素事件  
        document.body.appendChild(mask);  
  
        //loading 
        const follow = document.createElement("div"); 
        var span='',style;
        var css = [{
            opacity : 1,
            rotate : 0
        },{
            opacity : 0.4,
            rotate : 30
        },{
            opacity : 0.4,
            rotate : 60
        },{
            opacity : 0.4,
            rotate : 90
        },{
            opacity : 0.4,
            rotate : 120
        },{
            opacity : 0.4,
            rotate : 150
        },{
            opacity : 0.4,
            rotate : 180
        },{
            opacity : 0.5,
            rotate : 210
        },{
            opacity : 0.6,
            rotate : 240
        },{
            opacity : 0.7,
            rotate : 270
        },{
            opacity : 0.8,
            rotate : 300
        },{
            opacity : 0.9,
            rotate : 330
        },];
        for (var i=0; i<12; i++) {
            style = "background: rgba(255, 255, 255, 1);opacity: "+css[i].opacity+";";
            style += "-webkit-transform:rotateZ("+css[i].rotate+"deg);transform:rotateZ("+css[i].rotate+"deg);";
            span += "<span style='"+style+"'></span>";
        }
       var html = "<div class='butterfly-loader-loading'>";
        html += span;
        html += "</div>";
        follow.className = "butterfly-loader-box";
        follow.style.background = "rgba(0, 0, 0, .75)";
        follow.innerHTML=html;
        // loading.appendChild(follow);
        mask.appendChild(follow);
        document.body.appendChild(mask);  
    },  
    remove: function () {  
        var element = document.getElementById("mask");  
        element.parentNode.removeChild(element);  
    },  
    getPageSize: function () {  
        var xScroll, yScroll;  
        if (window.innerHeight && window.scrollMaxY) {  
            xScroll = window.innerWidth + window.scrollMaxX;  
            yScroll = window.innerHeight + window.scrollMaxY;  
        } else {  
            if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac      
                xScroll = document.body.scrollWidth;  
                yScroll = document.body.scrollHeight;  
            } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari      
                xScroll = document.body.offsetWidth;  
                yScroll = document.body.offsetHeight;  
            }  
        }  
        var windowWidth = 0;  
        var windowHeight = 0;  
        var pageHeight = 0;  
        var pageWidth = 0;  
  
        if (self.innerHeight) { // all except Explorer      
            if (document.documentElement.clientWidth) {  
                windowWidth = document.documentElement.clientWidth;  
            } else {  
                windowWidth = self.innerWidth;  
            }  
            windowHeight = self.innerHeight;  
        } else {  
            if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode      
                windowWidth = document.documentElement.clientWidth;  
                windowHeight = document.documentElement.clientHeight;  
            } else {  
                if (document.body) { // other Explorers      
                    windowWidth = document.body.clientWidth;  
                    windowHeight = document.body.clientHeight;  
                }  
            }  
        }  
        // for small pages with total height less then height of the viewport      
  
        if (yScroll < windowHeight) {  
            pageHeight = windowHeight;  
        } else {  
            pageHeight = yScroll;  
        }  
        // for small pages with total width less then width of the viewport      
        if (xScroll < windowWidth) {  
            pageWidth = xScroll;  
        } else {  
            pageWidth = windowWidth;  
        }  
        var arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);  
        return arrayPageSize;  
    }  
};  

export default {
  show() {
      whir.loading.add();
  },
  hide() {
      whir.loading.remove();  
  }
};
