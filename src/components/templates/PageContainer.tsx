import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function PageContainer({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) window.scrollTo(0, 0);
  }, [location.pathname]);

  return <div {...props}>{children}</div>;
}
