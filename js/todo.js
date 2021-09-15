const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');


// Todo 삭제

function deleteTodo(event) {
    const beforeDeleteLi = event.target.parentElement;   //어떤 요소를 삭제할지(버튼 클릭 이벤트로 부모요소를 타겟으로 설정)
    beforeDeleteLi.remove();   // 클릭 대상을 지우기
}

//  Todo 생성
function paintTodo(newTodo) {
    const createLi = document.createElement("li");   // html에 li 생성
    
    const createSpan = document.createElement("span");    // html에 sapn 생성
    createSpan.innerText = newTodo;

    const createButtom = document.createElement("button");   // html에 button 생성
    createButtom.innerText = "❌";
    createButtom.addEventListener("click", deleteTodo);

    createLi.appendChild(createSpan);
    createLi.appendChild(createButtom);     // 앞의 태그 안에 뒤의 태그를 넣는 작업

    toDoList.appendChild(createLi);
}

// Form 핸들링 함수
function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;  //todoInput에서 가져온 값을 새변수에 저장하는것
    toDoInput.value = "";

    paintTodo(newTodo);
 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

