import React ,{useEffect,useState,useRef} from 'react'
import List from "./List.js"
import {monthList} from "./utilities"
const day = [];
const years = [];
function Dates({dob}) {
  const [showDay, setShowDay] = useState(false);
  const isOpen=useRef(false)
  const [showMonth, setShowMonth] = useState(false);
  const [showYear, setShowYear] = useState(false);
    // function to close date option incase opened
    let clean = function (e) {
      let date = document.querySelector(".date");
      if (e.target.parentElement != date && isOpen.current) {
        isOpen.current=false;
        setShowDay((day) => {
          console.log( day,"demo day");
          day = day ? !day : day;
          return day;
        });
        setShowMonth((month) => {
          month = month ? !month : month;
          return month;
        });
        setShowYear((year) => {
          year = year ? !year : year;
          return year;
        }); 
        let classes=e.target.className.split(" ");
        if(classes.length>=1 && classes[1]=="child"){
          
          let dates=document.querySelector("."+classes[0])
          dates.value=e.target.textContent
          let x=dates.className.split(" ")[1]
          
          dob[x]=dates.value;
        }
      }
    };
    useEffect(() => {
    for (let i = 1; i <= 31; i++) {
      day.push(i);
    }
    let year = new Date().getFullYear() - 18;
    for (let i = year; i >= year - 100; i--) {
      years.push(i);
    }
      document.addEventListener("click", clean);
      return () => {
        document.removeEventListener("click", clean);
      };
    }, []);
    return (
      <div
        className="date"
        onClick={(e) => {
          let inputDate = document.querySelectorAll(".date>input");
          if (inputDate[0] === e.target) {
            setShowDay(!showDay);
            isOpen.current=!showDay;
            setShowMonth(false);
            console.log("from  ", showDay);
            setShowYear(false);
          } else if (inputDate[1] === e.target) {
            setShowDay(false);
            setShowMonth(!showMonth);
            isOpen.current=!showMonth;
            setShowYear(false);
          } else if (inputDate[2] === e.target) {
            setShowDay(false);
            setShowMonth(false);
            setShowYear(!showYear);
            isOpen.current=!showYear;
          }
        }} >
        <input disabled className="child-day day" type="text" placeholder="Day" />
        {showDay && (
          <List date={{ list: day, class: "day" }} />
        )}
        <input disabled className="child-month month" type="text" placeholder="Month" />
        {showMonth && (
          <List
            date={{ list: monthList, class: "month" }}
            list={monthList}
          />
        )}
        <input disabled className="child-year year" type="text" placeholder="Year" />
        {showYear && (
          <List
            date={{ list: years, class: "year" }}
            list={years}
          />
        )}
      </div>
    );
}
export default Dates