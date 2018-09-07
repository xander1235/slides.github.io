var list=["title","intro","abstract","dataset","segment","brh","gbtuom","otsu","mo","ffl","wac","dio","dir","2pt","p1","km","aug","p2","f-m","adv","ada","impl","cs","encode","ocs"];
var list1=["Title","Introduction","Abstract","Dataset","Segmentation","Blue Ratio Histogram","Global Binary Thresholding using Otsu's Method","Otsu's Method","Morphological Operations","Flood Filling and Labelling","Ways to address class Imbalance problem","Difficulties in oversampling","Difficulties in random undersampling","Two Phase Training","Phase 1","kmeans","Augmentation","Phase 2","F-measure","Advantages","Adaboost","Implementation","Cost Sensitive","One class classification (Auto encoders)","One class classification"];
var pics = ["2.jpeg","3.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg","2.jpeg"];
//ar index=0;
var x=0;
var data;
var index;
index=0;
function change(event){
  var w = event.keyCode || event.which;
  var y;
  console.log("outside "+index);
  if(w==37 || w==38){
    index = Number(index) - Number(1);
    console.log("inside left "+index);
    if(index < 0){
      index=0;
    }
    y = document.getElementById("ifr");
    y.src = list[index]+'.html';
  }
  if(w==39 || w==40){
    index= Number(index) + Number(1);
    console.log(index);
    if(index>=list.length){
      index=(list.length)-1;
    }
    y = document.getElementById("ifr");
    y.src = list[index]+'.html';
  }
}

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
  //alert(data);

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
      //alert(z.src);
      z.onmouseover =function(event){
          console.log("hi");
          var yz = event.target.src;
          alert(yz);
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

function get(){
  var xyz = document.getElementById('inde');
  for(var i=0;i<list.length;i++){
    var l = document.createElement('p');
    var t=document.createTextNode(i+'.'+list1[i]);
    l.appendChild(t);
    l.style.color="white";
    l.id= i;
    //l.style.line-height="1px";
    l.onclick = function(event){
      var k=event.target.id;
      var zy = document.getElementById("ifr");
      zy.src = list[k]+'.html';
      index=Number(k);

    };
    xyz.appendChild(l);
  }

}

/*function change(event){
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
}*/

/*function view(n){
  x=x+n;
  var y= document.getElementById(list[x]);
  y.style.display="block";
}*/
//var list=["title.html","intro.html"];
