import { useCategory } from "@/cases/categories/hooks/use-category";
import HeaderNavigation from "@/components/layout/HeaderNavigation";
import Logo from "./Logo";
import AvatarIcon from "./AvatarIcon";
import CartIcon from "./CartIcon";
import { ModeToggle } from "./mode-toogle";
import { Separator } from "../ui/separator";


export default function Header () {

    const {
        data: categorias,
        isLoading
    } = useCategory()

    return(
        <>
            {
                categorias && 
                <div className="w-full">
                    <div className="flex justify-end px-3 py-1">
                        <ModeToggle />
                    </div>
                    <Separator />
                    <header className="flex items-center justify-between w-full px-6 py-3 border-b bg-background">
                        <Logo />

                        <HeaderNavigation categorias={categorias} isLoading={isLoading}/>

                        <div className="flex gap-2">
                            <AvatarIcon />

                            <CartIcon />
                        </div>
                    </header>
                </div>
            }
        </>
    )
}