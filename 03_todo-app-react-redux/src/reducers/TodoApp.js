const initialState = {
    task: '',
    tasks: []
};
export default function todoAppReducer(state = initialState, action) {
    switch (action.type) {
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task
            };
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            };
        case 'RESET_TASK':
            return {
                ...state,
                tasks: []
            };
        default:
            return state;
    }
}
