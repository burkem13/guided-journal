import JournalEntries from "./JournalEntries";

function App() {


    //Sample data set
    const sampleEntries = [
        {
            id: '1',
            uniquePromptText: 'Who do you trust most? Why?',
            uniquePromptResponse: 'My partner, because we have a strong relationship',
            reflectionPromptText: 'Journal for 1 minute about how you feel in this moment.',
            reflectionPromptResponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            gratitudePromptText: 'List at least 3 things that you are grateful for today.',
            gratitudeResponseList: [
                {
                    reason: 'For the sun.'
                },
                {
                    reason: 'For family.'
                },
                {
                    reason: 'For health,'
                }
            
            ],
            dailygoals : [
                {
                    goalNumber: 1,
                    goalText: 'Take out the garbage.',
                    goalStatus: 'complete'
                },
                {
                    goalNumber: 2,
                    goalText: 'Call mom.',
                    goalStatus: 'complete'
                },
                {
                    goalNumber: 3,
                    goalText: 'Workout. ',
                    goalStatus: 'incomplete'
                }
            ]
        },
        {
            id: '2',
            uniquePromptText: 'Who do you trust most? Why?',
            uniquePromptResponse: 'My partner, because we have a strong relationship',
            reflectionPromptText: 'Journal for 1 minute about how you feel in this moment.',
            reflectionPromptResponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            gratitudePromptText: 'List at least 3 things that you are grateful for today.',
            gratitudeResponseList: [
                {
                    reason: 'For the su.n'
                },
                {
                    reason: 'For family.'
                },
                {
                    reason: 'For health,'
                }
            
            ],
            dailygoals : [
                {
                    goalNumber: 1,
                    goalText: 'Take out the garbage.',
                    goalStatus: 'complete'
                },
                {
                    goalNumber: 2,
                    goalText: 'Call mom.',
                    goalStatus: 'complete'
                },
                {
                    goalNumber: 3,
                    goalText: 'Workout. ',
                    goalStatus: 'incomplete'
                }
            ]
        }
    ]

    return (
        <div>
            <JournalEntries entryList={sampleEntries}/>
        </div>
    );
}

export default App;