const formatDate = (dateObj) => {
  // Material UI expects the date to be given in the following format - 2021-05-13

  // convert dateObj to proper JS date
  const date = new Date(dateObj);
  /*
    Get the month from the Date obj and add 1 to it because JS date starts from 0. Also converting to template literal
    because we need to convert it to string
    */
  let month = `${date.getMonth() + 1}`;
  let day = date.getDate();
  const year = date.getFullYear();

  // Material UI expects single digit months and days to be prepended with a zero
  if (month.length < 2) {
    month = `0${month}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  const formattedDate = [year, month, day].join("-");
  return formattedDate;
};

export default formatDate;
