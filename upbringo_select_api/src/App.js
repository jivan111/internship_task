import React, { useState, useRef, useEffect } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import axios from "axios";
import "./App.css";
export const SelectContext = React.createContext();
function App() {
  const state = useRef({
    hasMoreData: true,
    count: 0,
    currentState: "",
  });
  const [clubs, setClub] = useState([]);
  const [loading, setLoading] = useState(false);
  function onMenuChange(e) {
    state.current.currentState = e.target.value.trim();
    state.current.count = 0;
    state.current.hasMoreData = true;
    loadData();
  }
  function loadData(scroll = null) {
    let url = `https://www.upbringo.com/api/assignment/football/?state=${state.current.currentState}&nextPageToken=${state.current.count}`;
    if (state.current.hasMoreData) {
      setLoading(true);
      for (let a = 0; a < 100000000; a++) {}
      axios.get(url).then((res) => {
        setLoading(false);
        if (res.data.clubs?.length > 0) {
          state.current.count++;
          scroll && setClub([...clubs, ...res.data.clubs]);
          !scroll && setClub([...res.data.clubs]);
        } else {
          state.current.hasMoreData = false;
        }
      });
    }
  }
  return (
    <div className="App">
      <SelectContext.Provider value={onMenuChange}>
        <Header />
        <Body data={{ clubs, loadData }} />
        {console.log(state.current.loading)}
        {loading && <div className="loading">Loading...</div>}
      </SelectContext.Provider>
    </div>
  );
}
export default App;
