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
  useEffect(() => {
    const getTotalexpense = () => {
      let sum = 0;
      sampledata.forEach((value) => {
        sum += parseFloat(value.amount.replace("$", ""));
      });
      return sum;
    };
    setTotalexpense(getTotalexpense());
  }, []);

  return (
    <div className="App">
      <Header />
      <Addexpense setOpenform={setOpenform} />
      {openform && <Expenseform />}
      <Categories totalexpense={totalexpense} />
      <ExpenseLayout sampledata={sampledata} />
    </div>
  );
}

export default App;
