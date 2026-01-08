"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".link");

    links.forEach((link) => {
      const navbox = link.closest(".navbox") as HTMLElement | null;
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

      return () => {
        link.removeEventListener("mouseenter", handleEnter);
        link.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  return (
    <div className={`navbar ${open ? "open" : ""}`}>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <img src="/images/menu-arro.svg"/>
      </div>

      <div className="navbox home-nav">
        <div className="relative">
          <a 
            href="/" 
            className="link _1"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
          >
            Home
          </a>
        </div>
      </div>

      {/* <div className="navbox merch-nav">
        <div className="relative">
          <Link href="/merch" className="link _2">Merch</Link>
        </div>
      </div> */}

      {/* <div className="navbox archives-nav">
        <div className="relative">
          <Link href="/archives" className="link _3">Archives</Link>
        </div>
      </div> */}

      <div className="navbox for-you-nav">
        <div className="relative">
          <Link href="/for-you" className="link _4">For You</Link>
        </div>
      </div>
    </div>
  );
}
