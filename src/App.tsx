import { Navigate, Route, Routes } from 'react-router-dom';
import { TestProvider, useTestSession } from './components/TestContext';
import AlmanacPage from './pages/AlmanacPage';
import GeneratePage from './pages/GeneratePage';
import HomePage from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function SessionGuard({ children }: { children: JSX.Element }) {
  const { status } = useTestSession();
  if (status === 'idle') {
    return <Navigate to="/" replace />;
  }
  return children;
}

function ResultGuard({ children }: { children: JSX.Element }) {
  const { result } = useTestSession();
  if (!result) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default function App() {
  return (
    <TestProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route
          path="/quiz"
          element={
            <SessionGuard>
              <QuizPage />
            </SessionGuard>
          }
        />
        <Route
          path="/generate"
          element={
            <SessionGuard>
              <GeneratePage />
            </SessionGuard>
          }
        />
        <Route
          path="/result"
          element={
            <ResultGuard>
              <ResultPage />
            </ResultGuard>
          }
        />
        <Route path="/almanac" element={<AlmanacPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </TestProvider>
  );
}
