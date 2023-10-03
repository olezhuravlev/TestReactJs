import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";
import {MemoryRouter} from "react-router-dom";

export const renderTestAppNoInitsNoAppRouter = (component, options = '/') => {

    const store = createReduxStore(options?.initialState);

    return render(
        <Provider store={store}>
            <MemoryRouter>
                {component}
            </MemoryRouter>
        </Provider>
    )
}
