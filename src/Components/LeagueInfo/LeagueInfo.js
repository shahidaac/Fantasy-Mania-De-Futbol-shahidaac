import React from "react";
import "./LeagueInfo.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LeagueInfo = (props) => {
  const {
    strLeagueAlternate,
    strLeague,
    strSport,
    idLeague,
  } = props.leagueInfo;
  const [badge, setBadge] = useState({});

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBadge(data.leagues[0]));
  }, [idLeague]);

  return (
    <Col md={4} xs={12}>
      <Card>
        <Card.Img variant="top" src={badge.strBadge} />
        <Card.Body>
          <Card.Title>{strLeagueAlternate || strLeague}</Card.Title>
          <p>Sports Type: {strSport}</p>
          <Button className="explore-btn">
            <Link to={`/LeagueInfo/${idLeague}`}>
              <span>Explore</span> <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default LeagueInfo;
