export function StockDetails() {
  return (
    <div className="p-4 w-4/5 flex flex-col mx-auto border border-stone-400 rounded-2xl">
      <form>
        <div className="flex justify-center gap-8 p-4">
          <input
            type="text"
            id="stockSymbol"
            name="stockSymbol"
            placeholder="Enter Stock: (AAPL)"
            className="text-2xl outline outline-emerald-200 p-4 min-w-fit rounded-2xl"
          />
          <button>Get Details</button>
        </div>
      </form>
      <div className="text-left">
        <h2 className="text-2xl font-bold">Stock: AAPL</h2>
        <hr />
        <h2 className="text-2xl font-bold">Price: $185.20</h2>
        <hr />
        <div>
          <p>Open: 184.10</p>
          <p>High: 186.00</p>
          <p>Low: 183.50</p>
        </div>
        <hr />
        <p>Last Updated: {Temporal.Now.plainDateISO().toString()}</p>
      </div>
    </div>
  );
}
