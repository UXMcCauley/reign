export const initialState = {
    user: {
        loggedIn: true,
        firstName: "Drew",
        lastName: "McCauley",
    },
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case "add_number": {
            return {
                ...state,
                number: action.value + state.number,
            };
        }
    }
};
