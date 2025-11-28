import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/auth.service";
import type { RegisterDto } from "../dtos/auth.dto";

export function useSignUp() {
    const mutation = useMutation({
        mutationFn: (data: RegisterDto) => AuthService.singUp(data)
    });

    return {
        signUp: mutation.mutateAsync,
        isPending: mutation.isPending,
        error: mutation.error,
        data: mutation.data
    };
}
