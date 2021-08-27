import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Container } from "@material-ui/core";

const ROOT_URL = "https://api.teleport.org/api/urban_areas/";

function App() {
  const [urbanAreas, setUrbanAreas] = useState([]);
  // const [scores, setScores] = useState([]);

  useEffect(() => {
    axios
      .get(ROOT_URL)
      .then((res) => {
        setUrbanAreas(res.data._links["ua:item"]);
      })
      .catch((err) => alert(err));
    // console.log(urbanAreas);

    // urbanAreas.map((area) => {
    //   const url = area.href + "scores/";
    //   // console.log(url);
    //   axios
    //     .get(url)
    //     .then((res) => {
    //       setScores(res.data.teleport_city_score);
    //     })
    //     .catch((err) => alert(err));
    // });
    // console.log(scores);
  }, []);

  return (
    <div>
      <Container>
        <h1>World Urban Areas Quality of Life App</h1>
        <List>
          {urbanAreas.map((area, index) => (
            <ListItem
              key={index}
              // onClick={() => checkItem(item.id)}
              role={undefined}
            >
              <ListItemText primary={area.name} />
              <a>{area.href}scores/</a>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
}

export default App;
