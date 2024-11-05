import { Button } from '@nextui-org/react';
import { ReactNode } from 'react';

interface ButtonWithIconProps {
    icon: ReactNode;
    children?: ReactNode;
    [key: string]: unknown;
}

export default function ButtonWithIcon({
    icon,
    children,
    ...props
}: ButtonWithIconProps) {
    return (
        <Button color='primary' 
                className='flex items-center gap-2 border-4 border-indigo-250/75' {...props} style={
            {
                backgroundColor: 'var(--geist-cyan)',
                color: 'var(--geist-foreground)',
                fontFamily: 'var(--font-geist-sans)',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'background-color 0.2s, color 0.2s',
            }
        }>
            <div style={{ marginRight: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
             }}>
                <div style={{ display: 'flex' }}></div>
                    {Array.isArray(icon) ? icon.map((item, index) => (
                        <div key={index} style={{ display: 'flex' }}>
                            {item}
                        </div>
                    )) : icon}
                </div>
                <div style={{ display: 'flex' }}>
                    {Array.isArray(children) ? children.map((child, index) => (
                        <div key={index} style={{ display: 'flex' }}>
                            {child}
                        </div>
                    )) : children}
                </div>
        </Button>
    );
}