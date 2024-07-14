import { useNavigate } from "react-router-dom";
function Border({ border }) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/border/details/${border}`)}>
      {border}
    </button>
  );
}

export default Border;
