"use client";

import MenuLanding, { ItemMenuLandingProps } from "./menu";
import LogoSection from "~/components/shared/logo/logoSection";
import * as htmlToImage from "html-to-image";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";

const menuItems: ItemMenuLandingProps[] = [
  { label: "Home", startIcon: <span>icon</span>, href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", endIcon: <span>icon</span>, href: "/contact" },
];

const HeaderLanding = () => {
  const { theme, setTheme } = useTheme();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const captureScreenshot = async () => {
    const dataUrl = await htmlToImage.toPng(document.body, {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
    });
    setImageUrl(dataUrl);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  console.log({ imageUrl });

  return (
    <div
      className="fixed left-0 right-0 top-0 z-10 bg-black-500/70 backdrop-blur-sm"
      // style={{
      //   borderBottom: "1px solid",
      //   borderImageSlice: "1",
      //   borderImageSource:
      //     "linear-gradient(to left, rgba(0, 200, 83, 0) 5%, rgb(255 255 255 / 30%) 50%, rgba(255, 255, 255, 0) 95%, rgba(255, 255, 255, 0) 100%)",
      // }}
    >
      <div className="flex items-center justify-between h-16 px-4 text-foreground">
        <div className="flex items-center gap-8">
          {/* Logo Section */}
          <LogoSection />
          {/* menu */}
          <MenuLanding items={menuItems} />
          <div onClick={captureScreenshot} className="cursor-pointer">
            chaneg theme
          </div>
        </div>
      </div>
      {imageUrl && (
        <motion.div
          key={theme}
          style={{ overflow: "hidden" }}
          className="w-screen h-screen fixed inset-0 z-50"
          initial={{ clipPath: "circle(150% at 0% 0%)" }}
          animate={{ clipPath: "circle(0% at 0% 0%)" }}
          transition={{ duration: 2.75, ease: "easeInOut" }}
        >
          <motion.img
            className="w-screen fixed inset-0 z-50 top-[unset] bottom-[unset]"
            key={imageUrl}
            src={imageUrl}
            alt="Captured Screenshot"
            style={{ maxWidth: "100%" }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default HeaderLanding;
