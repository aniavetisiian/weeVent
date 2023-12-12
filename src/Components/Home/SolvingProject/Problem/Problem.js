import React, { useState } from "react";
import "./Problem.css";

const generateRandomMatrix = (m, n) => {
  const matrix = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      row.push(randomNumber);
    }
    matrix.push(row);
  }
  return matrix;
};

const moveMinMaxWithinColumns = (matrix) => {
  const m = matrix.length;

  const newMatrix = matrix.map((row) => [...row]);

  for (let i = 0; i < m; i++) {
    let minIndex = 0;
    let maxIndex = 0;

    for (let j = 1; j < m; j++) {
      if (matrix[j][i] < matrix[minIndex][i]) {
        minIndex = j;
      }
      if (matrix[j][i] > matrix[maxIndex][i]) {
        maxIndex = j;
      }
    }

    [newMatrix[minIndex][i], newMatrix[maxIndex][i]] = [
      newMatrix[maxIndex][i],
      newMatrix[minIndex][i],
    ];
  }

  return newMatrix;
};

const MatrixManipulation = () => {
  const [m, setM] = useState(3);
  const [inputMatrix, setInputMatrix] = useState([]);
  const [resultMatrix, setResultMatrix] = useState([]);

  const handleGenerateMatrix = () => {
    const randomMatrix = generateRandomMatrix(m, m);
    setInputMatrix(randomMatrix);
  };

  const handleMoveColumns = () => {
    const result = moveMinMaxWithinColumns(inputMatrix);
    setResultMatrix(result);
  };

  return (
    <div>
      <label>
        Մուտքագրել m-ը:
        <input type="number" value={m} onChange={(e) => setM(e.target.value)} />
      </label>

      <button className="buttonProject" onClick={handleGenerateMatrix}>
        Գեներացնել մատրից
      </button>
      <button className="buttonProject" onClick={handleMoveColumns}>
        Կատարել տեղափոխում
      </button>

      <div>
        <h3>Գեներացված մատրից:</h3>
        <table>
          <tbody>
            {inputMatrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Տեղափոխված մատրից:</h3>
        <table>
          <tbody>
            {resultMatrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatrixManipulation;
