"use client";

import { useState } from "react";
import { ChatMessage } from "./types";
import { nanoid } from "nanoid";

interface Props {
    typing: string;
    setTyping: React.Dispatch<React.SetStateAction<string>>;
    setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
    setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

export function ChatInput({ typing, setTyping, setIsTyping, setMessages }: Props) {
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);

    function typeText(fullText: string, callback?: () => void) {
        setTyping(""); // reset
        let i = 0;
        const interval = setInterval(() => {
            setTyping((prev) => prev + fullText[i]);
            i++;
            if (i >= fullText.length) {
                clearInterval(interval);
                callback?.();
            }
        }, 25); // 25ms per character
    }

    async function handleSend() {
        if (!value.trim() || loading) return;

        const userMessage: ChatMessage = {
            id: nanoid(),
            role: "user",
            content: value.trim(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setValue("");
        setLoading(true);
        setIsTyping(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: userMessage.content,
                    pageContext: document.title,
                }),
            });

            const data = await res.json();
            // Animate assistant message
            typeText(data.answer, () => {
                // push the completed message to messages state
                setMessages((prev) => [
                    ...prev,
                    { id: nanoid(), role: "assistant", content: data.answer ?? "Something went wrong.", },
                ]);
                setTyping("");
                setIsTyping(false);
            });

        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    id: nanoid(),
                    role: "assistant",
                    content: "Failed to reach the server.",
                },
            ]);
            setIsTyping(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="border-t px-3 py-2">
            <textarea
                disabled={loading}
                className="w-full resize-none rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1"
                rows={2}
                placeholder="Ask about my experience..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                    }
                }}
            />
            <div className="flex justify-end mt-2">
                <button
                    onClick={handleSend}
                    disabled={loading}
                    className="rounded-md bg-black px-3 py-1.5 text-xs text-white disabled:opacity-50"
                >
                    {loading ? "Sending…" : "Send"}
                </button>
            </div>
        </div>
    );
}
