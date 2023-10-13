import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./layouts/Categories";
import ExpenseLayout from "./layouts/ExpenseLayout";
import sampledata from "./sample-data.json";
import Addexpense from "./components/Addexpense";
import Expenseform from "./components/Expenseform";
import Expenseday from "./components/Expenseday";
import { getCoordinates, getWeather } from "./services/location";
import Weather from "./components/Weather";
import getTotalexpense from "./helpers.js/getTotalexpense";
import getExpensiveday from "./helpers.js/getExpensiveday";



function App() {
  const [expense, setExpense] = useState(sampledata);
  const [totalexpense, setTotalexpense] = useState(0);
  const [openform, setOpenform] = useState(false);
  const [maxday, setMaxday] = useState();
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState();

  useEffect(() => {
    setTotalexpense(getTotalexpense(expense))
    setMaxday(getExpensiveday(expense))
  }, [expense]);

  useEffect(() => {
    (async () => {
      getCoordinates(async location => {
        setLocation(location)
        const weather = await getWeather(location)
        setWeather(weather)
      });
    })()
  }, []);

  return (
    <div className="App">
      <Weather location={location} weather={weather} />
      <Header />
      <Addexpense setOpenform={setOpenform} />
      {openform && (
        <Expenseform setOpenform={setOpenform} setExpense={setExpense} />
      )}
      <Categories totalexpense={totalexpense} />
      <Expenseday maxday={maxday} />
      <ExpenseLayout sampledata={expense} setExpense={setExpense} />
    </div>
  );
}

export default App;
