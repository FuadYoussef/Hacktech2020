import React from 'react';
import styled from "styled-components";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Paper from "@material-ui/core/Paper";


const contactList = [
  {
    name: 'Colin Peppler',
    avatar: '/static/images/avatar/1.jpg',
    lastMessage: 'Let\'s meetup!',
    lastMessageTimestamp: '5 min'
  },
  {
    name: 'Lee Singer',
    avatar: 'Leesin',
    lastMessage: 'byebye',
    lastMessageTimestamp: '10 hr'
  },
  {
    name: 'Barrack Obama',
    avatar: './anyimage.png',
    lastMessage: 'Happy New Years!',
    lastMessageTimestamp: '3 mo'
  },
  {
    name: 'Hannah Montana',
    avatar: './anyimage.png',
    lastMessage: 'See you in 20!',
    lastMessageTimestamp: '1 yr'
  },
]

/* the format for margin: top right bottom left */
const lightGray = '#ecf0f1'
const ListBody = styled(Paper)`
  background: ${lightGray};
  padding: 16px 16px 16px 16px;
  display: inline-flex;
  min-width: 22vw;
  max-height: 40vh;
  overflow: auto;
  flex-direction: column; 
`

/* Styles for the List component */
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));

export default function ContactList() {
  const classes = useStyles();

  return (
    <ListBody square variant="outlined">
      <div>
        Messages
      </div>
      <List className={classes.root}>
        {contactList.map(contact => (
          <Contact name={contact.name} avatar={contact.avatar} lastMessage={contact.lastMessage}
                   lastMessageTimestamp={contact.lastMessageTimestamp}/>))}
      </List>
    </ListBody>
  )
}

const ContactContainer = styled(Paper)`
  margin: 0 0 16px 0;
`

const ContactItemBody = styled.div`
  display: flex;
  flex-direction: row;   
  justify-items: space-between;
  width: 100%;
`;

const Timestamp = styled(ListItemText)`
  align-self: center;
  text-align: right;
`;

function Contact(props) {
  return (
    <ContactContainer elevation={2}>
      <ListItem alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt={props.name} src={props.avatar}/>
        </ListItemAvatar>

        <ContactItemBody>
          <ListItemText
            primary={props.name}
            secondary={props.lastMessage}
          />

          <Timestamp secondary={props.lastMessageTimestamp}/>
        </ContactItemBody>
      </ListItem>
    </ContactContainer>
  )
}

