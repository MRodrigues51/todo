import { Trash } from "phosphor-react";
import styles from './Post.module.css';


export function Post(props: { content: string; }) {
    return (
        <div className={styles.postContent}>
            <div>
                <input type="radio" />
                <label>{props.content}</label>
                <i><Trash /></i>
            </div>            
        </div>
        
    );
}