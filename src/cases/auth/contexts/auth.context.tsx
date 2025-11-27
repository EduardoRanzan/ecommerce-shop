import { createContext, useEffect, useState } from "react";
import type { AuthResponseDto, UserResponseDto } from "../dtos/auth.dto";

interface AuthContextType {
    user: UserResponseDto | null;
    signIn: (data: AuthResponseDto) => void;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthContextProviderProps = {
    children: React.ReactNode;
};

export function AuthContextProvider({
    children
}: AuthContextProviderProps) {
    const [user, setUser] = useState<UserResponseDto | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const userStoraged = localStorage.getItem("user");
        const tokenStoraged = localStorage.getItem("token");

        if (userStoraged) {
            setUser(JSON.parse(userStoraged));
        }

        if (tokenStoraged) {
            setToken(tokenStoraged);
        }

    }, []);

    function signIn(data: AuthResponseDto) {
        setUser(data.user);

        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.acessToken);
    }

    function signOut() {
        setUser(null);

        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    return (

        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )    
}