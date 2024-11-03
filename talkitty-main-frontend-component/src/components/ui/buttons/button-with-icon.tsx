import { Button } from '@nextui-org/react';
import { ReactNode } from 'react';

interface ButtonWithIconProps {
    icon: ReactNode;
    children?: ReactNode;
    [key: string]: any;
}

export default function ButtonWithIcon({
    icon,
    children,
    ...props
}: ButtonWithIconProps) {
    return (
        <Button color='primary' endContent={icon} {...props}>
            {children}
        </Button>
    );
}