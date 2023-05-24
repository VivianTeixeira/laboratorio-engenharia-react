import Avatar from "./Avatar";
import { Link } from 'react-router-dom';



function Card({children}) {
    return (
    <div className="card">
        {children}
    </div>
    );
}

export function Profile() {
    return (
        <Card>
            <Avatar person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}/>
        </Card>
    );
  
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientits</h1>
      <Profile />
      <Link to="/">Voltar a home</Link>
    </section>
  );
}
