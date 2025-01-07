import { exec } from 'child_process';

export default function handler(req, res) {
    exec('python3 ga_sudoku.py', (error, stdout, stderr) => {
        if (error) {
            console.error('Error executing Python script: ${error}');
            return res.status(500).json({ error: 'Error generating Sudoku' });
        }
        // تحويل الناتج من stdout إلى مصفوفة
        const puzzle = JSON.parse(stdout);
        res.status(200).json(puzzle);
    });
}
