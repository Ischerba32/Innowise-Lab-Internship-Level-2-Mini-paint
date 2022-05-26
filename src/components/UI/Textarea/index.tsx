import { ForwardedRef, forwardRef } from 'react';
import { ITextareaProps } from './props';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Textarea = forwardRef(
	(
		{ error, className, ...props }: ITextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<div className={cn(styles.textareaWrapper, className)}>
				<textarea
					className={cn(styles.textareaWrapper__textarea, {
						[styles.textareaWrapper__textarea_error]: error,
					})}
					ref={ref}
					rows={5}
					{...props}
				/>
				{error && (
					<span role='alert' className={styles.textareaWrapper__errorMessage}>
						{error.message}
					</span>
				)}
			</div>
		);
	}
);
