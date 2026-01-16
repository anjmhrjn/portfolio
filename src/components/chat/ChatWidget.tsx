"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChatPanel } from "./ChatPanel";

export function ChatWidget() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="fixed bottom-6 right-6 z-50 rounded-full bg-black text-white px-4 py-3 text-sm shadow-lg hover:opacity-90"
          aria-label="Open chat assistant"
        >
          Ask about me
        </button>
      </Dialog.Trigger>

      <ChatPanel />
    </Dialog.Root>
  );
}
