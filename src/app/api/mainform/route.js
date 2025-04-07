import { Resend } from "resend";

export async function POST(req) {
  try {
    const { names, emails, phone, city, course } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `Al-Iqra Institute <${process.env.RESEND_FROM_EMAIL}>`,
      to: ["aliqrainstitute01@gmail.com"],
      subject: "New Course Registration",
      text: `
📝 New Registration Details:

👤 Name: ${names}
📧 Email: ${emails}
📱 Phone: ${phone}
🏙️ City: ${city}
📘 Course: ${course}
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ success: false, error: error.message });
  }
}
