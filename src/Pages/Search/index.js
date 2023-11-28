import { useState } from "react";
import PrimaryLayout from "../../Layout/PrimaryLayout";
import { Style } from "./style";
import { api } from "../../utils/api";

export default function Search() {
    const [data,setDate]=useState({
        data:[],
        metadata:{
            current_page: 1,
            per_page: 1,
            page_count: 10,
            total_count: 250
        }
    })
  function typing(event) {
    console.log(event.target.value);
    api.get("movies" , {params:{q:event.target.value}})
  }

  return (
    <PrimaryLayout>
      <Style>
        <div className="container">
          <div className="content">
            <input
              type="text"
              placeholder="Type SomeThing...."
              onChange={typing}
            />
          </div>
        </div>
      </Style>
    </PrimaryLayout>
  );
}
