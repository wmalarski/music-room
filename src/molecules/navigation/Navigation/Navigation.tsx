import { useRouter } from "next/router";
import React from "react";
import NavigationView from "../NavigationView/NavigationView";

export type NavigationProps = {
  right?: React.ReactNode;
};

const Navigation = ({ right }: NavigationProps): JSX.Element => {
  const router = useRouter();

  return (
    <NavigationView right={right} onHomeClicked={() => router.push("/")} />
  );
};

export default Navigation;
