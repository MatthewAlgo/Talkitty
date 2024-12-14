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
        <Button
            color="primary"
            ripple={true} // Enable ripple effect
            className="flex items-center gap-2 border-4 border-indigo-250/75"
            {...props}
            style={{
                backgroundColor: 'var(--geist-cyan)',
                color: 'var(--geist-foreground)',
                fontFamily: 'var(--font-geist-sans)',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'background-color 0.2s, color 0.2s',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <div
                style={{
                    marginRight: '0.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                {Array.isArray(icon)
                    ? icon.map((item, index) => (
                          <div key={index} style={{ display: 'flex' }}>
                              {item}
                          </div>
                      ))
                    : (
                          <div style={{ display: 'flex' }}>
                              {icon}
                          </div>
                      )}
            </div>
            {children}
        </Button>
    );
}
