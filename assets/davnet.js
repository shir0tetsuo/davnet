function Rand(data) {
  return data[Math.floor(Math.random() * data.length)]
}
const briefIntroduction = [
  'Some dandy links.',
  'Insert fancy stuff here.',
  'Do these even work?',
  'Here\'s something for that boredom.'
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
function loadDavnet() {
  document.getElementById("linksFill").innerHTML = Rand(briefIntroduction)
}
