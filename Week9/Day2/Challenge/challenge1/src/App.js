import './App.css';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [languages, setLanguages] = useState([
  {name: "Php", votes: 0},
  {name: "Python", votes: 0},
  {name: "JavaSript", votes: 0},
  {name: "Java", votes: 0}
])

const increaseVotes = (languageName) => {
  const updatedLanguages = languages.map(language => {
    if (language.name === languageName) {
      return { ...language, votes: language.votes + 1 };
    }
    return language;
  });
  setLanguages(updatedLanguages);
};
  return (
    <div className='wrapper'>
      <header >
          <h1>Vote Your Language!</h1>
          <ul>
            {languages.map(language => (
              <li class="fs-2 border border-secondary text-bg-warning p-3 container text-center col-3 p-3 mb-2" key={language.index}>
              {language.votes} {language.name}
              <button type="button" class="btn text-success fs-3" data-bs-toggle="button" onClick={() => increaseVotes(language.name)}>Click Here</button>
          </li>
        ))}
      </ul>
      </header>
    </div>
  );
}

export default App;
