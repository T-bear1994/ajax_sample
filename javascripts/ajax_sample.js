let number = 0;
let data = [];
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  //ajax.jsonからデータを取得する処理を記述
  const request = new XMLHttpRequest();
  debugger;
  request.onreadystatechange = function() {
    if(request.readyState == 4) {
      if(request.status == 200) {
        console.log("jsonファイルの取得に成功しました");
        console.log(request.response);
        return request.response
      }
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}
function displayVideo(){
  debugger;
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number == 2 ? number = 0 : number++;
}

function changeVideo() {
  //ボタンがクリックされた際の処理を記述
  button.addEventListener("click", e => {
    debugger;
      if(data.length < 1) {
        debugger;
        data = getData();
        displayVideo();
      } else {
        debugger;
        displayVideo();
      }
  })
}

window.onload = changeVideo;
