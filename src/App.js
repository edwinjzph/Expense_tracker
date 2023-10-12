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

function App() {
  const [expense, setExpense] = useState(sampledata);
  const [totalexpense, setTotalexpense] = useState(0);
  const [openform, setOpenform] = useState(false);
  const [maxday, setMaxday] = useState();
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState();

  useEffect(() => {
    const getTotalexpense = () => {
      let sum = 0;
      expense.forEach((value) => {
        sum += parseInt(value.amount);
      });
      return sum;
    };

    const getExpensiveday = () => {
      const result = Object.groupBy(expense, ({ date }) => date);
      const newresult = {};
      Object.entries(result).forEach((element) => {
        let sum = 0;
        element[1].forEach((value) => {
          sum += parseInt(value.amount);
        });
        newresult[element[0]] = sum;
      });
      let maxAmount = 0;
      let dateWithMaxAmount = "";
      Object.entries(newresult).forEach((value) => {
        if (maxAmount < value[1]) {
          maxAmount = value[1];
          dateWithMaxAmount = value[0];
        }
      });
      return { dateWithMaxAmount, maxAmount };
    };
    setMaxday(getExpensiveday());
    setTotalexpense(getTotalexpense());
  }, [expense]);

  useEffect(() => {
    (async () => {
      getCoordinates(async location => {
        const weather = await getWeather(location)
        setWeather(weather)
      });
    })()
  }, []);

  return (
    <div className="App">
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
