import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Card() {

  const [question, setQuest] = useState({});

  const [answer, setAnswer] = useState("");
  const [rightAnswer, setRightAnswer] = useState("");
  const { themeId, questionId } = useParams();

  async function getQuestion() {
    const respons = await axios.get(`/api/question/${questionId}`)
    setQuest(respons.data.question)
    
    
  }
  
  
    useEffect(() => {
      getQuestion()
  
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
        <div>
        <input
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
            />
            <button onClick={()=> chekAnswer()} style={{ color: "blue" }}>
              Проверка
            </button>
            <h1>{rightAnswer}</h1>
        </div>
        {question.id === 6 || question.id === 12 ? (
          <div>

            <Link to={"/"}>В меню</Link>
            <img src="../public/yes-6579_256.gif" alt="" />
          </div>
        ) : (
          

       <div>
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
          
       </div>
      
        )}
      </div>
    </>
  );
}

export default Card;
