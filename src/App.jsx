function App() {
  let foods = ["apple", "mango", "jackfruit", "bannana", "milk"];
  return (
    <center class="container">
      <h1 class="text-primary">Todo App</h1>
      <br />

      <ul class="list-group">
        {foods.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </center>
  );
}
export default App;
