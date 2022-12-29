import JournalEntry from './JournalEntry';
import './JournalEntries.css';

const JournalEntries = (props) => {

    return(
        <div class='journal-entries-list'>
            <JournalEntry
                uniquePromptText={props.entryList[0].uniquePromptText}
                uniquePromptResponse={props.entryList[0].uniquePromptResponse}
                reflectionPromptText={props.entryList[0].reflectionPromptText}
                reflectionPromptResponse={props.entryList[0].reflectionPromptResponse}
                gratitudePromptText={props.entryList[0].gratitudePromptText}
                gratitudeResponseList={props.entryList[0].gratitudeResponseList}
                dailyGoals={props.entryList[0].dailyGoals}
            />
            <JournalEntry
                uniquePromptText={props.entryList[1].uniquePromptText}
                uniquePromptResponse={props.entryList[1].uniquePromptResponse}
                reflectionPromptText={props.entryList[1].reflectionPromptText}
                reflectionPromptResponse={props.entryList[1].reflectionPromptResponse}
                gratitudePromptText={props.entryList[1].gratitudePromptText}
                gratitudeResponseList={props.entryList[1].gratitudeResponseList}
                dailyGoals={props.entryList[1].dailyGoals}
            />
        </div>
    );
}

export default JournalEntries;
