import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

function Home({ scoreData }) {
  console.log(scoreData);
  return (
    <div>
      <h1>World Urban Areas Quality of Life App</h1>
      <List>
        {scoreData.map((area, index) => (
          <ListItem
            key={index}
            // onClick={() => checkItem(item.id)}
            role={undefined}
          >
            <Link to="/details">
              <ListItemText primary={area.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Home;
