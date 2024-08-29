import { Header } from "./Components/Header";
import {Post} from "./Components/Post";
import { Sidebar } from "./Components/Sidebar";

import styles from './App.module.css'

import './global.css';

export function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post 
        author="Pablo Diego" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sint optio saepe sequi sunt rerum nostrum, dolor quae distinctio? Itaque, amet. Ex dicta sed facilis asperiores vero quod magnam sapiente?"
      />
      <Post
        author="Gabriela Saci" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sint optio saepe sequi sunt rerum nostrum, dolor quae distinctio? Itaque, amet. Ex dicta sed facilis asperiores vero quod magnam sapiente?"
      />
        </main>
      </div>    
    </>
  )
}

