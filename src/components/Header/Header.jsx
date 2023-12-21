import React from 'react';
import "./header.css"

const Header = ({name, image}) => {
    return (
        <>
            <div className={'head'}>
                <p>{name}</p>
                <img className={'userImg'} src={image} alt=""/>
            </div>
        </>
    );
};

export default Header;