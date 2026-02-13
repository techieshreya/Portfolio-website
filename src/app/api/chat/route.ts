import { google } from "@ai-sdk/google";
import { streamText, type UIMessage, type ModelMessage } from "ai";
import { portfolioContext } from "@/data/rag-context";

export const maxDuration = 30;

/** Convert raw UIMessage JSON from the client into ModelMessage[] for streamText */
function toModelMessages(
    uiMessages: UIMessage[]
): ModelMessage[] {
    return uiMessages.map((msg) => {
        // Extract text content from parts array
        const textParts = (msg.parts ?? [])
            .filter((p): p is { type: "text"; text: string } => p.type === "text")
            .map((p) => ({ type: "text" as const, text: p.text }));

        if (msg.role === "user") {
            return { role: "user" as const, content: textParts };
        }
        return { role: "assistant" as const, content: textParts };
    });
}

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: google("gemini-2.0-flash"),
        system: portfolioContext,
        messages: toModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}
