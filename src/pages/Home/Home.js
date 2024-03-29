import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Laboratório de Engenharia de Software</h1>
      <h1>Vivian Teixeira</h1>
      <div className="row">
        <div className="offset icon-box">
          <h3 className="title">Class 2</h3>
          <div>
            <Link to="/class2/atividade1">Activity 1: Relógio</Link>
          </div>
          <div>
            <Link to="/class2/atividade2">Activity 2: Letreiro</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Class 3</h3>
          <div>
            <Link to="/class3/atividade1">Activity 1: Contador de Generos</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Class 4</h3>
          <div>
            <Link to="/class4/atividade1">Activity 1: Galeria</Link>
          </div>
          <div>
            <Link to="/class4/atividade2">Activity 2: TodoList</Link>
          </div>
          <div>
            <Link to="/class4/atividade3">Activity 3: PackingList</Link>
          </div>
          <div>
            <Link to="/class4/atividade4">Activity 4: List</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Class 5</h3>
          <div>
            <Link to="/class5/atividade1">Activity 1: Toolbar</Link>
          </div>
          <div>
            <Link to="/class5/atividade2">Activity 2: Gallery</Link>
          </div>
          <div>
            <Link to="/class5/atividade3">Activity 3: Form</Link>
          </div>
          <div>
            <Link to="/class5/atividade4">Activity 4: Counter</Link>
          </div>
          <div>
            <Link to="/class5/atividade5">Activity 5: Moving Dot</Link>
          </div>
          <div>
            <Link to="/class5/atividade6">Activity 6: Form 2</Link>
          </div>
          <div>
            <Link to="/class5/atividade7">Activity 7: Form 3</Link>
          </div>
          <div>
            <Link to="/class5/atividade8">Activity 8: Lista dinamica</Link>
          </div>
          <div>
            <Link to="/class5/atividade9">Activity 9: Lista 2</Link>
          </div>
          <div>
            <Link to="/class5/atividade10">Activity 10: Shape Editor</Link>
          </div>
          <div>
            <Link to="/class5/atividade11">Activity 11: Counter List</Link>
          </div>
          <div>
            <Link to="/class5/atividade12">Activity 12: List 3</Link>
          </div>
          <div>
            <Link to="/class5/atividade13">Activity 13: List 4</Link>
          </div>
          <div>
            <Link to="/class5/atividade14">Activity 14: BucketList</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Class 6</h3>
          <div>
            <Link to="/class6/atividade1">Activity 1: Form Quiz</Link>
          </div>
          <div>
            <Link to="/class6/atividade2">Activity 2: Form Ticket</Link>
          </div>
          <div>
            <Link to="/class6/atividade3">Activity 3: Accordion</Link>
          </div>
          <div>
            <Link to="/class6/atividade4">Activity 4: Messenger</Link>
          </div>
          </div>
          <div className="offset icon-box">
          <h3 className="title">Activity 5</h3>
          <div>
            <Link to="/activity5">Calculadora</Link>
          </div>
      
        </div>
        <div className="offset icon-box">
          <h3 className="title">Activity 6</h3>
          <div>
            <Link to="/activity6">Jogo da memória</Link>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
