// 倒计时抢购模块 开始
// 获取元素
var count = document.querySelector('.countime')
var hour = document.querySelector('.hourtime')
var min = document.querySelector('.mintime')
var sec = document.querySelector('.sectime')
    //时间对象  未来时间-现在的时间

var endTime = new Date('2022/05/19 00:00:00'); // s设定未来时间
countTime(timer); //先调用一次这个函数，防止第一次刷新页面有空白
var timer = setInterval(countTime, 1000)

function countTime() {
    var nowTime = new Date();
    var lastTime = parseInt((endTime - nowTime) / 1000); //得到的是毫秒

    if (timer >= 0) {
        var hours = parseInt(lastTime / 60 / 60 % 24) //小时
        var mins = parseInt(lastTime / 60 % 60) //分钟
        var secs = parseInt(lastTime % 60) // 秒
        hour.innerHTML = hours;
        min.innerHTML = mins;
        sec.innerHTML = secs;
    } else {
        clearTimeout(timer)
    }
}
// 倒计时抢购模块 结束
// 轮播图模块开始
var items = document.getElementsByClassName('item');
var points = document.getElementsByClassName('point'); //获取圆点
var goPreBtn = document.querySelector('.btnLeft');
var goNextBtn = document.querySelector('.btnRight');
var index = 0; //声明一个变量 表示第几张图片在展示=== 它就有active

var clearActive = function() {
    for (var i = 0; i < items.length; i++) {

        items[i].className = 'item' // 排他思想
    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = 'point'
    }
}
var goIndex = function() { //表示第index张有active这个属性
    clearActive(); // 先去除，再重新赋值
    items[index].className = 'item active'; //图片
    points[index].className = 'point active'; //圆点
}


var goNext = function() { //去往下一张
        //index超过总数量时让index=0
        if (index < items.length - 1) {
            index++;
        } else {
            index = 0;
        }
        goIndex()
    }
    //去往上一张
var goPre = function() {
    if (index == 0) {
        index = items.length - 1;
    } else {
        index--
    }
    goIndex();
}
goNextBtn.addEventListener('click', function() {
    goNext(); //点击下一张按钮时进入下一张
})
goPreBtn.addEventListener('click', function() {
    goPre(); //点击上一张按钮时进入上一张
})

//圆点的设置 当它在第几个圆点就显示第几张图片,问题：不知道每个点对应的index是多少
//给每个点添加点击事件，用for循环
for (var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function() {
        //获取元素自定义的属性 element getAttribute
        index = this.getAttribute('data'); //将获得的值赋值给index
        goIndex();
        time = 0; //每次点击小圆点的时候，time都从0开始
    })
}
//添加定时器 每2000ms执行一次
var time = 0;
var timer = setInterval(function() {
    time++; // time每100ms循环30次 ===3000ms执行一次
    if (time == 30) {
        goNext();
        time = 0
    }
}, 100)

// 鼠标经过/离开 按钮显示和隐藏
goPreBtn.addEventListener('mouseover', function() {
    goPreBtn.style.background = 'rgba(105, 101, 101, .6)';
})
goPreBtn.addEventListener('mouseout', function() {
    goPreBtn.style.background = '';
})
goNextBtn.addEventListener('mouseover', function() {
    goNextBtn.style.background = 'rgba(105, 101, 101, .6)';
})
goNextBtn.addEventListener('mouseout', function() {
    goNextBtn.style.background = '';
})

// 轮播图模块结束

// 返回顶部模块开始 
var roofTop = document.querySelector('.roof');
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        roofTop.style.display = "block";
    } else {
        roofTop.style.display = "none";
    }
}
// 点击按钮，返回顶部
roofTop.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
    // 返回顶部模块结束