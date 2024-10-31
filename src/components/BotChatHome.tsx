import { useEffect, useState } from "react";
import chatBot from "../images/chatbot.png";
import axios from "axios";
import { Questions } from "../interfaces/Questions";
import { Options } from "../interfaces/Options";

function BotChatHome() {
  const [showText, setShowText] = useState(true);
  const [question, setQuestions] = useState<Questions[]>([]);

  const [options, setOptions] = useState<Options[]>([]);
  const [showQuestions, setShowQuestion] = useState(true);
  const [showButtonMenu, setShowButtonMenu] = useState(false);
  const [asnwerText, setAnswerText] = useState("");


  //Llamada a la api
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowText(false);
    }, 4000); 

    const fetchBot = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8080/bot/question");
        const data = response.data;
        const dataFilter = data.slice(0, 4);//dejando los primeros 4 resultados
        setQuestions(dataFilter);//Almacenando la data en un estado
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } 
    } 

    fetchBot();

    return () => clearTimeout(timeOut);
  },[]);

  const ToggleMenuChat = () => {
    setShowQuestion(true);
    setOptions([]);
    setShowButtonMenu(false);
    setAnswerText("");
  };

  const handleOptions = async (questionId: number) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/bot/${questionId}/options`
      );
      setOptions(response.data);
      setShowQuestion(false);
      setShowButtonMenu(true);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ShowAnswerText = (response: string) => {
    setAnswerText(response);
  };

  const [showChat, setShowChat] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const toggleChat = async () => {
    setShowChat(!showChat);
    setShowImage(!showImage);

    
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
              <img
                src={chatBot}
                className="bg-[#DC1B1B] rounded-full w-[30px]"
                alt=""
              />
            </div>
            <i
              onClick={toggleChat}
              className="fa-solid fa-xmark cursor-pointer"
            ></i>
          </header>

          <div className="h-[400px] px-4 py-2 flex flex-col gap-4 w-[300px]">
            <div>
              {!showButtonMenu && (
                <span className="bg-[#ebf0f3] px-4 py-[0.3rem] rounded-tl-md max-w-fit">
                  ¿En que puedo ayudarte?
                </span>
              )}
              <div className="flex flex-col gap-2">
                {showQuestions &&
                  question.map((question) => (
                    <p
                      key={question.id}
                      onClick={() => handleOptions(question.id)}
                      className="bg-[#ebf0f3] px-4 py-[0.4rem] rounded-md max-w-fit capitalize mt-2"
                    >
                      {question.question}
                    </p>
                  ))}
                {options &&
                  options.map((option) => (
                    <div>
                      <p
                        onClick={() => ShowAnswerText(option.answer_text)}
                        className="bg-[#ebf0f3] px-4 py-[0.4rem] rounded-md max-w-fit mt-4"
                      >
                        {option.option_text}
                      </p>
                    </div>
                  ))}

                {asnwerText && (
                  <p className="bg-[#ebf0f3] px-4 py-[0.4rem] rounded-md max-w-fit mt-4">
                    {asnwerText}
                  </p>
                )}

                {showButtonMenu && (
                  <span
                    className="bg-[#ebf0f3] px-4 py-[0.4rem] rounded-md max-w-fit capitalize mt-4"
                    onClick={ToggleMenuChat}
                  >
                    Volver al menu
                  </span>
                )}
              </div>
            </div>
            <div className="w-full flex justify-end"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BotChatHome;
