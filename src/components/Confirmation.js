import {useLocation} from "react-router-dom";

export default function Confirmation() {
  const {state} = useLocation();

  return (
    <div className="container">
      <h1>Thank You!</h1>
      
      {/* WILL ONLY RENDER (the things after the ampersand) WHEN THERE IS STATE */}
      {state && (
        <>
          <p>{state.name}, you're now registered!</p>
          <p>We've sent more details to <strong>{state.email}</strong></p>
        </>
      )}
    </div>
  );
}
