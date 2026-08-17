"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

/**
 * Renders assistant markdown inside a chat bubble. Raw HTML is not enabled,
 * so anything the API returns is escaped rather than executed.
 */
export function Markdown({ content }: Props) {
  return (
    <div className="space-y-2 break-words">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className="leading-relaxed">{children}</p>,
          strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2f7df4] underline underline-offset-2 hover:opacity-80"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 space-y-1">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          h1: ({ children }) => (
            <h1 className="text-base font-semibold">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-sm font-semibold">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-sm font-semibold">{children}</h3>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-gray-300 pl-3 text-gray-600">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isBlock = Boolean(className);

            if (!isBlock) {
              return (
                <code className="rounded bg-gray-200 px-1 py-0.5 font-mono text-[0.8em]">
                  {children}
                </code>
              );
            }

            return (
              <code className="block overflow-x-auto rounded bg-gray-900 p-3 font-mono text-xs text-gray-100">
                {children}
              </code>
            );
          },
          pre: ({ children }) => <pre className="overflow-x-auto">{children}</pre>,
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 px-2 py-1 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 px-2 py-1">{children}</td>
          ),
          hr: () => <hr className="border-gray-300" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
