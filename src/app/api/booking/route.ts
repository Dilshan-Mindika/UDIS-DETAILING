import { mailOptions, transporter } from "@/lib/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
    const { firstName, lastName, email, phone, service, date, time, vehicle, details } = data;

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `New Booking Request: ${firstName} ${lastName}`,
            html: `
        <h3>New Appointment Request</h3>
        <p><strong>Customer:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr />
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
        <p><strong>Details:</strong> ${details}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
