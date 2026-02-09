import { NextRequest, NextResponse } from "next/server";

// Google Sheets URL - Replace with your actual Google Apps Script URL
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const { fullName, email, phone, income } = data;

        // Validate required fields
        if (!fullName || !email || !phone || !income) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // If Google Script URL is configured, send to Google Sheets
        if (GOOGLE_SCRIPT_URL) {
            try {
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullName,
                        email,
                        phone,
                        income,
                        timestamp: new Date().toISOString(),
                        source: "MB Priority Visa Signature Landing Page",
                    }),
                });

                if (!response.ok) {
                    console.error("Google Sheets error:", await response.text());
                }
            } catch (error) {
                console.error("Failed to send to Google Sheets:", error);
                // Continue anyway - we'll log the data
            }
        }

        // Log the registration (for debugging)
        console.log("New registration:", {
            fullName,
            email,
            phone,
            income,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json({
            success: true,
            message: "Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm.",
        });
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
