var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var date2 =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;
let elementClicked = false;



var result = fetch("https://omannewsapi.glitch.me/api/u") // Get English News Content
.then((response) => response.json())
.then((data) => {
  //console.log(data);
  let tab = '';

for (let r of data) {
    tab += `<div class="container">
  <div class="card">
    <div class="card__header">
      <img
        src="${r.url}"
        alt="${r.url}"
        class="card__image"
        width="600"
      />
    </div>
    <div class="card__body" id="enID">
      <h3> ${r.title}</h3>
    </div>
  </div>
</div>`;
}

document.getElementById("employees").innerHTML = tab;
  }
);





//  document.getElementById("bread").style.visibility = "hidden";
  var nowAPI = fetch("https://omannewsapi.glitch.me/wether") // get Whether Info
    .then((response) => response.json())
    .then((data) => {
      //  console.log(data);
      let tab = ``;

      for (let r of data) {
        tab += `<label>${r.ce}  </label>`;
      }
      document.getElementById("divNow").innerHTML = tab + "   in Muscat Oman";
    });


function onLoadArabic() {
  document.getElementById("bread").style.visibility = "hidden";
  var result3 = fetch("https://omannewsapi.glitch.me/api/arabic") // Get Arabic News Content
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      let tab = ``;
      for (let r of data) {
        tab += ` <div class="container Arabic">
      <div class="card">
        <div class="card__header">
          <img
            src="${r.source}"
            alt="${r.title}"
            class="card__image"
            width="600"
          />
        </div>
        <div class="card__body">
          <h3> ${r.title}</h3>
        </div>

      </div>
    </div>`;

        document.getElementById("divAlwatan").innerHTML = tab;
      }
    });
}

function onLoadCartoon() {
// document.getElementById("bread").style.visibility = "hidden";
  var result4 = fetch("https://omannewsapi.glitch.me/api/v1/cartoon") // Get Cartoon Content
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let tab = ``;
      for (let r of data) {
        tab += ` <div class="container">
      <div class="card">
        <div class="card__header">
          <img
            src="${r.src}"
            alt="${r.src}"
            class="card__image"
            width="900"
          />
        </div>

      </div>
    </div>`;

        document.getElementById("divCartoon").innerHTML = tab;
      }
    });
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function Read() {
  if (elementClicked == false) {
    elementClicked = true;
    // document.getElementById("bread").innerText = "stop reading";
    console.log("you run read button");
    let url = "https://omannewsapi.glitch.me/api/u";
    var result3 = fetch(url)
      .then((response) => response.json())
      .then((data) => {
        for (let r of data) {
          //var editeble = JSON.stringify(data);
          var msg = new SpeechSynthesisUtterance(r.title);
          msg.rate = 0.7;
          msg.volume = 1;
          msg.pitch = 1;
          msg.lang = "en-US";
          window.speechSynthesis.speak(msg);
        }
      });
  } else {
    elementClicked = false;
    // document.getElementById("bread").innerText = "read";
    alert("you cancel read!");
    speechSynthesis.cancel();
  }
}
