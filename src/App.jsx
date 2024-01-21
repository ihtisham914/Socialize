import "./App.css"
import Home from "./pages/home/Home";
import Auth from './pages/Auth/Auth';
import Profile from './pages/Profile/Profile';
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
function App() {
  return (
    <MantineProvider>
      <div className="App">
       <div className="blur" style={{top: '-18%', right: 0}}></div> 
       <div className="blur" style={{top: '36%', left: '-8rem'}}></div> 
       {/* <Home/> */}
       {/* <Auth/> */}
       <Profile/>
      </div>
    </MantineProvider>
  );
}

export default App;
