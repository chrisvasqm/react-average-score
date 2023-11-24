import Subject from "../models/Subject";

interface Props {
    subjects: Subject[];
    onChange: (event: any) => void;
    onSubmit: (event: any) => void;
}

function ScorePicker({ subjects, onChange, onSubmit }: Props) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <select defaultValue={subjects[0]} onChange={onChange}>
                    {subjects && subjects.map(subject => <option key={subject.id}>{subject.name}</option>)}
                </select>
                <button className="button-save" type="submit">Save</button>
            </form>
        </div>
    )
}

export default ScorePicker;