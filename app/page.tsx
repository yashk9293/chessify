"use client";
import { Button, useDisclosure } from "@nextui-org/react";
import { GameSelectionModal } from "@/components";
import { useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGameMode, setSelectedGameMode] = useState("");

  const openModal = (gameMode: string) => {
    setSelectedGameMode(gameMode);
    onOpen();
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-chess-pattern bg-cover bg-center">
      <h1 className="font-black text-green-700 text-5xl sm:text-6xl">Chessify</h1>
      <div className="flex justify-center items-center gap-4">
        <Button
          color="success"
          variant="ghost"
          className="text-white bg-green-700 hover:bg-green-700 text-lg py-3 px-6 rounded-lg"
          onClick={(e) => {
            e.preventDefault();
            openModal("computer");
          }}
        >
          Start Playing
        </Button>
      </div>
      <GameSelectionModal
        isOpen={isOpen}
        onClose={onClose}
        selectedGameMode={selectedGameMode}
      />
    </main>
  );
}
