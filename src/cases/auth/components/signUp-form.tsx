"use client";

import { useState } from "react";
import { useSignUp } from "../hooks/use-signUp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SignUpForm() {
  const navigate = useNavigate();
  const { signUp, isPending, error } = useSignUp();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await signUp(form);
      toast.success("Conta criada com sucesso!");
      navigate("/login");
      
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex w-96 mx-auto my-20 justify-items-center shadow-lg">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Criar Conta</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Seu nome"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Seu email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Senha */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Sua senha"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
              />
            </div>

            {/* Botão */}
            <Button className="w-full" disabled={isPending}>
              {isPending ? "Criando..." : "Criar conta"}
            </Button>

            {/* Erro */}
            {error && (
              <p className="text-red-500 text-sm text-center">
                {(error as any)?.response?.data?.message ??
                  "Erro ao criar conta"}
              </p>
            )}

            {/* Já tem conta? */}
            <p className="text-center text-sm mt-2">
              Já possui conta?{" "}
              <Button
                variant="link"
                className="px-1"
                type="button"
                onClick={() => navigate("/login")}
              >
                Entrar
              </Button>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
