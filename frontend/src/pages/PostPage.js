import React from "react";
import {makeStyles} from "@material-ui/core/styles";

export default function PostPage() {
  const classes = useStyles();

  return(
    <div>
      <div className={classes.masonry}>
        <div>
        <div className={classes.card} style={{background: 'linear-gradient(#1de2db, #5b7de8)'}}>
          <div className={classes.cardAvatar} style={{backgroundImage: 'url(https://i.imgur.com/035PVSG.jpg)'}}></div>
          <p className={classes.cardText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
          <a href="#">
            <div className={classes.cardBtn}>READ MORE</div>
          </a>
        </div>
        <div className={classes.card} style={{background: 'linear-gradient(#fcaa44, #fe428e)'}}>
          <div className={classes.cardAvatar} style={{backgroundImage: 'url(https://i.imgur.com/wv0RjG6.jpg)'}}></div>
          <p className={classes.cardText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam</p>
          <a href="#">
            <div className={classes.cardBtn}>READ MORE</div>
          </a>
        </div>
        </div>
        <div>
        <div className={classes.card} style={{background: 'linear-gradient(#fcde8b, #ff716a)'}}>
          <div className={classes.cardAvatar} style={{backgroundImage: 'url(https://i.imgur.com/CYXMhW4.jpg)'}}></div>
          <p className={classes.cardText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt
          </p>
          <a href="#">
            <div className={classes.cardBtn}>READ MORE</div>
          </a>
        </div>
        <div className={classes.card} style={{background: 'linear-gradient(#ff4493, #e63784)'}}>
          <div className={classes.cardAvatar} style={{backgroundImage: 'url(https://i.imgur.com/JtZSmv9.jpg)'}}></div>
          <p className={classes.cardText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam</p>
          <a href="#">
            <div className={classes.cardBtn}>READ MORE</div>
          </a>
        </div>
        </div>
        <div>
        <div className={classes.card} style={{background: 'linear-gradient(#1fc2d6, #553181)'}}>
          <div className={classes.cardAvatar} style={{backgroundImage: 'url(https://i.imgur.com/VfL149L.jpg)'}}></div>
          <p className={classes.cardText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          </p>
          <a href="#">
            <div className={classes.cardBtn}>READ MORE</div>
          </a>
        </div>
        <div className={classes.card} style={{background: "linear-gradient(#ff839d, #f50b9a)"}}>
          <div className={classes.cardAvatar} style={{backgroundImage: 'url(https://i.imgur.com/Asb7a1h.jpg)'}}></div>
          <p className={classes.cardText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
          <a href="#">
            <div className={classes.cardBtn}>READ MORE</div>
          </a>
        </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  masonry: {
    columnCount: 3,
    columnGap: '1em',
    padding: '32px 32px 0 32px',
    background: 'transparent',
    maxHeight: '80vh',
    maxWidth: '75vw',
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    display: 'inline-table',
    // fontFamily: 'Roboto', 'sans-serif',
    textAlign: 'center',
    background: 'linear-gradient(#fe7379, #f5529f)',
    // minHeight: '300px',
    // width: '350px',
    minHeight: '15vh',
    width: '20vw',
    borderRadius: '10px',
    marginBottom: '10vh'
  },
  cardAvatar: {
    display: 'inline-block',
    marginTop: '30px',
    backgroundImage: 'url(https://i.imgur.com/eCBkzSn.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '20px',
    height: '140px',
    width: '140px',
    border: '8px solid #fff',
    borderRadius: '25px',
    // boxShadow: '10px 10px 5px', '#aaaaaa',
    // boxShadow: '0px 20px 50px 3px', '#00000033',
  },
  cardText: {
    textAlign: 'justify',
    color: 'rgba(255, 255, 255, 0.96)',
    fontSize: '16px',
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  cardBtn: {
    padding: '10px',
    display: 'inline-block',
    border: '4px solid #fff',
    borderRadius: '25px',
    width: '130px',
    fontSize: '14px',
    color: '#fff',
    fontWeight: 900,
    marginBottom: '30px',
}
}))