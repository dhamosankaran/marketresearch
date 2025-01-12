import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    // Your existing code
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 