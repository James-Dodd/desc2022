import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { data } from "../results1";

const Dashboard = () => {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [emp, setEmp] = useState("");
  const [city, setCity] = useState("");
  const [cat, setCat] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange2 = (event) => {
    setSex(event.target.value);
  };
  const handleChange3 = (event) => {
    setEmp(event.target.value);
  };
  const handleChange4 = (event) => {
    setCity(event.target.value);
  };
  const handleChange5 = (event) => {
    setCat(event.target.value);
  };

  const cityToUsea = data.map((b) => b.city);
  const cityToUse = [...new Set(cityToUsea)];

  const tempa = data.map((b)=> b.merchant_category_code);
  const merchantToUse = [...new Set(tempa)]

  let res = data.reduce((ac,a) => {
    let ind = ac.findIndex(x => x.transaction_amount_bins === a.transaction_amount_bins);
    ind === -1 ? ac.push(a) : ac[ind].kpi += a.kpi;
    return ac;
  },[])

  const dataTempB = res.sort((a,b)=>a.transaction_amount_bins.split(',')[0].replace(/[{()}]/g, '')>b.transaction_amount_bins.split(',')[0].replace(/[{()}]/g, ''))

  console.log('here is data to use ---->', res)
  return (
    <div className="h-screen p-2 flex justify-center items-center flex-col">
      <div className="w-grow h-10 m-5 bg-purple-300 rounded-full flex justify-start items-center w-5/6 p-10 gap-3">
        <FormControl sx={{ width: "10%" }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {data.map((a) => (
              <MenuItem value={a.ago_0}>{a.age_0}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "10%" }}>
          <InputLabel id="demo-simple-select-label">Sex</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sex}
            label="Sex"
            onChange={handleChange2}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "15%" }}>
          <InputLabel id="demo-simple-select-label">Employment</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={emp}
            label="Employment"
            onChange={handleChange3}
          >
            <MenuItem value={"Part Time"}>{"Part Time"}</MenuItem>
            <MenuItem value={"Full Time"}>{"Full Time"}</MenuItem>
            <MenuItem value={"Daily Wages"}>{"Daily Wages"}</MenuItem>
            <MenuItem value={"Unemployed"}>{"Unemployed"}</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "10%" }}>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            label="City"
            onChange={handleChange4}
          >
            {cityToUse.map((a) => (
              <MenuItem value={a}>{a}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "15%" }}>
          <InputLabel id="demo-simple-select-label">Catagory Code</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cat}
            label="CatagoryCode"
            onChange={handleChange5}
          >
            {merchantToUse.map((a) => (
              <MenuItem value={a===""?'n/a':a}>{a===""?'n/a':a}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="border-purple-700 border-4 rounded-3xl bg-slate-200 h-5/6 w-5/6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={dataTempB}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="transaction_amount_bins" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kpi" fill="#8884d8" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
