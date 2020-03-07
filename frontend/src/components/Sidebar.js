import React from "react";
import styled from "styled-components";
import ListCard from "./ListCard";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20vw;
  min-height: 100vh;
`

export default function Sidebar() {
  return(
    // TODO: idk why SidebarContainer doesnt show color of the ListCard components
    <div style={{display: 'flex', flexDirection: 'column', background: 'yellow', maxWidth: '20vw', minHeight: '100vh'}}>
      <ListCard listType="Contact" headerTitle="Messages"/>
      <ListCard listType="Event" headerTitle="Events"/>
    </div>
  );
}
