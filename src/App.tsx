//import { useState } from 'react'
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';
import { ContentTask } from './components/ContentTask';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapperAddTask}>
        <AddTask />
      </div>
      <div className={styles.wrapperContentPost}>
        
      </div>
    </div>
  );
}

export default App
