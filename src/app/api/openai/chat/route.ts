import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

export const runtime = 'edge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const AGENT_PROMPTS = {
  manager: `## Research Manager Analysis
Provide a high-level 1000-character executive summary focusing on:
- Key strategic objectives
- Critical findings
- Top 3 recommendations`,

  market: `## Market Analyst Report
Provide a high-level 1000-character market summary focusing on:
- Market size & growth potential
- Top 3 industry trends
- Key competitive dynamics`,

  consumer: `## Consumer Expert Insights
Provide a high-level 1000-character consumer summary focusing on:
- Primary target segments
- Key user needs/pain points
- Most important behavioral patterns`,

  industry: `## Industry Specialist Review
Provide a high-level 1000-character technical summary focusing on:
- Critical technical requirements
- Major regulatory considerations
- Key industry-specific challenges`
}

export async function POST(req: Request) {
  const { prompt } = await req.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      {
        role: 'system',
        content: `You are a multi-agent market research system. Provide CONCISE insights (max 1000 characters per section) focusing only on the most critical points. Use bullet points for clarity.`
      },
      {
        role: 'user',
        content: `Analyze this request from all agent perspectives:\n\n${prompt}\n\n${Object.values(AGENT_PROMPTS).join('\n\n')}`
      }
    ],
    stream: true,
    temperature: 0.7,
    max_tokens: 2000
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
