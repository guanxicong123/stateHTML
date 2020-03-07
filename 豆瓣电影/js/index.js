window.onload = function (){
    // 获得元素
    var main_right = document.getElementById('main-right')
    var attention = document.getElementById('attention')
    var ic_weixin = document.getElementsByClassName('ic-weixin')[0]
    var ewm = attention.getElementsByClassName('ewm')[0]

    //给ic-weiixn 微信图标绑定一个鼠标进入onmouseenter事件
    ic_weixin.onmouseenter = function (){
        ewm.style.display = 'block'
    }
    //当鼠标移开后,变回none
    ic_weixin.onmouseout = function (){
        ewm.style.display = 'none'
    }

    // 正在热映的轮播图
    var icon_r = this.document.getElementsByClassName('icon-r')[0]
    var icon_l = this.document.getElementsByClassName('icon-l')[0]
    var now_main = this.document.getElementsByClassName('now-main')[0]
    var ul = now_main.getElementsByTagName('ul')[0]


    function banner_now_r(obj1,obj2){
        obj1.onclick = function (){
            // var time = setInterval(function (){
                obj2.style.marginLeft =  -700 + 'px'
            // },1000)
            page_index++
            page.innerText = page_index + ' /  8'
        }
    }
    function banner_now_l(obj1,obj2){
        obj1.onclick = function (){
            // var time = setInterval(function (){
                obj2.style.marginLeft =  0 + 'px'
            // },1000)
            page_index--
            page.innerText = page_index + ' /  8'

        }
    }
    banner_now_r(icon_r,ul)
    banner_now_l(icon_l,ul)
    // clearInterval(time)

    //拿到页数的标签
    var page_index = 1
    var page = this.document.getElementsByClassName('page')[0]
    

    //最热门电影
    //head的active

    var movie = this.document.getElementById('movie')
    var series = this.document.getElementById('series')
    var movie_head = movie.getElementsByClassName('movie-head')[0]
    var series_head = series.getElementsByClassName('movie-head')[0]
    var lis_movie_head = movie_head.querySelectorAll('li')
    var lis_series_head = series_head.querySelectorAll('li')
    
    //加类名的函数
    function active(obj1){
        obj1.onmouseover = function (){
            obj1.classList.add('active')
        }
        obj1.onmouseout = function (){
            obj1.classList.remove('active')
        }
    }
    for(var i= 0 ; i < lis_movie_head.length; i++){
        var a = lis_movie_head[i].children[0]
        active(a)
    }
   //热门电视剧
   //head的active
   for(var i= 0 ; i < lis_series_head.length; i++){
        var b = lis_series_head[i].children[0]
        // console.log(b)

        active(b)
    }
}