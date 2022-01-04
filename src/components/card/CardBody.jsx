import { faFan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CardScreen } from "./CardScreen";

 const CardBody = ({obj}) => {

    const {data,loading} = obj;

    console.log(data);
    console.log(loading);

    return (
        <div className='grid grid-cols-12 mt-7'>        

        
        {
                    !loading
                    ?<div className="col-span-full text-center text-indigo-600"><FontAwesomeIcon className="animate-spin" icon={faFan} size="6x" /></div>
                    :(data.length===0)
                    ?<div className="col-span-full text-center text-3xl font-semibold text-indigo-600">No encontrado</div>
                    :data.map(r=>{
                        return <CardScreen key={r.id} obj={r} />
                    })
        }
        <div className='col-span-full'>
            <h3 className='font-semibold text-2xl text-gray-500'>Gift Encontrados : {data.length} </h3>
        </div>
        </div>
    )
}

export default React.memo(CardBody);

