import { ReactNode } from "react";

export type ButtonProps = {
  variant?: "grey";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

const buttonVariantConfig = {
  grey: {
    classes:
      "bg-neutral-500 rounded px-2 hover:bg-neutral-600 hover:text-neutral-200",
  },
};

export const Button = ({
  children,
  className,
  onClick = () => {},
  variant = "grey",
}: ButtonProps) => {
  return (
    <button
      className={`${buttonVariantConfig[variant].classes} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};
