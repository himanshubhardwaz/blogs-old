// import Link from "next/link";
import Input from "@/components/Input"
import Layout from "@/components/Layout";
import Button from "@/components/Button"

export default function RegisterPage() {
    function handleSubmit(event: any) {
        event.preventDefault();
        console.log(typeof event)

        const name = event.target.name.value;
        const email = event.target.email.value;
    }

    return (
        <Layout>
            <form
                className="flex gap-3 lg:w-96 items-center justify-center flex-col"
                onSubmit={handleSubmit}
            >
                <div className="w-full">
                    <Input name="email" required id="email" placeholder="Enter your email address" className="my-2 w-full" />
                </div>
                <div className="w-full">
                    <Input name="name" required id="name" placeholder="Name" className="my-2 w-full" />
                </div>
                <div className="w-full">
                    <Button>
                        Register
                    </Button>
                </div>
            </form>
        </Layout>
    )
}