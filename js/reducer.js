let state;
 
function reducer( state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

function dispatch(action){
    state = reducer(state, action);
    render()
  }


function render(){
    let container = document.getElementById('container')
    container.innerText = state.count
  }

  dispatch({type: '@@INIT'})
// Now, if instead we want to show the number zero, our default state, well we can just refresh our page, and then dispatch an action that returns the default state like so: dispatch({type: '@@init'}). This does not increase our state, but it does return our default state and then call render.

let button = document.getElementById('button');
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})
