import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from './Post.module.css';

interface PostProps{
    content: string;
    onDeleteTask: (post: string) => void;
    onCheckTask: (post: string) => void;
}

export function Post({content, onDeleteTask, onCheckTask}: PostProps) {
    
    const [showElementTrash, setShowElementTrash] = useState(false)
     
    function handleDeletePost() {        
        onDeleteTask(content);
    }
    function handleCheckPost() {
        onCheckTask(content);
        setShowElementTrash(true)
    }
    return (
        <div className={styles.postContent}>
            <div>
                <input type="radio" onClick={handleCheckPost} />
                <label>{content}
                </label>
                <button onClick={handleDeletePost} title='Deletar Comentário'>
                    { showElementTrash ? <Trash /> : null }
                </button>
            </div>            
        </div>
        
    );
}