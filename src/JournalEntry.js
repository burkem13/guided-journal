import JournalPrompt from "./JournalPrompt";
import './JournalEntry.css';

const JournalEntry = (props) => {

    return (
        <div class='journal-entry'>
            <JournalPrompt
                promptText={props.uniquePromptText}
                promptResponse={props.uniquePromptResponse}
            />
            <JournalPrompt
                promptText={props.reflectionPromptText}
                promptResponse={props.reflectionPromptResponse}
            />
        </div>
    );
}

export default JournalEntry;