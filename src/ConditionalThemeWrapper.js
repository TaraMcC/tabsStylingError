import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import PropTypes from "prop-types";
import {theme} from "./theme";

/** This is used to check whether a component need to be wrapped in our theme.
 * In the event it wraps one of our components that calls other components as it's children,
 * they will not get wrapped in the themeprovider as they will inherit it from their parent. */
function ConditionalThemeWrapper(props)
{
    return props.missingContextTheme ? <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider> : props.children;;
}

ConditionalThemeWrapper.propTypes = {
    missingContextTheme: PropTypes.bool.isRequired,
};

export default ConditionalThemeWrapper;