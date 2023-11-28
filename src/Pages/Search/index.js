
import { useState, useEffect } from "react";
import PrimaryLayout from "../../Layout/PrimaryLayout";
import { Style } from "./style";
import { api } from "../../utils/api";
import { createSearchParams, useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams,setsearchParams] = useSearchParams();
  console.log(searchParams.get("q"));
  const [data, setData] = useState({
    data: [],
    metadata: {
      current_page: 1,
      per_page: 1,
      page_count: 10,
      total_count: 250,
    },
  });

  useEffect(() => {
    if (searchParams.get("q")) {
      getApi(searchParams.get("q"));
    }
  }, [searchParams]);

  function getApi(Search) {
    api.get("movies", { params: { q: Search } })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function typing(event) {
    getApi(event.target.value);
    setsearchParams(createSearchParams(({q:event.target.value})))
  }

  function renderFarm() {
  if(data.data.length === 0){
    return "notFound"
  }
    return data.data.map(({ id, poster, title }) => (
      <li key={id}>
        <h2 className="title">{title}</h2>
        <img src={poster} alt={title} />
      </li>
    ));
  }

  return (
    <PrimaryLayout>
      <Style>
        <div className="container">
          <div className="content">
            <input
            value={searchParams.get("q") ? searchParams.get("q") : "" }
              type="text"
              placeholder="Type Something...."
              onChange={typing}
            />
          </div>
        </div>
        <ul>{renderFarm()}</ul>
      </Style>
    </PrimaryLayout>
  );
}
