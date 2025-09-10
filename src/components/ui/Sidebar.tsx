"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import logo from "@/assets/logo_mcraulo.svg"

// Iconos SVG para cada categoría
const HamburgerIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 13h-20c-.552 0-1-.447-1-1s.448-1 1-1h20c.552 0 1 .447 1 1s-.448 1-1 1zm0-4h-20c-.552 0-1-.447-1-1s.448-1 1-1h20c.552 0 1 .447 1 1s-.448 1-1 1zm0 8h-20c-.552 0-1-.447-1-1s.448-1 1-1h20c.552 0 1 .447 1 1s-.448 1-1 1z" />
    </svg>
)

const FriesIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.5 2h-1c-.276 0-.5.224-.5.5v19c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-19c0-.276-.224-.5-.5-.5zm-3 1h-1c-.276 0-.5.224-.5.5v18c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-18c0-.276-.224-.5-.5-.5zm-3 2h-1c-.276 0-.5.224-.5.5v16c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-16c0-.276-.224-.5-.5-.5zm-3-1h-1c-.276 0-.5.224-.5.5v17c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-17c0-.276-.224-.5-.5-.5zm-3-1h-1c-.276 0-.5.224-.5.5v18c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-18c0-.276-.224-.5-.5-.5z" />
    </svg>
)

const DrinkIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 2v6h.5L6 20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2L18.5 8H19V2H5zm2.5 6h9l-.5 12H8l-.5-12zM7 4h10v2H7V4z" />
    </svg>
)

const ComboIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
)

const DessertIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
)

const ExtrasIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </svg>
)

const UserIcon = () => (
    <img
        src="https://pbs.twimg.com/profile_images/1505286562895982594/_el7rYSf_400x400.jpg"
        alt="Usuario"
        className="w-10 h-10 rounded-full object-cover"
    />
)

const LogoIcon = () => (
    <img className="scale-130" src={logo} alt="logo mcraulo" />
)

const categories = [
    {
        id: "hamburguesas",
        name: "Hamburguesas",
        icon: HamburgerIcon,
    },
    {
        id: "papas",
        name: "Papas",
        icon: FriesIcon,
    },
    {
        id: "bebidas",
        name: "Bebidas",
        icon: DrinkIcon,
    },

]

export function SideBar() {
    const [activeCategory, setActiveCategory] = useState<string>("")

    return (
        <div className="w-80 bg-emerald-900 text-white flex flex-col shadow-2xl">
            <div className="p-6 border-b border-emerald-800">
                {/* Logo */}
                <div className="flex items-center justify-center mb-4">
                    <div className="bg-emerald-800 p-6 rounded-full">
                        <LogoIcon />
                    </div>
                </div>

                {/* Usuario */}
                <div className="flex items-center gap-3 bg-emerald-800 p-3 rounded-lg">
                    <div className="bg-emerald-600 p-0.5 rounded-full">
                        <UserIcon />
                    </div>
                    <div>
                        <p className="font-medium text-sm">Momo Benavidez</p>
                        <p className="text-xs text-emerald-200">Socio</p>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="p-4 border-b border-emerald-800 bg-red-950" >
                <h2 className="text-lg font-semibold text-center">Menú</h2>
                <p className="text-sm text-emerald-200 text-center mt-1">Selecciona una categoría</p>
            </div>

            {/* Categories */}
            <div className="flex-1 p-4 space-y-3">
                {categories.map((category) => {
                    const IconComponent = category.icon
                    const isActive = activeCategory === category.id

                    return (
                        <Button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "bg-white hover:bg-red-900 hover:text-white cursor-pointer w-full h-20 flex flex-col items-center justify-center gap-2 text-stone-900 font-semibold transition-all duration-200 transform hover:scale-105",
                            )}
                        >
                            <IconComponent />
                            <span className="text-sm">{category.name}</span>
                        </Button>
                    )
                })}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-emerald-800">
                <div className="text-xs text-emerald-200 text-center">
                    {activeCategory ? (
                        <span className="text-white font-medium">
                            Categoría: {categories.find((c) => c.id === activeCategory)?.name}
                        </span>
                    ) : (
                        "Ninguna categoría seleccionada"
                    )}
                </div>
            </div>
        </div>
    )
}
