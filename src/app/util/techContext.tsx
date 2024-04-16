import { ReactNode, createContext, useContext, useState } from "react";

interface techState {
    techState: string,
    changeTechState: (value:string) => void;
}

const TechStateContext = createContext<techState | undefined>(undefined);


export const TechStateProvider: React.FC<{children:ReactNode}> = ({ children }) => {
    const [techState, setTechState] = useState('');

    const changeTechState = (value:string) : void => {
        setTechState(value)
    }

    return (
        <TechStateContext.Provider value={{ techState, changeTechState }}>
            {children}
        </TechStateContext.Provider>
    )
}

export const useTechState = ()=>{
    const context = useContext(TechStateContext);
    if(!context){
        throw new Error("no context");
    }
    return context
}