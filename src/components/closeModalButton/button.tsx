import { useModalManagerStore } from '../../store'
import styles from './button.module.css'



export function CloseModalButton()  {
    const closeModal = useModalManagerStore((state) => state.closeModal)

    return(
        <button className={styles.button} onClick={() => closeModal()}><p className={styles.text}>X</p></button>
    )
}