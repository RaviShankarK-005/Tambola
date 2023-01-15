var l=[];
var s="";
var n;
nextNum=function(){
  	while(1){
		var ran = Math.floor(Math.random() * 90)+1;
		if(l.indexOf(ran)==-1){
			l.push(ran);
			n=l.length;
			document.querySelector("#num").innerText = ran;
			s=s+String(ran)+" , ";
			document.querySelector("#seq").innerText = s;
			document.querySelector("#tot").innerText = n;
			break;
		}
		else{
			if(l.length==90){
				document.querySelector("#num").innerText = "END OF GAME";
				break;
			}
		}
	}
 }
document.querySelector("#nxt").addEventListener("click",function(){
	nextNum();
})
document.addEventListener("keypress",function(e){
	if (e.key === 'h') {
      nextNum();
    }
})