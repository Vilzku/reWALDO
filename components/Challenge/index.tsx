"use client";

import { useState } from "react";
import Tile from "./Tile";
import styles from "./styles.module.scss";
import Controls from "./Controls";

interface Props {
  id: string;
  answer: number[];
}

export default function Challenge({ id, answer }: Props) {
  const [selectedTiles, setSelectedTiles] = useState<number[]>([]);

  const toggleTile = (tileId: number) => {
    if (selectedTiles.includes(tileId)) {
      setSelectedTiles((prevTiles) => prevTiles.filter((t) => t !== tileId));
    } else {
      setSelectedTiles((prevTiles) => [...prevTiles, tileId]);
    }
  };

  const checkAnswer = () => {
    if (answer.length !== selectedTiles.length) return false;
    const wrongAnswer = selectedTiles
      .map((tileId) => answer.includes(tileId))
      .includes(false);
    return !wrongAnswer;
  };

  return (
    <>
      <div className={styles.waldo_container}>
        {[...Array(48)].map((_, tileId) => (
          <Tile
            key={tileId}
            waldoId={id}
            tileId={tileId}
            onClick={toggleTile}
            selected={selectedTiles.includes(tileId)}
          />
        ))}
      </div>
      <Controls onConfirm={checkAnswer} />
    </>
  );
}
