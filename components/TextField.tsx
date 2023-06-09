import { useState } from "react"

interface TextFieldProps {
    label: string;
    type: string;
    setState: () => {};
    value: string;


}

export const TextField = ({ label, type, setState, value }: TextFieldProps) => {
    return (
        < div >
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => setState()}
            />
        </div >
    )
}