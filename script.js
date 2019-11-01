let count;
let x;
function build(){
    count=document.getElementById("count").value;
    let house=document.getElementById("tbody");
    if(count>0) {
        house.innerHTML = "<tr><td><div class='wrapper'><div class='button' onclick='rush(this);'>" + (count) + "</div></div></td><td rowspan='" + count + "'><div id='lift' class='lf'></div></td></tr>";
        let style = document.createElement('style');
        style.innerHTML = '.lf { top:'+((count-1)*200)+'px; }';
        document.getElementsByTagName('head')[0].appendChild(style);
        for (let i = 1; i < count; i++) {
            house.innerHTML += "<tr><td><div class='wrapper'><div class='button' onclick='rush(this);'>" + (count - i) + "</div></div></td></tr>";
        }
    }
 }

 function rush(this_) {
    if(x>new Date().getTime())
        return;
    let time;
    let lift = document.getElementById("lift");
     console.log(Math.abs(count-(parseInt(lift.style.top)/200)-this_.innerHTML));
     if(!lift.style.top) {
         time=this_.innerHTML-1;
     }
     else {
        time = Math.abs(count - (parseInt(lift.style.top) / 200) - this_.innerHTML);
     }
     lift.style.transition=time+"s linear";
     x=new Date().getTime()+time*1000;
     lift.style.top = (count - this_.innerHTML) * 200 + "px";
 }

