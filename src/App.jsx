import { useContext } from "react";
import Form from "./components/Form";
import { SubmittedContext } from "./contexts/submitted-context";
import Footer from "./components/Footer";

function App() {
  const { isSubmitted } = useContext(SubmittedContext)

  return (
    <>
      <div className="flex flex-col gap-2 max-w-[640px] w-full sm:min-h-[calc(100vh-130px)] mx-auto my-0 p-3">
        <div className="bg-white border border-solid border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-color-01 h-4"></div>
          <div className="p-3">
            <h1 className="text-xl font-medium uppercase">Projeto Front-end Fusion</h1>
          </div>
          {
            !isSubmitted ? (<div className="border-t border-gray-200 border-solid p-3">
              <p className="text-red-500">* Indica uma pergunta obrigatória</p>
            </div>) : (<div className="border-t border-gray-200 border-solid p-3">
              <p className="text-black">Obrigado pelo seu interesse. <br /> Alguém entrará em contato com você em breve!</p>
            </div>)
          }
        </div>
        {
          !isSubmitted && (<Form />)
        }
      </div>
      <Footer/>
    </>
  );
}

export default App
