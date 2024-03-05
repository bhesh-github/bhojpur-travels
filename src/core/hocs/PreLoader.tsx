"use client";

import { AnyAction } from "@reduxjs/toolkit";
import { store } from "core/store";
import { FC, useRef } from "react";

export type IPreloaderProps = {
  actionHandler: (payload: unknown) => AnyAction;
  actionPayload: any;
};

const PreLoader: FC<IPreloaderProps> = ({ actionHandler, actionPayload }) => {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(actionHandler(actionPayload));
    loaded.current = true;
  }
  return null;
};

export default PreLoader;
