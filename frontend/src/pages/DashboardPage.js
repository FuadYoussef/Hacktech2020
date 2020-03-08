import React, {Component} from 'react';
import '../index.css';
import styled from "styled-components";
import SideBar from "../components/SideBar";
import MenuBar from "../components/MenuBar"
import Route from "react-router-dom/es/Route";
import ChatPage from "./ChatPage";
import PostPage from "./PostPage";
import AddPost from "./AddPost"
import MapView from "./MapView"

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
        <SideBar history={this.props.history}/>
        <RightSide>
          <MenuBar history={this.props.history}/>
          <Route path="/dashboard/chat/:userName" component={ChatPage}/>
          <Route path="/dashboard/posts" component={PostPage}/>
          <Route path="/dashboard/addpost" component={AddPost}/>
          <Route path="/dashboard/mapview" component={MapView}/>
        </RightSide>
      </DashboardContainer>
    );
  }
}

export default DashboardPage;
