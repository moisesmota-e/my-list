// 1. Pegar os elementos do HTML
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// 2. Criar uma função para adicionar a tarefa
function addTask() {
    const taskText = taskInput.value.trim(); // .trim() remove espaços em branco no início e fim

    // Verifica se o campo não está vazio
    if (taskText !== "") {
        // Cria um novo elemento <li> (item da lista)
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Define o texto do item

        // Adiciona o novo item à lista <ul>
        taskList.appendChild(listItem);

        // Limpa o campo de input e foca nele novamente
        taskInput.value = "";
        taskInput.focus();
    } else {
        alert("Por favor, digite uma tarefa!");
    }
}

// 3. Adicionar "escutadores de eventos"
// Escuta o evento de clique no botão
addTaskBtn.addEventListener('click', addTask);

// Bônus: Escuta o evento de pressionar "Enter" no campo de input
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});