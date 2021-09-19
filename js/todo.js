const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos";

let toDos = [];     // 로컬스토리지에 저장하는 값은 변수이어야 이전의 기록을 가져갈 수 있다.

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// Todo 삭제

// 로컬스토리지에서 데이터 삭제시 Filter 사용법 : 필터 함수는 항상 새 array {} 를 준다! 덮어쓰기 느낌!
// 필터함수는 forEach 처럼 저장된 아이템들을 하나씩 체크하는데 참인 것만 표시함, 
// 즉 거짓이면 삭제가 가능!

// const fruit = [1000, 20000, 1000, 5]
// function sexyFilter(banana) { return banana > 1000}
// fruit.filter(sexyFilter)

// const todos = [{text:"lalala"},{text:"lololo"}]
// function secyFilter(butter) { return butter.text !== "lololo"}
// todos.filter(sexyFilter)

function deleteToDo(event) {
    const beforeDeleteLi = event.target.parentElement;   // 어떤 요소를 삭제할지(버튼 클릭 이벤트로 부모요소를 타겟으로 설정)
    beforeDeleteLi.remove();   // 클릭 대상을 지우기
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(beforeDeleteLi.id));   // 클릭했던 li의 id를 갖고 있는 것을 지우고 싶을 때 함수 위의 커다란 주석참고
    saveToDos();   // 항상 필터로 지우면 다시한번 저장을 해야 한다!
}

//  Todo 생성
function paintToDo(newTodo) {
    const createLi = document.createElement("li");   // html에 li 생성
    createLi.id = newTodo.id;  // li 생성시, newTodo의 아이디값을 기록  
    
    const createButton = document.createElement("button");   // html에 button 생성
    createButton.innerText = "✔";
    createButton.addEventListener("click", deleteToDo);

    const createSpan = document.createElement("span");    // html에 sapn 생성
    createSpan.innerText = newTodo.text;    // newTodo의 오브젝트에서 텍스트만 sapn에 작성

    createLi.appendChild(createButton);     // 앞의 태그 안에 뒤의 태그를 넣는 작업
    createLi.appendChild(createSpan);

    
    toDoList.appendChild(createLi);
    saveToDos();
}

// Form 핸들링 함수
function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;  // todoInput에서 가져온 값을 새변수에 저장하는것
    toDoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };    //  투두리스트를 키와 벨류로 만드는데 id 는 랜덤한 값을 얻기위해 Date.now() 함수를 사용

    toDos.push(newTodoObj);  // newTodoObj Key, Value 를 toDos에 푸쉬 기록하는 것

    paintToDo(newTodoObj);  // 화면에 Todo Key, value를 그리는 함수 실행
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos =localStorage.getItem(TODOS_KEY);


// 로컬 스토리지에 저장할 값이 빈 값이 아닐 경우, 각 아이템들을 parse 해주고 저장해주는 조건문

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;    // array 형식으로 로컬스토리지에 저장한 아이템을 재로딩시에도 보내기 위해 복원해주는 과정
    // parsedToDos.forEach((item) => console.log("this is turn of", item));     // forEach 함수는 각 저장된 item 에 대해 함수를 실행하게 해준다
    parsedToDos.forEach(paintToDo);
};



