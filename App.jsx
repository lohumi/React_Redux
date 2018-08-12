import React from 'react';
import ReactDOM  from 'react-dom';
import {connect} from 'react-redux';

class App extends React.Component{
constructor(props) {
    super(props);
    //this.state = {age:21};
   //** need to bind event handler this way */
//     this.AgeUp = this.AgeUp.bind(this);
//    this.AgeDown = this.AgeDown.bind(this);
  }
//   AgeUp(){
//       this.setState({
//         age: ++ this.state.age
//       })
//   }
//   AgeDown(){
//       this.setState({
//         age: -- this.state.age
//       })
      
//   }
   render() {
    return (
        <div>
            <div>Age:<span>{this.props.age}</span></div>
            <div><button onClick={this.props.AgeUp}>Age Up</button></div>
             <div><button onClick={this.props.AgeDown}>Age Down</button></div>
        </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        age:state.age
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
       AgeUp:()=> dispatch({type:'AGE_UP'}),
       AgeDown:()=> dispatch({type:'AGE_DOWN'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
