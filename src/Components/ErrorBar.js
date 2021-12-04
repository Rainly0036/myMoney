import './ErrorBar.css';

export default function ErrorBar({ errors }) {
    return (
        <div className="bar errors">
            <h2>{errors}</h2>
        </div>
    )
}
