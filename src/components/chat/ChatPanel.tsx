"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { useState } from "react";
import { ChatMessage } from "./types";

export function ChatPanel() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "system-1",
            role: "assistant",
            content:
                "I can answer questions about Anuj’s experience, projects, and skills.",
        },
    ]);
    const [typing, setTyping] = useState(""); // current animated text
    const [isTyping, setIsTyping] = useState(false);

    return (
        <Dialog.Content
            className="
        fixed bottom-20 right-6 z-50
        w-[360px] max-h-[70vh]
        rounded-xl bg-white shadow-xl
        flex flex-col border
        md:w-[380px]
        max-md:inset-0 max-md:w-full max-md:h-full max-md:max-h-full
      "
        >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-4 py-3">
                <Dialog.Title className="text-sm font-medium">
                    AI Assistant
                </Dialog.Title>

                <Dialog.Close asChild>
                    <button aria-label="Close chat">
                        <X className="h-4 w-4 text-gray-600" />
                    </button>
                </Dialog.Close>
            </div>

            {/* Messages */}
            <ChatMessages typing={typing} isTyping={isTyping} messages={messages} />

            {/* Input */}
            <ChatInput typing={typing} setTyping={setTyping} setIsTyping={setIsTyping} setMessages={setMessages} />
        </Dialog.Content>
    );
}
