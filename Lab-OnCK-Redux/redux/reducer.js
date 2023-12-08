const initialState = {
    tasks: [
        { id: 1, text:"ABC", count: 100 },
        { id: 2, text:"DEF", count: 200 },
        { id: 3, text:"GHI", count: 300 },
        { id: 4, text:"JKL", count: 400 },
        { id: 5, text:"MNO", count: 500 },
    ],
};

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                task: [...state.tasks, action.payload],
            };
        case 'DELETE_TASK':
            return {
                ...state,
                task: state.tasks.filter((task) => task.id !== action.payload),
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                task: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
            };
        default: 
            return state;
    }
};

export default taskReducer;