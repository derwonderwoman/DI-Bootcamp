import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const[destination, setDestination] = useState('');
  const [gender, setGender] = useState('');
  const[NutsDiet,setNutsDiet] = useState('No');
  const[LactoseDiet,setLactoseDiet] = useState('No');
  const[VeganDiet,setVeganDiet] = useState('No');

  const handleSubmit = (event) => {
    console.log('Submitted:', { firstName, lastName, age, gender, destination, NutsDiet, LactoseDiet, VeganDiet });
  };

  return (
    <div>
    <div className='sample'>
    <h1>Sample Form</h1>
    <form id ="inputForm" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="firstName"
          name = "firstName"
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="lastName"
          name = "lastName"
          value={lastName}
          placeholder='Last Name'
          onChange={(e) => setLastName(e.target.value)}
          required/>
      </div>
      <div>
        <input
          type="number"
          id="age"
          name = "age"
          value={age}
          placeholder='Age'
          onChange={(e) => setAge(e.target.value)}
          required/>
      </div>
      <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label htmlFor="Female">Female</label>
          </div>
      <div>
          <label htmlFor="destination">Select your destination</label> <br/>
          <select
            id="destination"
            value={destination}
            name = "destination"
            onChange={(e) => setDestination(e.target.value)}
            required
          >
            <option value="">--Please Choose a destination--</option>
            <option value="Thailand">Thailand</option>
            <option value="Brazil">Brazil</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        
        <label htmlFor="diet">Dietary restrictions:</label> <br/>
          <div>
            <input
              type="checkbox"
              id="nuts"
              name="NutsDiet"
              value="Yes"
              onChange={(e) => setNutsDiet(e.target.checked ? 'Yes' : 'No')}
            />
            <label htmlFor="NutsDiet">Nuts free</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="lactose"
              name="LactoseDiet"
              value="Yes"
              onChange={(e) => setLactoseDiet(e.target.checked ? 'Yes' : 'No')}
            />
            <label htmlFor="LactoseDiet">Lactose free</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="vegan"
              name="LactoseDiet"
              value="Yes"
              onChange={(e) => setVeganDiet(e.target.checked ? 'Yes' : 'No')}
            />
            <label htmlFor="diet">Vegan meal</label>
          </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div className='entered-info'>
    <h2>Entered Information</h2>
    <div>
    <label htmlFor="name">Your name: {firstName} {lastName} </label>
    </div>
    <div>
    <label htmlFor="name">Your age: {age} </label>
    </div>
    <div>
    <label htmlFor="name">Your gender:{gender} </label>
    </div>
    <div>
    <label htmlFor="name">Your destination:{destination} </label>
    </div>
    <div>
    <label htmlFor="name">Your dietary restrictions: </label>
    </div>
    <div>
    <label htmlFor="name">**Nuts free:{NutsDiet}</label>
    </div>
    <div>
    <label htmlFor="name">**Lactose free: {LactoseDiet}</label>
    </div>
    <div>
    <label htmlFor="vegan">**Vegan meal: {VeganDiet}</label>
    </div>
  </div>
  </div>
  );
}

export default App
