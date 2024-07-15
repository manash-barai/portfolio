"use client";
import React, { useEffect, useState } from "react";
import { IconHome, IconMessage, IconUser, IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";

export function FloatingNavDemo() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsNavVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    {
      name: "Home",
      link: "home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "skills",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className={`relative w-full `}>
      {isNavVisible && (
        <>
          <button
            className="fixed top-4 right-4 z-50 md:hidden"
            onClick={toggleMobileMenu}
          >
            <IconMenu2 className="h-6 w-6 text-neutral-500 dark:text-white" />
          </button>
          <FloatingNav
            navItems={navItems}
            isMobileMenuOpen={isMobileMenuOpen}
            handleLinkClick={handleLinkClick}
          />
        </>
      )}
    </div>
  );
}

interface NavItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  isMobileMenuOpen: boolean;
  handleLinkClick: () => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  isMobileMenuOpen,
  handleLinkClick,
}) => {
  return (
    <nav
      style={{ zIndex: 95, left: "50%", transform: "translateX(-50%)" }}
      className={`fixed top-0 w-1/3 rounded-full bg-white dark:bg-black px-11 py-4 mt-7 ${
        isMobileMenuOpen ? "block" : "hidden"
      } md:block`}
    >
      <ul className="flex flex-col md:flex-row justify-around">
        {navItems.map((item) => (
          <li key={item.name} className="my-2 md:my-0">
            <Link
              href={item.link}
             
             
              className="cursor-pointer flex items-center space-x-2"
              onClick={handleLinkClick}
            >
              {item.icon}
              <span className="text-neutral-500 dark:text-white">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
