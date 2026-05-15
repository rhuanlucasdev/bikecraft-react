"use client";

import { useEffect } from "react";

export default function useSimpleAnime() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-anime]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = Number(el.getAttribute("data-anime"));

            if (!isNaN(delay)) {
              setTimeout(() => {
                el.classList.add("anime");
              }, delay);
            } else {
              el.classList.add("anime");
            }

            observer.unobserve(el); // anima só 1 vez
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
