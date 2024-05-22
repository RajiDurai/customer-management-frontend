import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import Company from "./components/Company";
import Search from "./components/Search";
import "./App.css";

/* import Sort from "./components/Sort";
import Pagination from "./components/Pagination";*/ // Additional feature to be implemented

const base_url = process.env.REACT_APP_API_URL;
function App() {
  const [obj, setObj] = useState({});
  const [search, setSearch] = useState("");
  const [filterCompanyName, setfilterCompanyName] = useState("");

  //To do - to trigger re-render when objects changes. Currently table is not refreshing
  useEffect(() => {
    const getAllCustomers = async () => {
      try {
        const url = `${base_url}?search=${search}`;
        const { data } = await axios.get(url);
        console.log("data" + JSON.stringify(data));
        setObj(data);
      } catch (err) {
        console.log(err);
      }
    };


    getAllCustomers();
  }, [search, obj]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="head">
          <p className="search">Customer Management</p>
          <Search setSearch={(search) => setSearch(search)} />
        </div>
        <div className="body">
          <div className="table_container">
            <Table customers={obj.customers ? obj.customers : []} test={console.log("obj" + obj.customers)} />
          </div>
          <div className="filter_container">
            <Company
              filterCompany={filterCompanyName}
              companies={obj.companies ? obj.companies : []}
              setFilterCompany={(company) => setfilterCompanyName(company)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
