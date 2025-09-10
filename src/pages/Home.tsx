import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ProductList from "@/components/ui/productList"
import { SideBar } from "@/components/ui/sideBar"
import { ShoppingCart, Store, Menu } from "lucide-react"
import { useState } from 'react'
import { Link } from "react-router-dom"
import type { Product } from "@/components/ui/productList"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";











const Home = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [productModalOpen, setProductModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)




    return (
        <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${productModalOpen ? 'blur-xs' : ''}`}>
            <div className="flex h-screen">
                {/* Sidebar */}
                <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-30 transition-transform duration-300 ease-in-out`}>
                    <SideBar />
                </div>

                {/* Overlay para móvil */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Contenido principal */}
                <main className="flex-1 flex flex-col overflow-hidden">

                    {/* Contenido */}
                    <div className="flex-1 p-4 lg:p-6 overflow-auto">
                        <div className="max-w-7xl mx-auto space-y-6">
                            {/* Tarjeta de bienvenida */}
                            <Card
                                className="p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-200 shadow-lg">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                                    <div>
                                        <h2 className="text-2xl font-bold text-emerald-900 mb-2">¡Bienvenido al sistema!</h2>
                                        <p className="text-emerald-700">Selecciona una categoría del menú lateral para comenzar a agregar productos a tu pedido.</p>
                                    </div>
                                    <div className="p-3 bg-emerald-700/20 rounded-full">
                                        <Store className="h-8 w-8 text-emerald-700" />
                                    </div>
                                </div>
                            </Card>

                            {/* Estadísticas rápidas */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-blue-100 rounded-lg">
                                            <ShoppingCart className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Productos en carrito</p>
                                            <p className="text-2xl font-bold">0</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-green-100 rounded-lg">
                                            <Store className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Total del pedido</p>
                                            <p className="text-2xl font-bold">$0</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-purple-100 rounded-lg">
                                            <Menu className="h-5 w-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Categorías</p>
                                            <p className="text-2xl font-bold">5</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Lista de productos */}
                            {/* Nota: e.stopPropagation() evita que se cierre el modal si haces click dentro del botón. */}
                            <Card
                                className="shadow-lg border-border bg-card"
                                onClick={() => setProductModalOpen(true)}
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-foreground">Productos Disponibles</h3>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="hover:scale-105 transition-transform duration-200"
                                            onClick={(e) => { e.stopPropagation(); setProductModalOpen(true); }}
                                        >
                                            Ver todo
                                        </Button>
                                    </div>

                                    <div className="bg-muted/30 rounded-lg p-4">
                                        <ProductList
                                            onProductClick={(product) => {
                                                setSelectedProduct(product);
                                                setProductModalOpen(true);
                                            }}
                                        />

                                    </div>
                                </div>

                            </Card>

                        </div>
                    </div>

                    <Dialog open={productModalOpen} onOpenChange={setProductModalOpen}>
                        <DialogContent className="sm:max-w-md bg-white/90 backdrop-blur-md shadow-xl rounded-lg">
                            <DialogHeader>
                                <DialogTitle>
                                    {selectedProduct ? selectedProduct.name : "Producto"}
                                </DialogTitle>
                                <DialogDescription>
                                    {selectedProduct
                                        ? `Precio: ${selectedProduct.price}`
                                        : "Selecciona un producto"}
                                </DialogDescription>
                            </DialogHeader>


                            {/* Imagen del producto */}
                            {selectedProduct && (
                                <div className="mt-4">
                                    <img
                                        src={selectedProduct.imageSrc}
                                        alt={selectedProduct.imageAlt}
                                        className="w-full rounded-md shadow-md"
                                    />
                                    <p className="text-sm text-muted-foreground mt-2">
                                        {selectedProduct.imageAlt}
                                    </p>
                                </div>
                            )}




                            <div className="mt-4">
                                {selectedProduct && (
                                    <div>
                                        <p className="text-muted-foreground">
                                            Información detallada del producto.
                                        </p>
                                        <Button className="mt-4 w-full">Agregar al carrito</Button>
                                    </div>
                                )}
                                <div className="mt-6 flex justify-end">
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <footer className="bg-card border-b border-border shadow-sm">
                        <div className="flex items-center justify-between p-4 lg:p-6">
                            <div className="flex items-center space-x-4">
                                {/* Botón menú móvil */}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="lg:hidden"
                                    onClick={() => setSidebarOpen(!sidebarOpen)}
                                >
                                    <Menu className="h-6 w-6" />
                                </Button>

                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-emerald-700/20 rounded-lg">
                                        <Store className="h-6 w-6 text-emerald-700" />
                                    </div>
                                    <div>
                                        <h1 className="text-xl lg:text-2xl font-bold text-foreground">McRaulo</h1>
                                        <p className="text-sm text-muted-foreground hidden sm:block">Sistema de Punto de Venta</p>
                                    </div>
                                </div>
                            </div>

                            {/* Carrito */}
                            <Button
                                variant="outline"
                                className="flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                <span className="hidden sm:inline">Carrito</span>
                                <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-1 min-w-[20px] h-5 flex items-center justify-center">
                                    0
                                </span>
                            </Button>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    )
}

export default Home