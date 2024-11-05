'use client'
import InputFieldMaterial from '../components/ui/cards/input-field-material';
import ButtonWithIcon from '../components/ui/buttons/button-with-icon';
import Image from "next/image";

export default function LoginForm() {
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log("Form submitted");
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
            <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <InputFieldMaterial label="Email" placeholder="Email" type="email" value="" onChange={() => {}} />
                    <InputFieldMaterial label="Password" placeholder="Password" type="password" value="" onChange={() => {}} />
                    <div className="flex items-center justify-between">
                        <ButtonWithIcon icon={<Image src="/images/github-mark-white.png" alt="GitHub Logo" width={16} height={16}/>} children={"Login with GitHub"} />
                    </div>
                </form>
            </div>
        </div>
    );
}
