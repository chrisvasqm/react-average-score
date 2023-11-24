import { useState } from 'react';
import './App.css'
import SubjectPicker from './components/ScorePicker';
import Subject from './models/Subject';
import ScoreList from './components/ScoreList';

function App() {
  const subjects = [
    { id: 1, name: "Math", score: 70 },
    { id: 2, name: "Spanish", score: 80 },
    { id: 3, name: "Chemistry", score: 90 }
  ]

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  const [savedSubjects, setSavedSubjects] = useState<Subject[]>([]);

  function handleSubjectChange(event: any) {
    const { value } = event.target;
    const subject = subjects.find(subject => subject.name === value);
    setSelectedSubject(subject);
  }

  function handleSubjectSave(event: any) {
    event.preventDefault();

    if (savedSubjects.some(subject => subject.id === selectedSubject.id))
      return;

    setSavedSubjects([...savedSubjects, selectedSubject]);
  }

  function median(subjects: Subject[]) {
    let sum = 0;

    subjects.forEach(subject => sum += subject.score);

    return sum / subjects.length;
  }

  return (
    <>
      <h1>Median score</h1>
      <SubjectPicker
        subjects={subjects}
        onChange={handleSubjectChange}
        onSubmit={handleSubjectSave} />
      {savedSubjects && <ScoreList subjects={savedSubjects} />}
      {savedSubjects.length > 1 && <h3>Median: {median(savedSubjects)}</h3>}
    </>
  )
}

export default App;
