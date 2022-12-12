// import "./ExploreContainer.css";

import { useEffect, useState } from "react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [err, setErr] = useState("");
  const [result, setResult] = useState("");
  const [click, setClick] = useState(0);

  useEffect(() => {
    if (click > 0) {
      checkValid();
      setResult(solve(a, b, c));
    } else {
      setResult("");
    }
  }, [click]);

  const solve = (a: any, b: any, c: any) => {
    let delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
      return "Vô nghiệm cmnr!";
    } else if (delta === 0) {
      let x = (-0.5 * b) / a;
      return `Phương trình có nghiệm kép x = ${x}!`;
    } else {
      let x1 = (0.5 * (-b + Math.sqrt(delta))) / a;
      let x2 = (0.5 * (-b - Math.sqrt(delta))) / a;
      return `Phương trình có 2 nghiệm x1 = ${x1}, x2 = ${x2}!`;
    }
  };

  const checkValid = () => {
    if (a === "") {
      setErr("a");
    } else if (b === "") {
      setErr("b");
    } else if (c === "") {
      setErr("c");
    } else {
      setErr("");
    }
  };

  const handleClick = () => {
    checkValid();
    setClick(click + 1);
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
        {err === "a" && <span>Lỗi cmnr</span>}
      </div>
      <div className="b">
        <label htmlFor="">b:</label>
        <input
          type="number"
          name="b"
          onChange={(event) => setB(event.target.value)}
        />
        {err === "b" && <span>Lỗi cmnr</span>}
      </div>
      <div className="c">
        <label htmlFor="">c:</label>
        <input
          type="number"
          name="c"
          onChange={(event) => setC(event.target.value)}
        />
        {err === "c" && <span>Lỗi cmnr</span>}
      </div>
      <button type="submit" onClick={handleClick}>
        solve
      </button>
      <p>{err ? "" : result}</p>
    </div>
  );
};

export default ExploreContainer;
