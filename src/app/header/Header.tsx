"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const links = document.querySelectorAll(".link");

    links.forEach((link) => {
      const navbox = link.closest(".navbox");
      if (!navbox) return;

      const handleEnter = () => {
        navbox.style.top = "0px";
        navbox.style.right = "0";
        navbox.style.bottom = "auto";
        navbox.style.left = "0";
      };

      const handleLeave = () => {
        navbox.style.top = "-34px";
        navbox.style.right = "0";
        navbox.style.bottom = "auto";
        navbox.style.left = "0";
      };

      link.addEventListener("mouseenter", handleEnter);
      link.addEventListener("mouseleave", handleLeave);

      // cleanup
      return () => {
        link.removeEventListener("mouseenter", handleEnter);
        link.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  return (
    <div className="navbar">
      <div className="navbox home-nav">
        <div className="relative">
        <Link href="/" className="link _1">Home</Link>
        </div>
      </div>

      <div className="navbox merch-nav">
        <div className="relative">
         <Link href="/merch" className="link _2">Merch</Link>
        </div>
      </div>

      <div className="navbox archives-nav">
        <div className="relative">
           <Link href="/archives" className="link _3">Archives</Link>
        </div>
      </div>

      <div className="navbox for-you-nav">
        <div className="relative">
         <Link href="/for-you" className="link _4">For You</Link>
        </div>
      </div>
    </div>

    
  );
}
