import { useRouter } from "next/router";
import React from "react";
import NavigationView, {
  NavigationViewProps,
} from "../NavigationView/NavigationView";

export type NavigationProps = {
  right?: React.ReactNode;
  View?: React.ComponentType<NavigationViewProps>;
};

const Navigation = ({
  right,
  View = NavigationView,
}: NavigationProps): JSX.Element => {
  const router = useRouter();

  return <View right={right} onHomeClicked={() => router.push("/")} />;
};

export default Navigation;
