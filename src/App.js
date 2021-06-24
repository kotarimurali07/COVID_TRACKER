import "./styles.css";
import Cards from "./components/Cards";
import Chart from "./components/Chart";
import "./styles.css";
import CountryPicker from "./components/CountryPicker";
export default function App() {
  return (
    <div className="styles.container">
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}
