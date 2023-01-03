import { Notepad } from 'phosphor-react';
import styles from './ContentTask.module.css';

export function ContentTask() {
    return (
        <div>
            <div className={styles.contentTaskEmpty}>
                <div>
                    <i><Notepad size={48}/></i>
                </div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    );
}