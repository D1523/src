import './App.css';
import {useState} from "react"
import data from './data';

function App() {
const [assurances, setAssurances] = useState(data);

import './App.css';
import {useState} from "react"
import data from './data';

function App() {
const [assurances, setAssurances] = useState(data);


return (
  <main>
    <section className='container'>
      <h3>National Holidays Dates</h3>
      {assurances.map((holiday) => {
        return (
          <div key={holiday.id} className="holiday">
            <img src={holiday.img} />
            <div>
              <p>{holiday.title}</p>
              <p>{holiday.tel}</p>
            </div>
          </div>
        )
      })}
        <button onClick={()=> setAssurances([])}>Clear All</button>
      </section>
    </main>
  );
}

  

export default App;
return (
  <main>
    <section className='container'>
      <h3>National Holidays Dates</h3>
      {assurances.map((holiday) => {
        return (
          <div key={holiday.id} className="holiday">
            <img src={holiday.img} />
            <div>
              <p>{holiday.title}</p>
              <p>{holiday.tel}</p>
            </div>
          </div>
        )
      })}
        <button onClick={()=> setAssurances([])}>Clear All</button>
      </section>
    </main>
  );
}

  

export default App;


 



