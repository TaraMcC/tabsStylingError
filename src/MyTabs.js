
/**
 * Tabs for displaying different content.
 */

import * as React from "react";
import startCase from "lodash.startcase";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import ConditionalThemeWrapper from "./ConditionalThemeWrapper";
import { withTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
    indicator: {
        backgroundColor: "#fbb900",
        height: 4
    },
    tabRoot: {
        fontSize: 18,
        letterSpacing: "0.09em",
        borderBottom: "4px solid rgb(178,178,178)",
        color: "rgb(178,178,178)",
        "&:hover": {
            color: "#fbb900"
        },
        "&$selectedTab": {
            color: "#fbb900"
        },
        "&:focus": {
            color: "#fbb900"
        }
    },
    selectedTab: {},
    containerWhenScrollable: {
        margin: "0px 56px"
    },
    flexContainer: {
        borderBottom: "2px solid rgb(218,218,218)"
    },

    // Alternative style
    altIndicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent", // Hide actual indicator
        position: "absolute",
        bottom: -1,
        "& > div": {
            // Style div child of tab indicator
            width: "calc(100% - 4px)",
            backgroundColor: "#fff",
            height: 3
        }
    },
    altTabRoot: {
        fontSize: 16,
        textTransform: "none",
        fontFamily: "Arial",
        letterSpacing: "0.09em",
        color: "rgb(178,178,178)"
    },
    altScroller: {
        position: "relative",
        borderBottom: "2px solid rgb(233,233,233)",
        overflowX: "visible"
    },
    altSelectedTab: {
        position: "relative",
        border: "2px solid rgb(233,233,233)",
        fontWeight: "bold",
        color: "rgb(86,86,86)",
        borderBottom: "none",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        "& > :first-child": {
            "& > :first-child": {
                "& > :first-child": {
                    // To get span element for only selected tab
                    borderLeft: "7px solid #fbb900",
                    paddingLeft: 7.5
                }
            }
        },
        "& > ::after": {
            content: '""',
            position: "absolute",
            height: 2,
            backgroundColor: "red"
        }
    },
    altLabelContainer: {
        padding: "6px 14px"
    }
});

function MyTabs(props) {
    const tabsStyle = useStyles(props);
    const [value, changeValue] = React.useState(0);

    const handleChange = (event, value) => {
        changeValue(value);
    };

    let missingContextTheme = false;
    if (props.theme) {
        missingContextTheme = isEmpty(props.theme.overrides);
    }
    console.log("missingContextTheme" + missingContextTheme);

    return (
        <ConditionalThemeWrapper missingContextTheme={missingContextTheme}>
            <div className={props.className} style={{ maxWidth: props.maxWidth }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant={props.altType ? "standard" : props.variant}
                    scrollButtons={props.variant === "scrollable" ? "on" : "off"}
                    classes={{
                        indicator: props.altType
                            ? tabsStyle.altIndicator
                            : tabsStyle.indicator,
                        scroller: props.altType && tabsStyle.altScroller
                    }}
                    TabIndicatorProps={{ children: <div /> }} // Use child div as indicator to show
                >
                    {props.tabInformation.map((tab, index) => (
                        <Tab
                            key={index}
                            label={startCase(tab[0].toString())}
                            style={{ width: props.tabWidth, maxWidth: props.tabWidth }}
                            classes={{
                                root: props.altType ? tabsStyle.altTabRoot : tabsStyle.tabRoot,
                                selected: props.altType
                                    ? tabsStyle.altSelectedTab
                                    : tabsStyle.selectedTab,
                                labelContainer: props.altType && tabsStyle.altLabelContainer
                            }}
                            disabled={tab[2]}
                        />
                    ))}
                </Tabs>
                <div
                    className={{
                        [tabsStyle.containerWhenScrollable]: props.variant === "scrollable"
                    }}
                >
                    {props.tabInformation.map((tab, index) => (
                        <React.Fragment key={index}>
                            {value === index && tab[1]}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </ConditionalThemeWrapper>
    );
}

MyTabs.defaultProps = {
    variant: "scrollable",
    maxWidth: null,
    tabWidth: null,
    className: null,
    altType: false
};

MyTabs.propTypes = {
    tabsInformation: PropTypes.array.isRequired,
    theme: PropTypes.object,
    altType: PropTypes.bool
};

export default withTheme()(MyTabs);
