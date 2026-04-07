function Card(props) {
  return (
          <article className="bg-white rounded-lg shadow-md border border-gray-300 mb-6 w-full">
            <h3 className="p-3 bg-gray-300 py-1 font-semibold rounded-t-lg">{props.titulo}</h3>
            <ul className="p-3">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </article>
  );
}

export default Card;