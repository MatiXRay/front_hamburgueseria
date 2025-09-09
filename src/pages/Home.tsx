import React from 'react'
import ProductList from "@/components/ui/productList"
import { SideBar } from "@/components/ui/sideBar"





const Home = () => {
    return (
        <>

            <div className="flex h-screen bg-gray-100">
                <SideBar />
                <main className="flex-1 p-6">
                    <div className="bg-white rounded-lg shadow-sm p-8 h-full">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sistema de Punto de Venta - Hamburguesería</h1>
                        <p className="text-gray-600">Selecciona una categoría del menú lateral para comenzar a agregar productos.</p>


                        <ProductList></ProductList>
                    </div>
                </main>
            </div>


        </>
    )
}

export default Home
