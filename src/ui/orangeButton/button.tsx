import { OrangeButtonProps } from "./button.types"
import styles from './button.module.css'

export function OrangeButton(props: OrangeButtonProps) {
	return (
		<button onClick={props.onClick} className={styles.button} type="submit">
			<p className={styles.label}>{props.label}</p>
		</button>
	)
}
