import { createPortal } from "react-dom";
import { ModalProps } from "./modal.types";
import styles from './modal.module.css'



export function Modal(props: ModalProps) {

    return createPortal (
        <div className={styles.container}>
            { props.children }
        </div>, document.body
    )
}