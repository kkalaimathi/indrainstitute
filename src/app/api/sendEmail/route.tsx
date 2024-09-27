import { Resend } from 'resend';
import * as React from 'react';

// Ensure Resend API key is available
const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in the environment variables");
  throw new Error("RESEND_API_KEY is not set in the environment variables");
}

const resend = new Resend(resendApiKey);

console.log("resend-----", resend);

export async function POST(req: Request) {
  try {
    const { firstName, firstEmail, firstPhoneNumber, firstMessage } = await req.json();

    // 1. Sending thank you email to the user's email
    const thankYouEmail = await resend.emails.send({
      from: 'Indra <onboarding@resend.dev>', // Your sender email
      to: [firstEmail], // Sending thank you email to the user's email
      subject: 'Thank you from Indra Institute',
      html: `
        <div>
          <p>Dear ${firstName},</p>
          <p>Thank you for reaching out to Indra Institute of Training. We have received your message and will get back to you soon.</p>
          <p>If you have any further questions, feel free to contact us.</p>
          <p>Best Regards,<br/>Indra Institute Team</p>
        </div>
      `, // Custom thank you message
    });

    // 2. Sending user details to the admin (your email)
    const adminEmail = await resend.emails.send({
      from: 'Indra <onboarding@resend.dev>', // Change to your Resend verified email
      to: ['ieact23@gmail.com'],  // Replace with your email address
      subject: 'New User Message from Indra Institute',
      html: `
        <div>
          <p><strong>New message received:</strong></p>
          <p><strong>Name:</strong> ${firstName}<br/>
          <strong>Email:</strong> ${firstEmail}<br/>
          <strong>Phone:</strong> ${firstPhoneNumber}<br/>
          <strong>Message:</strong> ${firstMessage}</p>
        </div>
      `, // Including the user's details in the email
    });
console.log("adminEmail------>", adminEmail);

    // Assuming successful sending if there are no errors
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
