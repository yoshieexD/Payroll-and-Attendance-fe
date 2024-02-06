import React, { FC, ReactNode } from 'react';
import Header from './Header';
interface Props {
    children: ReactNode;
    classname: String
}

const Layout: FC<Props> = ({ children, classname }) => {
    return (
        <div className={`${classname}`}>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
