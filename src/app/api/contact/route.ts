import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Submission from '@/models/Submission'

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

    // Connect to the database
    await connectDB()

    // Create and save the submission
    const submission = await Submission.create({
      name,
      email,
      phone,
      service,
      message,
    })

    // Return success response with the submission ID
    return NextResponse.json(
      { 
        message: 'Form submitted successfully',
        submissionId: submission._id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form submission:', error)
    
    // Handle validation errors
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    )
  }
} 