'use client';
import React from 'react';
import ButtonWithIcon from '../components/ui/buttons/button-with-icon';
import Image from "next/image";
import RegisterForm from '../components/ui/forms/register-form';
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';
import LoginForm from '../components/ui/forms/login-form';
import Homepage from '../components/common/homepage/homepage';
import { AuthProvider, useAuth } from '../context/authcontext';

export default function Home() {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
}

function MainContent() {
  const { isAuthenticated } = useAuth();

  return (
    <main>
      <Header />
      {isAuthenticated ? (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className='px-4 py-2 text-white sm:px-8 sm:py-3'>
              <LoginForm />
              <RegisterForm />
            </div>
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <ButtonWithIcon
              icon={<Image src="/images/github-mark-white.png" alt="GitHub Logo" width={16} height={16} />}
            >
              My GitHub Page
            </ButtonWithIcon>
          </footer>
        </div>
      ) : (
        <Homepage />
      )}
      <Footer />
    </main>
  );
}
