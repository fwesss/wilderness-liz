import Typography from "typography";
import stAnnesTheme from "typography-theme-st-annes";

stAnnesTheme.baseFontSize = "20px";
stAnnesTheme.overrideThemeStyles = () => ({
    a: {
        color: "#616e6c"
    }
});

const typography = new Typography(stAnnesTheme);

export default typography