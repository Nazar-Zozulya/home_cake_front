import styles from './button.module.css'
import { INavigationButtonProps as Props } from "./button.types"
import { clsx } from 'clsx';

export function NavigationButton(props: Props) {
    const { title, onClick, variant } = props


    return (
        <button className={clsx(
            styles.button,

        )} onClick={onClick}><p className={clsx(
            styles.text,
            variant === "big" && styles.textBig,
            variant === "small" && styles.textSmall
        )}>{title}</p></button>
    )
}