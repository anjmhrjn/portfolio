import { ChatMessage as ChatMessageType } from "./types";
import clsx from "clsx";

interface Props {
  message: ChatMessageType;
}

export function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={clsx(
        "max-w-[85%] rounded-lg px-3 py-2 text-sm",
        isUser
          ? "ml-auto bg-black text-white"
          : "mr-auto bg-gray-100 text-gray-900"
      )}
    >
      {message.content}
    </div>
  );
}
