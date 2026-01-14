import { NextResponse } from "next/navigation";
import nodemailer from "nodemailer";
import { getAdminEmailTemplate, getCustomerEmailTemplate } from "@/lib/emailTemplates";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, phone, vehicleModel, preferredDate, preferredTime, notes, packageName } = data;

        // Configuration for Gmail Nodemailer
        // IMPORTANT: User must set these in their .env file
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER || "udimultipro@gmail.com",
                pass: process.env.GMAIL_APP_PASSWORD, // Must be a Google App Password
            },
        });

        // 1. Send Notification to Admin
        const adminMailOptions = {
            from: `"UDI'S RESERVATION" <${process.env.GMAIL_USER || "udimultipro@gmail.com"}>`,
            to: "udimultipro@gmail.com",
            subject: `🚨 NEW BOOKING: ${packageName} - ${name}`,
            html: getAdminEmailTemplate(data),
        };

        // 2. Send Confirmation to Customer
        const customerMailOptions = {
            from: `"UDI'S MULTIPRO DETAILING" <${process.env.GMAIL_USER || "udimultipro@gmail.com"}>`,
            to: email,
            subject: `Booking Confirmation: Your ${packageName} Journey Starts Soon`,
            html: getCustomerEmailTemplate(data),
        };

        // Execute both mail transfers
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(customerMailOptions)
        ]);

        return NextResponse.json({ message: "Booking protocol initiated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Transmission Fault:", error);
        return NextResponse.json({ message: "Failed to process booking request" }, { status: 500 });
    }
}
