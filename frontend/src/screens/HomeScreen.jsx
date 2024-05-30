import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../../slices/product.apiSlice"; 

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error?.message || "An error occurred"}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {Array.isArray(products) &&
              products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
