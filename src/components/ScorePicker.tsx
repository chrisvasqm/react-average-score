import Subject from "../models/Subject";

interface Props {
    subjects: Subject[];
    onChange: (event: any) => void;
    onSubmit: (event: any) => void;
    onScoreChange: (event: any) => void;
}

function SubjectPicker({ subjects, onChange, onSubmit, onScoreChange }: Props) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <select defaultValue={subjects[0]} onChange={onChange}>
                    {subjects && subjects.map(subject => <option key={subject.id}>{subject.name}</option>)}
                </select>
                <input className="input-score" type="number" min={0} defaultValue={0} onChange={onScoreChange} />
                <button className="button-save" type="submit">Save</button>
            </form>
        </div>
    )
}

export default SubjectPicker;