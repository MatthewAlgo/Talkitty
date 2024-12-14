import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await signIn('github', { callbackUrl: '/dashboard' });
    setLoading(false);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3'>
          <span style={{
            fontFamily: "var(--font-nerd-jetbrains)"
          }}>Talkitty</span>
        </div>
        <button
          className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800 sm:px-8 sm:py-3"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login with GitHub'}
        </button>
      </main>
    </div>
    );
}