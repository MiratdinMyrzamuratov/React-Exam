const initialState = {
    todos: [
        {
            id: 1,
            text: 'Learn React',
            completed: false
        },
        {
            id: 2,
            text: 'Build an awesome app',
            completed: false
        },
        {
            id: 3,
            text: 'Launch it to the world!',
            completed: false
        }
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false
                    }
                ]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    }
                    return todo;
                })
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
}