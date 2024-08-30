import styles from './Header.module.css'
import {Compass} from 'phosphor-react'

export function Header(){
    return (
        <header className={styles.header}>
            <Compass size={34} color='#4DCAF6' />
        </header>
    );
}