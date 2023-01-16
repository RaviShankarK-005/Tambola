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
			var aud = "en_num_"+String(ran)+".mp3";
			var audio = new Audio(aud);
			audio.play();
			s=s+String(ran)+" , ";
			document.querySelector("#seq").innerText = s;
			document.querySelector("#tot").innerText = n;
			break;
		}
		else{
			if(l.length==90){
				document.querySelector("#num").innerText = "END OF GAME";
				var aud0 = "eog.mp3";
				var audio = new Audio(aud0);
				audio.play();
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
