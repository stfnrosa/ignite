import { Header } from "./Components/Header";
import {Post} from "./Components/Post";
import { Sidebar } from "./Components/Sidebar";

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pinimg.com/564x/79/e2/c9/79e2c9402014ead1eebf6c9f184c5bf8.jpg',
      name: 'Roronoa Zoro',
      role: 'Caçador de Piratas'
    },
    content: [
        { type: 'paragraph', content: 'Navegando por aí, sem bússola e com um barril de rum, mas quem precisa de direção quando você tem 3 espadas? 🗡️🗡️🗡️'},
        { type: 'paragraph', content: 'Vou me tornar o melhor espadachim do mundo, nem que eu tenha que lutar contra todos os piratas desse oceano!'},
        { type: 'paragraph', content: '... agora só preciso achar o navio. 🤔'}        
    ],
    publishedAt: new Date ('2024-08-29 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.pinimg.com/564x/f8/30/17/f83017732fa8109f5a9916c46b7b001b.jpg',
      name: 'Brook',
      role: 'Músico dos Piratas do Chapéu de Palha'
    },
    content: [
        { type: 'paragraph', content: 'Yohohoho! Sabiam que hoje eu corri sobre a água para salvar um pássaro que estava se afogando? Quem diria que um esqueleto podia fazer isso, não é? 💀✨'},
        { type: 'paragraph', content: 'A música me dá força, mas o sonho de reencontrar meu querido Laboon me mantém... vivo? Não, esqueçam, eu já estou morto mesmo! Yohohoho! 🎶'},
        { type: 'paragraph', content: 'Senhoritas, depois de uma boa ação, posso pedir para ver suas calcinhas? Apenas para celebrar! 🎻💀'}        
    ],
    publishedAt: new Date ('2024-08-28 15:00:00'),
  },
];

export function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(posts => {
            return (
              <Post
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
                key={posts.id}
              />
            )
          })}
        </main>
      </div>    
    </>
  )
}

