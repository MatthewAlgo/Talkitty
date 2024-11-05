import React from 'react';

import { ReactNode } from 'react';

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Join Talkitty</h2>
      {children}
    </div>
  );
}