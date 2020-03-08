import React, {Component} from 'react';
import '../index.css';
import styled from "styled-components";
import SideBar from "../components/SideBar";
import MenuBar from "../components/MenuBar"
import Route from "react-router-dom/es/Route";
import ChatPage from "./ChatPage";
import PostPage from "./PostPage";
import AddPost from "./AddPost"

const DashboardContainer = styled.div`
  display: flex;
`

const RightSide = styled.div`
  flex-grow: 1;
  background: white;
  max-height: 100vh;
`

class DashboardPage extends Component {
  render() {
    return(
      <DashboardContainer>
        <SideBar/>
        <RightSide>
          <MenuBar history={this.props.history}/>
          <Route path="/dashboard/chat" component={ChatPage}/>
          <Route path="/dashboard/posts" component={PostPage}/>
          <Route path="/dashboard/addpost" component={AddPost}/>
        </RightSide>
      </DashboardContainer>
    );
  }
}

export default DashboardPage;
