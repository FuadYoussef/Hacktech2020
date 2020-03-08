import React, {Component} from 'react';
import Login from "./LoginPage"
import Register from "./RegisterPage"
import "./loginStyle.scss"

class LoginAndRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoginOpen: true,
        };
      }
    
    changeState() {
        const { isLoginActive } = this.state;
       
        if (isLoginActive) {
          //login: rightside 
          this.rightSide.classList.remove("right");
          this.rightSide.classList.add("left");
        } else {
          //register: leftside 
          this.rightSide.classList.remove("left");
          this.rightSide.classList.add("right");
        }
 
        this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    }

    render() {
        const { isLoginActive } = this.state; 
        const current = isLoginActive ? "Register" : "Login";
        const currentActive = isLoginActive ? "Login" : "Register"; 
        return(
            <div className="LoginAndRegister">
                <div className="login">
                    <div className="container">
                        {isLoginActive && <Login/>}
                        {!isLoginActive && <Register/>}
                    </div>
                    <RightSide
                        current={current}
                        currentActive={currentActive}
                        containerRef={ref => (this.rightSide = ref)}
                        onClick={this.changeState.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

const RightSide = props => {
    return (
      <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
        <div className="inner-container">
          <div className="text">{props.current}</div>
        </div>
      </div>
    );
};


export default LoginAndRegister