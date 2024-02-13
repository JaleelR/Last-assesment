import React, { useState, useEffect } from "react";
import { Route, Switch} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import Item from "./Item";
import { NewItemForm } from "./NewItemForm";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([])

  // using use effect for get drinks because you need useEffect during asycronus functions 
  //also you only want it to happen one time 
  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks.length} drinks={drinks.length} />
            </Route>

            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" itemType="snacks"/>
            </Route>
                
            {/* to dynamically change the url use props for item type*/}
            <Route exact path="/drinks">
              <Menu items={drinks} title="drinks" itemType="drinks"/>
            </Route>

            <Route exact path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>

            <Route exact path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
          </Route>

            <Route exact path="/NewItem">
              <NewItemForm/>
            </Route>
            <Route>
              <h1>Hmmm. I can't seem to find what you want.</h1>
            </Route>
            
          </Switch>
        </main>
      
    </div>
  );
}

export default App;
