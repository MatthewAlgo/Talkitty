'use client'
import InputFieldMaterial from '../components/ui/cards/input-field-material';
import ButtonWithIcon from '../components/ui/buttons/button-with-icon';
import Image from "next/image";
import ClassicalInputField from '../components/ui/cards/classical-intro-inputfield';
import RegisterForm from '../components/features/auth/register-form';
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';

export default function Home() {
  return (
    <main>
    <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className='px-4 py-2 text-white sm:px-8 sm:py-3'>
            <InputFieldMaterial label="Email" placeholder="Email" type="email" value="" onChange={() => {}} />
            <InputFieldMaterial label="Password" placeholder="Password" type="password" value="" onChange={() => {}} />

            <ClassicalInputField placeholder="Email" type="email" value="" onChange={() => {}} />
            <RegisterForm />
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <ButtonWithIcon icon={<Image src="/images/github-mark-white.png" alt="GitHub Logo" width={16} height={16}/>} children={"Button"}  />
        </footer>
      </div>
    <Footer />
    </main>
  );
  
}