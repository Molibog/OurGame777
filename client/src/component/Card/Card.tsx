import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import video1 from '../../../public/Elbrus.mp4'
import video2 from '../../../public/Test.mp4'



function Card() {

const videos = [video1, video2]

const [videoI, setVideoI] = useState(0)

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
  
    }, [themeId, questionId, videoI]);
  
    function chekAnswer() {
      if (answer === question.answer) {
        setRightAnswer("Верно!");
      } else {
        setRightAnswer(`Правильный ответ: ${question.answer}`);
      }
    }
 console.log(videoI);
 console.log(videos[videoI]);
 
    

  return (
    <>
      <div className="card" >
        <h1 className="card-title">{question.title}</h1>
        <div>
        <video key={videos[videoI]} autoPlay={true} controls style={{ width: '400px' }}>
        <source src={videos[videoI]} type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
        </div>
        
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
                setVideoI((prev)=> prev +1)
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
