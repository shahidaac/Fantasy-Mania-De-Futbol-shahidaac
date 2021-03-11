import React from "react";
import "./Header.css";
import { useState } from "react";
import { useEffect } from "react";
import LeagueInfo from "../LeagueInfo/LeagueInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Header = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagues(data.leagues));
  }, []);

  return (
    <div>
      <section className="hero-part">
        <h1>Shahid-Miya Fantasy Manía De Fútbol</h1>
      </section>
      <section className="hero-body">
        <Container>
          <Row>
            {leagues.slice(0, 18).map((league) => (
              <LeagueInfo
                key={league.idLeague}
                leagueInfo={league}
              ></LeagueInfo>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Header;
