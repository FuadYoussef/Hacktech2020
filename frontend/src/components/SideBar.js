import React from "react";
import styled from "styled-components";
import ListCard from "./ListCard";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20vw;
  max-height: 100vh;
`

export default function SideBar() {
  return(
    // TODO: idk why SidebarContainer doesnt show color of the ListCard components
    <div style={{display: 'flex', flexDirection: 'column', background: 'yellow', maxWidth: '20vw', maxHeight: '100vh'}}>
      <ListCard listType="Contact" headerTitle="Messages"/>
      <ListCard listType="Event" headerTitle="Events"/>
    </div>
  );
}
