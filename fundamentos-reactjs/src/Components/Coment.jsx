import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment ({content, onDeleteCommnet}){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteCommnet(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://i.pinimg.com/564x/67/ba/c9/67bac951792da9f4c45b7f2fdbab67e2.jpg"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinsmoke Sanji</strong>
                            <time title="29 de Agosto às 14h" dateTime='2024-08-29 14:00:00'>Por volta de 2h atrás</time>
                        </div>
                            <button onClick={handleDeleteComment} title='Deletar comentário'>
                                <Trash size={24}/>
                            </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}