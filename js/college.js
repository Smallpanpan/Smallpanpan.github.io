// 自定义错误返回
function demo(){
	try{
		var e=document.getElementById("txt").value;
		if(e==""){
			throw"请输入要查询的内容！";
		}

	}catch(err){
		alert(err);
	}
}
// 网页滑动门效果
function tabs (n) {
      var len=2;
      for(var i=1; i<=len;i++)
        {
          document.getElementById('tab'+i).style.display=(i==n)?'block':'none';
          document.getElementById('ta'+i).className=(i==n)?'aaa':'none'
        }
   }
function demo1(n) {
      var le=5;
      for(var m=1; m<=le;m++)
        {
          document.getElementById('notice'+m).style.display=(m==n)?'block':'none';
          document.getElementById('t'+m).className=(m==n)?'bbb':'none'
        }
   }

function pa(n){
    var le=4;
      for(var a=1; a<=le;a++)
        {
          document.getElementById('page'+a).style.display=(a==n)?'block':'none';
      
        }
   }






    window.onload=function(){
    var container=document.getElementById('container');
    var list=document.getElementById('list');
    var buttons=document.getElementById('buttons').getElementsByTagName("span");//这里漏了后面获取span标签的代码
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var index=1;
    var timer;


    function showButton(){
      for(var i=0;i<buttons.length;i++){
        if(buttons[i].className=='on')
        {
          buttons[i].className='';
          break;
        }
      }
      buttons[index-1].className='on';

    }

    // 自动切换
    function play(){
      timer=setInterval(function(){
        next.onclick();
      },3000);

    }
    function stop(){
      clearInterval(timer);
    }

    // 图片滚动函数
    function animate(offset){
      var newleft=parseInt(list.style.left)+offset;
      list.style.left=newleft+'px';
      if(newleft>-690){
        list.style.left=-3450+'px';
      }
      else if(newleft<-3450){
        list.style.left=-690+'px';
      }
    }
    next.onclick=function(){
      if(index==5){
        index=1;
      }
      else{
        index +=1;
      }
      
      showButton();//漏了调用函数
      animate(-690);
    }
    prev.onclick=function(){
      if(index==1){
        index=5;
      }
      else{
        index -=1;
      }
      showButton();//漏了调用函数
      animate(690);
    }
    container.onmouseover=stop;
    container.onmouseout=play;
    play();


    for(var i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
      if(this.className=='on'){
        return;
      }
      var myIndex=parseInt(this.getAttribute('index'));
      var offset=-690*(myIndex-index);

      animate(offset);
      index=myIndex;
      showButton();
      debugger;
    }
   }


    // 创业窗口图片轮转
    var container1=document.getElementById('container1');
    var list1=document.getElementById('list1');
    var buttons1=document.getElementById('buttons1').getElementsByTagName("span");//这里漏了后面获取span标签的代码
    var prev1=document.getElementById('prev1');
    var next1=document.getElementById('next1');
    var index1=1;
    var timer1;


    function showButton1(){
      for(var i=0;i<buttons1.length;i++){
        if(buttons1[i].className=='on')
        {
          buttons1[i].className='';
          break;
        }
      }
      buttons1[index1-1].className='on';

    }

    // 自动切换
    function play1(){
      timer1=setInterval(function(){
        next1.onclick();
      },3000);

    }
    function stop1(){
      clearInterval(timer1);
    }

    // 图片滚动函数
    function animate1(offset){
      var newleft=parseInt(list1.style.left)+offset;
      list1.style.left=newleft+'px';
      if(newleft>-280){
        list1.style.left=-1400+'px';
      }
      else if(newleft<-1400){
        list1.style.left=-280+'px';
      }
    }
    next1.onclick=function(){
      if(index1==5){
        index1=1;
      }
      else{
        index1 +=1;
      }
      
      showButton1();//漏了调用函数
      animate1(-280);
    }
    prev1.onclick=function(){
      if(index1==1){
        index1=5;
      }
      else{
        index1 -=1;
      }
      showButton1();//漏了调用函数
      animate1(280);
    }
    container1.onmouseover=stop1;
    container1.onmouseout=play1;
    play1();

    for(var i=0;i<buttons1.length;i++){
    buttons1[i].onclick=function(){
      if(this.className=='on1'){
        return;
      }
      var myindex1=parseInt(this.getAttribute('index'));
      var offset=-280*(myindex1-index1);

      animate1(offset);
      index1=myindex1;
      showButton1();
      debugger;
    }
   }
   
  }