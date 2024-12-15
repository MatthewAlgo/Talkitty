import React from 'react'

export default function ClassicalInputField(
    props: Readonly<{
        placeholder: string;
        type: string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }>
    ) {
    return (
        <div className="flex m-8 flex-col gap-2 p-2">
            <input
                className="p-2 bg-transparent hover:underline hover:underline-offset-4 underline 
                    underline-offset-4 hover:underline-offset-8 rounded-md text-white 
                    focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                id={props.placeholder}
                name={props.placeholder}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}