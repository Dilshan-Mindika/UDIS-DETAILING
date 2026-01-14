import { mailOptions, transporter } from "@/lib/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
    const { name, email, subject, message } = data;

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `New Inquiry: ${subject}`, // Unique subject for Admin
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
