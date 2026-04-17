import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressHeader from '../components/ProgressHeader';
import { useTestSession } from '../components/TestContext';
import { QUESTIONS } from '../data/questions';

export default function QuizPage() {
  const navigate = useNavigate();
  const { answers, answer } = useTestSession();
  const [index, setIndex] = useState(0);
  const currentQuestion = QUESTIONS[index];

  const selected = answers[currentQuestion.id];

  const canGoNext = useMemo(() => Boolean(selected), [selected]);

  return (
    <main className="page-shell">
      <div className="panel">
        <ProgressHeader current={index + 1} total={QUESTIONS.length} />
        <h2 className="question-title">{currentQuestion.text}</h2>
        <div className="options">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              className={`option-btn ${selected === option.id ? 'selected' : ''}`}
              onClick={() => answer(currentQuestion.id, option.id)}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="row-actions">
          <button className="ghost-btn" disabled={index === 0} onClick={() => setIndex((i) => Math.max(i - 1, 0))}>
            上一题
          </button>
          <button
            className="primary-btn"
            disabled={!canGoNext}
            onClick={() => {
              if (index === QUESTIONS.length - 1) {
                navigate('/generate');
                return;
              }
              setIndex((i) => i + 1);
            }}
          >
            {index === QUESTIONS.length - 1 ? '提交并生成' : '下一题'}
          </button>
        </div>
      </div>
    </main>
  );
}
