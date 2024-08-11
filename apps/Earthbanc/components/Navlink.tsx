"use client";

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  heading: string;
  url: string;
  fontSize?: string;
};

const StyledNavLink = styled(({ isActive, fontSize, ...props }) => (
  <Link {...props} />
))<{ isActive: boolean; fontSize?: string }>`
  display: inline-block;
  color: ${({ isActive }) => (isActive ? "#e0f7fa" : "white")};
  transition: all 200ms ease;
  position: relative;
  font-size: 1rem;
  z-index: 10;
  font-size: ${({ fontSize }) => fontSize || "1rem"};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: #e0f7fa;
    transform: ${({ isActive }) => (isActive ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 300ms ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    color: #e0f7fa;
  }
`;

export default function NavLink({ heading, url, fontSize }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <StyledNavLink isActive={isActive} fontSize={fontSize} href={url}>
      {heading}
    </StyledNavLink>
  );
}
