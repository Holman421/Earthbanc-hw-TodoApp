"use client";

import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* background: linear-gradient( #004f5d, #007b8a, #00a0a8); */
`;

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
