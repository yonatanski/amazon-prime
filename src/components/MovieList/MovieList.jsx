import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { movieListData } from "../../Data/movieListData"
import logoTitle from "../../assests/logo/prime-logo-large-v4._CB509553088_.png"

import "./MovieList.css"

const MovieList = ({ title }) => {
  return (
    <Container fluid className="mt-4">
      <div className="title-movielist d-flex align-items-center mb-3 ">
        <img src={logoTitle} alt="" className=" align-self-center" height={24} />
        <h4 className=" mb-0">
          <strong>{title ? title : "Amazon Originals and Exclusives"}</strong>
        </h4>
      </div>
      <Row className="row mx-n1 mb-lg-5">
        {movieListData.map((item, index) => (
          <Col className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-1 mb-4 mb-lg-0" key={index}>
            <img src={item.image} alt="movie list icon" className="w-100 img-fluid rounded" />
            <img src={item.bagde} alt=" amazon prime badge" className="prime-badge_movielist" />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MovieList
