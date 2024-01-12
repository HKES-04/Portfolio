import React, { useEffect, useRef } from "react";
import "./Cursor.css";

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

const Cursor = () => {
  const cursorRefs = useRef([]);
  cursorRefs.current = colors.map(
    (_, i) => cursorRefs.current[i] ?? React.createRef()
  );

  const moveCircle = (index, x, y) => {
    const circle = cursorRefs.current[index].current;
    if (circle) {
      const dx = x - circle.offsetLeft - 12;
      const dy = y - circle.offsetTop - 12;
      circle.style.transform = `translate(${dx}px, ${dy}px) scale(${
        (colors.length - index) / colors.length
      })`;
    }
  };

  const onMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    moveCircle(0, x, y);

    for (let i = 1; i < colors.length; i++) {
      setTimeout(() => {
        moveCircle(i, x, y);
      }, i * 100); // The delay increases for each circle creating the trail effect
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      {colors.map((color, index) => (
        <div
          key={index}
          ref={cursorRefs.current[index]}
          className="circle"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </>
  );
};

export default Cursor;
