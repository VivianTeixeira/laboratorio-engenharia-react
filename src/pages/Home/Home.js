import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Laboratório de Engenharia de Software</h1>
      <h2>Vivian Teixeira</h2>
      <div className="row">
        <div className="offset icon-box">
          <h3 className="title">Aula 2</h3>
          <div>
            <Link to="/class2/atividade1">Atividade 1: Relógio</Link>
          </div>
          <div>
            <Link to="/class2/atividade2">Atividade 2: Letreiro</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Aula 3</h3>
          <div>
            <Link to="/class3/atividade1">Atividade 1: Contador de Generos</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Aula 4</h3>
          <div>
            <Link to="/class4/atividade1">Atividade 1: Galeria</Link>
          </div>
          <div>
            <Link to="/class4/atividade2">Atividade 2: TodoList</Link>
          </div>
          <div>
            <Link to="/class4/atividade3">Atividade 3: PackingList</Link>
          </div>
          <div>
            <Link to="/class4/atividade4">Atividade 4: List</Link>
          </div>
        </div>
        <div className="offset icon-box">
          <h3 className="title">Aula 5</h3>
          <div>
            <Link to="/class5/atividade1">Atividade 1: Toolbar</Link>
          </div>
          <div>
            <Link to="/class5/atividade2">Atividade 2: Gallery</Link>
          </div>
          <div>
            <Link to="/class5/atividade3">Atividade 3: Form</Link>
          </div>
          <div>
            <Link to="/class5/atividade4">Atividade 4: Counter</Link>
          </div>
          <div>
            <Link to="/class5/atividade5">Atividade 5: Moving Dot</Link>
          </div>
          <div>
            <Link to="/class5/atividade6">Atividade 6: Form 2</Link>
          </div>
          <div>
            <Link to="/class5/atividade7">Atividade 7: Form 3</Link>
          </div>
          <div>
            <Link to="/class5/atividade8">Atividade 8: Lista dinamica</Link>
          </div>
          <div>
            <Link to="/class5/atividade9">Atividade 9: Lista 2</Link>
          </div>
          <div>
            <Link to="/class5/atividade10">Atividade 10: Shape Editor</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
