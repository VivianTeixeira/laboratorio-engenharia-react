import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Relogio from "./pages/class2/lesson1";
import Letreiro from "./pages/class2/lesson2";

import  {Contador}  from './pages/class3/Contador';

import Gallery from "./pages/class4/PrimeiroComponente";
import TodoListAula4 from "./pages/class4/TodoListAula4";
import PackingList from "./pages/class4/PackingList";
import ListAula4 from "./pages/class4/ListAula4";
import ToolBarAula5 from "./pages/class5/Button";
import GalleryAula5 from "./pages/class5/Gallery";
import FormAula5 from "./pages/class5/Form";
import CounterAula5 from "./pages/class5/Counter";
import MovingDot from "./pages/class5/MovingDot";
import Form2 from "./pages/class5/Form2";
import Form3 from "./pages/class5/Form3";
import ListAula5 from "./pages/class5/List";
import List2Aula5 from "./pages/class5/List2";
import ShapeEditor from "./pages/class5/ShapeEditor";
import List3Aula5 from "./pages/class5/List3";
import CounterList from "./pages/class5/CounterList";
import List4Aula5 from "./pages/class5/List4";
import BucketList from "./pages/class5/BucketList";
import FormQuiz from "./pages/class6/FormQuiz";
import FormTicket from "./pages/class6/FormTicket";
import Accordion from "./pages/class6/Accordion";
import Messenger from "./pages/class6/Messenger";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Aula 2 */}
        <Route path="/class2/atividade1" element={<Relogio />} />
        <Route path="/class2/atividade2" element={<Letreiro />} />
        {/* Aula 3 */}
        <Route path="/class3/atividade1" element={<Contador />} />
        {/* Aula 4 */}
        <Route path="/class4/atividade1" element={<Gallery />} />
        <Route path="/class4/atividade2" element={<TodoListAula4 />} />
        <Route path="/class4/atividade3" element={<PackingList />} />
        <Route path="/class4/atividade4" element={<ListAula4 />} />
        {/* Aula 4 */}
        <Route path="/class5/atividade1" element={<ToolBarAula5 />} />
        <Route path="/class5/atividade2" element={<GalleryAula5 />} />
        <Route path="/class5/atividade3" element={<FormAula5 />} />
        <Route path="/class5/atividade4" element={<CounterAula5 />} />
        <Route path="/class5/atividade5" element={<MovingDot />} />
        <Route path="/class5/atividade6" element={<Form2 />} />
        <Route path="/class5/atividade7" element={<Form3 />} />
        <Route path="/class5/atividade8" element={<ListAula5 />} />
        <Route path="/class5/atividade9" element={<List2Aula5 />} />
        <Route path="/class5/atividade10" element={<ShapeEditor />} />
        <Route path="/class5/atividade11" element={<CounterList/>} />
        <Route path="/class5/atividade12" element={<List3Aula5 />} />
        <Route path="/class5/atividade13" element={<List4Aula5 />} />
        <Route path="/class5/atividade14" element={<BucketList />} />
        {/* Aula 6 */}
        <Route path="/class6/atividade1" element={<FormQuiz/>} />
        <Route path="/class6/atividade2" element={<FormTicket/>} />
        <Route path="/class6/atividade3" element={<Accordion/>} />
        <Route path="/class6/atividade4" element={<Messenger/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
