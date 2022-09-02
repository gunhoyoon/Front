import Axios from "axios";
import React, { useEffect } from "react";

function Poket() {
  const API_ROOT = "https://pokeapi.co/api/v2/pokemon/ditto";

  function getData() {
    Axios.get(API_ROOT).then((res) => {
      // console.log(res);
      console.log(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      poket
      <p>test</p>
    </div>
  );
}

export default Poket;

// http://localhost:3000/poket 까지 들어가서 내가 어느 파일에서 만들었는지 주소창까지 올바르게 적어야 원하는 데이터를 볼 수 있음
