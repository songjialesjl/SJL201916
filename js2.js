/*getml */
var getml=document.getElementById("getml");
var getli=getml.getElementsByTagName("li");

for(var i=0;i<getli.length;i++){
	getli[i].onclick=function(){
		//console.log(this.innerHTML);
		var set1=document.getElementById("set1");
		var p=document.createElement("p");
		var text=document.createTextNode("“"+this.innerHTML+"”");
		p.appendChild(text);
		console.log(p);
		p.setAttribute("class","font_6");
		set1.replaceChild(p,set1.lastElementChild);
		this.parentNode.children[0].setAttribute("class","none");
		this.parentNode.children[1].setAttribute("class","none");
		this.setAttribute("class","borderr");
		
	}

}

var h=document.getElementById("h")   ;
var first=document.getElementById("a1");
var last=document.getElementById("a2");
first.onmouseover=function(){
	h.setAttribute("src","任务所需小图/img/pp0.jpeg");
}
last.onmouseover=function(){
	h.setAttribute("src","任务所需小图/img/pp1.jpeg");
}


var low=document.getElementById("low");
var high=document.getElementById("high");
var num=document.getElementById("num");

		high.onclick=function (){
			if(parseInt(num.value)==5){       		
	        		high.style.cursor='not-allowed';
	        		low.style.cursor='pointer';
	        	}
	        	else{
	        		num.setAttribute("value", parseInt(num.value)+1);       		
					console.log(num);
	        		high.style.cursor='pointer';
	        	}
			
		}
		low.onclick=function (){
			if(parseInt(num.value)==1){       		
	        		low.style.cursor='not-allowed';
	        		high.style.cursor='pointer';
	        	}
	        	else{
	        		num.setAttribute("value",parseInt(num.value)-1);       		
					console.log(num);
	        		low.style.cursor='pointer';
	        	}
		}

var v =document.getElementById("v");
var tag1=document.getElementById("tag1");
var tag2=document.getElementById("tag2");
var tan=document.getElementById("tan");
v.onclick=function(){
	tan.setAttribute("style","display:block;");
}
tag2.onclick=function(){
	tan.setAttribute("style","display:none;");
	//window.onload;
}
tag1.onclick=function(){
	tan.setAttribute("style","display:none;");
	//window.onload;
}