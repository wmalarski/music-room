import { useRouter } from "next/router";
import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

export type NavigationProps = {
  right?: React.ReactNode;
};

const Navigation = ({ right }: NavigationProps): JSX.Element => {
  const router = useRouter();

  return <NavigationBar right={right} onHomeClicked={() => router.push("/")} />;
};

export default Navigation;
