import "./CoreConcepts.css";

export default function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt="props.title" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
