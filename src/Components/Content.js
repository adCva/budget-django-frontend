import React from 'react';
import Card from './Card';
// ================== React icons.
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
// ================== Redux.
import { useSelector, useDispatch  } from 'react-redux';
import { changeFilter, openAccordion } from "../Redux/globalVarSlice";



function Content() {
  const dispatch = useDispatch();
  const accordion = useSelector((state) => state.globalVar.accordionOpened);
  const filterBy = useSelector((state) => state.globalVar.filterBy);
  const expendituresData = useSelector((state) => state.expenditures.expData);
  const alwaysDisplay = expendituresData.slice(0, 3);
  const accordionDisplay = expendituresData.slice(3, expendituresData.length)

  
  const dispatchFilter = (value) => {
    dispatch(changeFilter({newFilter: value}));
  };


  return (
    <div className='content-wrapper'>
        <div className='content-container'>

            {/* =========== Filters container =========== */}
            <div className='filters-container'>
                <button onClick={() => dispatchFilter("All")}>All</button>
                <button onClick={() => dispatchFilter("Home")}>Home</button>
                <button onClick={() => dispatchFilter("Bill")}>Bills</button>
                <button onClick={() => dispatchFilter("Food")}>Food</button>
                <button onClick={() => dispatchFilter("Transport")}>Transport</button>
                <button onClick={() => dispatchFilter("Miscellaneous")}>Miscellaneous</button>
            </div>

            {/* =========== Expenses container =========== */}
            <div className='expenses-container-'>
                {alwaysDisplay.map((el, i) => {
                  return (
                    <Card key={i} pk={el.id} type={el.type} name={el.name} description={el.desc} spent={el.spent} createdAt={el.created_at} />
                  )
                })}
            </div>

            {/* =========== Accordion wrapper =========== */}
            <div className='accordion-wrapper'>
              <button className={filterBy !== "All" ? "hide-accorion-btn" : "show-accorion-btn"} onClick={() => dispatch(openAccordion({accordion: !accordion}))}>View full list {accordion ? <FiChevronUp /> : <FiChevronDown />}</button>
              <div className={accordion ? "accordion-container" : "accordion-container accordion-hide"}>
                {accordionDisplay.map((el, i) => {
                  return (
                    <Card key={i} pk={el.id} type={el.type} name={el.name} description={el.desc} spent={el.spent} createdAt={el.created_at} />
                  )
                })}
              </div>
            </div>

        </div>
    </div>
  )
}

export default Content;