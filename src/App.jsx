// HOC
import DefaultHOC from "./HOC/Default.HOC";

// component
import Temp from "./components/temp"

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
