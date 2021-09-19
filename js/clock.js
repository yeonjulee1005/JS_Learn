const clock = document.querySelector("span#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minuits = String(date.getMinutes()).padStart(2, "0");
    clock.innerText =`${hours}:${minuits}`;
}

getClock();
setInterval(getClock, 1000);


const smallSeconds = document.querySelector("span#seconds");

function getSec() {
    const date = new Date();
    const seconds = String(date.getSeconds()).padStart(2, "0");
    smallSeconds.innerText = `${seconds}`;
}

getSec();
setInterval(getSec, 1000);



// 시간 표시 함수

// const clock = document.querySelector("div#clock");

// function getClock() {
//     const date = new Date();
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minuits = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");
//     clock.innerText =`${hours}:${minuits}:${seconds}`;
// }

// getClock();
// setInterval(getClock, 1000);