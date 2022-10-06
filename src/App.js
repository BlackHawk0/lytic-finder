import './App.css';
import Lyrics from './components/Lyrics';
import Navbar from './components/Navbar'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Tracks from './components/Tracks';
import Search from './components/Search';
import Context from './Context';

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Context />
    </div>
    // <BrowserRouter>
    //    <>
    //     <Navbar/>
    //     <div className="container">
    //       <Switch>
    //         <Route exact path="/home" component={Container} />
    //         <Route exact path="/lyrics/:artist/:track" component={Lyrics} />
    //       </Switch>
    //     </div>
    //   </>
    // </BrowserRouter>
  );
}

export default App;
