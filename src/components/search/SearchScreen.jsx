import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useGetAnime } from '../../hooks/useGetAnime'
import queryString from 'query-string';
import Swal from 'sweetalert2';
import  CardBody  from '../card/CardBody';

export const SearchScreen = () => {

    const navigate=useNavigate();
    const location =useLocation();
    

  
    const {q='',c=''}=queryString.parse(location.search);

    

    const [{SearchText,cantidad},handleChange]=useForm({SearchText:q,cantidad:c})
    const data=useGetAnime(q,c);


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formValidate()){
            navigate(`?q=${SearchText}&c=${cantidad}`);
        }
      
    }

    const formValidate=()=>{
        if(SearchText.trim().length===0){
            Swal.fire('Buscar','Campo de busqueda no puede ser vacio','error');
            return false;
        }else if(isNaN(cantidad))
        {
            Swal.fire('Cantidad','El valor de solo puede ser numerico','error');
            return false; 
        }else if(parseInt(cantidad.trim())<=0 || cantidad.trim().length===0){
            Swal.fire('Cantidad','Valor mayor a 0','error');
            return false;
        }
        return true;
    }
    
    return (
        <div>
            <h3 className="text-4xl text-center font-bold">Buscar Gift!!!</h3>
            <hr />

            <form className="grid grid-cols-9 mt-5" onSubmit={handleSubmit}>
            <div className='col-span-full md:col-span-6 md:pr-4'>
                <input className='w-full ring rounded pl-2 transition delay-200 ease-in-out focus:outline-none focus:ring-indigo-500 focus:font-semibold'
                placeholder='Ingresar nombre a buscar'
                autoComplete='off'
                name='SearchText'
                value={SearchText}
                onChange={handleChange} />
              </div>

            <div className='col-span-full mt-5 md:mt-0 md:col-span-3 md:pr-4'>
            <input className='w-full ring rounded pl-2 transition delay-200 ease-in-out focus:outline-none focus:ring-indigo-500 focus:font-semibold'
                placeholder='Cantidad de Gift'
                autoComplete='off'
                name='cantidad'
                value={cantidad}
                onChange={handleChange} />

            </div>

                <div className='col-span-full mt-5'>
                    <button className='py-0.5 w-full bg-indigo-500 rounded text-white hover:bg-indigo-600 hover:text-gray-50 focus:outline-none'
                    type='submit'>Buscar</button>
                </div>
            </form>

            <CardBody obj={data} />

            {/* <div className='grid grid-cols-12 mt-7'>
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
                <h3 className='font-semibold text-2xl text-gray-500'>Gift Encontrados : {data.length}</h3>
            </div>
            </div> */}

        </div>
    )
}
