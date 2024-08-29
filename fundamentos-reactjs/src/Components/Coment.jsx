import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment (){
    return(
        <div className={styles.comment}>
            <img src="https://i.pinimg.com/564x/67/ba/c9/67bac951792da9f4c45b7f2fdbab67e2.jpg"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinsmoke Sanj</strong>
                            <time title="29 de Agosto às 14h" dateTime='2024-08-29 14:00:00'>Por volta de 2h atrás</time>
                        </div>
                            <button title='Deletar comentário'>
                                <Trash size={24}/>
                            </button>
                    </header>
                    <p>
                        Marimo de merda, não sabe nem achar um navio e ainda quer ser o melhor espadachim do mundo? Deixa o rum de lado e tenta usar a cabeça!
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>3</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}