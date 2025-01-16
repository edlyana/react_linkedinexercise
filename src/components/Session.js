import { useParams } from "react-router-dom";
import { getSession } from "../api";

export default function Session() {
  // !! Replace the placeholder catId and sessionId variables with a React Router Hook
  // const catId = "3d-printing-and-design";
  // const sessionId = "3d-printing-metal";

  const {moduleId, sessionId} = useParams()

  const { name, desc, speaker } = getSession({ moduleId, sessionId });

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>Lecturer</h4>
      <span>
        {speaker.name}
      </span>
    </>
  );
}
