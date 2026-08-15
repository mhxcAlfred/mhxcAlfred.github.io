(function() {
  /** 计时起始时间，自行修改 **/
  var start = new Date("2019-11-15 11:15:00");

  function update() {
    var now = new Date();
    now.setTime(now.getTime() + 250);
    var timeDiff = now - start;
    
    var seconds = Math.floor((timeDiff / 1000) % 60);
    var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    var hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    
    document.getElementById("timeDate").innerHTML = "本站已悄然运行 " + days + " 天 ";
    document.getElementById("times").innerHTML = hours + " 小时 " + minutes + " 分 " + seconds + " 秒";
  }
  
  update();
  setInterval(update, 1000);
})();
