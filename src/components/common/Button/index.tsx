import React from "react";
import {
  Button as MtButton,
  ButtonProps,
  PolymorphicComponentProps,
  Text,
} from "@mantine/core";
import styles from "./styles.module.scss";
import clsx from "clsx";

type ButtonType = PolymorphicComponentProps<"button", ButtonProps>;

export const Button = ({ className, children, ...props }: ButtonType) => {
  return (
    <MtButton
      className={clsx(styles.button, className)}
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
