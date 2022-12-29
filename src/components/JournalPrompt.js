import './JournalPrompt.css';

const JournalPrompt = (props) => {

    return (
        <div class="journal-prompt">
            <h2 class="journal-prompt-text">{props.promptText}</h2>
            <p class="journal-prompt-response">{props.promptResponse}</p>
        </div>
    );
}

export default JournalPrompt;