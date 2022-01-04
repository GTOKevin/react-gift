import { faFan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAnime } from "../../hooks/useGetAnime"
import { CardScreen } from "../card/CardScreen";

export const HomeScreen = () => {
   const {data,loading}=useGetAnime();
  
    return (
        <div>
                <h3 className="text-4xl text-center font-bold">Bienvenidos!!!</h3>
                <hr />
                <div className="grid grid-cols-12 mt-7">
                    {
                        !loading
                        ?<div className="col-span-full text-center text-indigo-600"><FontAwesomeIcon className="animate-spin" icon={faFan} size="6x" /></div>
                        :(data.length===0)
                        ?<div>No encontrado</div>
                        :data.map(r=>{
                            return <CardScreen key={r.id} obj={r} />
                        })
                    }
                </div>
        </div>
    )
}
