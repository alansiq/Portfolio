import React from "react";
import { Tab } from "../../components/Tab/index";
import './styles.css';
import SkillsList from '../../components/SkillsList';



export default function Test() {
  return (

    <>
      <div id="testmain">
        <div>
          <Tab
            tabs={["Skills", "Hello"]}
            components={[<SkillsList />, <h1>Hello</h1>]}
          />
        </div>
      </div>
    </>
  );
}

