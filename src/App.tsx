import React, { useState } from "react";
import { TextField } from "./components/TextField";
import { Button } from "./components/Buttons";

export function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [custom, setCustom] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-white text-2xl mb-6">iOS-Style TextField</h1>

      <div className="w-80 space-y-4">
        <TextField
          label="Benutzername"
          placeholder="Gib deinen Namen ein..."
          type="text"
          value={username}
          onChange={setUsername}
        />
        <TextField
          label="E-Mail"
          placeholder="Gib deine E-Mail ein..."
          type="email"
          value={email}
          onChange={setEmail}
        />
        <TextField
          label="Passwort"
          placeholder="••••••••"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <TextField
          label="Ohne Icon"
          placeholder="Kein Icon hier..."
          type=""
          value={custom}
          onChange={setCustom}
        />
      </div>

      <Button variant="primary" className="mt-6">
        Absenden
      </Button>
    </div>
  );
}
