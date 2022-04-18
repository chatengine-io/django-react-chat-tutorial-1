import { useContext } from "react";

import { Context } from "../../context";

import Header from "./Header";
import ChatList from "./ChatList";

import {
  MultiChatWindow,
  useMultiChatLogic,
  MultiChatSocket,
} from "react-chat-engine-advanced";
const projectId = "70049943-b572-4372-9f3c-fbdeca940e0f";

const ChatsPage = () => {
  const { user } = useContext(Context);

  const chatProps = useMultiChatLogic(
    projectId,
    user.username,
    user.hashed_password
  );

  if (!user) {
    return <div />;
  } else {
    return (
      <div style={{ backgroundColor: "#e8e5f4" }}>
        <Header />

        <div
          style={{ height: "calc(100vh - 64px)", backgroundColor: "#e8e5f4" }}
        >
          <div className="bubble-1" />
          <div className="bubble-2" />
          <div className="bubble-3" />
          <div className="bubble-4" />

          <MultiChatSocket {...chatProps} />
          <MultiChatWindow
            {...chatProps}
            renderChatList={(props) => (
              <ChatList
                {...props}
                onChatCardClick={chatProps.onChatCardClick}
              />
            )}
            style={{
              position: "absolute",
              top: "calc(10vh + 64px)",
              left: "10vw",
              height: "calc(80vh - 64px)",
              width: "80vw",
              border: "1px solid black",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
          />
        </div>
      </div>
    );
  }
};

export default ChatsPage;
