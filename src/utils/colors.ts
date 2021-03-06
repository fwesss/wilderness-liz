const grays = [
  '#f8f9f9',
  '#e9eeed',
  '#dae2e0',
  '#c9d5d2',
  '#b9c6c3',
  '#a9b5b2',
  '#97a29f',
  '#818b89',
  '#666d6c',
  '#3b403f',
];

const teals = [
  '#f1fcf9',
  '#e3f9f4',
  '#d4f6ee',
  '#c5f3e8',
  '#b4f0e1',
  '#a3eddb',
  '#93d6c6',
  '#81bcae',
  '#6c9d91',
  '#4e7169',
];

const cyans = [
  '#f1f9fc',
  '#e3f4f9',
  '#d4eef6',
  '#c5e8f3',
  '#b4e1f0',
  '#a3dbed',
  '#93c6d6',
  '#81aebc',
  '#6b909c',
  '#4e6871',
];

const blues = [
  '#f2f4fc',
  '#e4e9f9',
  '#d6def7',
  '#c6d1f4',
  '#b5c4f0',
  '#a3b5ed',
  '#93a3d6',
  '#818fbc',
  '#6b779c',
  '#4d5570',
];

const indigos = [
  '#f5f2fc',
  '#eae5f9',
  '#dfd7f7',
  '#d3c7f4',
  '#c5b6f0',
  '#b6a3ed',
  '#a493d6',
  '#9081bb',
  '#776b9b',
  '#554c6f',
];

const violets = [
  '#faf2fc',
  '#f4e5f9',
  '#efd6f7',
  '#e9c7f4',
  '#e2b6f0',
  '#dba3ed',
  '#c693d6',
  '#ad81bc',
  '#906b9c',
  '#674d70',
];

const fuschias = [
  '#fcf2f9',
  '#f9e5f4',
  '#f7d6ee',
  '#f4c7e8',
  '#f0b6e1',
  '#eda3da',
  '#d693c5',
  '#bc81ad',
  '#9c6b8f',
  '#704d67',
];

const pinks = [
  '#fcf2f5',
  '#f9e5ea',
  '#f7d7de',
  '#f4c7d2',
  '#f0b6c4',
  '#eda3b5',
  '#d693a3',
  '#bc818f',
  '#9c6b77',
  '#704d55',
];

const reds = [
  '#fcf4f2',
  '#f9e9e4',
  '#f6ded5',
  '#f3d2c6',
  '#f0c4b5',
  '#edb6a3',
  '#d6a493',
  '#bc9081',
  '#9c786b',
  '#70564d',
];

const oranges = [
  '#fcf9f1',
  '#f9f3e2',
  '#f6eed3',
  '#f3e8c4',
  '#f0e1b4',
  '#eddba3',
  '#d6c693',
  '#bcae81',
  '#9d916b',
  '#71694e',
];

const yellows = [
  '#f9fcf1',
  '#f3f9e2',
  '#eef6d3',
  '#e7f3c4',
  '#e1f0b3',
  '#dbeda3',
  '#c6d693',
  '#aebc81',
  '#919d6c',
  '#69724e',
];

const limes = [
  '#f4fcf1',
  '#e8f9e3',
  '#dcf6d4',
  '#d0f3c5',
  '#c3f0b4',
  '#b5eda3',
  '#a3d693',
  '#90bc81',
  '#779d6c',
  '#57714e',
];

const greens = [
  '#f1fcf4',
  '#e3f9e9',
  '#d5f6dd',
  '#c5f3d1',
  '#b4f0c4',
  '#a3edb6',
  '#93d6a4',
  '#81bc90',
  '#6c9d78',
  '#4e7157',
];

const brand = '#A1B5B2';
const black = '#3b403f';
const white = '#ffffff';

export const colors = {
  brand,
  black,
  white,
  gray: grays,
  teal: teals,
  cyan: cyans,
  blue: blues,
  indigo: indigos,
  violet: violets,
  fuschia: fuschias,
  pink: pinks,
  red: reds,
  orange: oranges,
  yellow: yellows,
  lime: limes,
  green: greens,
};

export const allColors = [
  brand, black, white, ...grays, ...teals, ...cyans, ...blues, ...indigos,
  ...violets, ...fuschias, ...pinks, ...reds, ...oranges, ...yellows, ...limes,
  ...greens,
];

export default colors;
