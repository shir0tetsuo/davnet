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

function fetchCamera() {
  var m = Math.random();
  var x = document.getElementById("cameraNumber").value;
  var ELINE2 = document.getElementById("ELINE2");
  if (x <= 0) {
    ELINE2.innerHTML = `${x} is a bad number...`
  } else if (x >= 244 && x <= 2000) {
    ELINE2.innerHTML = `Try going to 243 or 2001...`
  } else if (x == 2025) {
    ELINE2.innerHTML = `(STO) Hwy 416 NB Ramp to 417 East`
  } else if (x == 2005) {
    ELINE2.innerHTML = `(STO) Hwy 417 between Holland Ave and Parkdale Ave`
  } else if (x == 2029) {
    ELINE2.innerHTML = `(STO) Hwy 417 East of Eagleson Rd`
  } else if (x == 2026) {
    ELINE2.innerHTML = `(STO) Hwy 417 East of Moodie Dr`
  } else if (x == 2016) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Aviation Parkway`
  } else if (x == 2037) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Bayswater Ave`
  } else if (x == 2019) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Belfast Rd`
  } else if (x == 2023) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Bronson Ave`
  } else if (x == 2006) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Carling Ave`
  } else if (x == 2034) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Carp Rd`
  } else if (x == 2007) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Churchill Ave`
  } else if (x == 2030) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Eagleson Rd`
  } else if (x == 2001) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Hwy 174`
  } else if (x == 2035) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Hwy 7`
  } else if (x == 2015) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Innes Rd`
  } else if (x == 2031) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Kanata Ave`
  } else if (x == 2021) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Lees Ave`
  } else if (x == 2027) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Moodie Dr`
  } else if (x == 2022) {
    ELINE2.innerHTML = `(STO) Hwy 417 near O'Connor St`
  } else if (x == 2033) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Palladium Dr`
  } else if (x == 2009) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Pinecrest Rd`
  } else if (x == 2018) {
    ELINE2.innerHTML = `(STO) Hwy 417 near St Laurent Blvd`
  } else if (x == 2032) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Terry Fox Dr`
  } else if (x == 2020) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Vanier Parkway`
  } else if (x == 2014) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Walkley Rd`
  } else if (x == 2008) {
    ELINE2.innerHTML = `(STO) Hwy 417 near Woodroffe Ave`
  } else if (x == 2024) {
    ELINE2.innerHTML = `(STO) Hwy 417 West of Holly Acres Rd`
  } else if (x == 2028) {
    ELINE2.innerHTML = `(STO) Hwy 417 West of Moodie Dr`
  } else if (x == 2011) {
    ELINE2.innerHTML = `(STO) South of Hwy 417 between Hwy 416 and Richmond Rd`
  } else if (x == 176) {
    ELINE2.innerHTML = `Airport Parkway &amp; Uplands`
  } else if (x == 43) {
    ELINE2.innerHTML = `Albert &amp; Booth`
  } else if (x == 41) {
    ELINE2.innerHTML = `Albert &amp; Lyon`
  } else if (x == 42) {
    ELINE2.innerHTML = `Albert &amp; O'Connor`
  } else if (x == 78) {
    ELINE2.innerHTML = `Albert &amp; Preston`
  } else if (x == 222) {
    ELINE2.innerHTML = `Albion &amp; Leitrim`
  } else if (x == 129) {
    ELINE2.innerHTML = `Albion &amp; Lester`
  } else if (x == 55) {
    ELINE2.innerHTML = `Alexander-Tache/Laurier &amp; Eddy`
  } else if (x == 170) {
    ELINE2.innerHTML = `Algonquin &amp; Woodroffe`
  } else if (x == 194) {
    ELINE2.innerHTML = `Alta Vista &amp; Heron$`
  } else if (x == 221) {
    ELINE2.innerHTML = `Alta Vista &amp; Industrial`
  } else if (x == 21) {
    ELINE2.innerHTML = `Alta Vista &amp; Smyth`
  } else if (x == 116) {
    ELINE2.innerHTML = `Aviation Parkway &amp; Ogilvie`
  } else if (x == 27) {
    ELINE2.innerHTML = `Bank &amp; Aylmer (Bank St. Bridge)`
  } else if (x == 104) {
    ELINE2.innerHTML = `Bank &amp; Catherine`
  } else if (x == 151) {
    ELINE2.innerHTML = `Bank &amp; Chamberlain`
  } else if (x == 189) {
    ELINE2.innerHTML = `Bank &amp; Fifth`
  } else if (x == 144) {
    ELINE2.innerHTML = `Bank &amp; Findlay Creek`
  } else if (x == 152) {
    ELINE2.innerHTML = `Bank &amp; First`
  } else if (x == 103) {
    ELINE2.innerHTML = `Bank &amp; Gladstone`
  } else if (x == 81) {
    ELINE2.innerHTML = `Bank &amp; Heron`
  } else if (x == 16) {
    ELINE2.innerHTML = `Bank &amp; Hunt Club`
  } else if (x == 123) {
    ELINE2.innerHTML = `Bank &amp; Laurier`
  } else if (x == 48) {
    ELINE2.innerHTML = `Bank &amp; Riverside`
  } else if (x == 64) {
    ELINE2.innerHTML = `Bank &amp; Somerset`
  } else if (x == 223) {
    ELINE2.innerHTML = `Bank &amp; Sunnyside`
  } else if (x == 5) {
    ELINE2.innerHTML = `Bank &amp; Walkley`
  } else if (x == 39) {
    ELINE2.innerHTML = `Bank &amp; Wellington`
  } else if (x == 99) {
    ELINE2.innerHTML = `Bankfield &amp; Prince of Wales`
  } else if (x == 59) {
    ELINE2.innerHTML = `Baseline &amp; Clyde`
  } else if (x == 225) {
    ELINE2.innerHTML = `Baseline &amp; Fisher`
  } else if (x == 1) {
    ELINE2.innerHTML = `Baseline &amp; Greenbank`
  } else if (x == 52) {
    ELINE2.innerHTML = `Baseline &amp; Merivale`
  } else if (x == 212) {
    ELINE2.innerHTML = `Baseline &amp; Richmond`
  } else if (x == 2) {
    ELINE2.innerHTML = `Baseline &amp; Woodroffe`
  } else if (x == 24) {
    ELINE2.innerHTML = `Baseline/Heron &amp; Prince of Wales`
  } else if (x == 157) {
    ELINE2.innerHTML = `Bay &amp; Laurier`
  } else if (x == 112) {
    ELINE2.innerHTML = `Bay &amp; Slater`
  } else if (x == 180) {
    ELINE2.innerHTML = `Bay &amp; Wellington`
  } else if (x == 132) {
    ELINE2.innerHTML = `Bayshore &amp; Carling`
  } else if (x == 60) {
    ELINE2.innerHTML = `Bayshore &amp; Richmond`
  } else if (x == 242) {
    ELINE2.innerHTML = `Bayview &amp; Scott`
  } else if (x == 100) {
    ELINE2.innerHTML = `Beechwood/St. Patrick &amp; Vanier`
  } else if (x == 8) {
    ELINE2.innerHTML = `Belfast &amp; St. Laurent`
  } else if (x == 118) {
    ELINE2.innerHTML = `Belfast &amp; Trainyards`
  } else if (x == 184) {
    ELINE2.innerHTML = `Besserer &amp; Waller`
  } else if (x == 6) {
    ELINE2.innerHTML = `Blair &amp; Innes`
  } else if (x == 73) {
    ELINE2.innerHTML = `Blair &amp; Ogilvie`
  } else if (x == 49) {
    ELINE2.innerHTML = `Booth &amp; Sir John A. Macdonald Parkway`
  } else if (x == 97) {
    ELINE2.innerHTML = `Booth &amp; Somerset`
  } else if (x == 214) {
    ELINE2.innerHTML = `Boteler &amp; Sussex`
  } else if (x == 98) {
    ELINE2.innerHTML = `Bridge &amp; Manotick Main`
  } else if (x == 136) {
    ELINE2.innerHTML = `Bridge/Mitch Owens &amp; River`
  } else if (x == 139) {
    ELINE2.innerHTML = `Bridle Path/Daze &amp; Hunt Club`
  } else if (x == 4) {
    ELINE2.innerHTML = `Bronson &amp; Carling`
  } else if (x == 177) {
    ELINE2.innerHTML = `Bronson &amp; Catherine`
  } else if (x == 165) {
    ELINE2.innerHTML = `Bronson &amp; Gladstone`
  } else if (x == 85) {
    ELINE2.innerHTML = `Bronson &amp; Heron`
  } else if (x == 44) {
    ELINE2.innerHTML = `Bronson &amp; Laurier`
  } else if (x == 187) {
    ELINE2.innerHTML = `Bronson &amp; Somerset`
  } else if (x == 171) {
    ELINE2.innerHTML = `Bronson &amp; Sunnyside`
  } else if (x == 69) {
    ELINE2.innerHTML = `Brookfield/Hog's Back &amp; Riverside`
  } else if (x == 28) {
    ELINE2.innerHTML = `Campeau &amp; March`
  } else if (x == 126) {
    ELINE2.innerHTML = `Campeau &amp; Terry Fox`
  } else if (x == 160) {
    ELINE2.innerHTML = `Carling &amp; Churchill`
  } else if (x == 62) {
    ELINE2.innerHTML = `Carling &amp; Holland`
  } else if (x == 68) {
    ELINE2.innerHTML = `Carling &amp; Kirkwood (North)`
  } else if (x == 158) {
    ELINE2.innerHTML = `Carling &amp; Kirkwood (South)`
  } else if (x == 66) {
    ELINE2.innerHTML = `Carling &amp; Maitland`
  } else if (x == 63) {
    ELINE2.innerHTML = `Carling &amp; Merivale`
  } else if (x == 29) {
    ELINE2.innerHTML = `Carling &amp; Pinecrest`
  } else if (x == 93) {
    ELINE2.innerHTML = `Carling &amp; Preston`
  } else if (x == 149) {
    ELINE2.innerHTML = `Carling &amp; Transitway`
  } else if (x == 67) {
    ELINE2.innerHTML = `Carling &amp; Woodroffe`
  } else if (x == 125) {
    ELINE2.innerHTML = `Carp &amp; Hazeldean`
  } else if (x == 134) {
    ELINE2.innerHTML = `Carp &amp; Hwy 417`
  } else if (x == 192) {
    ELINE2.innerHTML = `Castlefrank &amp; Hazeldean`
  } else if (x == 179) {
    ELINE2.innerHTML = `Catherine &amp; Kent`
  } else if (x == 161) {
    ELINE2.innerHTML = `Catherine &amp; Metcalfe`
  } else if (x == 213) {
    ELINE2.innerHTML = `Catherine &amp; O'Connor`
  } else if (x == 88) {
    ELINE2.innerHTML = `Cedarview &amp; Hunt Club`
  } else if (x == 197) {
    ELINE2.innerHTML = `Champlain &amp; Hwy 174`
  } else if (x == 190) {
    ELINE2.innerHTML = `Chapel &amp; Rideau`
  } else if (x == 94) {
    ELINE2.innerHTML = `Charlotte &amp; Rideau`
  } else if (x == 124) {
    ELINE2.innerHTML = `Churchill &amp; Richmond`
  } else if (x == 241) {
    ELINE2.innerHTML = `Clegg &amp; Colonel By`
  } else if (x == 23) {
    ELINE2.innerHTML = `Conroy &amp; Walkley`
  } else if (x == 20) {
    ELINE2.innerHTML = `Corkstown &amp; Moodie`
  } else if (x == 57) {
    ELINE2.innerHTML = `Coventry/Ogilvie &amp; St. Laurent`
  } else if (x == 206) {
    ELINE2.innerHTML = `Cumberland &amp; Laurier`
  } else if (x == 96) {
    ELINE2.innerHTML = `Cumberland &amp; Murray`
  } else if (x == 147) {
    ELINE2.innerHTML = `Cummings &amp; Ogilvie`
  } else if (x == 146) {
    ELINE2.innerHTML = `Cyrville &amp; Innes`
  } else if (x == 185) {
    ELINE2.innerHTML = `Dalhousie &amp; Murray`
  } else if (x == 107) {
    ELINE2.innerHTML = `Dalhousie &amp; Rideau`
  } else if (x == 195) {
    ELINE2.innerHTML = `Donald &amp; St. Laurent`
  } else if (x == 3) {
    ELINE2.innerHTML = `Eagleson &amp; Hazeldean/Robertson`
  } else if (x == 178) {
    ELINE2.innerHTML = `Eagleson &amp; Katimavik/Timm`
  } else if (x == 191) {
    ELINE2.innerHTML = `Eagleson &amp; Michael Cowpland/Stonehaven`
  } else if (x == 142) {
    ELINE2.innerHTML = `Earl Armstrong &amp; Limebank`
  } else if (x == 143) {
    ELINE2.innerHTML = `Earl Armstrong &amp; River`
  } else if (x == 110) {
    ELINE2.innerHTML = `Earl Grey &amp; Kanata`
  } else if (x == 216) {
    ELINE2.innerHTML = `Elgin &amp; Gladstone`
  } else if (x == 35) {
    ELINE2.innerHTML = `Elgin &amp; Laurier`
  } else if (x == 54) {
    ELINE2.innerHTML = `Elgin &amp; Pretoria/Queen Elizabeth`
  } else if (x == 34) {
    ELINE2.innerHTML = `Elgin &amp; Queen`
  } else if (x == 61) {
    ELINE2.innerHTML = `Fallowfield &amp; Greenbank`
  } else if (x == 15) {
    ELINE2.innerHTML = `Fallowfield &amp; Merivale`
  } else if (x == 226) {
    ELINE2.innerHTML = `Fallowfield &amp; Prince of Wales`
  } else if (x == 148) {
    ELINE2.innerHTML = `Fallowfield &amp; Transitway`
  } else if (x == 9) {
    ELINE2.innerHTML = `Fallowfield &amp; Woodroffe`
  } else if (x == 21) {
    ELINE2.innerHTML = `Fifth &amp; Queen Elizabeth Driveway`
  } else if (x == 167) {
    ELINE2.innerHTML = `Fisher &amp; Meadowlands`
  } else if (x == 223) {
    ELINE2.innerHTML = `Foxfield &amp; Greenbank`
  } else if (x == 153) {
    ELINE2.innerHTML = `Gilligan &amp; Leitrim`
  } else if (x == 101) {
    ELINE2.innerHTML = `Gladstone &amp; Preston`
  } else if (x == 74) {
    ELINE2.innerHTML = `Greenbank &amp; Berrigan/Wessex`
  } else if (x == 90) {
    ELINE2.innerHTML = `Greenbank &amp; Hunt Club`
  } else if (x == 150) {
    ELINE2.innerHTML = `Greenbank &amp; Iris`
  } else if (x == 120) {
    ELINE2.innerHTML = `Greenbank &amp; Strandherd`
  } else if (x == 228) {
    ELINE2.innerHTML = `Greenfield &amp; Main`
  } else if (x == 117) {
    ELINE2.innerHTML = `Hawthorne &amp; Hunt Club`
  } else if (x == 229) {
    ELINE2.innerHTML = `Hawthorne &amp; Main`
  } else if (x == 127) {
    ELINE2.innerHTML = `Hazeldean &amp; Huntmar`
  } else if (x == 119) {
    ELINE2.innerHTML = `Hazeldean &amp; Stittsville Main`
  } else if (x == 32) {
    ELINE2.innerHTML = `Hazeldean &amp; Terry Fox`
  } else if (x == 193) {
    ELINE2.innerHTML = `Heron &amp; Riverside`
  } else if (x == 145) {
    ELINE2.innerHTML = `Hwy 174 &amp; Cameron`
  } else if (x == 198) {
    ELINE2.innerHTML = `Hwy 174 &amp; Jeanne D'Arc`
  } else if (x == 72) {
    ELINE2.innerHTML = `Hwy 174 &amp; Trim`
  } else if (x == 234) {
    ELINE2.innerHTML = `Hwy 174 (East) at Blair`
  } else if (x == 200) {
    ELINE2.innerHTML = `Hwy 174 East of Blair`
  } else if (x == 199) {
    ELINE2.innerHTML = `Hwy 174 East of Montreal`
  } else if (x == 201) {
    ELINE2.innerHTML = `Hwy 174 West of Blair`
  } else if (x == 45) {
    ELINE2.innerHTML = `Hwy 417 &amp; Kanata`
  } else if (x == 70) {
    ELINE2.innerHTML = `Hwy 417 &amp; Pinecrest`
  } else if (x == 80) {
    ELINE2.innerHTML = `Hwy 417 &amp; Vanier`
  } else if (x == 181) {
    ELINE2.innerHTML = `Hwy 417 &amp; Woodroffe`
  } else if (x == 30) {
    ELINE2.innerHTML = `Hwy 417 (East) &amp; Innes`
  } else if (x == 164) {
    ELINE2.innerHTML = `Hwy 417 (East) &amp; Maitland`
  } else if (x == 238) {
    ELINE2.innerHTML = `Hwy 417 (East) &amp; St. Laurent`
  } else if (x == 237) {
    ELINE2.innerHTML = `Hwy 417 (West) &amp; Innes`
  } else if (x == 186) {
    ELINE2.innerHTML = `Hwy 417 (West) &amp; Maitland`
  } else if (x == 114) {
    ELINE2.innerHTML = `Holland &amp; Scott`
  } else if (x == 182) {
    ELINE2.innerHTML = `Holland &amp; Wellington`
  } else if (x == 89) {
    ELINE2.innerHTML = `Holly Acres/Nanaimo &amp; Richmond`
  } else if (x == 17) {
    ELINE2.innerHTML = `Hunt Club &amp; Airport Parkway`
  } else if (x == 156) {
    ELINE2.innerHTML = `Hunt Club &amp; Knoxdale`
  } else if (x == 203) {
    ELINE2.innerHTML = `Hunt Club &amp; Lowes`
  } else if (x == 22) {
    ELINE2.innerHTML = `Hunt Club &amp; Merivale`
  } else if (x == 11) {
    ELINE2.innerHTML = `Hunt Club &amp; Prince of Wales`
  } else if (x == 19) {
    ELINE2.innerHTML = `Hunt Club &amp; Riverside`
  } else if (x == 219) {
    ELINE2.innerHTML = `Hunt Club &amp; Uplands`
  } else if (x == 12) {
    ELINE2.innerHTML = `Hunt Club &amp; Woodroffe`
  } else if (x == 131) {
    ELINE2.innerHTML = `Industrial &amp; Riverside`
  } else if (x == 204) {
    ELINE2.innerHTML = `Industrial &amp; Trainyards`
  } else if (x >= 2038) {
    ELINE2.innerHTML = `You have reached the end.`
  } else {
    ELINE2.innerHTML = 'Nothing here / Pending.';
  }
  document.getElementById("cameraOne").src = `http://traffic.ottawa.ca/map/camera?id=${x}&timems=${m}`
  setTimeout(() => {
    fetchCamera();
  }, 500)
}
function closeCam() {
  CameraArea.style.display = "none";
}
function showCam() {
  document.getElementById("badbox").src = "http://traffic.ottawa.ca/map/"
  CameraArea.style.display = "block"
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
