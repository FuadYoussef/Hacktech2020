import React from "react";
import styled from "styled-components";
import ListCard from "./ListCard";

const SidebarContainer = styled.div `
  display: flex;
  flex-direction: column;
  max-width: 20vw;
  height: 100vh;
  background: linear-gradient(#0781FF, #6946CB);
`

export default function SideBar(props) {
    return (
        // TODO: idk why SidebarContainer doesnt show color of the ListCard components
        <SidebarContainer>
            <ListCard listType = "Contact" headerTitle = "Messages" className='Contact' history={props.history}/>
            <ListCard listType = "Event" headerTitle = "Events" className='Events'/>
        </SidebarContainer>
    );
}