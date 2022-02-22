// seleção de DOM
const todoInput = document.querySelector('.todo-input')

const todoButton = document.querySelector('.todo-button')

const todoList = document.querySelector('.todo-list')
console.log(todoButton)

// Evento de escutas
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteAndCheck)

// funções
function addTodo(event) {
    event.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const todoLi = document.createElement('li')
    todoLi.classList.add('todo-list')
    todoLi.innerText = todoInput.value
    todoInput.value = ''

    todoDiv.appendChild(todoLi)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
}

//delete #5

function deleteAndCheck (e) {
    console.log(e.target)

    const item = e.target
    
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        console.log(todo)
        todo.remove()
    }

}

