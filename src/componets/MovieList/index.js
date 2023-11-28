import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { Style } from "./style";

export default function MovieList(props) {
  const { title = "", url = "" } = props;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    api
      .get(url)
      .then(function (response) {
        setItems(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
      });
  }, []);
  function renderFarm() {
    return items.map((item) => {
        const { id, poster, year, country, title } = item;
        return (
          <li key={id}>
            <Link to={`/item/${id}`}>
              <div className="card">
                <img src={poster} />
                <h3>{title}</h3>
              </div>
            </Link>
          </li>
        );
      });
  }
  return (
    <Style className="movie-list">
        <div className="container">
            <h2 className="title">{title}</h2>
            {loading ? (
                <Loading/>
            ): (
                <ul className="flex flex-wrap gap-20">{renderFarm()}</ul>
            )}
        </div>
    </Style>
  )
}
