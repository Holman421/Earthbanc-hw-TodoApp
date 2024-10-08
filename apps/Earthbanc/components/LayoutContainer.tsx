"use client";

import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
