import { useEffect, useRef, useState } from "react"
import { CloseModalButton } from "../../../../components/closeModalButton"
import { Modal } from "../../../../components/modal"
import { Input } from "../../../../ui/input"
import styles from "./modal.module.css"

export function OrderModal() {
	const [delivaryVariant, setDelivaryVariant] = useState<string>("Самовивіз")
	const PickUpRadio = useRef<HTMLInputElement>(null)
	const DeliveryRadio = useRef<HTMLInputElement>(null)

	return (
		<Modal>
			<div className={styles.container}>
				<div className={styles.header}>
					<p className={styles.title}>
						Заповніть дані для замовлення
					</p>
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

					<div className={styles.radioButtonsDiv}>
						<div className={styles.radioButtonBlock}>
							<input
								ref={PickUpRadio}
								type="radio"
								value="Самовивіз"
								name="deliveryVariant"
								onChange={(event) =>
									setDelivaryVariant(event.target.value)
								}
								checked={delivaryVariant === "Самовивіз"}
							/>
							<span
								className={
									delivaryVariant === "Самовивіз"
										? styles.currentRadioButton
										: styles.radioButton
								}
								onClick={() => PickUpRadio.current?.click()}
							></span>
							<label>Самовивіз</label>
						</div>

						<div
							className={styles.radioButtonBlock}
							onClick={() => DeliveryRadio.current?.click()}
						>
							<input
								ref={DeliveryRadio}
								type="radio"
								value="Доставка"
								name="deliveryVariant"
								onChange={(event) =>
									setDelivaryVariant(event.target.value)
								}
								checked={delivaryVariant === "Доставка"}
							/>
							<span
								className={
									delivaryVariant === "Доставка"
										? styles.currentRadioButton
										: styles.radioButton
								}
								onClick={() => PickUpRadio.current?.click()}
							></span>
							<label>Доставка</label>
						</div>
					</div>

					{delivaryVariant === "Доставка" ? (
						<div className={styles.delivaryBlock}>
							<Input placeholder="Адреса" />
							<Input placeholder="Дата" />
							<Input placeholder="Час" />
						</div>
					) : undefined}
				</div>
			</div>
		</Modal>
	)
}
