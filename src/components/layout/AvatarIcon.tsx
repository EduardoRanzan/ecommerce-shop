import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

import { UserIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/cases/auth/hooks/use-auth";
import { toast } from "sonner";



export default function AvatarIcon() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <Button variant="outline" onClick={() => navigate("/login")}>
        Entrar
      </Button>
    );
  }

  const initials = user.email
    ? user.email.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase()
    : "US";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Avatar className="h-10 w-10 flex items-center justify-center bg-gray-400 rounded-xl">
          <UserIcon className="h-10 w-10" />
          <AvatarFallback className="text-lg">
            {initials}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => navigate("/perfil")}>
          Meu perfil
        </DropdownMenuItem>

        <DropdownMenuItem
          className="text-red-500"
          onClick={() => {
            signOut();
            navigate("/");
            toast.success("Você saiu da sua conta com sucesso!");
          }}
        >
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
