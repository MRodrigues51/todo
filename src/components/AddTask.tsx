import { Envelope, PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import { Post } from './Post';
import  styles  from './AddTask.module.css';
import { ContentTask } from './ContentTask';


export function AddTask() {
    const [newTask, setNewTask] = useState<string>("")
    const [tasks, setTasks] = useState<string[]>([
      
    ])

    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)

    
    function handleCreateTask() {
        event?.preventDefault()
        
        setTasks([...tasks, newTask]);        
        setNewTask('');
    }
    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setNewTask(event?.target.value)        
    }
    function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>){
        event?.target.setCustomValidity('Esse campo é obrigatório!')
    }
    function deleteTask(taskToDelete: string){
        console.log(`Deletar task ${taskToDelete}`)
        const tasksWithoutDeleteOne = tasks.filter(task =>{
            return task !== taskToDelete;
        })
        setTasks(tasksWithoutDeleteOne);
    }
    return (
        <div>
            <form onSubmit={handleCreateTask} className={styles.bodyAddTask}>
                <input 
                    name="comment" 
                    className={styles.input} 
                    placeholder=" Adicione uma nova tarefa "
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                >
                </input>        
                <button onClick={showOrHide} className={styles.button}>Criar <PlusCircle size='24' weight='bold'/></button>            
            </form>
            <header className={styles.header}>
                <div>
                    <strong className={styles.left}>Tarefas Criadas <i>{tasks.length}</i></strong>
                    <strong className={styles.right}>Concluídas <i>{tasks.length} de {tasks.length}</i></strong>
                </div>
            </header>
            <div 
                className={styles.wrapperContentTask}>
                    { showElement ? null : <ContentTask /> }
                    {tasks.map( tasks =>{
                        return  showElement ? <Post key={tasks} content={tasks} onDeleteTask={deleteTask}/> : null
                    })}                                    
            </div>           
        </div>
    )
}
