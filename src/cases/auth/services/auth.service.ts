import { api } from "@/lib/axios";
import type { AuthResponseDto, CredentialsDto, RegisterDto, UserResponseDto } from "../dtos/auth.dto";

const endPonint = '/auth';

export const AuthService = {

    async singUp (data: RegisterDto): Promise<UserResponseDto> {
        const result = await api.post(`${endPonint}/singin`, data)

        return result.data
    },

    async singIn (data: CredentialsDto): Promise<AuthResponseDto> {
        const result = await api.post(`${endPonint}/singin`, data)

        return result.data
    }
}