import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate the input
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Log the submission (for development purposes)
    console.log('Form submission received:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // Return success response
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form submission:', error)
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    )
  }
} 