export default interface User {
	uid: string;
	email: string | null;
	error?: string | null;
	isLoading?: boolean;
}
