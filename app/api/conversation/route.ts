import OpenAI from 'openai';

import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";


import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


const instructionMessage: ChatCompletionRequestMessage = {
    role: "system", //system
    content: "You are travel agent advisor. Provide hour-by-hour itinerary schedule for a day trip."
    
}
    
export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        if (!configuration.apiKey) {
            return new NextResponse("OpenAI API Key not configured", { status: 500});
        }
        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        });

        return NextResponse.json(response.data.choices[0].message);
    } catch (error) {
        console.log("[CONVERSATION_ERROR", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}