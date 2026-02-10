import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
