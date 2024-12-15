import React from 'react'

export default function InputFieldMaterial(
    props: Readonly<{
        label: string;
        placeholder: string;
        type: string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }>
    ) {
    return (
        <div className="flex m-8 flex-col gap-2 rounded-md border border-white rounded-md p-2">
            <label className="text-sm font-semibold text-white" htmlFor={props.label}>
                {props.label}
            </label>
            <input
                className="p-2 bg-transparent border border-white rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                id={props.label}
                name={props.label}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}