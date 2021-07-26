import FilterContainer from '../filter/FilterContainer';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="title">
        <h1>
          Portfolio Filter
        </h1>
      </div>

      <div className="container">
        <FilterContainer />
      </div>

    </div>
  );
}

export default App;
