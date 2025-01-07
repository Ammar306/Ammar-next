// pages/index.js
import Head from 'next/head';
import Sudoku from '../components/Sudoku';

export default function Home() {
    return (
        <div>
            <Head>
                <title>لعبة سودوكو</title>
                <meta name="description" content="لعبة سودوكو بسيطة باستخدام Next.js" />
            </Head>
            <main style={{ padding: '20px', textAlign: 'center' }}>
                <Sudoku />
            </main>
        </div>
    );
}
