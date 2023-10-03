import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";

export const renderWithRedux = (component, initialRoute = '/') => {
    return render(
        <Provider store={createReduxStore(initialRoute)}>
            {component}
        </Provider>
    )
}
