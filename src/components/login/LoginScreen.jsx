import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import Swal from "sweetalert2";

export const LoginScreen = () => {

    const [{nombre,email},handleChange]=useForm({nombre:'',email:''});

    const {dispatch}=useContext(AuthContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const action={
            type:'login',
            payload:{nombre:nombre,email:email}
        }
        if(formValidar()){
            dispatch(action);
        }
       
    }

    const formValidar=()=>{

        if(nombre.trim().length<3){
            Swal.fire('Nombre','minimo 3 caracteres','error');
            return false;
        }else if(!validator.isEmail(email)){
            Swal.fire('Email','por favor validar los caracteres el email','error');
            return false;
        }
        return true;
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-blue-600">
                <form className="w-4/6 sm:w-3/6 md:w-2/5 lg:w-2/6 xl:w-1/4 px-6 py-8 bg-gray-50 rounded" onSubmit={handleSubmit}>
                     <h3 className="text-center text-4xl font-bold">Login</h3>
                     <hr className="text-gray-200 mb-10" />

                     <input className="w-full mb-6 rounded ring transition delay-200 ease-in-out focus:outline-none focus:ring-indigo-500 pl-2 focus:font-semibold" 
                     placeholder="Ingresa tu nombre"
                     autoComplete="off"
                     name="nombre"
                     value={nombre}
                     onChange={handleChange}
                     />
                     
                     <input className="w-full mb-6 rounded ring transition delay-200 ease-in-out focus:outline-none focus:ring-indigo-500 pl-2 focus:font-semibold"
                     placeholder="Ingresa tu email"
                     autoComplete="off"
                     name="email"
                     value={email}
                     onChange={handleChange}
                     />  

                     <button className="w-full py-1.5 rounded bg-indigo-500 text-white font-semibold transition delay-200 ease-in-out hover:bg-indigo-600">
                         Ingresar
                     </button>
                </form>
        </div>
    )
}
