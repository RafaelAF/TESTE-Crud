let task = document.getElementById('inputVal');
let btnAdd = document.getElementById('addTask');
let itemsContainer = document.querySelector('.itemsContainer');





let tasks = [
    'Comprar café',
    'Jogar GTA 5',
    'Ler um livro'
];




window.addEventListener('load',()=>{
    tasks.map((item, index)=>{
        CreateElement(item)
    })
})


btnAdd.addEventListener('click', (e)=>{
    e.preventDefault()

    Adicionar()
    
})




function Adicionar(){
    if(task.value){


        let txt = task.value; // pegando o valor do input

        tasks = [...tasks, txt]
        let taskLen = tasks.length;


        CreateElement(txt, taskLen)
        
        task.value = '';
        console.log(tasks)
    }
    Renderizar()
    return;
}

function Deletar(index){

    tasks.splice(index, 1)

    console.log(tasks)
    //Renderizar()
    return;
}

function Editar(item, e){

    console.log(tasks.indexOf(item))
    
    console.log(item)
    console.log(e)
    return;
}
function Salvar(){
    return;
}


function Renderizar(){


    return;
}


function CreateElement(txt, index){


    

    let checkBoxItem = document.createElement('input');
    checkBoxItem.type = 'checkbox';
    checkBoxItem.classList.add('form-check-input');
    checkBoxItem.addEventListener('click', (e)=>{
        if(e.target.checked){
            taskListItem.classList.remove('check')
            taskListItem.classList.add('checked')
        }else{
            taskListItem.classList.remove('checked')
            taskListItem.classList.add('check')
        }
    })

    let checkBoxContainer = document.createElement('div');
    checkBoxContainer.classList.add('form-check');
    checkBoxContainer.appendChild(checkBoxItem);

    let taskListItem = document.createElement('input') // criar input
        taskListItem.setAttribute('disabled', 'disabled');
        taskListItem.value = txt; //adicionar texto ao value do input
        taskListItem.type = 'text';
        taskListItem.classList.add('form-control') // adicionar a classe no input

        let firstContent = document.createElement('div'); // criando a div que contem o input
        firstContent.classList.add('col-8'); //adicionando a classe
        firstContent.appendChild(taskListItem) // adicionando o input ao primeiro elemento

        let btnEdit = document.createElement('button'); // Criando botoes Editar
        btnEdit.textContent = 'Editar';
        btnEdit.type = 'button';
        btnEdit.classList.add('btn', 'btn-warning')
        // Editar função

        btnEdit.addEventListener('click', ()=>{
            if(btnEdit.innerText == 'Editar'){
                taskListItem.removeAttribute('disabled', 'disabled');
                btnEdit.innerText = 'Salvar';
                btnEdit.classList.remove('btn-warning');
                btnEdit.classList.add('btn-success');
                btnDel.setAttribute('disabled', 'disabled')
            }else{
                taskListItem.setAttribute('disabled', 'disabled');
                btnEdit.innerText = 'Editar';
                btnEdit.classList.remove('btn-success');
                btnEdit.classList.add('btn-warning');
                btnDel.removeAttribute('disabled', 'disabled')
                Editar(taskListItem.value)
                //console.log(taskLen2)
            }
        })


        let btnDel = document.createElement('button'); // Criando botoes Deletar
        btnDel.addEventListener('click', ()=>{
            Deletar(index) // Fazer função de deletar
        })
        
        btnDel.textContent = 'Deletar';
        btnDel.type = 'button';
        btnDel.classList.add('btn', 'btn-danger');


        /* EXECUTAR FUNÇÃO DE Deletar */


        let btnsContainer = document.createElement('div');
        btnsContainer.classList.add('col-4');
        btnsContainer.appendChild(btnEdit)
        btnsContainer.appendChild(btnDel)

        let secondContainer = document.createElement('div');
        secondContainer.classList.add('row', 'g-3', 'mb-3') //'row g-3 mb-3'
        secondContainer.appendChild(checkBoxContainer)
        secondContainer.appendChild(firstContent)
        secondContainer.appendChild(btnsContainer)


        itemsContainer.appendChild(secondContainer) // teste - adiciona o input no container
        
        /* O script esta apenas adicionado no HTML, é preciso adicionar esse valor no array e do array renderizar na tela */ 
        btnDel.addEventListener('click', ()=>{

            if(confirm('Deseja Apagar essa tarefa?') == true){
                secondContainer.parentNode.removeChild(secondContainer)
            }
        })


}