import NavMenu from './nav-menu'

const recentChats = [
    { id: '1', name: 'Chat 1' },
    { id: '2', name: 'Chat 2' },
    { id: '3', name: 'Chat 3' },
];

const Header: React.FC = () => {
    return (
        <header className="header">
            Talkitty
            <NavMenu recentChats={recentChats} />
        </header>
    );
};
export default Header;