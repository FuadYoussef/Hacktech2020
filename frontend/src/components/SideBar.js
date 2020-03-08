import React from "react";
import styled from "styled-components";
import ListCard from "./ListCard";

const SidebarContainer = styled.div `
  display: flex;
  flex-direction: column;
  max-width: 25vw;
  height: 100vh;
  background: linear-gradient(#6946CB, #0781FF);
`

export default function SideBar(props) {
    return (
          <SidebarContainer>
              <ListCard listType = "Contact" headerTitle = "Messages" className='Contact' history={props.history}/>
              <ListCard listType = "Event" headerTitle = "Events" className='Events'/>
          </SidebarContainer>
    );
}