import React from "react";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import { BooleanVariables,IfElse,TeneraryOperator } from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInLine";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFuncitons";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength"; 
import AddingAndRemovingToFromArrays from "./AddingRemovingToFromArrays";
import ForLoops from "./ForLoops";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FIlterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import Classes from "./Classes";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";

export default function Lab3() {
  console.log("Hello World")
    return (
      <div>
        <h2>Lab 3</h2>
        <VariablesAndConstants/>
        <VariableTypes/>
        <BooleanVariables/>
        <IfElse/>
        <TeneraryOperator/>
        <ConditionalOutputIfElse/>
        <ConditionalOutputInline/>
        <LegacyFunctions/>
        <ArrowFunctions/>
        <ImpliedReturn/>
        <TemplateLiterals/>
        <SimpleArrays/>
        <ArrayIndexAndLength/>
        <AddingAndRemovingToFromArrays/>
        <ForLoops/>
        <FindFunction/>
        <FindIndex/>
        <FilterFunction/>
        <JsonStringify/>
        <House/>
        <FunctionDestructing/>
        <Destructing/>
        <Classes/>
        <div id="wd-lab3" className="container">
          <h3>Lab 3</h3>
          <Add a={3} b={4} />
        </div>
        <div id="wd-lab3">
          <h3>JavaScript</h3>
          <h4>Square of 4</h4>
          <Square>4</Square>
          <hr />
        </div>
        <div id="wd-lab3">
          <h3>Lab 3</h3>
          <Highlight>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
              vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
          </Highlight>
        </div>

        
      </div>
    );
  }
  