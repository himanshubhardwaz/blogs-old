import { useForm } from "react-hook-form";
import { trpc } from "@/utils/trpc";
import { CreateUserInput } from "@/schema/user.schema";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Button from "@/components/Button"
import Alert from "@/components/Alert"
import Link from "next/link"

export default function RegisterPage() {
    const { handleSubmit, register } = useForm<CreateUserInput>();
    const router = useRouter();

    const { mutate, error, isLoading } = trpc.useMutation(['users.register-user'], {
        onSuccess: () => {
            router.push("/login");
        },
    })

    const onSubmit = (values: CreateUserInput) => {
        mutate(values);
    }

    return (
        <Layout header={true}>
            <p className="text-xl text-center my-4">Want to use this platform to document your tech journey? Sign up Now.</p>
            <form
                className="flex gap-3 w-4/5 md:w-2/3 lg:w-1/2 max-w-[1200px] items-center justify-center flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full">
                    <input
                        required
                        type="email"
                        placeholder="Enter your email address"
                        className="my-2 w-full form-input rounded-md"
                        {...register('email')}
                    />
                </div>
                <div className="w-full">
                    <input
                        required
                        type="text"
                        placeholder="Name"
                        className="my-2 w-full form-input rounded-md"
                        {...register('name')}
                    />
                </div>
                {error && <div className="w-full">
                    <Alert type="error" message={error.message} />
                </div>}
                <div className="w-full flex justify-end">
                    <Button type="submit" loading={isLoading}>
                        Register
                    </Button>
                </div>
            </form>
            <div className="flex gap-2">
                <p className="font-semibold text-gray-500">Already have an account?</p>
                <Link href="/login">
                    <p className="underline cursor-pointer">
                        Login
                    </p>
                </Link>
            </div>
        </Layout>
    )
}