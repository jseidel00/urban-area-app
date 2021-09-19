import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Container } from "@material-ui/core";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";

const ROOT_URL = "https://api.teleport.org/api/urban_areas/";

function App() {
  const [urbanAreas, setUrbanAreas] = useState([]);
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    let data = [];
    axios
      .get(ROOT_URL)
      .then((res) => {
        setUrbanAreas(res.data._links["ua:item"]);
      })
      .catch((err) => alert(err));

    urbanAreas.map((area) => {
      const currentArea = {
        name: "",
        href: "",
        score: 0,
        summary: "",
        categories: [],
      };
      const url = area.href + "scores/";
      currentArea.name = area.name;
      currentArea.href = area.href;
      axios
        .get(url)
        .then((res) => {
          currentArea.score = res.data.teleport_city_score;
          currentArea.summary = res.data.summary;
          res.data.categories.map((item) => {
            let newItem = {
              color: item.color,
              name: item.name,
              score_out_of_10: item.score_out_of_10,
            };
            currentArea.categories = [...currentArea.categories, newItem];
          });
        })
        .catch((err) => alert(err));
      data = [...data, currentArea];
    });
    setScoreData(data);
    // console.log(scoreData);
  }, []);

  return (
    <div>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home scoreData={scoreData} />
          </Route>
          <Route exact path="/details" component={Details} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
