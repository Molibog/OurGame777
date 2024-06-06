import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Card() {
  // const { id } = useParams();
  // const [question, setQuestion] = useState([]);
  const [question, setQuest] = useState({});
  // async function fetchData() {
  //   const s = await fetch(`/api/question/${currentTheme}`);
  //   const r = await s.json();
  //   setQuestion(r.data);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const [answer, setAnswer] = useState("");
  const [rightAnswer, setRightAnswer] = useState("");
  const { themeId, questionId } = useParams();

  useEffect(() => {
    fetch(`/api/question/${questionId}`)
      .then((res) => res.json())
      .then((data) => setQuest(data.question));
  }, [themeId, questionId]);

  function chekAnswer() {
    if (answer === question.answer) {
      setRightAnswer("Верно!");
    } else {
      setRightAnswer(`Правильный ответ: ${question.answer}`);
    }
  }

  return (
    <>
      <div className="card" style={{ width: "50rem" }}>
        <h1 className="card-title">{question.title}</h1>
        <img className="card-img-top" src={question.img} />
        {question.id == 6 || question.id == 12 ? (
          <div>
            <input
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
            />
            <button onClick={chekAnswer} style={{ color: "blue" }}>
              Проверка
            </button>
            <Link to={"/"}>В меню</Link>
            <img src="../public/yes-6579_256.gif" alt="" />
          </div>
        ) : (
          <div>
            <input
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
            />
            <button onClick={chekAnswer} style={{ color: "blue" }}>
              Проверка
            </button>

            <button
              onClick={() => {
                setAnswer("");
                setRightAnswer("");
              }}
            >
              <Link to={`/theme/${themeId}/question/${question.id + 1}`}>
                Дальше
              </Link>
            </button>
            <h1>{rightAnswer}</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
