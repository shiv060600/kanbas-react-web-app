import ClickEvent from "./ClickEvent"
import PassingFunctions from "./PassingFunctions"
import React from "react"
import PassingDataOnEvent from "./PassingDataOnEvent"
import EventObject from "./EventObject"
import Counter from "./Counter"
import BooleanStateVariables from "./BooleanStateVariables"
import StringStateVariables from "./StringStateVariables"
import DateStateVariable from "./DateStateVariable"
import ObjectStateVariable from "./ObjectStateVariable"
import ArrayStateVariable from "./ArrayStateVariable"
import ParentStateComponent from "./ParentStateComponent"
import ReduxExamples from "./ReduxExamples";
export default function Lab4(){
    function sayHello(){
        alert("hello");
    }
    return(
        <div>
            <h2>Lab4</h2>
            <div id = "wd-clickevent">
                <ClickEvent/>
            </div>
            <div id = "wd-passingdataonevent">
                <PassingDataOnEvent/>
            </div>
            <div id = "wd-passingfunctions">
                <PassingFunctions theFunction={sayHello} />
            </div>
            <div id = "wd-eventObject">
                <EventObject/>
            </div>
            <div id = "wd-counter">
                <Counter/>
            </div>
            <div id = "wd-booleanState">
                <BooleanStateVariables/>
            </div>
            <div id = "wd-stringStateVariables">
                <StringStateVariables/>
            </div>
            <div id = "wd-dateStateEven">
                <DateStateVariable/>
            </div>
            <div id = "wd-objectStateVariable">
                <ObjectStateVariable/>
            </div>
            <div id = "wd-arraystatevariable">
                <ArrayStateVariable/>
            </div>
            <div id = "wd-parentStateComponent">
                <ParentStateComponent/>
            </div>
            <div id = "wd-reduxexamples">
                <ReduxExamples/>
            </div>
        </div>
        
    )
}