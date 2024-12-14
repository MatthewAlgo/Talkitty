'use client'
import InputFieldMaterial from '../cards/input-field-material';
import ButtonWithIcon from '../buttons/button-with-icon';
import Image from "next/image";
import Link from "next/link";

export default function RegisterForm() {
    function handleSubmit(event: React.FormEvent) { 
        event.preventDefault();
        console.log("Form submitted");
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
            <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <InputFieldMaterial label="Email" placeholder="Email" type="email" value="" onChange={() => {}} />
                    <InputFieldMaterial label="Password" placeholder="Password" type="password" value="" onChange={() => {}} />
                    <InputFieldMaterial label="Confirm Password" placeholder="Confirm Password" type="password" value="" onChange={() => {}} />
                    <div className='flex gap-6 flex-wrap items-center justify-center'>
                        <ButtonWithIcon icon={<Image src="/images/github-mark-white.png" alt="GitHub Logo" width={16} height={16}/>}>
                            Register with GitHub
                        </ButtonWithIcon>
                    </div>
                </form>
                <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                    <Link href="/auth/login" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-black transition duration-300 ease-in-out transform hover:scale-105">
                        Already have an account? Login
                    </Link>
                </footer>
            </div>
        </div>
    );
}