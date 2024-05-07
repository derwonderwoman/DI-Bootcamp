const User = (props) => {
    return (
     <div className='tc dib br3 pa3 ma2 bg-light-green grow shadow-5'>
       <img src={`https://robohash.org/${props.id}?size=150x150`} />
       <h2 >{props.name}</h2>
       <h3>{props.username}</h3>
       <p>{props.email}</p>
 
     </div>
   );
 };
 export default User;