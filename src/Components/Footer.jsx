import React from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className='footer'>
      <span className="copyrite">
        <h3 id="credit-title">Created by 
          Aloe, Kirk, & Matt &copy; {year}</h3>
          <h1 className="github-master"><a href="https://github.com/Mattrob10/Travel-Gear"target="_blank">
            <i className="fab fa-github" id="github-repo-link"></i>
          </a></h1>
      </span>
      <hr className="credit-break" />
        <span className="credits">
          <h3 id="credit-title-right">Our GitHubs</h3>
          <div className="credit-info">
            <span className="github-links">
            <a href="https://github.com/eonflower/trash-cats"target="_blank">
              <i className="fab fa-github"id="github-icon"></i>
            </a>
            <h4>Aloe</h4>
            </span>
            <span className="github-links">
            <a href="https://github.com/kirksurber1"target="_blank">
              <i className="fab fa-github"id="github-icon"></i>
            </a>
            <h4>Kirk</h4>
            </span>
            <span className="github-links">
            <a href="https://github.com/Mattrob10"target="_blank">
              <i className="fab fa-github" id="github-icon"></i>
            </a>
            <h4>Matthew</h4>
            </span>
          </div>
        </span>
    </div>
    </div>
  );
}

export default Footer;