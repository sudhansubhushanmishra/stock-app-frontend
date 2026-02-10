import { createFileRoute } from "@tanstack/react-router";
import { StockDetails } from "../components/stock-details";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="text-3xl font-bold p-2 text-center">Stock App</h1>
      <StockDetails />
    </main>
  );
}
