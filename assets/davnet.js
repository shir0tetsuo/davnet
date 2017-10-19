function Rand(data) {
  return data[Math.floor(Math.random() * data.length)]
}
const briefIntroduction = [
  'Some dandy links.',
  'Insert fancy stuff here.',
  'Do these even work?',
  'Here\'s something for that boredom.',
  'A simple site with simple things.'
]

function searchFB(Mode) {
  if (Mode === "number") {
    let err = "Error: Number not recognized.<br>Number must be 10 digits in length."
    var num = prompt("Phone Number", "16135555555")
    if (num >= 1000000000) {
      window.location.href = `https://www.facebook.com/search/people/?q=%2B${num}`
    } else {
      errorLine.innerHTML = err
    }
  }
  if (Mode === "email") {
    var eml = prompt("Email Address", "someone@microsoft.com")
    if (eml !== undefined && eml !== null) {
      window.location.href = `https://www.facebook.com/search/people/?q=${eml}`
    } else {
      errorLine.innerHTML = "Error: Must not be blank"
    }
  }
}
function trackSatellite() {
  var sat = prompt("Satellite ID Number\n(Default: ISS)", "25544")
  if (sat > 1) {
    document.getElementById("SATDIV").style.display = "block"
    document.getElementById("satid").value = sat;
      trackOn()
  } else {
    errorLine.innerHTML = "Cancelled"
  }
}
function Magic() {
  var magicNumber = prompt("Magic Number");
  if (magicNumber == 4224) {
    document.getElementById("4224").style.display = "block"
    errorLine.innerHTML = "<b>Oh, wow, uh, how'd those get there?</b>"
  } else {
    errorLine.innerHTML = "Nope. I guess your skillz arent 133t."
  }
}
function closeSat() {
  document.getElementById("SATDIV").style.display = "none"
}

function trackOn() {
         var m = Math.random();
         var x = document.getElementById("satid").value;
         document.getElementById("type1").src = "http://www2.heavens-above.com/orbitdisplay.aspx?mat="+m+"&icon=iss&width=300&height=300&mode=N&satid="+x;
         document.getElementById("type2").src = "http://www2.heavens-above.com/orbitdisplay.aspx?mat="+m+"&icon=default&width=300&height=300&mode=A&satid="+x;
         document.getElementById("type3").src = "http://www2.heavens-above.com/orbitdisplay.aspx?mat="+m+"&icon=iss&width=600&height=300&mode=M&satid="+x;
         setTimeout(() => {
           trackOn()
         }, 120000);
}
function loadDavnet() {
  document.getElementById("linksFill").innerHTML = Rand(briefIntroduction)
}
