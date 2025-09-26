"use client"
import Image from "next/image"
import Link from "next/link";
import logo from "@/assests/logo.jpg"
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/ThemeToggle";
import {dark} from "@clerk/themes"
import { useTheme } from "next-themes";

export default function Navbar(){
    const {theme} = useTheme();
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
                        <Link href="/">AI Resume Builder</Link>
                    </span>
                </Link>
                <div className="flex items-center gap-3">
                    <ThemeToggle/>
                    <UserButton
                        appearance={{
                            baseTheme: theme === 'dark' ? dark : undefined,
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