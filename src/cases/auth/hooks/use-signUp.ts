import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/auth.service";
import { useAuth } from "./use-auth";

export function useSignUp() {
    const { signIn } = useAuth();

    return useMutation({
        mutationFn: AuthService.singIn,
        onSuccess: (data) => signIn(data)
    })
}