import { useCategory } from "@/cases/categories/hooks/use-category";
import HeaderNavigation from "@/components/layout/HeaderNavigation";
import { ModeToggle } from "@/components/layout/mode-toogle";
import Logo from "./Logo";
import AvatarIcon from "./AvatarIcon";


export default function Header () {

    const {
        data: categorias,
        isLoading
    } = useCategory()

    return(
        <>
            {
                categorias && 
                <header className="flex items-center justify-between w-full px-6 py-3 border-b bg-background">
                    <Logo />

                    <HeaderNavigation categorias={categorias} isLoading={isLoading}/>

                    <div className="flex gap-8">
                        <AvatarIcon />

                        <ModeToggle />
                    </div>
                </header>
            }
        </>
    )
}