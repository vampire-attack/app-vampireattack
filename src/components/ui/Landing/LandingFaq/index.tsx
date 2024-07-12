"use client";

import clsx from "clsx";
import styles from "./styles.module.scss";
import { Text, Title } from "@mantine/core";
import { useEffect } from "react";

export const LandingFaq = () => {
  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadScript("https://code.jquery.com/jquery-3.6.0.min.js");
        await loadScript("../lib/fadescroll.js");

        const items = document.querySelectorAll(".appear2");
        const itemsAppear = document.querySelectorAll(".appear3");
        const active = function (entries: any) {
          entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("inview2");
            } else {
              entry.target.classList.remove("inview2");
            }
          });
        };
        const io2 = new IntersectionObserver(active);
        for (let i = 0; i < items.length; i++) {
          io2.observe(items[i]);
        }

        // appear
        const active2 = function (entries: any) {
          entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("inview2");
            } else {
              entry.target.classList.remove("inview2");
            }
          });
        };
        const io3 = new IntersectionObserver(active2);
        for (let i = 0; i < itemsAppear.length; i++) {
          io2.observe(itemsAppear[i]);
        }

        // scroller
        $(window).scroll(function () {
          const menu = document.querySelector("#menu");
          if (menu === null) {
            return;
          }
          if (window.scrollY > 300) {
            if (!menu.classList.contains("fixed-top")) {
              menu.classList.add("fixed-top");
            }
          } else {
            if (menu.classList.contains("fixed-top")) {
              menu.classList.remove("fixed-top");
            }
          }
        });
      } catch (error) {
        console.error(error);
      }

      const images = document.querySelectorAll(".floating-image");

      document.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const deltaX = (clientX - centerX) / centerX;
        const deltaY = (clientY - centerY) / centerY;

        images.forEach((image: any, index) => {
          const depth = (index + 1) * 10;
          const offsetX = -deltaX * depth;
          const offsetY = -deltaY * depth;
          image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
      });
    };

    loadScripts();
  }, []);

  return (
    <div className="py-10 px-[12%] relative block md:flex items-center">
      <div
        className={clsx(
          styles.imageWrapper,
          "flex-[5] text-center hidden md:block"
        )}
      >
        <img
          src="/img/el-1.png"
          className={clsx("floating-image", styles.el_1)}
          alt="What it is"
        />
        <img
          src="/img/el-2.png"
          className={clsx("floating-image", styles.el_2)}
          alt="What it is"
        />
        <img
          src="/img/el-3.png"
          className={clsx("floating-image", styles.el_3)}
          alt="What it is"
        />
        <img
          src="/img/el-4.png"
          className={clsx("floating-image", styles.el_4)}
          alt="What it is"
        />
      </div>

      <div className="flex-[7] flex flex-col gap-16">
        <div>
          <Title order={3}>
            What is <br /> Vampire Attack?
          </Title>
          <Text size="md" className="fauna-one !pt-10" c="textGray2">
            We are attacking the top DeFi protocols: Uniswap, Sushiswap, 1inch,
            and Curve. They have all betrayed their users and can't execute.
            This is the revenge of the users.
          </Text>
        </div>
        <div>
          <Title order={3}>WHY?</Title>
          <Text size="md" className="fauna-one !pt-10" c="textGray2">
            These protocols have failed their users. It's time to take action
            and reclaim control.
          </Text>
        </div>
        <div>
          <Title order={3}>When?</Title>
          <Text size="md" className="fauna-one !pt-10" c="textGray2">
            The time is NOW. Join the attack and migrate your liquidity.
          </Text>
        </div>
      </div>
    </div>
  );
};
