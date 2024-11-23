"use client";

import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

interface ICustomProviders {
  children: ReactNode;
}

export default function CustomProviders(props: ICustomProviders) {
  return <NextUIProvider>{props.children}</NextUIProvider>;
}
