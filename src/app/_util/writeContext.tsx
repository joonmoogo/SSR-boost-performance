import { ReactNode, createContext, useContext, useState } from "react";

interface WriteState {
    writeState: string,
    changeWriteState: (value:string) => void;
}

const WriteStateContext = createContext<WriteState | undefined>(undefined);


export const WriteStateProvider: React.FC<{children:ReactNode}> = ({ children }) => {
    const [writeState, setWriteState] = useState('');

    const changeWriteState = (value:string) : void => {
        setWriteState(value)
    }

    return (
        <WriteStateContext.Provider value={{ writeState, changeWriteState }}>
            {children}
        </WriteStateContext.Provider>
    )
}

export const useWriteState = ()=>{
    const context = useContext(WriteStateContext);
    if(!context){
        throw new Error("no context");
    }
    return context
}