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

        const transport = nodemailer.createTransport({
            service: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            to: "spotcalendars@gmail.com",
            subject: "Concertpal Issue Request",
            text: message,
        };

        await transport.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: error.message || "Error sending Email", success: false }, { status: 500 });
    }
};
