import React from "react";
import {
  Button as MtButton,
  ButtonProps,
  PolymorphicComponentProps,
  Text,
} from "@mantine/core";

type ButtonType = PolymorphicComponentProps<"button", ButtonProps>;

export const Button = ({ className, children, ...props }: ButtonType) => {
  return (
    <MtButton
      className={`${className}`}
      variant="primary"
      tt="uppercase"
      size="md"
      radius={5}
      {...props}
    >
      <Text size="sm" fw={600} className="!nunito-semibold" c="black">
        {children}
      </Text>
    </MtButton>
  );
};
