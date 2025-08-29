import { Dispatch, SetStateAction, useEffect, useState } from "react"


export default function useLocalStorage<T>(key: string, defaultValue: T) : [T, Dispatch<SetStateAction<T>>]{
    
    const getValue = () => {
        try{
            const val = window.localStorage.getItem(key);
            if(val)
                return JSON.parse(val);
            else
                return defaultValue;
        }
        catch(e){
        }
    }
    
    const [value, setValue] = useState<T>(getValue());
    

    useEffect(() => {
        try{
            const val = window.localStorage.getItem(key);
            if(val){
                setValue(JSON.parse(val));
            }
        }
        catch(e){
        }
    }, [key])

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, setValue])

    return [value, setValue]
}

