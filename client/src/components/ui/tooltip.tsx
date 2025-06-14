import React from "react";

export const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="tooltip-provider">{children}</div>;
};
