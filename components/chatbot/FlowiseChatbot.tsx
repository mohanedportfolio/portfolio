"use client";

import { useEffect } from "react";

export default function FlowiseChatbot() {
  useEffect(() => {
    // Create <script> tag
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
    script.type = "module";
    script.async = true;

    script.onload = () => {
      // @ts-ignore: Chatbot is attached to window
      if (window.Chatbot) {
        // @ts-ignore
        window.Chatbot.init({
          chatflowid: process.env.NEXT_PUBLIC_FLOWISE_CHATFLOWID!,
          apiHost: process.env.NEXT_PUBLIC_FLOWISE_APIHOST!,
          theme: {
            button: {
              backgroundColor: "#3B81F6",
              right: 20,
              bottom: 20,
              size: 48,
              dragAndDrop: true,
              iconColor: "white",
              customIconSrc:
                "/icons/chat.svg",
              autoWindowOpen: {
                autoOpen: true,
                openDelay: 2,
                autoOpenOnMobile: false,
              },
            },
            tooltip: {
              showTooltip: true,
              tooltipMessage: "Hi There 👋!",
              tooltipBackgroundColor: "black",
              tooltipTextColor: "white",
              tooltipFontSize: 16,
            },
           
            chatWindow: {
              showTitle: true,
              showAgentMessages: false,
              title: "Mohaned RAG Chatbot",
              titleAvatarSrc:
                "/icons/chat.svg",
              welcomeMessage: "Hello! This is custom welcome message",
              errorMessage: "This is a custom error message",
              backgroundColor: "#1f2937",
              backgroundImage: "enter image path or link",
              height: 700,
              width: 400,
              fontSize: 16,
              starterPrompts: ["What is Mohaned qalifications?"],
              starterPromptFontSize: 15,
              clearChatOnReload: false,
              sourceDocsTitle: "Sources:",
              renderHTML: true,
              botMessage: {
                backgroundColor: "#374151",
                textColor: "#f9fafb",
                showAvatar: true,
                avatarSrc:
                  "/icons/bot.png",
              },
              userMessage: {
                backgroundColor: "#2563eb",
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc:
                  "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
              },
              textInput: {
                placeholder: "Type your question",
                backgroundColor: "#111827",
                textColor: "#f9fafb",
                sendButtonColor: "#3B81F6",
                maxChars: 50,
                maxCharsWarningMessage:
                  "You exceeded the characters limit. Please input less than 50 characters.",
                autoFocus: true,
                sendMessageSound: true,
                sendSoundLocation: "send_message.mp3",
                receiveMessageSound: true,
                receiveSoundLocation: "receive_message.mp3",
              },
              feedback: {
                color: "#303235",
              },
              dateTimeToggle: {
                date: true,
                time: true,
              },
              footer: {
                textColor: "#303235",
                text: "",
                company: "",
                companyLink: "",
              },
            },
          },
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
