import "./App.css";
import Useeffect from "./components/Useeffect";
import Timer from "./components/Timer";
import State from "./components/State";
import Callbacks from "./components/Callbacks";
import Parent from "./components/Parent";
import Usememo from "./components/Usememo";
import User from "./context/User";
import MultiContext from "./context/MultiContext";
import Arr from "./context/Arr";
import ClickCounter from "./hoc/ClickCounter";
import HoverCounter from "./hoc/HoverCounter";
import HOC2 from "./hoc/HOC2";
import StockList from "./hoc/StockList";
import UserList from "./hoc/UserList";
import Class from "./context/Class";
import Reduser from "./components/Reduser";

function App() {
  const StocksData = [
    {
      id: 1,
      name: "TCS",
    },
    {
      id: 2,
      name: "Infosys",
    },
    {
      id: 3,
      name: "Reliance",
    },
  ];
  const UsersData = [
    {
      id: 1,
      name: "Krunal",
    },
    {
      id: 2,
      name: "Ankit",
    },
    {
      id: 3,
      name: "Rushabh",
    },
  ];

  const Stocks = HOC2(StockList, StocksData);

  const Users = HOC2(UserList, UsersData);
  console.log("app comp :>> ");
  return (
    <div className="App">
      {/* <State />  */}
      {/* <Useeffect /> */}
      {/* <Timer /> */}
      {/* <Callbacks /> */}
      {/* <Usememo /> */}
      {/* <Parent /> */}
      {/* <Class/> */}
      {/* <User /> */}
      {/* <MultiContext /> */}
      {/* <Arr /> */}
      <ClickCounter name="tagline" />
      <HoverCounter />
      <Users />
      <Stocks />
      <Reduser/>
    </div>
  );
}

export default App;
