import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

function Theme({ themes, currentTheme, setCurrentTheme }) {
  return (
    <>
      <div>
        <div>
          {themes.map((theme) => (
            <div key={theme.id} className="card" style={{ width: "30rem" }}>
              <img src={theme.img} className="card-img-top" alt="..."></img>
              <Link className="but"
                to={`/theme/${theme.id}/question/${theme.Questions[0].id}`}
              >
                {theme.title}
              </Link>
            </div>
          ))}
          {/* <button >Мультфильмы</button>
      <button>Фильмы</button> */}
        </div>
      </div>
    </>
  );
}

export default Theme;
