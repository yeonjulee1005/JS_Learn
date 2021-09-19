const API_KEY = "372a808916a387988829627c25c528db";

function onGeoSucess(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    // 아래의 내용은 위의 주소를 서버에 요청하고 기다린 다음 json(담긴 정보들)을 받아오고, 그다음에 데이터를 열수 있게 하는것
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoFailed() {
    alert("Can't Find you. No weather for you.");
}

// 지오로케이션 현재위치 받아오는 함수 (받아오기 성공시 함수 / 실패시 함수 / 옵션)
navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoFailed);

