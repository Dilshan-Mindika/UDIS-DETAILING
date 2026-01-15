// Email Templates for UDI'S DETAILING
// Theme: Premium Automotive Luxury (Dark Mode)

const LOGO_URL = "https://i.ibb.co/qM7FHmbm/logo.png";

export const getAdminEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background-color: #111111; border: 1px solid #333; border-radius: 8px; overflow: hidden; }
        .header { background: #000; padding: 40px 20px; text-align: center; border-bottom: 3px solid #0056b3; }
        .logo { max-height: 80px; width: auto; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto; }
        .alert-badge { background-color: #0056b3; color: white; padding: 8px 20px; font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; border-radius: 50px; display: inline-block; box-shadow: 0 0 15px rgba(0, 86, 179, 0.5); }
        .content { padding: 40px 30px; }
        .section-title { font-size: 16px; font-weight: bold; color: #888; text-transform: uppercase; margin-bottom: 15px; border-bottom: 1px solid #333; padding-bottom: 10px; letter-spacing: 1.5px; margin-top: 10px; }
        .table { width: 100%; border-collapse: collapse; }
        .table td { padding: 12px 0; border-bottom: 1px solid #222; vertical-align: top; }
        .label { color: #555; font-size: 11px; text-transform: uppercase; width: 140px; font-weight: 700; letter-spacing: 1px; padding-top: 14px; }
        .value { color: #ffffff; font-size: 15px; font-weight: 500; padding-top: 12px; }
        .highlight { color: #3b82f6; }
        .footer { padding: 30px; background: #080808; text-align: center; color: #444; font-size: 11px; border-top: 1px solid #222; letter-spacing: 1px; }
        .btn-action { display: block; width: 100%; padding: 16px 0; background-color: #1a1a1a; color: #fff; text-decoration: none; border-radius: 6px; font-size: 13px; margin-top: 25px; font-weight: bold; border: 1px solid #333; text-align: center; letter-spacing: 1px; transition: all 0.2s; }
        .btn-action:hover { background-color: #333; border-color: #555; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <a href="https://detailing.udismultipro.com">
                <img src="${LOGO_URL}" alt="UDI'S Detailing" class="logo" border="0" />
            </a>
            <div class="alert-badge">New Booking Alert</div>
        </div>
        <div class="content">
            <div class="section-title">Job Details</div>
            <table class="table">
                <tr>
                    <td class="label">Service</td>
                    <td class="value"><span style="color: #3b82f6; font-weight: bold; font-size: 17px;">${data.packageName || "Custom Request"}</span></td>
                </tr>
                <tr>
                    <td class="label">Vehicle</td>
                    <td class="value" style="font-size: 16px;">${data.vehicleModel}</td>
                </tr>
                <tr>
                    <td class="label">Timing</td>
                    <td class="value">${data.preferredDate} <span style="color: #666;">at</span> ${data.preferredTime}</td>
                </tr>
            </table>

            <div class="section-title" style="margin-top: 40px;">Client Details</div>
            <table class="table">
                <tr>
                    <td class="label">Name</td>
                    <td class="value"><strong>${data.name}</strong></td>
                </tr>
                <tr>
                    <td class="label">Contact</td>
                    <td class="value">
                        <div style="margin-bottom: 5px;">${data.phone}</div>
                        <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a>
                    </td>
                </tr>
                <tr>
                    <td class="label">Notes</td>
                    <td class="value" style="color: #999; font-style: italic; line-height: 1.5;">"${data.notes || "No notes provided"}"</td>
                </tr>
            </table>

            <a href="mailto:${data.email}?subject=Booking Confirmation: ${data.vehicleModel}" class="btn-action">REPLY TO CUSTOMER</a>
        </div>
        <div class="footer">
            CONFIDENTIAL // UDI'S DETAILING INTERNAL SYSTEM
        </div>
    </div>
</body>
</html>
`;

export const getContactAdminTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background-color: #111111; border: 1px solid #333; border-radius: 8px; overflow: hidden; }
        .header { background: #000; padding: 40px 20px; text-align: center; border-bottom: 3px solid #06b6d4; }
        .logo { height: 50px; width: auto; margin-bottom: 15px; }
        .alert-badge { background-color: #06b6d4; color: black; padding: 5px 15px; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; border-radius: 50px; display: inline-block; }
        .content { padding: 40px 30px; }
        .table { width: 100%; border-collapse: collapse; }
        .table td { padding: 15px 0; border-bottom: 1px solid #222; vertical-align: top; }
        .label { color: #06b6d4; font-size: 12px; text-transform: uppercase; width: 120px; font-weight: bold; letter-spacing: 1px; }
        .value { color: #ffffff; font-size: 15px; }
        .footer { padding: 30px; background: #080808; text-align: center; color: #555; font-size: 12px; border-top: 1px solid #222; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="${LOGO_URL}" alt="UDI'S Detailing" class="logo" />
            <br />
            <span class="alert-badge">New General Inquiry</span>
        </div>
        <div class="content">
            <table class="table">
                <tr>
                    <td class="label">From</td>
                    <td class="value"><strong>${data.name}</strong></td>
                </tr>
                <tr>
                    <td class="label">Email</td>
                    <td class="value"><a href="mailto:${data.email}" style="color: #06b6d4; text-decoration: none;">${data.email}</a></td>
                </tr>
                <tr>
                    <td class="label">Subject</td>
                    <td class="value">${data.subject}</td>
                </tr>
                <tr>
                    <td class="label">Message</td>
                    <td class="value" style="color: #cccccc; line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</td>
                </tr>
            </table>
        </div>
        <div class="footer">
             &copy; 2026 UDI'S DETAILING SYSTEM | INTERNAL USE ONLY
        </div>
    </div>
</body>
</html>
`;

export const getCustomerEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #09090b; color: #ffffff; margin: 0; padding: 0; }
        .wrapper { background-color: #000000; padding: 40px 10px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border: 1px solid #333; }
        
        /* Hero Section */
        .hero { 
            background: linear-gradient(180deg, #111 0%, #000 100%);
            padding: 50px 40px;
            text-align: center;
            border-bottom: 1px solid #333;
        }
        .logo { height: 60px; width: auto; margin-bottom: 20px; }
        .status-pill {
            display: inline-block;
            background: rgba(37, 99, 235, 0.15);
            border: 1px solid rgba(37, 99, 235, 0.4);
            color: #60a5fa;
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 11px;
            font-weight: bold;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        /* Content */
        .content { padding: 40px; background-color: #121212; }
        .greeting { font-size: 24px; font-weight: 300; margin-bottom: 20px; color: #fff; letter-spacing: 1px; }
        .message { color: #a1a1aa; line-height: 1.8; font-size: 15px; margin-bottom: 40px; }
        
        /* Detail Box */
        .detail-box {
            background-color: #0a0a0a;
            border: 1px solid #27272a;
            border-radius: 8px;
            padding: 0;
            overflow: hidden;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 16px 20px;
            border-bottom: 1px solid #27272a;
        }
        .detail-row:last-child { border-bottom: none; }
        .d-label { color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
        .d-value { color: #fff; font-size: 14px; font-weight: 500; text-align: right; }
        .d-highlight { color: #3b82f6; font-weight: bold; }

        .btn {
            display: block;
            width: 100%;
            text-align: center;
            background: #2563eb;
            color: white;
            padding: 18px 0;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 13px;
            letter-spacing: 2px;
            margin-top: 40px;
            transition: background 0.3s;
        }
        .btn:hover { background: #1d4ed8; }

        /* Footer */
        .footer { background-color: #050505; padding: 40px 20px; text-align: center; border-top: 1px solid #222; }
        .footer-text { color: #444; font-size: 11px; line-height: 1.6; letter-spacing: 0.5px; text-transform: uppercase; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="container">
            <div class="hero">
                <img src="${LOGO_URL}" alt="UDI'S Detailing" class="logo" />
                <br />
                <span class="status-pill">Booking Received</span>
            </div>
            
            <div class="content">
                <div class="greeting">Hello ${data.name.split(' ')[0]},</div>
                <div class="message">
                    We have successfully received your booking request for the <strong>${data.packageName}</strong>. 
                    <br><br>
                    Our team is currently reviewing your requested schedule. You will receive a personal confirmation from us shortly.
                </div>

                <div class="detail-box">
                    <div class="detail-row">
                        <span class="d-label">Vehicle Context</span>
                        <span class="d-value">${data.vehicleModel}</span>
                    </div>
                    <div class="detail-row">
                        <span class="d-label">Requested Date</span>
                        <span class="d-value">${data.preferredDate}</span>
                    </div>
                    <div class="detail-row">
                        <span class="d-label">Requested Time</span>
                        <span class="d-value">${data.preferredTime}</span>
                    </div>
                </div>

                <a href="https://detailing.udismultipro.com" class="btn">View Website</a>
            </div>

            <div class="footer">
                <div class="footer-text">
                    &copy; 2026 UDI'S MULTIPRO DETAILING<br>
                    Unmatched Precision. Absolute Perfection.
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;


