// @ts-ignore
import cn from "classnames";
import { IButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button = ({ theme, children, className, ...props }: IButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, styles[theme], className)}
            {...props}
        >
            {children}
        </button>
    );
};