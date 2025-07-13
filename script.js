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
        
        listItem.classList.add('task-list-item');

        // Cria o texto da tarefa
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Cria o botão de deletar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-btn');

        // Adiciona o texto e o botão ao item da lista
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        // Adiciona o novo item à lista <ul>
        taskList.appendChild(listItem);

        // Limpa o campo de input e foca nele novamente
        taskInput.value = "";
        taskInput.focus();
    } else {
        alert("Por favor, digite uma tarefa!");
    }
}

// 3. Função para lidar com cliques na lista (Marcar/Deletar)
function handleTaskListClick(event) {
    const clickedElement = event.target;

    // Se o clique foi no botão de deletar
    if (clickedElement.classList.contains('delete-btn')) {
        const listItem = clickedElement.parentElement; // O pai do botão é o <li>
        taskList.removeChild(listItem);
    }
    // Se o clique foi no item da lista (mas não no botão)
    else if (clickedElement.matches('.task-list-item, .task-list-item span')) {
        // Encontra o elemento <li> correto, caso o clique tenha sido no <span>
        const listItem = clickedElement.closest('.task-list-item');
        listItem.classList.toggle('completed');
    }
}

// 4. Adicionar "escutadores de eventos"
addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

taskList.addEventListener('click', handleTaskListClick);