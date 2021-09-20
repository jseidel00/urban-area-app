import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

function Details() {
  const { obj } = useLocation().state;
  let url = obj.area.href + "scores";

  const [area, setArea] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchAreas();
    console.log(area);
  }, []);

  const fetchAreas = async () => {
    const res = await axios.get(url).catch((err) => alert(err));
    setArea(res);
    setLoading(false);
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <h1>This is the details page for {obj.area.name}</h1>
      <h2>Overall Score: {area.data.teleport_city_score}</h2>
      <div dangerouslySetInnerHTML={{ __html: area.data.summary }}></div>
    </div>
  );
}

export default Details;
