"use client";

import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  waldoId: string;
  tileId: number;
  onClick: (tile: number) => void;
  selected: boolean;
}

export default function Tile({ waldoId, tileId, onClick, selected }: Props) {
  return (
    <div className={styles.image_wrapper} onClick={() => onClick(tileId)}>
      {selected && <div className={styles.selected_icon} />}
      <Image
        src={`/waldo-${waldoId}/${tileId}.png`}
        alt={`tile-${tileId}`}
        fill
        quality={100}
        sizes="10vw"
      />
    </div>
  );
}
