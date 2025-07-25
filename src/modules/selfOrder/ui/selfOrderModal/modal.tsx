import { CloseModalButton } from "../../../../components/closeModalButton";
import { Modal } from "../../../../components/modal";
import { Input } from "../../../../ui/input";
import { OrangeButton } from "../../../../ui/orangeButton";
import styles from './modal.module.css'





export function SelfOrderModal() {
    return <Modal>
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>Подати заявку?</p>
                <CloseModalButton />
            </div>
            <div className={styles.content}>
                <div className={styles.inputsHelper}>
                    <Input placeholder="Ім'я" />
                    <Input placeholder="Прізвище" />
                </div>
                <div className={styles.inputsHelper}>
                    <Input placeholder="Телефон" />
                    <Input placeholder="Пошта" />
                </div>
                <Input placeholder="Опишіть ваще побажання" variant="big" />

                <OrangeButton onClick={() => {}} label="Замовити" />
            </div>
            {/* <div className={styles.footer}>

            </div> */}
        </div>
    </Modal>
}