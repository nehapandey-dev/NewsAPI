import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchApiData({ cat }) {
  const [Data, setData] = useState("");
  const fetchData = async () => {
    await axios
      .get(cat
        ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=2cb9a42b25774d469d88a62afddd110a`
        :"https://newsapi.org/v2/top-headlines?country=in&apiKey=2cb9a42b25774d469d88a62afddd110a"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    fetchData();
  }, [cat]);
  return (
    <div className="container">
      <h2 className="head-two mt-2">News Headlines →</h2>
      <div
        className="container d-flex justify-content-start align-items-center flex-column my-3"
        style={{ minHeight: "100vh" }}
      >
        {Data
          ? Data.map((item, index) => (
              <>
                <div className="shadow p-3 mb-5 bg-body rounded">
                  <div
                    className="container my-2 d-flex justify-content-center align-items-center border p-3 mb-2 bg-secondary"
                    Key={item.id}
                  >
                    <div className="w-50">
                      <img
                        src={item.urlToImage}
                        alt="img loading"
                        className="img-fluid"
                        style={{
                          width: "350px",
                          height: "250px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="w-50 text-white">
                      <h5>{item.title}</h5>
                      <p>{item.content}</p>
                      <p>{item.description}</p>
                      <a href={item.url} target="blank" className="text-info">
                        Know More →
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ))
          : "Loding..."}{" "}
      </div>
    </div>
  );
}

export default FetchApiData;
