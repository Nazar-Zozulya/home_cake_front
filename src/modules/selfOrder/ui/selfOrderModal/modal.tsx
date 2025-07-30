import { Controller, useForm } from "react-hook-form"
import { CloseModalButton } from "../../../../components/closeModalButton"
import { Modal } from "../../../../components/modal"
import { Input } from "../../../../ui/input"
import { OrangeButton } from "../../../../ui/orangeButton"
import styles from "./modal.module.css"
import { SelfOrderForm } from "./modal.types"
import { SendSelfOrder } from "../../hooks/useSendSelfOrder"

export function SelfOrderModal() {
	const { control, formState, handleSubmit } = useForm<SelfOrderForm>({
		defaultValues: {
			name: "",
			surname: "",
			phone: "",
			email: "",
			descriptionOrder: "",
		},
	})

	function onSubmit(data: SelfOrderForm) {
		console.log(data)

		const sendOrder = SendSelfOrder(
			{
				name: data.name,
				surname: data.surname,
				phone: data.phone,
				email: data.email,
			},
			data.descriptionOrder
		)
	}

	return (
		<Modal>
			<div className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.header}>
						<p className={styles.title}>Подати заявку?</p>
						<CloseModalButton />
					</div>
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
							/>
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

						<Controller
							control={control}
							name="descriptionOrder"
							render={({ field }) => (
								<Input.textarea
									placeholder="Опишіть ваще побажання"
									variant="big"
									type="textarea"
									{...field}
								/>
							)}
						/>

						<OrangeButton onClick={() => {}} label="Замовити" />
					</div>
				</form>
			</div>
		</Modal>
	)
}
