import Layout from "@/components/Layout";
import Button from "@/components/Button"
import Alert from "@/components/Alert"
import { useForm } from "react-hook-form";
import { trpc } from "@/utils/trpc";
import Link from 'next/link';
import { useRouter } from 'next/router'
import { RequestOtpSchema } from "@/schema/user.schema";
import { useQueryClient } from 'react-query'

function VerifyToken({ hash }: { hash: string }) {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { isLoading, data } = trpc.useQuery(['users.verify-otp', { hash }], {
        onSuccess: () => {
            queryClient.invalidateQueries('users.me');
        }
    })

    if (isLoading) return <p>Veryfying...</p>;

    router.push(data?.redirect.includes('login') ? '/' : data?.redirect || '/');

    return <p>redirecting...</p>
}


export default function LoginForm() {
    const { handleSubmit, register } = useForm<RequestOtpSchema>();
    const router = useRouter();

    const { mutate, error, isLoading, isSuccess } = trpc.useMutation(['users.request-otp'])

    const onSubmit = (values: RequestOtpSchema) => {
        mutate({ ...values, redirect: router.asPath });
    }

    const hash = router.asPath.split('#token=')[1];

    if (hash) return (
        <Layout header={false}>
            <VerifyToken hash={hash} />
        </Layout>
    )

    return (
        <Layout header={true} className="justify-center">
            <p className="text-xl text-center my-4">Login to your account to start blogging.</p>
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
                {error && <div className="w-full">
                    <Alert type="error" message={error.message} />
                </div>}

                {isSuccess && <div className="w-full">
                    <Alert type="success" message="Check your email address" />
                </div>}

                <div className="w-full flex justify-end">
                    <Button type="submit"
                        loading={isLoading}
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