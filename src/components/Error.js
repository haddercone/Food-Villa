// import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
  // const err = useRouteError();
  // console.log(err);
  return (
    <>
      <div className="bg-error-page h-screen bg-cover bg-no-repeat ">
        {/* Error : {err.status + " " + err.statusText} */}
          <button className="error-go-back bg-gray-900 m-2 px-3 py-2 text-white"><Link to="/"> &lt; Home </Link></button>
       
      </div>
    </>
  );
};
export default Error;
