
import './App.css'
// import Lottery from './Lottery.jsx';
import Ticket from './Ticket';


function App() {
  

  return (
    <>
      <Ticket ticket={[0,1,2]}/>
      
      <Ticket ticket={([1,6,5,9,5])}/>
      
    </>
  )
}

export default App
