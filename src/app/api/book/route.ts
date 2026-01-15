import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getAdminEmailTemplate, getCustomerEmailTemplate } from "@/lib/emailTemplates";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, phone, vehicleModel, preferredDate, preferredTime, notes, packageName } = data;

        // Configuration for Gmail Nodemailer
        // DEBUG: Check for missing credentials
        if (!process.env.GMAIL_APP_PASSWORD) {
            console.error("CRITICAL ERROR: GMAIL_APP_PASSWORD is not defined in environment variables.");
            console.error("Please add GMAIL_APP_PASSWORD=your_app_password to your .env file.");
            return NextResponse.json({ message: "Server Misconfiguration: Missing Email Credentials" }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER || "udimultipro@gmail.com",
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Admin Recipient List
        const adminEmails = [
            "udarajayasanka27@gmail.com",
            "udimultipro@gmail.com",
            "detailing@udismultipro.com"
        ];

        // 1. Send Notification to Admins
        const adminMailOptions = {
            from: `"UDI'S RESERVATION SYSTEM" <${process.env.GMAIL_USER || "udimultipro@gmail.com"}>`,
            to: adminEmails.join(", "), // Send to all admins
            subject: `🚨 NEW BOOKING: ${packageName || "Custom"} - ${name}`,
            html: getAdminEmailTemplate(data),
        };

        // 2. Send Confirmation to Customer
        const customerMailOptions = {
            from: `"UDI'S MULTIPRO DETAILING" <${process.env.GMAIL_USER || "udimultipro@gmail.com"}>`,
            to: email,
            subject: `Booking Received: Your ${packageName || "Detailing"} Journey Starts Soon`,
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
