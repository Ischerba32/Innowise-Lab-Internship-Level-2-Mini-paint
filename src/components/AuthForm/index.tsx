import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import IAuthForm from '../../interfaces/authForm.interface';
import { Button, Card, Input } from '../UI';
import styles from './styles.module.scss';
import AuthFormProps from './props';
// import { ToastContainer, toast } from 'react-toastify';
// import { useSelector } from 'react-redux';
// import State from '../../interfaces/state.interface';
// import { useTheme } from '../../hooks/useTheme';
// import { useTheme } from '../../hooks/useTheme';

const AuthForm = ({
	// error,
	onSubmit,
	formAction,
	actionLink,
	actionTitle,
}: AuthFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
	} = useForm<IAuthForm>();

	return (
		<div className={styles.loginForm}>
			<Card color='blue' className={styles.loginCard}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						{...register('email', {
							required: { value: true, message: 'Enter the email' },
						})}
						type='email'
						placeholder='Email'
						error={errors.email}
					/>
					<Input
						{...register('password', {
							required: { value: true, message: 'Enter the password' },
						})}
						type='password'
						placeholder='Password'
						error={errors.password}
					/>
					<div className={styles.buttons}>
						<Button
							appearance='primary'
							onClick={() => clearErrors()}
							className={styles.loadingBtn}
						>
							{formAction}
						</Button>
						{actionLink && (
							<Link to={actionLink}>
								<p className={styles.link} onClick={() => reset()}>
									{actionTitle}
								</p>
							</Link>
						)}
					</div>
				</form>
			</Card>
			{/* <ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				// theme={theme === 'light' ? 'light' : 'dark'}
			/> */}
		</div>
	);
};

export default AuthForm;
