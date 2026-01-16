"use client";

import { ChatMessage as ChatMessageType } from "./types";
import { ChatMessage } from "./ChatMessage";
import { useEffect, useRef } from "react";

interface Props {
    typing: string;
    isTyping: boolean;
    messages: ChatMessageType[];
}

export function ChatMessages({ typing, isTyping, messages }: Props) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
            ))}
            {isTyping && !typing && (
                <div className="max-w-[85%] mr-auto rounded-lg bg-gray-100 px-3 py-2 text-sm flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-400 animate-bounce"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-400 animate-bounce delay-150"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-400 animate-bounce delay-300"></span>
                </div>
            )}
            {typing && (
                <div className="max-w-[85%] mr-auto rounded-lg bg-gray-100 px-3 py-2 text-sm">
                    {typing}
                    <span className="animate-blink">|</span>
                </div>
            )}
            <div ref={bottomRef} />
        </div>
    );
}
