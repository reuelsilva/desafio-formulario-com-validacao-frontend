import React, { useContext, useState } from "react"
import Input from "../Input"
import Select from "../Select"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { userValidationSchema } from "../../schemas/userValidation"
import { ROLES } from "../../constants/roles"
import { SubmittedContext } from "../../contexts/submitted-context"


function Form():JSX.Element{
  const { register, handleSubmit, formState:{errors}, control } = useForm({
    resolver: yupResolver(userValidationSchema)
  })
  const {setIsSubmitted} = useContext(SubmittedContext)
  
  const onSubmit = data => {
    localStorage.setItem("user", JSON.stringify(data))
    setIsSubmitted(true)
  }

    return(
        <div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <Input 
              required={true} 
              type={"text"} 
              label={"Nome"} 
              name={"name"} 
              id={"name"}
              placeholder={"Sua resposta"}
              register={register}
              errors={errors.name?.message}
              />

            <Input
              required={true}
              type={"email"}
              label={"E-mail"}
              name={"email"}
              id={"email"}
              placeholder={"Sua resposta"}
              register={register}
              errors={errors.email?.message}
            />

            <Input
              required={true}
              type={"tel"}
              label={"Telefone"}
              name={"telefone"}
              id={"telefone"}
              placeholder={"(99) 9999-9999"}
              register={register}
              errors={errors.telefone?.message}
            />

            <Controller 
              name="role" 
              control={control}
              render={({field}) => (
                <Select 
                label="Cargo pretendido"
                name={field.name}
                id="role"
                options={ROLES}
                value={field.value}
                onChange={field.onChange}
                errors={errors.role?.message}
              />
              )}
            >
            </Controller>

            <Input
              required={false}
              type={"text"}
              label={"LinkedIn"}
              name={"linkedin"}
              id={"linkedin"}
              placeholder={"https://www.linkedin.com/in/"}
              register={register}
            />

            <Input
              required={false}
              type={"text"}
              label={"GitHub"}
              name={"github"}
              id={"github"}
              placeholder={"https://github.com/"}
              register={register}
            /> 

            <div className="flex justify-end">
              <button className="bg-color-01 text-white text-sm rounded-lg p-3" type="submit">Enviar candidatura</button>
            </div>
            
          </form>
        </div>
    )
}

export default Form