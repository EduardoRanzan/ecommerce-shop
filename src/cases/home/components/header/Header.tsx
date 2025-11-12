import { useCategory } from "@/cases/categories/hooks/use-category";
import { Spinner } from "@/components/ui/spinner";
import AvatarIcon from "../../../../components/layout/AvatarIcon";
import Logo from "../../../../components/layout/Logo";
import HeaderNavigation from "@/components/layout/HeaderNavigation";
import { ModeToggle } from "@/components/mode-toogle";


export default function Header () {

    const {
        data: categorias,
        isLoading
    } = useCategory()

    return(
        <>
            {
                isLoading && 
                <>Carregando...<Spinner /></>
            }
            {
                categorias && 
                <header className="flex items-center justify-between w-full px-6 py-3 border-b bg-background">
                    <Logo />

                        <HeaderNavigation categorias={categorias}/>

                    <div className="flex gap-8">
                        <AvatarIcon />

                        <ModeToggle />
                    </div>
                </header>
            }
        </>
    )
}