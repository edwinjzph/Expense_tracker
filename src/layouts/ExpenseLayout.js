import React from "react";
import ExpenseCard from "../components/ExpenseCard";
import Grid from '@mui/material/Grid';

function ExpenseLayout({ sampledata, setExpense }) {
  return (

    <div style={{ width: "100%", }}>
      <div className="box" style={{ flexGrow: 1, margin: "auto", width: "70%" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 2, md: 8 }}>
          {sampledata
            .slice(0)
            .reverse().map((value, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <ExpenseCard
                  data={value}
                  key={index}
                  setExpense={setExpense}
                  sampledata={sampledata}
                  index={index}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>



  );
}

export default ExpenseLayout;
