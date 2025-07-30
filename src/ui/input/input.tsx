import { InputProps } from "./input.types"
import styles from "./input.module.css"

export function Input(props: InputProps) {
	const { placeholder, type = "text", variant = "default", ...rest } = props

	return (
		<input
			placeholder={placeholder}
			type={type}
			className={`${styles.input} ${
				variant === "big" ? styles.big : undefined
			}`}
			{...rest}
		></input>
	)
}


function TextArea(props: InputProps) {
	const { placeholder, type = "text", variant = "default", ...rest } = props

	return (
		<textarea
		rows={3}
			placeholder={placeholder}
			className={`${styles.input} ${styles.textarea} ${
				variant === "big" ? styles.big : undefined
			}`}
			{...rest}
		></textarea>
	)
}

Input.textarea = TextArea
