import './JournalPrompt.css';

const JournalPrompt = (props) => {

    return (
        <div class="journal-prompt">
            <h2>{props.promptText}</h2>
            <p>{props.promptResponse}</p>
        </div>
    );
}

export default JournalPrompt;