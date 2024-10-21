import { Questions } from "../interfaces/Questions";


interface Preguntas{
    data:Questions[];
} 


function OptionsBot({data}:Preguntas) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {data.map((preguntas) => (
        <div >
          <p key={preguntas.id} className="bg-[#ebf0f3] px-4 py-[0.4rem] rounded-md max-w-fit capitalize">{preguntas.pregunta}</p>
        </div>
      ))}
    </div>
  );
}

export default OptionsBot;
