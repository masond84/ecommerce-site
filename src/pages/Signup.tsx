import { SignUpForm } from "../components/auth/SignupForm";

export const Signup = () => {
    return (
        <div className="max-w-md mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8">Sign Up</h1>
            <SignUpForm />
        </div>
    );
};
