import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from './Component/Header';
import Post from "./Component/Post";
import Form from "./Component/Form";
import Landing from "./Component/Landing";
import { useState ,useEffect} from 'react';
import axios from "axios"
function App() {
  const [photos,setPhotos]=useState([])
  const [updateUI, setUpdateUI] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);
  
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/Post">
            <Post photos={photos}/>
          </Route>
          <Route exact path="/upload">
            <Form setUpdateUI={setUpdateUI}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
