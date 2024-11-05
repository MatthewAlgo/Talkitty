import React from 'react';

interface Chat {
    id: string;
    name: string;
}

interface NavMenuProps {
    recentChats: Chat[];
}

const NavMenu: React.FC<NavMenuProps> = ({ recentChats }) => {
    return (
        <nav>
            <ul>
                {recentChats.map(chat => (
                    <li key={chat.id}>
                        <a href={`/chat/${chat.id}`}>{chat.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavMenu;