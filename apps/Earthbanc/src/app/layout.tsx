import Navbar from "apps/Earthbanc/components/Navbar";
import "./global.css";
import { StyledComponentsRegistry } from "./registry";
import LayoutContainer from "apps/Earthbanc/components/LayoutContainer";

export const metadata = {
  title: "Demo todo app",
  description: "Showcase of demo todo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <LayoutContainer>
            <Navbar />
            {children}
          </LayoutContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
