import Input from "@/components/Input"
import Layout from "@/components/Layout";
import Button from "@/components/Button"
import { useForm } from "react-hook-form";
import { trpc } from "@/utils/trpc";
import { CreateUserInput } from "@/schema/user.schema";
import { useRouter } from "next/router";

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
        <Layout header={false}>
            <form
                className="flex gap-3 lg:w-96 items-center justify-center flex-col"
            // onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full">
                    <Input
                        required
                        placeholder="Enter your email address"
                        className="my-2 w-full"
                    // {...register('email')}
                    />
                </div>
                <div className="w-full">
                    <Input
                        required
                        placeholder="Name"
                        className="my-2 w-full"
                    // {...register('name')}
                    />
                </div>
                <div className="w-full">
                    <Button type="submit">
                        Register
                    </Button>
                </div>
            </form>
        </Layout>
    )
}