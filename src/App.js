import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCard from './TinderCards';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header/>
      {/* tinder cards */}
      <TinderCard/>
      {/* swipe buttons */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
