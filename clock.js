let userName = prompt("Lütfen isminizi giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML= `userName`
myName.innerHTML= `${userName}`

function showTime() {
    const today = new Date();
    let hSaat = today.getHours();
    let mDakika = today.getMinutes();
    let sSaniye = today.getSeconds();
    mDakika = checkTime(mDakika);
    sSaniye = checkTime(sSaniye);
    document.querySelector("#myClock").innerHTML =  hSaat + ":" + mDakika + ":" + sSaniye;
    setTimeout(showTime, 1000);
    
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }
  showTime()