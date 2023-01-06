import { Trash } from "phosphor-react";
import styles from './Post.module.css';

interface PostProps{
    content: string;
    onDeleteTask: (post: string) => void;
}

export function Post({content, onDeleteTask}: PostProps) {

    function handleDeletePost() {        
        onDeleteTask(content);
    }
    return (
        <div className={styles.postContent}>
            <div>
                <input type="radio" />
                <label>{content}
                </label>
                <button onClick={handleDeletePost} title='Deletar Comentário'>
                    <Trash />
                </button>
            </div>            
        </div>
        
    );
}