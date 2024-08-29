import { Comment } from './Coment';
import styles from './Post.module.css'

export function Post (){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://i.pinimg.com/564x/79/e2/c9/79e2c9402014ead1eebf6c9f184c5bf8.jpg"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Roronoa Zoro</strong>
                        <span>Caçador de Piratas</span>
                    </div>
                </div>
                <time title="29 de Agosto às 14h" dateTime='2024-08-29 14:00:00'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Navegando por aí, sem bússola e com um barril de rum, mas quem precisa de direção quando você tem 3 espadas? 🗡️🗡️🗡️ </p>
                <p>Vou me tornar o melhor espadachim do mundo, nem que eu tenha que lutar contra todos os piratas desse oceano!</p> 
                <p>... agora só preciso achar o navio. 🤔</p>
                <p>
                    <a>#EspadachimPerdido</a>{' '}
                    <a>#TrêsEspadas</a>{' '}
                    <a>#MelhorDoMundo</a>{' '}
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>
    );
}