import type { categoryDTO } from "@/cases/categories/DTOS/category.dto"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import ListItem from "./linkItem"
import { Badge } from "../ui/badge"
interface HeaderNavigation {
    categorias: categoryDTO[]
}

export default function HeaderNavigation({categorias}: HeaderNavigation) {
    return (
        <NavigationMenu>
            <NavigationMenuList className="space-x-4">

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Início</NavigationMenuTrigger>
                    <NavigationMenuContent>
                         <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                                        href="/"
                                    >
                                        <div className="mb-2 text-lg font-medium sm:mt-4">
                                        Home Page
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                        Onde tudo começa no nosso site, tenha uma visão geral dos nossos produtos e promoções.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/sobre" title="Sobre nós">
                                Essa é uma loja online fictícia criada para o projeto de conclusão de curso.
                            </ListItem>
                            <ListItem href="/contato" title="Contato">
                                Tem alguma dúvida? pagamentos? produtos? não exite em perguntar.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="mb-3 text-shadow-white font-semibold">
                            <Badge variant="default">Qual categoria você deseja?</Badge>
                        </div>
                        <ul className="grid gap-2 grid-cols-2 min-w-2xs">
                        {categorias?.map((component) => (
                            <ListItem
                            key={component.id}
                            title={component.name}
                            href={`/categoria/${component.id}`}
                            >
                            </ListItem>
                        ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}