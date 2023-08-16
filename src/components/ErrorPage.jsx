import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="my-5 font-light text-4xl md:text-6xl">Oops!</h1>
      <p className="text-lg md:text-xl font-light">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="my-5 md:text-lg italic font-extralight">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
