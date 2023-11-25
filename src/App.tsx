import { useState } from 'react';
import './App.css'
import SubjectPicker from './components/ScorePicker';
import Subject from './models/Subject';
import ScoreList from './components/ScoreList';

function App() {
  const subjects = [
    { id: 1, name: 'Math', score: 0 },
    { id: 2, name: 'Spanish', score: 0 },
    { id: 3, name: 'Chemistry', score: 0 }
  ]

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  const [savedSubjects, setSavedSubjects] = useState<Subject[]>([]);

  const [score, setScore] = useState(0);

  function handleSubjectChange(event: any) {
    const { value } = event.target;
    const subject = subjects.find(subject => subject.name === value);
    setSelectedSubject(subject);
  }

  function handleSubjectSave(event: any) {
    event.preventDefault();

    if (savedSubjects.some(subject => subject.id === selectedSubject.id))
      return;

    const currentSubject = { ...selectedSubject, score: score }

    setSavedSubjects([...savedSubjects, currentSubject]);
  }

  function average(subjects: Subject[]) {
    let sum = 0;

    subjects.forEach(subject => sum += subject.score);

    return sum / subjects.length;
  }

  function handleSubjectScoreChange(event: any) {
    event.preventDefault();
    setScore(parseInt(event.target.value, 10));
  }

  return (
    <>
      <h1>Median score</h1>
      <SubjectPicker
        subjects={subjects}
        onChange={handleSubjectChange}
        onSubmit={handleSubjectSave}
        onScoreChange={handleSubjectScoreChange} />
      {savedSubjects && <ScoreList subjects={savedSubjects} />}
      {savedSubjects.length > 1 && <h3>Median: {average(savedSubjects)}</h3>}
    </>
  )
}

export default App;
