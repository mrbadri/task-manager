"use client";

import { Button } from "@repo/ui/components/button";
import Particles from "@repo/ui/components/particles";
import { motion } from "framer-motion";
import * as htmlToImage from "html-to-image";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Page() {
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
    <main className="bg-background  h-full  ">
      <header className="h-screen relative">
        <Particles className="inset-0 absolute" />
        <div className="relative z-10 flex items-center justify-center h-full pt-40">
          <Button onClick={captureScreenshot}>Change Theme</Button>
        </div>
      </header>

      <div className=" py-24 sm:py-32 flex justify-center"></div>

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
    </main>
  );
}
