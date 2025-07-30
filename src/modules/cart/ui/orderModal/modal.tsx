import { useEffect, useRef, useState } from "react"
import { CloseModalButton } from "../../../../components/closeModalButton"
import { Modal } from "../../../../components/modal"
import { Input } from "../../../../ui/input"
import styles from "./modal.module.css"
import { OrangeButton } from "../../../../ui/orangeButton"
import { useModalManagerStore } from "../../../../store"
import { orderFromCart } from "../../hooks"
import { Controller, useForm } from "react-hook-form"
import { OrderModalForm } from "./modal.types"
import { useProductContext } from "../../../product"
import { useCartStore } from "../../store/useCartStore"

export function OrderModal() {
	const [delivaryVariant, setDelivaryVariant] = useState<string>("Самовивіз")
	const PickUpRadio = useRef<HTMLInputElement>(null)
	const DeliveryRadio = useRef<HTMLInputElement>(null)
	const { closeModal } = useModalManagerStore()
	const { handleSubmit, control, formState } = useForm<OrderModalForm>()
	const { products } = useProductContext()
	const { cartItems } = useCartStore()

	async function onSubmit(data: OrderModalForm) {
		const result = await orderFromCart(
			{
				name: data.name,
				surname: data.surname,
				phone: data.phone,
				email: data.email,
			},
			products,
			cartItems ?? []
		)
	}

	return (
		<Modal>
			<div className={styles.container}>
				<div className={styles.header}>
					<p className={styles.title}>
						Заповніть дані для замовлення
					</p>
					<CloseModalButton />
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.content}>
						<div className={styles.inputsHelper}>
							<Controller
								control={control}
								name="name"
								render={({ field }) => (
									<Input placeholder="Ім'я" {...field} />
								)}
							/>
							<Controller
								control={control}
								name="surname"
								render={({ field }) => (
									<Input placeholder="Прізвище" {...field} />
								)}
							/>{" "}
						</div>
						<div className={styles.inputsHelper}>
							<Controller
								control={control}
								name="phone"
								render={({ field }) => (
									<Input placeholder="Телефон" {...field} />
								)}
							/>
							<Controller
								control={control}
								name="email"
								render={({ field }) => (
									<Input placeholder="Пошта" {...field} />
								)}
							/>
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
								<label
									className={
										delivaryVariant === "Самовивіз"
											? styles.currentLabel
											: styles.delivaryLabel
									}
								>
									Самовивіз
								</label>
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
								<label
									className={
										delivaryVariant === "Доставка"
											? styles.currentLabel
											: styles.delivaryLabel
									}
								>
									Доставка
								</label>
							</div>
							{delivaryVariant === "Доставка" ? (
								<div className={styles.delivaryBlock}>
									<Input variant="big" placeholder="Адреса" />
									<Input placeholder="Дата" />
									<Input placeholder="Час" />
								</div>
							) : undefined}
						</div>

						<div className={styles.orangeButtonBlock}>
							<OrangeButton onClick={() => {}} label="Замовити" />
						</div>
					</div>
				</form>
			</div>
		</Modal>
	)
}
