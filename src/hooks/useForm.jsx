import { useState } from "react"

export const useForm = (initialState={}) => {

    const [state, setstate] = useState(initialState);

    const handleChange=({target})=>{
        setstate({
            ...state,
            [target.name]:target.value
        });
    }

    const handleReset=()=>{
        setstate(initialState);
    }

    return [state,handleChange,handleReset]

}
