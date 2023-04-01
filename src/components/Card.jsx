import './Card.css';

export function Card(props){
    return (
        <div className="card-container">
            <h2 className="name-card">{props.title}</h2>
            <p className="text">{props.text}</p>
        </div>
    );
}