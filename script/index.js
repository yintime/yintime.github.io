//bgc(obj,color)
function bgc(obj,color) {
	obj.style.backgroundColor = color;
}
//四个状态封装
function lab1_on() {
	bgc(lab1,"#fc0");
	bgc(lab2,"#fff");
	bgc(lab3,"#fff");
	bgc(lab4,"#fff");
	image.style.backgroundImage="url(./img/1.jpg)";
	flag=0;
}
function lab2_on() {
	bgc(lab1,"#fff");
	bgc(lab2,"#fc0");
	bgc(lab3,"#fff");
	bgc(lab4,"#fff");
	image.style.backgroundImage="url(./img/5.jpg)";
	flag=1;
}
function lab3_on() {
	bgc(lab1,"#fff");
	bgc(lab2,"#fff");
	bgc(lab3,"#fc0");
	bgc(lab4,"#fff");
	image.style.backgroundImage="url(./img/3.jpg)";
	flag=2;
}
function lab4_on() {
	bgc(lab1,"#fff");
	bgc(lab2,"#fff");
	bgc(lab3,"#fff");
	bgc(lab4,"#fc0");
	image.style.backgroundImage="url(./img/4.jpg)";
	flag=3;
}

//播放下一个标签
function nextlab() {
	switch(flag){
		case 0:lab2_on(); break;
		case 1:lab3_on(); break;
		case 2:lab4_on(); break;
		case 3:lab1_on(); break;
		default: alert("如果你看到这个消息，说明js脚本执行错误了。")
	} 
}

//全局变量
var lab1 = document.getElementById("lab1");
var lab2 = document.getElementById("lab2");
var lab3 = document.getElementById("lab3");
var lab4 = document.getElementById("lab4");
var image = document.getElementById("picbox");
var labs=[lab1,lab2,lab3,lab4];
var flag=0;
var all=document.getElementById("all");
var timer = null;

//事件绑定
lab1.onclick=lab1_on;
lab2.onclick=lab2_on;
lab3.onclick=lab3_on;
lab4.onclick=lab4_on;
//mouseover停止轮播 离开继续；
all.onmouseover=function(){
	clearInterval(timer);
}
all.onmouseout=function(){
	timer=setInterval("nextlab()",1000);
}



//初始化 标签1背景 图1生成
bgc(lab1,"#fc0");
image.style.backgroundImage="url(./img/1.jpg)";
flag=0;
timer=setInterval("nextlab()",1000);
