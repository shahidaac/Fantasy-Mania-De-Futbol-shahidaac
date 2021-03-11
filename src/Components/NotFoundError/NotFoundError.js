import React from "react";
import "./NotFoundError.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NotFoundError = () => {
  return (
    <div>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="content_404">
                  <h3 class="h2">Look like you're lost</h3>
                  <p>
                    It's just a 404 Error! What you’re looking for may have been
                    misplaced in Long Term Memory.
                  </p>
                  <Button className="explore-btn">
                    <Link to="/">
                      Back to home
                      <span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundError;
