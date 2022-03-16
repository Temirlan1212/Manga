import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import ProductList from "../components/CRUD/ProductList/ProductList";
import { useProducts } from "../contexts/ProductContext";
import "./pages.css";

const ProductsPage = () => {
  const { products, getProducts } = useProducts();
  const [page, setPage] = useState(0);

  const productPerPage = 2;

  const location = useLocation();

  const pageCount = Math.ceil(products.length / productPerPage);

  const pageVisited = page * productPerPage;

  const paginateProducts = products.slice(
    pageVisited,
    pageVisited + productPerPage
  );

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  useEffect(() => {
    getProducts();
  }, [location.search]);

  return (
    <center>
      <ProductList products={paginateProducts} />
      <ReactPaginate
        previousLabel="< "
        nextLabel=" >"
        onPageChange={changePage}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        previousLinkClassName="previousBtn"
        nextLinkClassName="nextBtn"
        activeClassName="activeBtn"
        disabledClassName="disabledBtn"
        variant="outlined"
      />
    </center>
  );
};

export default ProductsPage;
