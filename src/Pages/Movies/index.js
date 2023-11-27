import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { Style } from "./Style";

export default function Movies() {
  const [data, setData] = useState({
    data: [],
    metadata: {
      current_page: 1,
      per_page: 10,
      page_count: 25,
      total_count: 250,
    },
  });
  useEffect(function () {
    getApi();
  }, []);
  function getApi(page = 1) {
    api
      .get(`movies`, { params: { page: page } })
      .then(function (res) {
        setData(res.data);
      })
      .catch(function () {});
  }
  function renderFarm() {
    return data.data.map((item) => {
      const { id, title, poster } = item;
      return (
        <li key={id}>
          <img className="img-film" src={poster} />
          <h2>{title}</h2>
        </li>
      );
    });
  }
  return (
    <Style>
      <div className="movies">
        <ul style={{ display: "flex", gap: "25px", flexWrap: "wrap",justifyContent:"center" }}>
          {renderFarm()}
        </ul>
      </div>
    </Style>
  );
}
