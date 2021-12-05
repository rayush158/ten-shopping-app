import React, { useState, useEffect, useLayoutEffect } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";
import CardItem from "./cartItem";

// const apiKey = "563492ad6f917000010000013237feb99fbc41f69cb2cfb4b8d18eea";

// const url = "https://api.pixels.com/v1/search?query=laptop&per_page=6&page=1";

const LocalUrl = "http://myjson.dit.upm.es/api/bins/g50z";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  // const fetchPhotos = async () => {
  //   const { data } = await Axios.get(url, {
  //     header: {
  //       Authorization: apiKey,
  //     },
  //   });
  //   const { photos } = data;
  //   const allProduct = photos.map((photo) => ({
  //     smallImage: photo.src.medium,
  //     tinyImage: photo.src.tiny,
  //     productName: random.word(),
  //     productPrice: commerce.price(),
  //     id: random.uuid(),
  //   }));
  //   console.log("Product received from fetch: ", allProduct);

  //   setProduct([allProduct]);

  //   console.log("Product after fetch: ", product);
  // };

  const fetchPhotos = async () => {
    const { data } = await Axios.get(LocalUrl);
    const { photos } = data;
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));
    console.log("Product received from fetch: ", allProduct);

    setProduct([...allProduct]);
    console.log("Product after fetch: ", product);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy page</h1>
      <Row>
        {console.log("Product inside return: ", product)}
        {product.map((prod) => (
          <Col md={4} key={prod.id}>
            <CardItem product={prod} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
