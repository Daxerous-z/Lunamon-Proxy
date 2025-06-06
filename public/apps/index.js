function loadDiscord() {
  window.location.replace('https://lumanom.v10-13.repl.co/service/hvtrs8%2F-dksaopd%2Ccmm-');
}

function loadSteam() {
  window.location.replace('https://lumanom.v10-13.repl.co/service/hvtrs8%2F-svope%2Csvecmrouepef.aoo%2F');
}

function loadReddit() {
  window.location.replace('https://lumanom.v10-13.repl.co/service/hvtrs8%2F-wuw%2Crgdfiv.aoo%2F');
}

function loadTwitter() {
  window.location.replace('https://lumanom.v10-13.repl.co/service/hvtrs8%2F-tuivtgr%2Ccmm-');
}

function loadYoutube() {
  window.location.replace('https://lumanom.v10-13.repl.co/service/hvtrs8%2F-wuw%2Cymuvu%60e%2Ccmm-');
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
}
