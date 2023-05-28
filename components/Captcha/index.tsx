"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/navigation";

type Props = {};

enum State {
  Init = "init",
  Loading = "loading",
  Ready = "ready",
}

export default function Captcha({}: Props) {
  const router = useRouter();
  const [state, setState] = useState(State.Init);

  const handleClick = () => {
    if (state === State.Init) {
      setState(State.Loading);
      // setTimeout(() => setState(State.Ready), 1000);
      setTimeout(() => router.push("/1"), 1500);
    }
  };

  const getCheckbox = () => {
    switch (state) {
      case State.Init:
        return <div className={styles.checkbox} onClick={handleClick} />;
      case State.Loading:
        return <CircularProgress className={styles.loading_spinner} />;
      case State.Ready:
        return <CheckIcon className={styles.ready_icon} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.checkbox_wrapper}>{getCheckbox()}</div>
      <div>{"I'm not Waldo"}</div>
      <div className={styles.logo_container}>
        <div className={styles.image_wrapper}>
          <Image src={"/waldo-logo.png"} alt={`Waldo logo`} fill sizes="10vw" />
        </div>
        <span className={styles.text_row}>reWALDO</span>
        <span className={styles.text_row}>
          <a>Privacy</a>&#8226;<a>Terms</a>
        </span>
      </div>
    </div>
  );
}
