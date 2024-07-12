import { Text, Title } from "@mantine/core";
import styles from "./styles.module.scss";
import { Button } from "@/components/common";
import clsx from "clsx";

export const LandingFooter = () => {
  return (
    <div className={clsx(styles.container, "mt-10 p-4")}>
      <div className="flex flex-col items-center text-center gap-10 pt-[250px]">
        <Title order={2}>How to Participate</Title>
        <Text size="md" className="fauna-one">
          Attack the top DeFi protocols and reclaim your power.
        </Text>
        <Button>MIGRATE LIQUIDITY NOW</Button>
      </div>
    </div>
  );
};
