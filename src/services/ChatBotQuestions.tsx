import axios  from "axios"; 
import {useState, useContext, useEffect, createContext, ReactNode } from "react"; 
import { Questions } from "../interfaces/Questions";

interface questionData{
    questions:Questions[];
}  

interface childrenType{
    children:ReactNode;
}

const questionContext = createContext<questionData | undefined>(undefined); 


function QuestionServices({children}:childrenType){

    const [questions, setQuestion] = useState<Questions[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8080/bot/question")
                setQuestion(response.data);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchQuestions();
    },[]) 


    return(
        <questionContext.Provider value={{ questions }}>
            {children}
        </questionContext.Provider>
    )
} 

const useQuestion = () => {
    const question = useContext(questionContext);
    if(!question){
        throw new Error("error en la question")
    }
    return question
}


export {QuestionServices , useQuestion, questionContext}