import React from "react";
import PropTypes from "prop-types";
import { ArrowLeft, ArrowRight } from "react-feather";
import Anchor from "@ui/anchor";

export const CardList = ({ children }) => {
    return <ul className="card-list">{children}</ul>;
};

CardList.propTypes = {
    children: PropTypes.node.isRequired,
};

export const CardListItem = ({ children, path, ...rest }) => {
    return (
        <li>
            {path && (
                <Anchor path={path}>
                    {children} <ArrowLeft />
                </Anchor>
            )}
            {!path && (
                <button type="button" {...rest}>
                    {children} <ArrowLeft />
                </button>
            )}
        </li>
    );
};

CardListItem.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string,
};