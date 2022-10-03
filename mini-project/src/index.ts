const btn = document.getElementById(`btn`)! as HTMLButtonElement
const input = document.getElementById(`todoinput`)! as HTMLInputElement
const form = document.querySelector('form')!
const list = document.getElementById("todolist")

const todos: Todo[] = readTodos()
todos.map(createTodo)
function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos")
    if (todosJSON === null) return []
    return JSON.parse(todosJSON)
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

interface Todo {
    text: string
    completed: boolean
}

function handleSubmit(e: SubmitEvent) {
    e.preventDefault()

    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo)
    todos.push(newTodo)

    saveTodos()
    input.value = ""
}

function createTodo(todo: Todo) {
    const newLI = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed
    checkbox.addEventListener("change",function(){
        todo.completed = checkbox.checked
        saveTodos()
    })
    newLI.append(todo.text)
    newLI.append(checkbox)
    list?.append(newLI)
}
form.addEventListener("submit", handleSubmit)

// form.addEventListener("submit", function(e) {
//     e.preventDefault()
//     console.log('submitted')
// })

// btn.addEventListener("click", function() {
//     console.log(input.value)
//     input.value = ``
// })

// let mystery: unknown = "Hello World"

// const numChars = (mystery as string).length
// console.log(numChars)

