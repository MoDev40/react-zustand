import { useEffect } from "react";
import "./App.css";
import useApi from "./store/apiStore";

function App() {
  // const { todoList, add, edit, remove, reset } = useTodo();
  // const randomHex = crypto.randomUUID();
  const { error, products, fetchProducts } = useApi();
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div>
        {products.map((product) => (
          <h1>{product.title}</h1>
        ))}
      </div>
      <div>error {JSON.stringify(error)}</div>
    </div>
  );
}

export default App;

{
  /* <div>
<div>{JSON.stringify(todoList)}</div>
<button
  onClick={() => {
    add({ id: randomHex, isDone: false, todo: "Going gym" });
  }}
>
  ADD
</button>
<button
  onClick={() => {
    edit(2, {
      id: 2,
      isDone: false,
      todo: "We have to complete the work",
    });
  }}
>
  EDIT
</button>
<button
  onClick={() => {
    remove(2);
  }}
>
  REMOVE
</button>
<button
  onClick={() => {
    reset();
  }}
>
  RESET
</button>
</div> */
}
