import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./layouts/Categories";
import ExpenseLayout from "./layouts/ExpenseLayout";
import sampledata from "./sample-data.json";
import Addexpense from "./components/Addexpense";
import Expenseform from "./components/Expenseform";
import Expenseday from "./components/Expenseday";

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
    // const result = Object.groupBy(sampledata, ({ date }) => date);
    // const newresult = {};
    // Object.entries(result).forEach((element) => {
    //   let sum = 0;
    //   element[1].forEach((value) => {
    //     sum += parseFloat(value.amount.replace("$", ""));
    //   });
    //   newresult[element[0]] = {
    //     ["totalsum"]: sum,
    //   };
    // });
    // let maxamount = 0;
    // let date = "";
    // Object.entries(newresult).forEach((value) => {
    //   if (maxamount < value[1].totalsum) {
    //     maxamount = value[1].totalsum;
    //     date = value[0];
    //   }
    // });
    // console.log(date, maxamount);
    const result = sampledata.reduce((acc, { date, amount }) => {
      const parsedAmount = parseFloat(amount.replace("$", ""));
      if (!acc[date]) acc[date] = 0;
      acc[date] += parsedAmount;
      return acc;
    }, {});

    const [dateWithMaxAmount, maxAmount] = Object.entries(result).reduce(
      ([maxDate, maxAmount], [date, total]) =>
        total > maxAmount ? [date, total] : [maxDate, maxAmount],
      ["", 0]
    );

    console.log(dateWithMaxAmount, maxAmount);
    // setMaxday({ date, maxamount });
    setMaxday({ dateWithMaxAmount, maxAmount });
    setTotalexpense(getTotalexpense());
  }, []);

  return (
    <div className="App">
      <Header />
      <Addexpense setOpenform={setOpenform} />
      {openform && <Expenseform />}
      <Categories totalexpense={totalexpense} />
      <Expenseday maxday={maxday} />
      <ExpenseLayout sampledata={sampledata} />
    </div>
  );
}

export default App;
