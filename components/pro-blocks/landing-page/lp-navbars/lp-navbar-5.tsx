"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

type SubMenuItem = {
  label: string;
  href: string;
};

type MenuItemWithSubmenu = {
  label: string;
  submenu: readonly SubMenuItem[];
  href?: never; // Ensure href is not present when submenu is
};

type MenuItemWithHref = {
  label: string;
  href: string;
  submenu?: never; // Ensure submenu is not present when href is
};

type MenuItem = MenuItemWithSubmenu | MenuItemWithHref;

const MENU_ITEMS: readonly MenuItem[] = [
  {
    label: "Products",
    submenu: [
      { label: "Analytics Platform", href: "#analytics" },
      { label: "Team Collaboration", href: "#collaboration" },
      { label: "Enterprise Suite", href: "#enterprise" },
    ],
  },
  {
    label: "Use cases",
    submenu: [
      { label: "Sales", href: "#sales" },
      { label: "Marketing", href: "#marketing" },
      { label: "Customer Success", href: "#customer-success" },
    ],
  },
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#" },
] as const;

const DEFAULT_ACTION_BUTTONS = [
  {
    label: "Login",
    href: "/login",
    variant: "outline" as const,
  },
  {
    label: "Sign up",
    href: "/login",
    variant: "default" as const,
  },
] as const;

interface ActionButton {
  label: string;
  href: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
}

interface LpNavbar5Props {
  actionButtons?: readonly ActionButton[];
}

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className={`-mx-2 flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
      {MENU_ITEMS.map(({ label, href, submenu }) => (
        <div key={label} className="relative">
          {submenu ? (
            <div className="w-full">
              <Button
                variant="ghost"
                className="w-full justify-between px-2 md:w-auto"
                onClick={() => toggleDropdown(label)}
              >
                {label}
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    openDropdown === label ? "rotate-180" : ""
                  }`}
                />
              </Button>
              {openDropdown === label && (
                <div className="bg-background animate-in fade-in w-full rounded-md p-2 duration-200 md:absolute md:top-full md:min-w-[200px] md:shadow-lg">
                  {submenu.map((item: SubMenuItem) => (
                    <Link key={item.label} href={item.href}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-3 py-2"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link href={href}>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 md:w-auto md:px-3"
              >
                {label}
              </Button>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export function LpNavbar5({
  actionButtons = [...DEFAULT_ACTION_BUTTONS],
}: LpNavbar5Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
  };

  const renderActionButtons = (className?: string) => (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      {!isLoggedIn && actionButtons.map((button, index) => (
        <Link key={index} href={button.href}>
          <Button
            variant={button.variant}
            className={className?.includes("w-full") ? "w-full" : ""}
          >
            {button.label}
          </Button>
        </Link>
      ))}
      {isLoggedIn && (
        <Button variant="outline" onClick={handleLogout} className={className?.includes("w-full") ? "w-full" : ""}>
          Log out
        </Button>
      )}
    </div>
  );

  return (
    <nav className="bg-background sticky top-0 isolate z-50 py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center gap-2 ml-4">
            <Link href="/expert">
              <Button variant="secondary">Become an expert</Button>
            </Link>
            {isLoggedIn && (
              <Link href="/explorer">
                <Button variant="default">Explorer</Button>
              </Link>
            )}
          </div>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          {renderActionButtons()}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <Link href="/expert" className="mb-2">
              <Button variant="secondary" className="w-full">Become an expert</Button>
            </Link>
            <NavMenuItems />
            {renderActionButtons("w-full flex-col gap-2 items-stretch")}
          </div>
        )}
      </div>
    </nav>
  );
}
