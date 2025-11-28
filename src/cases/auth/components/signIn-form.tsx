"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSignIn } from "../hooks/use-signIn";

export default function SignInForm() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useSignIn(() => {
    navigate("/");
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    mutate({
      email,
      password,
    });
  }

  return (
    <Card className="flex w-96 mx-auto my-20 justify-items-center shadow-lg">
      <CardHeader>
          <CardTitle className="text-center">Acessar Conta</CardTitle>
        </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seuemail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isError && (
            <p className="text-sm text-red-500">
              {(error as any)?.response?.data?.message ||
                "Falha ao entrar. Tente novamente."}
            </p>
          )}


          <p className="text-center text-sm mt-2">
              Não possui conta?{""}
              <Button
                variant="link"
                className="px-1"
                type="button"
                onClick={() => navigate("/increver-se")}
              >
                Increva-se
              </Button>
            </p>

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
