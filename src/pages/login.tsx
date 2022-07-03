import Input from "@/components/Input"
import Layout from "@/components/Layout";
import Button from "@/components/Button"
import { useForm } from "react-hook-form";
import { trpc } from "@/utils/trpc";
import { CreateUserInput } from "@/schema/user.schema";
import { useRouter } from "next/router";
import Link from 'next/link';

export default function LoginPage() {
    // const { handleSubmit, register } = useForm<CreateUserInput>();
    // const router = useRouter();

    // const { mutate, error } = trpc.useMutation(['users.register-user'], {
    //     onSuccess: () => {
    //         router.push("/login");
    //     },
    // })
    // 
    // const onSubmit = (values: CreateUserInput) => {
    //     mutate(values);
    // }

    return (
        <Layout header={true}>
            <p className="text-xl text-center my-4">Login to your account to start blogging.</p>
            <form
                className="flex gap-3 w-4/5 md:w-2/3 lg:w-1/2 max-w-[1200px] items-center justify-center flex-col"
            // onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full">
                    <input
                        required
                        type="email"
                        placeholder="Enter your email address"
                        className="my-2 w-full form-input rounded-md"
                    // {...register('email')}
                    />
                </div>
                <div className="w-full">
                    <input
                        required
                        type="text"
                        placeholder="Name"
                        className="my-2 w-full form-input rounded-md"
                    // {...register('name')}
                    />
                </div>
                {/* {error && <div className="w-full">
                    <Alert type="error" message={error.message} />
                </div>} */}
                <div className="w-full flex justify-end">
                    <Button type="submit"
                    //  loading={isLoading}
                    >
                        Login
                    </Button>
                </div>
            </form>
            <div className="flex gap-2">
                <p className="font-semibold text-gray-500">Dont have an account yet?</p>
                <Link href="/register">
                    <p className="underline cursor-pointer">
                        Register
                    </p>
                </Link>
            </div>
        </Layout>
    )
}