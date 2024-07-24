import React from 'react';
import { twMerge } from 'tailwind-merge';
import { fileURLToPath } from 'url';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

interface BoxProps{
children: React.ReactNode;
className?: string;

}
const Box:React.FC<BoxProps> = ({
    children,
    className
})  => {
    return(
        <div
        className={twMerge(
            "hidden rounded-lg h-fit w-full text-blue-500"
        )}>
            {children}
        </div>
    );
}
export default Box;