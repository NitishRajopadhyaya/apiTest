import { useEffect, useState } from "react";
import DataDisplay from "./DataDisplay";
const Home = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.metta.one/v1/ehr/investigation/patient-id/KE8I45HP/items",
      {
        method: "GET",
        headers: {
          "API-Key": "111588491112680278288",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, []);
  // console.log("HOme");
  // console.log(datas);
  return (
    <div className="Home">
      <DataDisplay dataslist={datas}></DataDisplay>
    </div>
  );
};

export default Home;
