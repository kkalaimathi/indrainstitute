import { Resend } from 'resend';
import * as React from 'react';

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in the environment variables");
  throw new Error("RESEND_API_KEY is not set in the environment variables");
}

const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    const { firstName, firstEmail, firstPhoneNumber, firstMessage } = await req.json();

    // 1. Sending thank you email to the user's email
    const thankYouEmail = await resend.emails.send({
      from: 'Maheswara Boilers <kalaimathikarthik2225@gmail.com>', // Your sender email
      to: [firstEmail], // Sending thank you email to the user's email
      subject: 'Thank you from Maheswara Boilers',
      html: `
        <div>
          <p>Dear ${firstName},</p>
          <p>Thank you for reaching out to Maheswara Boilers. We have received your message and will get back to you soon.</p>
          <p>If you have any further questions, feel free to contact us.</p>
          <p>Best Regards,<br/>Maheswara Boilers Team</p>
        </div>
      `, // Custom thank you message
    });

    // 2. Sending user details to the admin (your email)
    const adminEmail = await resend.emails.send({
      from: 'Indra <onboarding@resend.dev>', // Change to your Resend verified email
      to: ['kalaimathikarthik2225@gmail.com'],  // Replace with your email address
      subject: 'New User Message from Maheswara Boilers',
      html: `
        <div>
          <p><strong>New message received:</strong></p>
          <p><strong>Name:</strong> ${firstName}<br/>
          <strong>Email:</strong> ${firstEmail}<br/>
          <strong>Phone:</strong> ${firstPhoneNumber}<br/>
          <strong>Message:</strong> ${firstMessage}<br/></p>
        </div>
      `, // Including the user's details in the email
    });

    // Check if both emails were sent successfully
    if (thankYouEmail && adminEmail) {
      return new Response(JSON.stringify({ message: 'Emails sent successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      throw new Error('Failed to send one or both emails');
    }
  } catch (error: any) {
    console.error('Error caught:', error);
    return new Response(JSON.stringify({ error: error.message || "Failed to send email" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
