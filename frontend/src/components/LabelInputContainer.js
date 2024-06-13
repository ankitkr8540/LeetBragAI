import React from "react";
import { cn } from "../utils/cn";

const FormContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default FormContainer;
