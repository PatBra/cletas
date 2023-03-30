import React, { Fragment, useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import MetaData from "./layout/MetaData";
import Product from "./product/Product";
import Loader from "./layout/Loader";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getProducts } from "../actions/productActions";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 50000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);

  const categories = [
    "Downhill",
    "Enduro",
    "Trail",
    "E-Bike",
    "Carretera",
    "Gravel",
    "Accesorios",
    "Indumentaria",
  ];

  const alert = useAlert();
  const dispatch = useDispatch();

  const {
    loading,
    products,
    error,
    productsCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector(state => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, alert, error, keyword, currentPage, price, category, rating]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const resetFilters = () => {
    setCategory("");
    setRating(0);
    setPrice([1, 50000]);
  };

  let count = productsCount;
  if (keyword) {
    count = filteredProductsCount;
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Las mejores bicicletas"} />

          <section id="products" className="container mt-5">
            <div className="row">
              {/* {keyword ? ( */}
              <Fragment>
                <div className="col-6 col-md-3 mt-5 mb-5">
                  <div className="px-5">
                    <Range
                      marks={{
                        1: `1CLP`,
                        50000: `50000CLP`,
                      }}
                      min={1}
                      max={50000}
                      defaultValue={[1, 50000]}
                      tipFormatter={value => `${value}CLP`}
                      tipProps={{
                        placement: "top",
                        visible: true,
                      }}
                      value={price}
                      onChange={price => setPrice(price)}
                    />

                    <hr className="my-5" />

                    <div className="mt-5">
                      <h4 className="mb-3">Categoria</h4>

                      <ul className="pl-0">
                        {categories.map(category => (
                          <li
                            style={{
                              cursor: "pointer",
                              listStyleType: "none",
                            }}
                            key={category}
                            onClick={() => setCategory(category)}
                          >
                            {category}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <hr className="my-3" />

                    <div className="mt-5">
                      <h4 className="mb-3">Calificación</h4>

                      <ul className="pl-0">
                        {[5, 4, 3, 2, 1].map(star => (
                          <li
                            style={{
                              cursor: "pointer",
                              listStyleType: "none",
                            }}
                            key={star}
                            onClick={() => setRating(star)}
                          >
                            <div className="rating-outer">
                              <div
                                className="rating-inner"
                                style={{
                                  width: `${star * 20}%`,
                                }}
                              ></div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <hr className="my-3" />

                    <button
                      type="button"
                      id="reset_filter_btn"
                      onClick={resetFilters}
                    >
                      Borrar Filtro
                    </button>
                  </div>
                </div>

                <div className="col-6 col-md-9">
                  <div className="row">
                    {products.map(product => (
                      <Product key={product._id} product={product} col={4} />
                    ))}
                  </div>
                </div>
              </Fragment>
              {/* ) : (
                products.map(product => (
                  <Product key={product._id} product={product} col={3} />
                ))
                )} */}
            </div>
          </section>

          {resPerPage <= count && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText={">"}
                prevPageText={"<"}
                firstPageText={"<<"}
                lastPageText={">>"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
