import { useContext, useState } from "react";

import { Context } from "../../../context";
import { Input, ChatCard } from "react-chat-engine-advanced";

const ChatList = (props) => {
  const { user } = useContext(Context);
  const [search, setSearch] = useState("");

  const renderChats = () => {
    return props.chats.map((chat, index) => {
      return (
        <ChatCard
          key={`chat-card-${index}`}
          title={chat.title}
          description={
            chat.last_message.text ? chat.last_message.text : "Say hello!"
          }
          timeStamp={
            chat.last_message.created
              ? chat.last_message.created.substr(5, 5)
              : chat.created.substr(5, 5)
          }
          isActive={props.activeChatId === chat.id}
          hasNotification={user.username !== chat.last_message.sender_username}
          style={{ margin: "6px 12px 6px 12px" }}
          onClick={() => props.onChatCardClick(chat.id)}
        />
      );
    });
  };

  const renderSearch = () => {
    return <div>results</div>;
  };

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#4e426d",
        overflowY: "scroll",
      }}
    >
      <Input
        label="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {search.length > 0 ? renderSearch() : renderChats()}
    </div>
  );
};

export default ChatList;
