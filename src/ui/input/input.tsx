import { InputProps } from "./input.types"
import styles from "./input.module.css"

export function Input(props: InputProps) {
	const { placeholder, type = "text", variant = "default" } = props

	return (
		<input
			placeholder={placeholder}
			type={type}
			className={`${styles.input} ${
				variant === "big" ? styles.big : undefined
			}`}
		></input>
	)
}
