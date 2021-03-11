import React from "react";
import "./EachLeague.css";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faRssSquare } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faMars } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faEdgeLegacy } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import gentsTeam from "../../Images/gentsTeam.jpg";
import ladyTeam from "../../Images/ladyTeam.jpg";

const EachLeague = () => {
  const { eachId } = useParams();
  const [league, setLeague] = useState({});
  const [image, setImage] = useState(false);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${eachId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeague(data.leagues[0]));
  }, [eachId]);

  const viewImages = () => {
    let gender = league.strGender;
    let image;
    if (gender === "Male") {
      image = (
        <img className="img-fluid" src={gentsTeam} alt="team photo Men" />
      );
    } else if (gender === "Female") {
      image = (
        <img className="img-fluid" src={ladyTeam} alt="team photo Women" />
      );
    }
    return image;
  };

  return (
    <div>
      <section className="hero-part">
        <img width="200px" src={league.strBadge} alt="" />
      </section>
      <Container>
        <div className="league-details">
          <Row>
            <Col md={6} xs={12}>
              <h3 className="league-title">{league.strLeague}</h3>
              <ul>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </span>
                  Founded: {league.intFormedYear}
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faFlag} />
                  </span>
                  Country: {league.strCountry}
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faFutbol} />
                  </span>
                  Sports Type: {league.strSport}
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faMars} />
                  </span>
                  Gender: {league.strGender}{" "}
                </li>
              </ul>
            </Col>
            <Col md={6} xs={12}>
              {viewImages()}
            </Col>
          </Row>
        </div>
        <div className="summary">
          <p>{league.strDescriptionEN}</p>
        </div>
        <div className="social-icon">
          <ul>
            <li>
              <a href={league.strWebsite}>
                <FontAwesomeIcon icon={faEdgeLegacy} />
              </a>
            </li>
            <li>
              <a href={league.strRSS}>
                <FontAwesomeIcon icon={faRssSquare} />
              </a>
            </li>
            <li>
              <a href={league.strFacebook}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href={league.strTwitter}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href={league.strYoutube}>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
        </div>
        <div className="home-btn">
          <Button className="explore-btn">
            <Link to="/">
              Back to home
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default EachLeague;
