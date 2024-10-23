import React from "react"
import toggleDropDown from "../../utils/toggle-dropdown"

type SelectProps = {
    label: string,
    name: string,
    id: string,
    options: string[],
    value: string,
    onChange: (...event: any[]) => void
    errors: any
}

function Select({label, name, id, options, value, onChange, errors}:SelectProps):JSX.Element{
    return(
        <div className="flex flex-col gap-3 bg-white rounded-lg border p-6">
              <label className="font-semibold pointer-events-none" htmlFor="role">{label}<span className="text-red-500">*</span></label>
              <input className="w-full sm:w-72 border rounded-lg focus:outline-none p-3" type="text" name={name} id={id} readOnly placeholder="SELECIONE" value={value || ''} onFocus={() => toggleDropDown(0)} onBlur={() => toggleDropDown(1)} />

              <div className="dropdown hidden h-[102px] w-full sm:w-72 border rounded-lg overflow-auto">
                <ul>
                    {
                        options.map((option, index) => {
                            return(
                                <li className=" cursor-pointer hover:bg-gray-200" key={index} onMouseDown={() => {onChange(option)}}>{option}</li>
                            )
                        })
                    }
                </ul>
              </div>

              <div>
                <p className="text-red-500">{errors}</p>
              </div>

        </div>
    )
}

export default Select