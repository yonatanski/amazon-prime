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
            <div className="strive-card position-relative">
              <img src={item.image} alt="movie list icon" className="w-100 img-fluid rounded" />
              <img src={item.bagde} alt=" amazon prime badge" className="prime-badge_movielist" />
              <div className="infos-container">
                <div className="infos-content">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="play-btn"> </div>
                    <h5 className="mb-0 ml-2">Play S1 E1</h5>
                    <div className="plus-btn ml-auto"> </div>
                  </div>
                  <p className="prime-title">Include with Prime</p>
                  <h6 className=""> Nine Perfect Season 1 </h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad necessitatibus dolores repellat quos fugit sunt iure sit facere. Doloribus deleniti labore nam praesentium culpa aliquam recusandae repellendus voluptate repellat
                    pariatur.
                  </p>
                  <div className="movie-footer">
                    <span>20221</span>
                    <i class="bi bi-chat-left-text"></i>
                    <i class="bi bi-badge-4k"></i>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MovieList
