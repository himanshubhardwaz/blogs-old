import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import(`@/components/LoginForm`))

export default function LoginPage() {
    return (
        <LoginForm />
    )
}