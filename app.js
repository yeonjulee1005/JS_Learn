const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 기본적인 브라우저의 동작을 막는 함수 Form의 자동 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); // #loginForm에 .hidden 를 추가하는 것, greeting은 보이게 form은 안보이게!
    const usernameThatTheUserWrote = loginInput.value; // <input> 에 value를 넣는다! 사용자 이름
    localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote); // 로컬스토리지에 key:username , value:사용자이름 으로 저장
    paintGreetings(usernameThatTheUserWrote);
}

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`;  // #greeting에 text와 username으로 받은내용 작성!
    greeting.classList.remove(HIDDEN_CLASSNAME);   // 로컬 스토리지에 사용자 이름이 있으면 show greetings
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);   // 로컬 스토리지에 사용자 이름이 없으면 show the form
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}