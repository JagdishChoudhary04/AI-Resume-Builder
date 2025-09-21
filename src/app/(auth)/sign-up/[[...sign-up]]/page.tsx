import { SignUp } from "@clerk/nextjs";

export default function Page(){
    return (
        <main className="flex h-screen justify-center items-center p-3 ">
            <SignUp />
        </main>
    );
}