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
import Divider from "@material-ui/core/Divider";


/* Hard coded values, eventually we want to pull this from firebase */
const contactList = [
  {
    name: 'Colin Peppler',
    userName: 'colin',
    avatar: 'https://i.imgur.com/TJs6euk.png',
    lastMessage: 'Let\'s meetup!',
    lastMessageTimestamp: '5 min'
  },
  {
    name: 'Lee Singer',
    userName: 'abbas',
    avatar: 'https://i.imgur.com/XXfbrRY.png',
    lastMessage: 'byebye',
    lastMessageTimestamp: '10 hr'
  },
  {
    name: 'Babe Ruth',
    userName: 'lucy',
    avatar: 'https://i.imgur.com/eYRxRnD.png',
    lastMessage: 'See u in 20!',
    lastMessageTimestamp: '3 mo'
  },
  {
    name: 'Hannah Montana',
    userName: 'fuad',
    avatar: 'https://i.imgur.com/EcyyVVI.png',
    lastMessage: 'OFC ur invited!',
    lastMessageTimestamp: '1 yr'
  },
]

const eventList = [
  {
    name: 'Corona',
    description: 'A bad virus attack. A bad virus attack. A bad virus attack. A bad virus attack. A bad virus attack. A bad virus attack. A bad virus attack. A bad virus attack. A bad virus attack. A bad virus attack. A bad virus attack.A bad virus attack. A bad virus attack.',
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
    maxWidth: '25vw',
  },
}));


export default function ListCard(props) {
  const classes = useStyles();

  /* Had to put this within this function because we have a conditional variable relating to props (maxHeight) */
  const minHeight = props.listType == "Contact" ? "40%" : "55%";
  const ListBody = styled.div`
    color: #fff;
    padding: 16px 16px 0 16px;
    display: inline-flex;
    align-items: flex-start;
    border: None;
    flex-direction: column; 
    min-height: ${minHeight};
    min-width: 90%;
`

  const onMarkerClick = (userName) => {
    // A hack so userName is properly sent
    props.history.push({pathname: "/dashboard/chat/" + userName, state: { detail: userName }})
    window.location.reload();     /* another hack so we get the latest messsages */
  };

  let listItems = null;
  if (props.listType == "Contact") {                // Generate a ContactItem for each contact
    listItems = contactList.map(contact => (
      <div onClick={() => onMarkerClick(contact.userName)}>
      <ContactItem name={contact.name} avatar={contact.avatar}
                   lastMessage={contact.lastMessage}
                   lastMessageTimestamp={contact.lastMessageTimestamp}
      />
      </div>
      ))
  } else if (props.listType == "Event") {           // Generate an EventItem for each event
    listItems = eventList.map(event => (
      <EventItem name={event.name} description={event.description} date={event.date}/>))
  }


  return (
    <div className={props.listType}>
      <ListBody>
        <CardHeader>
          <Typography variant="h5" component="h6">
            {props.headerTitle}
          </Typography>
        </CardHeader>

        <List className={classes.root+' '+props.listType+'-inner'}>
          {listItems}
        </List>
      </ListBody>
    </div>
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
    <div className="Contact-list">
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
        <Divider component="li" />
    </div>
  )
}

/*
* Below is code for an EventItem.
* The EventItem contains the body of an event underneath the EventList card in the sidebar.
*/

const EventBody = styled.div``

function EventItem(props) {
  return (
    <div className="Events-list">
      <a href="/dashboard/mapview">
      <ItemContainer className="Event-text" elevation={3} boxShadow={3}>
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
      </a>
    </div>
  )
}

