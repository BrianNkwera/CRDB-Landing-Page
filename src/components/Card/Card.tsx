import arrowRight from "../../assets/icons/arrow-right.svg"

interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  link?: string
}

function Card(props: CardProps) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg mb-4">
      <h3 className="text-sm font-bold uppercase text-gray-700 mb-2">{props?.subtitle || ""}</h3>
      <h2 className="text-xl font-bold text-green-800 mb-2">{props.title}</h2>
      <p className="text-gray-700">{props.description}</p>
      <a href={props.link || ""} className="text-green-500 mt-4 flex">
        Continue Reading <img src={arrowRight} alt="continue Reading" className="ms-2"/>
      </a>
    </div>
  );
}

export { Card };
