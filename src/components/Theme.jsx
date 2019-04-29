import React from "react";
import {createTheme} from "mineral-ui";

export const MyTheme = createTheme({
    colors: {theme: 'slate'},
    // Defer to typography.js
    overrides: {fontFamily_system: ""}
});

export default MyTheme