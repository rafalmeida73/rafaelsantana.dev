"use client";

import { useEffect, useMemo, useState } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import styles from "@/styles/NotFound.module.css";

import en from "../messages/en.json";
import pt from "../messages/pt.json";
import { ChevronLeft } from "lucide-react";

const NotFoundAnimation = dynamic(() => import("@/components/404"), {
  ssr: false,
});

const Custom404 = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);

  const locale = useMemo(() => {
    if (pathname?.includes("/en")) return en?.Notfound;

    return pt?.Notfound;
  }, [pathname]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main className={styles.container}>
      {!loading && <NotFoundAnimation />}
      <noscript>
        <Image
          src="/lottie/404.gif"
          alt={locale?.notFound}
          height={500}
          width={1000}
          loading="lazy"
          className={styles.lottieImg}
        />
      </noscript>
      <h1>{locale?.notFound}</h1>
      <button type="button" onClick={() => router.back()}>
        <ChevronLeft />
        {locale?.goBack}
      </button>
    </main>
  );
};

export default Custom404;
