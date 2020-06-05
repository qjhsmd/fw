if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {           
    var abc = document.documentElement.clientWidth        
    var bl = abc / 640 //设计稿的宽度        
    var fontSize = 100 * bl        
    document.documentElement.style.fontSize = fontSize + "px"    
} else {         
    var whdef = 100 / 1920 // 表示1920的设计图,使用100PX的默认值        
    var wH = window.innerHeight // 当前窗口的高度        
    var wW = window.innerWidth // 当前窗口的宽度        
    var rem        
    if (wW <= 1024) {            
        rem = 1024 * whdef       
    } else {            
        rem = wW * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值        
    }        
    // $('html').css('font-size', rem + "px");
    document.querySelector('html').style.fontSize = rem + 'px'       
    // $(window).resize(function() {  // 绑定到窗口的这个事件中            
    window.onresize=function(){                
        var whdef = 100 / 1920 // 表示1920的设计图,使用100PX的默认值                
        var wH = window.innerHeight // 当前窗口的高度                
        var wW = window.innerWidth // 当前窗口的宽度                
        if (wW <= 1024) {                    
            rem = 1024 * whdef                
        } else {                    
            rem = wW * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值                
        }                
       
        document.querySelector('html').style.fontSize = rem + 'px'               
        
    }
}