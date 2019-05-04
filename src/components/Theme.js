import createTheme from "mineral-ui/themes/createTheme";
export const MyTheme = createTheme({
    colors: { theme: 'slate' },
    // Defer to typography.js
    overrides: { fontFamily_system: "" }
});
export default MyTheme;
