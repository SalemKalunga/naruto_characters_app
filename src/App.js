import "./App.css";
import NinjasContainer from "./components/ninjas-container.component/ninjas-container.component";
function App() {
  return (
    <div className="App">
      <header>
        <h2>Natuto characters App</h2>
        <div>
          <form>
            <input type="search" placeholder="search" />
          </form>
        </div>
      </header>
      <main>
        <NinjasContainer />
      </main>
    </div>
  );
}

export default App;
