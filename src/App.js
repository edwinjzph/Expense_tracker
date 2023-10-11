import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./layouts/Categories";
import ExpenseLayout from "./layouts/ExpenseLayout";
import sampledata from "./sample-data.json";
import Addexpense from "./components/Addexpense";
import Expenseform from "./components/Expenseform";

function App() {
  const [totalexpense, setTotalexpense] = useState(0);
  const [openform, setOpenform] = useState(false);
  const [maxday, setMaxday] = useState();
  useEffect(() => {
    const getTotalexpense = () => {
      let sum = 0;
      sampledata.forEach((value) => {
        sum += parseInt(value.amount.replace("$", ""));
      });
      return sum;
    };
    const getMaxday = () => {
      const day = sampledata.sort(
        (expense1, expense2) =>
          parseFloat(expense2.amount.replace("$", "")) -
          parseFloat(expense1.amount.replace("$", ""))
      )[0];
      return day;
    };
    setMaxday(getMaxday());
    setTotalexpense(getTotalexpense());
  }, []);

  return (
    <div className="App">
      <Header />
      <Addexpense setOpenform={setOpenform} />
      {openform && <Expenseform />}
      <Categories totalexpense={totalexpense} maxday={maxday} />
      <ExpenseLayout sampledata={sampledata} />
    </div>
  );
}

export default App;
