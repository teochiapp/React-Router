import {Link} from "react-router-dom"

const Error = () => {
  return (
    <section className='section'>
      <h2>Error</h2>
      <h2>404</h2>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </section>
  );
};
export default Error;
