import { createPortal } from "react-dom";
import { ModalProps } from "./modal.types";
import styles from './modal.module.css'
import { useModalManagerStore } from "../../store";
import { useRef } from "react";
import { MouseEvent } from "react";



export function Modal(props: ModalProps) {
    const { closeModal } = useModalManagerStore()
    const coverRef = useRef<HTMLDivElement | null>(null)

    function closeModalFromCover(event: MouseEvent<HTMLDivElement>) {
        if ( event.target === coverRef.current ) {
            closeModal()
        }
    }

    return createPortal (
        <div ref={coverRef} className={styles.container} onClick={closeModalFromCover}>
            { props.children }
        </div>, document.body
    )
}