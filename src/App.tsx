import { useState } from 'react';
import './App.css'
import ScorePicker from './components/ScorePicker';

function App() {
  const subjects = [
    { id: 1, name: "Math", score: 70 },
    { id: 2, name: "Spanish", score: 80 },
    { id: 3, name: "Chemistry", score: 90 }
  ]

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);


  function handleSubjectChange(event: any) {
    setSelectedSubject(event.target.value);

    console.log(selectedSubject.name);
  }

  return (
    <>
      <h1>Median score</h1>
      <ScorePicker subjects={subjects} onChange={handleSubjectChange} />
    </>
  )
}

export default App;
