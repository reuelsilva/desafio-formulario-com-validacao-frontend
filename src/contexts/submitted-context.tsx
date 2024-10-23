import React from "react";
import { createContext, useState } from "react";

interface SubmittedContextProps {
    isSubmitted: boolean,
    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

type SubmittedProviderProps = {
    children: React.ReactNode
}

export const SubmittedContext = createContext<SubmittedContextProps>({
    isSubmitted: false,
    setIsSubmitted: () => {}
})

function SubmittedProvider({children}: SubmittedProviderProps) {
    const [isSubmitted, setIsSubmitted] = useState(false)
    return (
        <SubmittedContext.Provider value={{ isSubmitted, setIsSubmitted }}>
            {children}
        </SubmittedContext.Provider>
    )
}

export default SubmittedProvider