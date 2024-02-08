let contador = 0

function addTask() {
    let input = document.getElementById("input").value;


    if ((input !== "") && (input !== null) && (input !== undefined)) {
        let areaItem = document.getElementById("areaItem");
        ++contador;
        let novoItem = `<div class="item" id="${contador}">
        <div class="item -check" onclick="checkTask(${contador})">
            <span class="material-symbols-outlined">
                circle
            </span>
        </div>
        <div class="item -tarefa" onclick="checkTask(${contador})">
            <p>${input}</p>
        </div>
        <div class="item -remove">
            <button class="delete" onclick="deleteTask(${contador})">Excluir</button>
        </div>
        </div>`;

        areaItem.innerHTML += novoItem

        document.getElementById("input").value = '';
        document.getElementById("input").focus();
    }
}

document.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

function deleteTask(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function checkTask(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');

    if (classe === 'item') {
        item.classList.add("-checked");
    }
}