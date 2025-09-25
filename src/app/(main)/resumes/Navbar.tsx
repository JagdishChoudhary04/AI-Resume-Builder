import Image from "next/image"
import Link from "next/link";
import logo from "@/assests/logo.jpg"
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/ThemeToggle";
export default function Navbar(){
    return (
        <header className="shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
                
                <Link  href="/resumes" className="flex items-center gap-2">
                    <Image 
                        src = {logo}
                        alt="Logo"
                        width = {55}
                        height = {55}
                        className="m-2 rounded-full"
                    />
                    <span className="text-xl font-bold tracking-tight">
                        AI Resume Builder
                    </span>
                </Link>
                <div className="flex items-center gap-3">
                    <ThemeToggle/>
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: {
                                    width: 45,
                                    height: 45,
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </header>
    );
}