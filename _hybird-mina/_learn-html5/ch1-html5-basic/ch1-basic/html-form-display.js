var scaleSlider = document.getElementById('scaleSlider'),
    scaleOutput = document.getElementById('scaleOutput');
var scale = 1;

scaleSlider.onchange = function(e) {    //注册年纪更换事件
    scale = e.target.value;      //由滑动杆位置获取scale的值 
    if(scale==0)                                 
        scaleOutput.innerText = "大一";
    else if(scale==1)
        scaleOutput.innerText = "大二";
    else if(scale==2)
        scaleOutput.innerText = "大三";
    else if(scale==3)
        scaleOutput.innerText =  "大四";
                                 //一系列变量的初始化操作
}