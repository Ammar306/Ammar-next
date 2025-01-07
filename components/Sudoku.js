import { useState } from 'react';

const Sudoku = () => {
    const [puzzle, setPuzzle] = useState(Array(9).fill().map(() => Array(9).fill(0)));

    const handleChange = (row, col, value) => {
        const newPuzzle = [...puzzle];
        newPuzzle[row][col] = value === '' ? 0 : parseInt(value);
        setPuzzle(newPuzzle);
    };

    const generateRandomSudoku = async () => {
        const response = await fetch('/api/generate-sudoku');
        if (response.ok) {
            const newPuzzle = await response.json();
            setPuzzle(newPuzzle);
        } else {
            console.error('Failed to generate Sudoku');
        }
    };

    return (
        <div>
            <h1>لعبة سودوكو</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 40px)', gap: '5px' }} >
                {puzzle.map((row, rowIndex) => 
                    row.map((num, colIndex) => (
                        <input
                            key={"${rowIndex}-${colIndex}"}
                            type="number"
                            min="0"
                            max="9"
                            value={num === 0 ? '' : num}
                            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                            style={{ width: '40px', height: '40px', textAlign: 'center' }}
                        />
                    ))
                )}
            </div>
            <button onClick={generateRandomSudoku}>توليد حالة عشوائية</button>
        </div>
    );
};

export default Sudoku;
