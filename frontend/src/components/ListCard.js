import React from 'react';
import styled from "styled-components";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


/* Hard coded values, eventually we want to pull this from firebase */
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

const eventList = [
  {
    name: 'Corona',
    description: 'A bad virus attack.',
    date: '1/1/20',
  },
  {
    name: 'India Fest',
    description: 'A celebration of Indian culture! Have a great time, and eat great food! My favorite is garlic naan!' +
      'I also like me some Roti Canai with curry! Experience the exquisite food this event has in store!',
    date: '3/5/20',
  }
]

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  display: block;
`


/* Styles for the List component */
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));


export default function ListCard(props) {
  const classes = useStyles();

  /* Had to put this within this function because we have a conditional variable relating to props (maxHeight) */
  const lightGray = '#ecf0f1'
  const maxHeight = props.listType == "Contact" ? "45%" : "50%";
  const ListBody = styled(Paper)`
    background: ${lightGray};
    padding: 16px 16px 16px 16px;
    display: inline-flex;
    align-items: flex-start;
    flex-direction: column; 
    max-width: 20vw;
    max-height: ${maxHeight};
    overflow: auto;
`

  let listItems = null;
  if (props.listType == "Contact") {              // Generate a ContactItem for each contact
    listItems = contactList.map(contact => (
      <ContactItem name={contact.name} avatar={contact.avatar}
                   lastMessage={contact.lastMessage}
                   lastMessageTimestamp={contact.lastMessageTimestamp}/>))
  }
  else if (props.listType == "Event") {           // Generate an EventItem for each event
    listItems = eventList.map(event => (
      <EventItem name={event.name} description={event.description} date={event.date}/>))
  }

  return (
    <ListBody square variant="outlined">
      <CardHeader>
        <Typography variant="h6">
          {props.headerTitle}
        </Typography>
      </CardHeader>

      <List className={classes.root}>
        {listItems}
      </List>
    </ListBody>
  )
}

/*
* Below is code for a ContactItem.
* The ContactItem contains the body of contact underneath the ContactList card in the sidebar.
*/

/* the format for margin: top right bottom left */
const ItemContainer = styled(Paper)`
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

function ContactItem(props) {
  return (
    <ItemContainer elevation={2}>
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
    </ItemContainer>
  )
}

/*
* Below is code for an EventItem.
* The EventItem contains the body of an event underneath the EventList card in the sidebar.
*/

const EventBody = styled.div``

function EventItem(props) {
  return (
    <ItemContainer elevation={2}>
      <ListItemText
        primary={
          <Typography align="center" variant="h6" component="h6">
            {props.name}
          </Typography>
        }
        secondary={
          <EventBody>
            <Typography style={{margin: '0 8px 8px 8px'}} display="block" align="center" variant="body2">
              {props.description}
            </Typography>
            <Typography align="center" variant="subtitle1">
              {props.date}
            </Typography>
          </EventBody>
        }
      />

    </ItemContainer>
  )
}

