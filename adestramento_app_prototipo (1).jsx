// Protótipo navegável do aplicativo "Comando Canino"
// As telas são em escala de cinza, com foco na usabilidade

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function ComandoCaninoApp() {
  const [stage, setStage] = useState("home");
  const [profileSaved, setProfileSaved] = useState(false);
  const [trainingCompleted, setTrainingCompleted] = useState(false);

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      {stage === "home" && (
        <Card onClick={() => setStage("login")}> 
          <CardContent className="p-4 text-center">
            <h1 className="text-2xl font-bold mb-2">Comando Canino</h1>
            <p className="text-sm">Seu treinador digital para cães iniciantes</p>
            <Button className="mt-4">Entrar</Button>
          </CardContent>
        </Card>
      )}

      {stage === "login" && (
        <Card>
          <CardContent className="p-4 space-y-3">
            <h2 className="text-xl font-semibold">Login</h2>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" type="password" />
            <Button onClick={() => setStage("dashboard")}>Entrar</Button>
            <Button variant="secondary" onClick={() => setStage("cadastro")}>Cadastrar</Button>
          </CardContent>
        </Card>
      )}

      {stage === "cadastro" && (
        <Card>
          <CardContent className="p-4 space-y-3">
            <h2 className="text-xl font-semibold">Cadastro</h2>
            <Input placeholder="Nome completo" />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" type="password" />
            <Button onClick={() => setStage("dashboard")}>Cadastrar</Button>
            <Button variant="secondary" onClick={() => setStage("login")}>Voltar</Button>
          </CardContent>
        </Card>
      )}

      {stage === "dashboard" && (
        <Card>
          <CardContent className="p-4 space-y-3">
            <h2 className="text-xl font-semibold">Bem-vindo(a)!</h2>
            <p className="text-sm text-muted-foreground">Escolha uma opção abaixo para continuar.</p>
            <Button onClick={() => setStage("treino")}>Treino do Dia</Button>
            <Button onClick={() => setStage("perfil")}>Perfil do Cão</Button>
            <Button onClick={() => setStage("estatisticas")}>Estatísticas</Button>
            <Button variant="secondary" onClick={() => setStage("home")}>Sair</Button>
          </CardContent>
        </Card>
      )}

      {stage === "treino" && (
        <Card>
          <CardContent className="p-4 space-y-3">
            <h2 className="text-xl font-semibold">Treino do Dia</h2>
            <p>Comando: "Sentar"</p>
            <p>Duração: 10 minutos</p>
            <Button>Ver vídeo explicativo</Button>
            <Button onClick={() => setTrainingCompleted(true)}>
              Marcar como concluído
            </Button>
            {trainingCompleted && <p className="text-green-600">✔ Treino marcado como concluído!</p>}
            <Button variant="secondary" onClick={() => setStage("dashboard")}>Voltar</Button>
          </CardContent>
        </Card>
      )}

      {stage === "perfil" && (
        <Card>
          <CardContent className="p-4 space-y-3">
            <h2 className="text-xl font-semibold">Perfil do Cão</h2>
            <Input placeholder="Nome do cão" defaultValue="Lilo" />
            <Input placeholder="Idade em meses" defaultValue="2" />
            <Input placeholder="Raça (opcional)" defaultValue="Border Collie" />
            <Button onClick={() => {
              setProfileSaved(true);
              setStage("dashboard");
            }}>
              Salvar
            </Button>
            {profileSaved && <p className="text-green-600">✔ Perfil salvo com sucesso!</p>}
          </CardContent>
        </Card>
      )}

      {stage === "estatisticas" && (
        <Card>
          <CardContent className="p-4 space-y-3">
            <h2 className="text-xl font-semibold">Estatísticas</h2>
            <p>Treinos concluídos: 12</p>
            <p>Comandos dominados: 3</p>
            {trainingCompleted && <p>✅ Treino de hoje: concluído!</p>}
            <Button variant="secondary" onClick={() => setStage("dashboard")}>Voltar</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
