'use client'
import InputFieldMaterial from '../../../components/ui/cards/input-field-material';
import ButtonWithIcon from '../../../components/ui/buttons/button-with-icon';
import Image from "next/image";

export default function RegisterForm() {
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log("Form submitted");
    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
            <div className="w-full max-w-3/4 p-8 space-y-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <InputFieldMaterial label="Email" placeholder="Email" type="email" value="" onChange={() => {}} />
                    <InputFieldMaterial label="Password" placeholder="Password" type="password" value="" onChange={() => {}} />
                    <InputFieldMaterial label="Confirm Password" placeholder="Confirm Password" type="password" value="" onChange={() => {}} />
                    <div className="flex items-center justify-between">
                        <ButtonWithIcon icon={<Image src="/images/github-mark-white.png" alt="GitHub Logo" width={16} height={16}/>} children={"Register with GitHub"} />
                    </div>
                </form>
            </div>
        </div>
    );
}