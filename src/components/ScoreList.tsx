import Subject from "../models/Subject";

interface Props {
    subjects: Subject[];
}
function ScoreList({ subjects }: Props) {
    return (
        <ol>
            {subjects && subjects.map(subject => <li>{subject.name} | {subject.score}</li>)}
        </ol>
    )
}

export default ScoreList;
