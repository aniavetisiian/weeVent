import React, { useState } from "react";
import "./Problem.css";

const generateRandomMatrix = (m, n) => {
  const matrix = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      // Generate a random number between 1 and 20
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      row.push(randomNumber);
    }
    matrix.push(row);
  }
  return matrix;
};

const moveMinMaxWithinColumns = (matrix) => {
  const m = matrix.length;

  // Create a new matrix with the same values
  const newMatrix = matrix.map((row) => [...row]);

  for (let i = 0; i < m; i++) {
    // Find the indices of the minimum and maximum values in each column
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

    // Swap the minimum and maximum values within the column
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
        Enter the value of m:
        <input type="number" value={m} onChange={(e) => setM(e.target.value)} />
      </label>

      <button onClick={handleGenerateMatrix}>Generate Random Matrix</button>
      <button onClick={handleMoveColumns}>Move Columns</button>

      <div>
        <h3>Input Matrix:</h3>
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
        <h3>Result Matrix:</h3>
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
