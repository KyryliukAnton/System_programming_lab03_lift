let count,x,timerId,k,n,p;
function build(){
    count=document.getElementById("count").value;
    let house=document.getElementById("tbody");
    if(count>0) {
        document.getElementById("wrapper-lift").style.display="flex";
        house.innerHTML = "<tr><td><div class='wrapper'><div class='button' onclick='rush(this);'>" + (count) + "</div></div></td><td rowspan='" + count + "'><div id='lift' class='lf'></div></td></tr>";
        let style = document.createElement('style');
        style.innerHTML = '.lf { top:'+((count-1)*200)+'px; }';
        document.getElementsByTagName('head')[0].appendChild(style);
        for (let i = 1; i < count; i++) {
            house.innerHTML += "<tr><td><div class='wrapper'><div class='button' onclick='rush(this);'>" + (count - i) + "</div></div></td></tr>";
        }
        //Кнопки
        let panel=document.getElementById("panel");
        panel.innerHTML= "";
        for (let i = 1; i <= count; i++) {
            panel.innerHTML += "<div class='button' onclick='rush(this);'>" + (i) + "</div>";
        }
        document.getElementById("tablo").innerHTML = "<div id='info-n'><i class='fas' id='symb'></i><span id='nomer'></span></div><span id='n'>1</span>/"+count;
    }
 }

 function rush(this_) {
     let panel = document.getElementById("panel");

     if (x > new Date().getTime())
         return;
     let time;
     let lift = document.getElementById("lift");
     if (!lift.style.top) {
         time = this_.innerHTML - 1;
         p = 1;
     } else {
         time = Math.abs(count - (parseInt(lift.style.top) / 200) - this_.innerHTML);
         p = count - (parseInt(lift.style.top) / 200);
     }
     lift.style.transition = time + "s linear";
     x = new Date().getTime() + time * 1000;
     lift.style.top = (count - this_.innerHTML) * 200 + "px";
     n = this_.innerHTML;
     if (n > p) {
         k = 1;
         document.getElementById('symb').classList.add("fa-angle-double-up");
     } else if (n < p) {
         document.getElementById('symb').classList.add("fa-angle-double-down");
         k = -1;
     }
     if (n != p) {
         document.getElementById('nomer').innerHTML = n;
         timerId = setTimeout(Timeout, 1000);
     }
 }

 function Timeout() {
     p+=k;
     document.getElementById("n").innerHTML = p;

     if(p==n){
         document.getElementById('symb').classList.remove("fa-angle-double-up");
         document.getElementById('symb').classList.remove("fa-angle-double-down");
         document.getElementById('nomer').innerHTML='';
         clearInterval(timerId);
     }
     else
        timerId = setTimeout(Timeout, 1000);
 }
