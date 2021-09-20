import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import axios from "axios";

const ROOT_URL = "https://api.teleport.org/api/urban_areas/";

function Home() {
  const [urbanAreas, setUrbanAreas] = useState([]);

  useEffect(() => {
    fetchAreas();
  }, []);

  const fetchAreas = async () => {
    const res = await axios.get(ROOT_URL).catch((err) => alert(err));
    setUrbanAreas(res.data._links["ua:item"]);
  };

  return (
    <div>
      <h1>World Urban Areas Quality of Life App</h1>
      <List>
        {urbanAreas.map((area, index) => (
          <ListItem key={index} role={undefined}>
            <Link
              to={{
                pathname: `/details/${index}`,
                state: { obj: { area } },
              }}
            >
              <ListItemText primary={area.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Home;
