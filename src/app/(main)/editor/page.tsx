import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
    title: "Create a resume"
}

export default function Page(){
    return(
        <ResumeEditor/>
    );
}