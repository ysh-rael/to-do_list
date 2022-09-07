/*
CRUD:

CREATE 		READ 	UPDATE 		DELETE

*/
const inpt_Task = window.document.getElementById('inptWithTo-do')
const bttn_AddTask = window.document.getElementById('add')
const listWithTasks = window.document.getElementById('listWithTo-do-day')
const inpt_edit = document.createElement('input')
inpt_edit.setAttribute('id','inpt_edit')

//	Liga a tecla "enter" atravez do evento 'keypress' a uma funcion
document.addEventListener('keypress', e => { if (e.which == 13)  addTaskInList() })


const addTaskInList = () => {
	if (inpt_Task.value != 0) {

		const inpt_Task_v = inpt_Task.value
		const task 		  = document.createElement('div')

		const edit		  = document.createElement('button')
		const del  		  = document.createElement('button')

		const span_text   = document.createElement('span')
		const span_bttns  = document.createElement('span')

		const img_edi 	  = document.createElement('img')
		const img_del     = document.createElement('img')

		// cofigura svg usados nos butões del e edit.
		 img_edi.setAttribute('src', 'imagens/pincel.svg')
		 img_del.setAttribute('src', 'imagens/trash.svg')
		 edit.appendChild(img_edi) && del.appendChild(img_del)

		//	transfere valor do input para o conteudo do span e depois limpa o input.
		 span_text.innerHTML = inpt_Task_v
		 inpt_Task.value = ''

		// adiciona os filhos das tags.
		 span_bttns.appendChild(edit) && span_bttns.appendChild(del)
		 task.appendChild(span_text)	 && task.appendChild(span_bttns)
		 listWithTasks.appendChild(task)	

		// adiciona classe para estilo.
		 edit.setAttribute('class', 'edit')
		 del.setAttribute('class', 'delete')
		 span_bttns.setAttribute('class', 'bttns')

		// evento para remover tarefa da lista.
		 del.addEventListener('click', (e) => {
			const confirDelete = confirm("You are about to remove this task from your list, do you want to continue?")
			confirDelete ? listWithTasks.removeChild(task) : false
			
		})
		// evento para editar tarefa contida na lista.
		 edit.addEventListener('click', () => {
			function confirmarEdicao() {
				if(inpt_edit.value === '') task.remove()
				span_text.innerText = inpt_edit.value
				task.innerHTML = ''
				task.appendChild(span_text)	 && task.appendChild(span_bttns)
				edit.classList.remove('confirm')
				inpt_Task.focus()
			}
			 if(null == task.querySelector('input')) {
				inpt_edit.type = 'text'
				inpt_edit.value = span_text.innerText
				task.innerHTML = ''
		 		task.appendChild(inpt_edit)	 && task.appendChild(span_bttns)
				edit.classList.add('confirm')
				inpt_edit.focus()
				document.addEventListener('keypress', e => { if (e.which == 13)  confirmarEdicao() })

			 } else{
				confirmarEdicao()
			 }
		})
	}
}

bttn_AddTask.addEventListener('click', () => addTaskInList())

/*finished! made by Ysh-rael in 2022*/












