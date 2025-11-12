import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";

export default function AvatarIcon () {
    return(
        <div className="flex items-center gap-3">
            <Button variant="outline">Entrar</Button>
            <Avatar>
            <AvatarImage src="/avatar.png" alt="@eduardo" />
            <AvatarFallback>ED</AvatarFallback>
            </Avatar>
        </div>
    )
}