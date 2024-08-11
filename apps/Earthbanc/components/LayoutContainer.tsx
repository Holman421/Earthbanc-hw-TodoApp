"use client";

import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to right, #e0f7fa, #b2ebf2);
`;

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
