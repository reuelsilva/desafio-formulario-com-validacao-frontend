import React from "react"

type InputProps = {
    required: boolean
    label: string,
    name: string,
    id: string
    type: string
    placeholder?: string
    register: any,
    errors?: any
}

function Input({required, label, type, name, id, placeholder, register, errors}:InputProps):JSX.Element {
    return (
        <div className="flex flex-col gap-3 bg-white rounded-lg border p-6">
            <label className="font-semibold" htmlFor={id}>
                {
                    required?(
                        <>{label} <span className="text-red-500">*</span></>
                    ):(
                        <>{label}</>
                    )
                }
            </label>
            <input className="w-full sm:w-72 border-b focus:outline-none pb-2 focus:border-b-2 focus:border-color-01" placeholder={placeholder} type={type} name={name} id={id} {...register(name)} />
            <div>
                <p className="text-red-500">{errors}</p>
            </div>
        </div>
    )
}

export default Input