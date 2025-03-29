import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, date } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `Al-Iqra Counseling <${process.env.RESEND_FROM_EMAIL}>`,
      to: ["aliqrainstitute01@gmail.com"],
      subject: "New Counseling Request",
      text: `New Counseling Request:\n\nName: ${name}\nEmail: ${email}\nDate: ${date}`,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
