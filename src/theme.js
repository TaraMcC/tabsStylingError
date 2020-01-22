import { createMuiTheme } from "@material-ui/core/styles";

export const myYellow = "#FBB900";
export const myYellowHover = "#FFD14E";
export const myGrey = "#868686";
export const myGreyHover = "#B2B2B2";
export const myLightGrey = "#E9E9E9";
export const myFontColor = "#565656";
export const myWhite = "#FFFFFF";

export const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            main: myYellow,
            contrastText: myFontColor
        },
        secondary: {
            main: myGrey,
            contrastText: "white"
        }
    },
    overrides: {
        MuiTab: {
            root: {
                textTransform: "capitalize",
                fontSize: 18,
                letterSpacing: "0.09em",
                borderBottom: "4px solid rgb(178,178,178)",
                color: "rgb(178,178,178)",
                "&:hover": {
                    color: myYellowHover
                },
                "&$selectedTab": {
                    color: myYellow
                },
                "&:focus": {
                    color: myYellow
                }
            },
            indicator: {
                backgroundColor: myYellow,
                height: 4
            }
        },
        MuiRadio: {
            root: {
                padding: 5
            }
        }
    }
});
