import { mailOptions, transporter } from "@/lib/mail";
import { getContactAdminTemplate } from "@/lib/emailTemplates";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
    const { name, email, subject, message } = data;

    // Admin Recipient List
    const adminEmails = [
        "udarajayasanka27@gmail.com",
        "udimultipro@gmail.com",
        "detailing@udismultipro.com"
    ];

    try {
        await transporter.sendMail({
            ...mailOptions,
            to: adminEmails.join(", "),
            subject: `New Inquiry: ${subject} from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: getContactAdminTemplate(data),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
