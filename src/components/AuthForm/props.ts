import { SubmitHandler } from 'react-hook-form';
import AuthForm from '../../interfaces/authForm.interface';

export default interface AuthFormProps {
	onSubmit: SubmitHandler<AuthForm>;
	error?: string | null;
	formAction: string;
	actionLink?: string;
	actionTitle?: string;
	successMsg?: string;
}
