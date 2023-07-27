import icnR from "../../assets/img/icn_arw_pc.svg";
import { BtnTab } from "../../components/buttons/Buttons";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import data from "../../assets/json/news.json";
import "./news.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [category, setCategory] = useState("all");
  const [pagination, setPagination] = useState([]);
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let items = [];
    if (category === "all") items = [...data];
    else items = data.filter((item) => item.status === category);
    let temp = [];
    let i = 0;
    while (items.length !== 0) {
      temp[i] = items.slice(0, 10);
      items = items.slice(10);
      i++;
    }
    setPagination((pagination) => (pagination = temp));
    setNumber(0);
    return () => {};
  }, [category]);

  useEffect(() => {
    // Scroll to top when a new page is selected
    window.scrollTo(0, 0);
  }, [number]);

  return (
    <>
      <Header />
      <div className="news">
        <div className="news__content">
          <div className="section-title">
            <div className="section-title__dot">
              <div className="section-title__flash" />
            </div>
            <span className="section-title__txt">NEWS</span>
          </div>
          <div className="news__tabs">
            <div className="new__tabs__btn">
              {["all", "info", "release", "corporate"].map((tab, index) => (
                <BtnTab
                  key={index}
                  onClick={(event) => {
                    setCategory(event.target.textContent);
                  }}
                  addClass={category === tab ? "active" : null}
                >
                  {tab}
                </BtnTab>
              ))}
            </div>
            <div className="rows new-data">
              {pagination[number]?.map((item) => (
                <div className="rows__item" key={item.id}>
                  <div className="rows__item__left">
                    <div className="rows__item__date">
                      <p>{item.date}</p>
                    </div>
                    <div className="rows__item__status">
                      <p>{item.status ? item.status : "info"}</p>
                    </div>
                    <div className="rows__item__content">
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <div className="rows__item__right">
                    <button
                      className="rows__item__btn"
                      onClick={() => navigate(`${item.url}`)}
                    >
                      <img src={icnR} alt="Right icon" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pagination">
            <button
              className="prev"
              onClick={() =>
                setNumber((number) => (number > 0 ? number - 1 : number))
              }
            >
              &lt;
            </button>
            {pagination?.map((item, index) => (
              <button
                key={index}
                className={`number ${number === index ? "active" : null}`}
                onClick={() => setNumber((number) => (number = index))}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="next"
              onClick={() =>
                setNumber((number) =>
                  number < pagination.length - 1 ? number + 1 : number
                )
              }
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default News;
