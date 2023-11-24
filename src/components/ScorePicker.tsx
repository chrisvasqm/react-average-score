import Subject from "../models/Subject";

interface Props {
    subjects: Subject[];
    onChange: (event: any) => void;
}

function ScorePicker({ subjects, onChange }: Props) {
    return (
        <div>
            <form>
                <select defaultValue={subjects[0].name} onChange={onChange}>
                    {subjects && subjects.map(subject => <option key={subject.id}>{subject.name}</option>)}
                </select>
            </form>
        </div>
    )
}

export default ScorePicker;