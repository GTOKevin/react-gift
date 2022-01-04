import { Route, Routes } from "react-router-dom"
import { HomeScreen } from "../components/inicio/HomeScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/Navbar"
import { NotFound } from "../components/ui/NotFound"

export const Dasboard = () => {
    return (
       <>
        <Navbar />

            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <Routes>

                    <Route path='/' element={<HomeScreen />} />
                    <Route path='Home' element={<HomeScreen />} />
                    <Route path='Buscar' element={<SearchScreen />} />
                    <Route path='*' element={<NotFound />} />

                </Routes>
            </div>

       </>
    )
}
