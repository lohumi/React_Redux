const {createStore}= require('redux');
// require("babel-core").transform("code", {
//   plugins: ["transform-object-rest-spread"]
// });

const  initialState={
    age:21
}
const myReducer= (state=initialState,action)=>{
//const newState={...state };
const newState={age:0}
Array.prototype.push.apply(newState, state);// alternative to spread operator
if(action.type==='ADD')
{
    newState.age +=1;
}
return newState;
};

const store= createStore(myReducer);

store.dispatch({type:'ADD'});
store.dispatch({type:'ADD'});

console.log(store.getState());