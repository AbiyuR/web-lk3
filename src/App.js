import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro'
import Trending from "./components/Trending"
import SuperHero from "./components/Superhero"

import "./style/landingpage.css"
function App() {
  return (
<div>
  {/*intro section */}
  <div className='myBG'>
   <NavigationBar />
   <Intro/>
  </div>
  {/* end of intro */}

  {/* trending section*/}
  <div className='trending'>
      <Trending/>
  </div>
  {/* end of trending section*/}

  <div className='superhero'>
    <SuperHero/>
  </div>
</div>
  );
}

export default App;
