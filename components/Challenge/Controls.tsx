"use client";

import styles from "./styles.module.scss";
import RefreshIcon from "@mui/icons-material/Refresh";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

interface Props {
  onConfirm: () => boolean;
}

export default function Controls({ onConfirm }: Props) {
  const [success, setSuccess] = useState<boolean>();

  const handleConfirm = () => {
    console.warn("yikes?");
    const isAnswerCorrect = onConfirm();
    setSuccess(isAnswerCorrect);
  };

  return (
    <div className={styles.controls}>
      <div className={styles.icon_button_container}>
        <IconButton disabled>
          <RefreshIcon />
        </IconButton>
        <IconButton disabled>
          <HeadphonesIcon />
        </IconButton>
        <IconButton disabled>
          <InfoOutlinedIcon />
        </IconButton>
      </div>
      {success !== undefined &&
        (success ? (
          <div className={styles.success_text}>Correct</div>
        ) : (
          <div className={styles.fail_text}>Try again!</div>
        ))}
      <Button
        variant="contained"
        className={styles.verify_button}
        onClick={handleConfirm}
      >
        Verify
      </Button>
    </div>
  );
}
