import { useEffect, useState } from "react";
import chatBot from "../images/chatbot.png";
import axios from 'axios'; 
import { Questions } from "../interfaces/Questions";
import OptionsBot from "./OptionsBot";

function BotChatHome() {
  const [showText, setShowText] = useState(true);
  const [question, setQuestions] = useState<Questions[]>([])


  const [options, setOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answer, setAnswer] = useState(null); 


  const handleOptions = async (optionId:number) => {
    try {
      const response  = await axios.get(`http://127.0.0.1:3000/preguntas/options/:${optionId}`)
      const {is_final_answer, answer_text, next_question_id} = response.data

      if(is_final_answer){
        setAnswer(answer_text);
      } else {
        loadQuestion(next_question_id)
      } 
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowText(false);
    }, 4000);

    return () => clearTimeout(timeOut);
  });

  const [showChat, setShowChat] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const toggleChat = async () => {
    setShowChat(!showChat);
    setShowImage(!showImage); 


    try {
      const response = await axios.get("http://127.0.0.1:3000/preguntas");
      setQuestions(response.data.preguntas);
    } catch (error) {
      console.log(error)
    }
    console.log(question);
  }; 






  return (
    <div className="fixed flex right-0 bottom-3 p-4 rounded-full mr-2">
      {showText && (
        <div>
          <span
            className={`bg-white h-[30px] text-2xl flex items-center p-2 rounded-l-lg rounded-t-lg text-animation font-bold shadow-xl`}
          >
            Bienvenido Cliente!
          </span>
        </div>
      )}

      {showImage && (
        <img
          className="w-[60px] bg-[#DC1B1B] rounded-full shadow-xl cursor-pointer"
          src={chatBot}
          alt=""
          onClick={toggleChat}
        />
      )}

      {showChat && (
        <div className="bg-[#f7f7f7] rounded-md shadow-xl">
          <header className="flex justify-between items-center border-b-2 px-2 py-2">
            <div className="flex items-center flex-row-reverse gap-2">
            <h3 className="font-bold">ChatBot</h3>
            <img src={chatBot} className="bg-[#DC1B1B] rounded-full w-[30px]" alt="" />
            </div>
            <i onClick={toggleChat} className="fa-solid fa-xmark cursor-pointer"></i>
          </header>

          <div className="h-[400px] px-4 py-2 flex flex-col gap-4">
          <div>
          <span className="bg-[#ebf0f3] px-4 py-[0.3rem] rounded-md max-w-fit">
              ¿En que puedo ayudarte?
            </span>  
            <div>
              <OptionsBot data={question}/> 
            </div>
          </div>
            <div className="w-full flex justify-end"> 
            
            </div>
          </div>

          
        </div>
      )}
    </div>
  );
}

export default BotChatHome;
