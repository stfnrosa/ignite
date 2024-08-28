import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://i.pinimg.com/564x/fc/40/fa/fc40fa129870b3415d3af305330805c5.jpg"/>
                <strong>Portgas D. Ace</strong>
                <span>Punhos de Fogo</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}