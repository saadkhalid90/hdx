import './App.css';
import Home from './views/home';
import About from './views/about';
import Approach from './views/approach';
import Contact from './views/contact';
import {Routes, Route} from 'react-router-dom';
import axios from "axios";
import { useEffect, useState  } from 'react';
import ReactGA from "react-ga4";

function App() {

  const [loadedHomeData, setHomeDataLoaded] = useState(null);
  const [loadedApproachData, setApproachDataLoaded] = useState(null);
  const [loadedAboutData, setAboutDataLoaded] = useState(null);
  const [loadedCommonData, setCommonDataLoaded] = useState(null);
  const [homeStats, setHomeStats] = useState([]);

  useEffect(() => {
    ReactGA.initialize("G-BD2NKRBE0G");
    if (!loadedCommonData) {
      axios({
        url: "https://wordpress.haystack-dx.com/graphql",
        method: "post",
        data: {
          query: `
            query commonInformation {
              commonInformation(id: "cG9zdDo0NA==") {
                companyInformation {
                  contactEmail
                  contactNumber
                  logo {
                    mediaItemUrl
                  }
                  mainAddress
                  name
                  secondaryAddress
                }
                socialMedia {
                  email
                  facebook
                  instagram
                  twitter
                  linkedIn
                  youtube
                }
              }
            }
          `,
        },
      }).then((result) => {
        setCommonDataLoaded(result.data.data.commonInformation);
      });
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" 
          element={
            <Home loadedHomeData={loadedHomeData} setHomeDataLoaded={setHomeDataLoaded} loadedCommonData={loadedCommonData} setHomeStats={setHomeStats} homeStats={homeStats}/>
          }
        />
        <Route path="/approach" 
          element={
            <Approach loadedApproachData={loadedApproachData} setApproachDataLoaded={setApproachDataLoaded} loadedCommonData={loadedCommonData}/>
          }
        />
        <Route path="/contact" 
          element={
            <Contact loadedCommonData={loadedCommonData}/>
          }
        />
        <Route path="/about" 
          element={
            <About loadedAboutData={loadedAboutData} setAboutDataLoaded={setAboutDataLoaded} loadedCommonData={loadedCommonData}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
