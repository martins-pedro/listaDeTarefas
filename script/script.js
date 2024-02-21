let contador = 0

function addTask() {
    let input = document.getElementById("input").value;


    if ((input !== "") && (input !== null) && (input !== undefined)) {
        let areaItem = document.getElementById("areaItem");
        ++contador;
        let novoItem = `<div class="item" id="${contador}">
        <div class="item -check" id="circle_${contador}" onclick="checkTask(${contador})">
            <span class="material-symbols-outlined" id="circleSpan_${contador}">
                circle
            </span>
        </div>
        <div class="item -tarefa" id="task_${contador}" onclick="checkTask(${contador})">
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

    let circle = document.getElementById('circle_' + id);
    let task = document.getElementById('task_' + id);
    let circleSpan = document.getElementById('circleSpan_' + id);

    if (classe === 'item') {
        item.classList.add("-checked");
        circleSpan.innerHTML = "check_circle";
        circle.classList.add('-feito');
        task.classList.add('-feito');

    } else if (classe === 'item -checked') {
        item.classList.remove('-checked')
        circleSpan.innerHTML = "circle";
        circle.classList.remove('-feito');
        task.classList.remove('-feito');
    }
}