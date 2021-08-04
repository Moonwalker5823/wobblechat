import React, { useEffect, useState } from "react";

function Chat({ currentChat }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Make a GET request to the backend whenever the currentChat chages,
  // to reset our chat window to display messages from that particular chat.
  useEffect(() => {
    console.log("CURRENT CHAT IS ", currentChat);
    if (currentChat.questionId === null) return;
    setIsError(false);
    setIsLoading(false);
    fetch(`/api/questions/${currentChat.id}`)
      .then((response) => response.json())
      .then((data) => {
        setMessages(data.messages);
        setIsError(false);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Could not connect to DB or websockets");
        setIsLoading(true);
        setIsError(true);
      });
  }, [currentChat]);

  if (isLoading) return <div>Loading messages...</div>;
  if (isError)
    return <div>An error occured, the chat could not be fetched.</div>;

  return (
    <div className="Chat">
      {messages.length > 0 ? (
        <ul id="messages">
          {messages.map((message) => (
            <li>{message}</li>
          ))}
        </ul>
      ) : (
        <div>
          Please connect to a chatroom to speak with others or view a chat
          history.
        </div>
      )}
      <form id="form-chat" action="">
        <input id="input-chat" />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Chat;

