import Typography from 'typography';
import stAnnesTheme from 'typography-theme-st-annes';
import { colors } from './colors';
stAnnesTheme.baseFontSize = '16px';
stAnnesTheme.overrideThemeStyles = () => ({
    a: {
        color: colors.teal[9],
    },
});
const typography = new Typography(stAnnesTheme);
export default typography;
