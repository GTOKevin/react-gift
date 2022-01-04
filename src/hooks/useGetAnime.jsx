import { useEffect, useState } from "react"
import { FecthAnime } from "../helpers/FecthAnime";

export const useGetAnime = (anime='One Piece',cantidad=10) => {

    const [state, setstate] = useState({data:[],loading:false})

    useEffect(()=>{

        FecthAnime(anime,cantidad).then(r=>{
            setstate({data:r,loading:true});
        })

    },[anime,cantidad]);


    return state;
}
