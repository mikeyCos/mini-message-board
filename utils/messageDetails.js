const messageDetails = (msg) => {
  const { title, body, user, timestamp } = msg;
  const newTimestamp = new Date(timestamp);
  console.log(newTimestamp);
  // Parameters or Query?
  const messageURL = `/messages/message/${user}/${title}/${body}/${newTimestamp}`;
  window.location = messageURL;
};
