export const doImport = ({ year, month, day, dry }) => {
  // console.log(year);
  // console.log(month);
  // console.log(day);
  // console.log(dry);
  require('./xml').run();
};
