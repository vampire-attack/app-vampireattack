import styles from "./styles.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { Text, Title } from "@mantine/core";
import { Button } from "@/components/common";

export const LandingMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroImage}>
        <img src="/img/hero/Background-only.png" alt="" />
        <img
          src="/img/hero/red-sun-only1.png"
          alt=""
          className={styles.redSun}
        />
        <img src="/img/hero/bats.png" alt="" />
        <img
          src="/img/hero/red-splash.png"
          alt=""
          className={styles.redSplash}
        />
        <img src="/img/hero/rocks-below.png" alt="" />
        <img src="/img/hero/vampire-and-horse.png" alt="" />
        <img
          src="/img/hero/laser-eyes.png"
          alt=""
          className={styles.layerEyes}
        />
      </div>

      <div className="h-full flex flex-col justify-center">
        <div className={clsx(styles.navbar, "mb-3 mt-1 px-4")}>
          <Link href="/">
            <img
              src="img/navbar-logo.svg"
              alt="Vampire Attack Logo"
              className={styles.logo}
            />
          </Link>
        </div>

        <div className="relative w-[50%] pl-[10%]">
          <Title order={1} tt="uppercase">
            unleash <br /> your fury
          </Title>
          <Text size="md" className="fauna-one !pt-4 !pb-10" c="textGray2">
            Attack the top DeFi protocols and reclaim your power.
          </Text>
          <Button>MIGRATE LIQUIDITY NOW</Button>
        </div>
      </div>
    </div>
  );
};
