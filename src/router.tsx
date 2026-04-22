import {
  createBrowserRouter,
  Navigate,
  Outlet,
  type LoaderFunctionArgs
} from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { DashboardPage, dashboardLoader } from "./features/dashboard";
import { PlaybooksPage } from "./features/playbooks";
import { ToolingPage, toolingLoader } from "./features/tooling";

const requireSection = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const section = url.searchParams.get("section");
  return { section: section ?? "overview" };
};

const RootLayout = () => (
  <AppShell>
    <Outlet />
  </AppShell>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: requireSection,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      {
        path: "dashboard",
        loader: dashboardLoader,
        element: <DashboardPage />
      },
      {
        path: "tooling",
        loader: toolingLoader,
        element: <ToolingPage />
      },
      {
        path: "playbooks",
        element: <PlaybooksPage />
      }
    ]
  }
]);
