import React, { useState } from 'react';

const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Chat Page</h1>
            <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
                {messages.map((message, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        {message}
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '10px' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ width: '80%', padding: '10px' }}
                />
                <button onClick={handleSendMessage} style={{ padding: '10px', marginLeft: '10px' }}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatPage;