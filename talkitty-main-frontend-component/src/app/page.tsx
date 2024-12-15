'use client';
import React from 'react';
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';
import Homepage from '../components/common/homepage/homepage';
import { AuthProvider, useAuth } from '../context/authcontext';
import ChatPage from './chat/page';

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
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className='px-4 py-2 text-white sm:px-8 sm:py-3'>
              <ChatPage/>
            </div>
          </main>
        </div>
      ) : (
        <Homepage />
      )}
      <Footer />
    </main>
  );
}
