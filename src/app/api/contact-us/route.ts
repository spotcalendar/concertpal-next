import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
    try {
        const reqBody = await req.json();
        const { message } = reqBody;
        console.log(message.length);
        if (message.length <= 0) {
            return NextResponse.json({ error: "Issue should be greater than 1 character", success: false }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: "erich17@ethereal.email",
                pass: "dXVxxAawPWnuvCGsRN",
            },
        });

        const mailOptions = {
            to: "spotcalendars@gmail.com",
            subject: "Spot calender help message",
            text: message,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: error.message || "Error sending Email", success: false }, { status: 500 });
    }
};
