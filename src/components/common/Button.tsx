import React from "react";
import {
  Button as MtButton,
  ButtonProps,
  PolymorphicComponentProps,
} from "@mantine/core";

type ButtonType = PolymorphicComponentProps<"button", ButtonProps>;

export const Button = ({ className, children, ...props }: ButtonType) => {
  return (
    <MtButton
      className={`!text-black !px-6 !py-2 !nunito-semibold ${className}`}
      variant="primary"
      tt="uppercase"
      size="sm"
      radius={5}
      {...props}
    >
      {children}
    </MtButton>
  );
};
