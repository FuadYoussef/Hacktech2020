import React, {Component} from 'react';
<<<<<<< HEAD
import SideBar from "../components/SideBar";
=======
import '../index.css';
>>>>>>> aa840bedd7e2095ca8d4ebc064490cd0c6c7028e

import styled from "styled-components";
import SideBar from "../components/SideBar";
import MenuBar from "../components/MenuBar"
import Button from "@material-ui/core/Button";
import {withRouter} from "react-router-dom";

const DashboardContainer = styled.div`
  display: flex;
`

const RightSide = styled.div`
  flex-grow: 1;
  background: green;
  max-height: 100vh;
`

class DashboardPage extends Component {
  render() {
    return(
<<<<<<< HEAD
      <div>
        <SideBar/>
      </div>
=======
      <DashboardContainer>
        <SideBar/>
        <RightSide>
          <MenuBar history={this.props.history}/>
      </RightSide>
      </DashboardContainer>
>>>>>>> aa840bedd7e2095ca8d4ebc064490cd0c6c7028e
    );
  }
}

export default DashboardPage;
