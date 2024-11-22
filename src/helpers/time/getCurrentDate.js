import React from "react";

const getCurrentDate = () => {
  const date = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const timesplit = time.split(/[:\s]/);
  const datesplit = date.split("/");

  //   TIMESTAMP format: YYYY-MM-DD HH:MI:SS

  const timestamp = `${datesplit[2]}-${datesplit[0]}-${datesplit[1]} ${timesplit[0]}:${timesplit[1]}:${timesplit[2]}`;

  return { timestamp };
};

export default getCurrentDate;
