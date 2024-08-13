"use client";

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  heading: string;
  url: string;
  fontSize?: string;
  renderUnderline?: boolean;
};

const StyledNavLink = styled(({ isActive, ...props }) => <Link {...props} />)<{
  isActive: boolean;
  fontSize?: string;
}>`
  display: inline-block;
  color: black;
  transition: all 200ms ease;
  position: relative;
  font-size: 1rem;
  z-index: 10;
  font-size: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: black;
    transform: ${({ isActive }) => (isActive ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 300ms ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export default function NavLink({ heading, url }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <StyledNavLink isActive={isActive} href={url}>
      {heading}
    </StyledNavLink>
  );
}
