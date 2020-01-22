import React from 'react';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import MyTabs from "./MyTabs";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

let tabInformation = [
  ["First", <Typography component="div">First</Typography>],
  ["Second", <Typography component="div">Second</Typography>],
  ["Third", <Typography component="div">Third</Typography>],
  ["disabled", <Typography component="div">Disabled tab</Typography>, true]
];

const StyledTabs = withStyles({
  tabRoot: { textTransform: "lowercase" }
})(MyTabs);


/**If I comment in either the Button or the card material-ui Component below, I have no problem seeing the 
 * styled components.  If either are present, the styling is awful.
 */
function App() {
  return (
    <div className="App">
      
      <Button variant="contained" color="primary">
         Hello
      </Button>
        {/* <Card /> */}
      <MyTabs tabInformation={tabInformation} />
      <MyTabs tabInformation={tabInformation} altType={true} />
      <StyledTabs tabInformation={tabInformation} altType={false} />
    </div>
  );
}

export default App;
