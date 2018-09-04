var list=["intro","encode","ada"];
var pics = ["2.jpeg","3.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg"];
var index=0;
var x=0;
var data;
/*function view(n){
  x=x+n;
  var y= document.getElementById(list[x]);
  y.style.display="block";
}*/

function upload(){
  var y = document.getElementById("left-crsl");
  y.style.display="block";
  var div = document.getElementById("left-crsl");
  for(var i in pics){
    var z = document.createElement("img");
    z.src=pics[i];
    z.draggable="true";
    z.ondragstart="drag(event)";
    div.appendChild(z);
  }
}

function change(event){
  var w = event.keyCode || event.which;
  var y;
  if(w==37 || w==38){
    index = index-1;
    if(index<0){
      index=0;
    }
    for(var j=0;j<list.length;j++){
      y = document.getElementById(list[j]);
      y.style.display="None";
    }
    y = document.getElementById(list[index]);
    y.style.display="block";
  }
  if(w==39 || w==40){
    index=index+1;
    if(index>=list.length){
      index=(list.length)-1;
    }
    for(var j=0;j<list.length;j++){
      y = document.getElementById(list[j]);
      y.style.display="None";
    }
    y = document.getElementById(list[index]);
    y.style.display="block";
  }
}


//drag and drop
function allowDrop(ev){
  ev.preventDefault();
}

function drag(ev){
  console.log("dragiing");
  var x= ev.target.src;
  ev.dataTransfer.setData("text",x);

}

function drop(ev){
  ev.preventDefault();
  data = ev.dataTransfer.getData("text");
  data = data.substring(17, data.length);

  ev.target.src=data;
}

//runs
function runs(){
  var di = document.getElementById("right-crsl");
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function()
  {
    if(this.readyState == 4 && this.status == 200)
    {
      var z = document.createElement("img");
      z.src=this.responseText;
      z.onmouseover =function(event){
          console.log("hi");
          var yz = event.target.src;
          //alert(yz);
          var yx=document.getElementById("pop");
          yx.style.display="block";
          var yy=document.getElementById("pic");
          yy.src=yz;
      };
      z.onmouseout=function () {
        var xx=document.getElementById("pop");
        xx.style.display="None";
        };
      di.appendChild(z);
    }
  }
  xmlHttp.open("POST","blackandwhite.php?image=" + data,true);
  xmlHttp.send();
}
