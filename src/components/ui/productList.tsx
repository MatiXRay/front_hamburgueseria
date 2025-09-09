import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"

const products = [
    {
        id: 1,
        name: 'Hamburguesa Clásica',
        href: '#',
        price: '$10',
        imageSrc: 'https://media.istockphoto.com/id/840902892/es/foto/hamburguesa-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=uQIMRE1GPy8nh_WiCmK70qg30fjUaxnStPLVR2KLJHU=',
        imageAlt: 'Hamburguesa clásica con queso, lechuga y tomate',
    },
    {
        id: 2,
        name: 'Hamburguesa Doble',
        href: '#',
        price: '$15',
        imageSrc: 'https://media.istockphoto.com/id/840902892/es/foto/hamburguesa-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=uQIMRE1GPy8nh_WiCmK70qg30fjUaxnStPLVR2KLJHU=',
        imageAlt: 'Hamburguesa doble con queso y bacon',
    },
    {
        id: 3,
        name: 'Hamburguesa Veggie',
        href: '#',
        price: '$12',
        imageSrc: 'https://media.istockphoto.com/id/840902892/es/foto/hamburguesa-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=uQIMRE1GPy8nh_WiCmK70qg30fjUaxnStPLVR2KLJHU=',
        imageAlt: 'Hamburguesa vegetariana con lechuga y tomate',
    },
    {
        id: 4,
        name: 'Hamburguesa BBQ',
        href: '#',
        price: '$14',
        imageSrc: 'https://media.istockphoto.com/id/840902892/es/foto/hamburguesa-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=uQIMRE1GPy8nh_WiCmK70qg30fjUaxnStPLVR2KLJHU=',
        imageAlt: 'Hamburguesa con salsa BBQ y cebolla caramelizada',
    },
]

export default function ProductList() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <Card key={product.id} className="group overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-200 hover:shadow-lg">
                        <div className="relative">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className=" aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-300 "
                            />
                        </div>

                        <div className="p-4">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-lg font-bold text-primary">
                                        {product.price}
                                    </p>
                                </div>
                            </div>

                            <Button
                                size="sm"
                                className="w-full h-8 text-xs font-medium bg-emerald-700 hover:bg-emerald-800 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                                onClick={(e) => {
                                    e.preventDefault()
                                    console.log(`Agregado al carrito: ${product.name}`)
                                }}
                            >
                                <Plus className="h-3 w-3 mr-1" />
                                Agregar
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}