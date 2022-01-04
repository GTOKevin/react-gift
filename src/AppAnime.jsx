import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init=()=>{
    return JSON.parse(localStorage.getItem('usuario'))||{logged:false}
}

export const AppAnime = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(()=>{
        localStorage.setItem('usuario',JSON.stringify(user));
    },[user])

    return (
      <AuthContext.Provider value={
          {user,
        dispatch}
      }>
          <AppRouter />
      </AuthContext.Provider>
    )
}
