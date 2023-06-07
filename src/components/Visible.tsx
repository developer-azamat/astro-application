import { useState } from "preact/hooks";

export default function Visible() {
  const [count, setCount] = useState(42);

  return (
    <div class={"border p-6"}>
      <div class="text-lg">{count}</div>
      <button
        onClick={() => setCount(count + 1)}
        class={"border p-4 bg-red-600"}
      >
        Increment
      </button>
    </div>
  );
}
