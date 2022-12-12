// import "./ExploreContainer.css";

import { useState } from "react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [err, setErr] = useState(false);
  const [result, setResult] = useState("");

  const solve = (a: any, b: any, c: any) => {
    console.log(a, b, c);
    let delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
      setResult("Vô nghiệm cmnr!");
    } else if (delta === 0) {
      let x = (-0.5 * b) / a;
      setResult(`Phương trình có nghiệm kép x = ${x}!`);
    } else {
      let x1 = (0.5 * (-b + Math.sqrt(delta))) / a;
      let x2 = (0.5 * (-b - Math.sqrt(delta))) / a;
      setResult(`Phương trình có 2 nghiệm x1 = ${x1}, x2 = ${x2}!`);
    }
    console.log(result);
  };

  const checkValid = () => {
    if (a === "" || b === "" || c === "") {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  const handleClick = () => {
    console.log(a, b, c);
    checkValid();
    console.log(err);
    solve(a, b, c);
    console.log(result);
  };

  return (
    <div className="container">
      <div className="a">
        <label htmlFor="">a:</label>
        <input
          type="number"
          name="a"
          onChange={(event) => setA(event.target.value)}
        />
        {err && <span>Lỗi cmnr</span>}
      </div>
      <div className="b">
        <label htmlFor="">b:</label>
        <input
          type="number"
          name="b"
          onChange={(event) => setB(event.target.value)}
        />
        {err && <span>Lỗi cmnr</span>}
      </div>
      <div className="c">
        <label htmlFor="">c:</label>
        <input
          type="number"
          name="c"
          onChange={(event) => setC(event.target.value)}
        />
        {err && <span>Lỗi cmnr</span>}
      </div>
      <button type="submit" onClick={handleClick}>
        solve
      </button>
      <p>{err ?? result}</p>
    </div>
  );
};

export default ExploreContainer;
