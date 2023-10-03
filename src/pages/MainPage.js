import * as React from 'react';
import Counter from "../components/Counter/Counter";

const MainPage = () => {
    return (
        <div data-testid={'main-page-testid'}>
            MAIN PAGE!
            <Counter/>
        </div>
    );
};

export default MainPage;

