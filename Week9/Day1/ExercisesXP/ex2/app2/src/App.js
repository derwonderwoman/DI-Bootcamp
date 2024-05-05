import './App.css';
import user from "./user.json"
import UserFavoriteAnimals from './components/UserFavoriteAnimals';

function App() {
  return (
    <div>
      <header>
       <h3>{user[0].firstName}</h3>
       <h3>{user[0].lastName}</h3>
       <UserFavoriteAnimals favAnimals={user[0].favAnimals}/>
      </header>
    </div>
  );
}

export default App;
