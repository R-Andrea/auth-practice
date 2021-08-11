'use strict';

 const e = React.createElement;
 const useState = React.useState;
 const useEffect = React.useEffect;


const SendButton = ()=> {

  const [liked, setLiked] = useState(false)

  return (
    <div>
      {liked ? <p>You liked this</p> : <button onClick={() => setLiked(true)}>Like </button> }
    </div>
  )
}


//class component version

// class SendButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You pressed this.';
//     }

//     return (
//       <button onClick={() => this.setState({ liked: true })}>
//         Like
//       </button>
//     );
//   }
// }


const domContainer = document.querySelector('#button_container');
ReactDOM.render(e(SendButton), domContainer);