export const getAdminEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #050505; color: #ffffff; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #1a1a1a; }
        .header { background: linear-gradient(135deg, #2563eb, #0891b2); padding: 40px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 4px; font-weight: 900; }
        .content { padding: 40px; }
        .field { margin-bottom: 25px; border-bottom: 1px solid #1a1a1a; padding-bottom: 15px; }
        .label { color: #3b82f6; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; margin-bottom: 5px; }
        .value { color: #ffffff; font-size: 16px; font-weight: 500; }
        .footer { padding: 20px; text-align: center; color: #404040; font-size: 12px; border-top: 1px solid #1a1a1a; }
        .accent { color: #0891b2; font-weight: bold; }
    </style>
</head>
<body>
    <div className="container">
        <div className="header">
            <h1>New Lead: <span style="color: white;">UDI_RESERVE</span></h1>
        </div>
        <div className="content">
            <div className="field">
                <div className="label">Protocol.Package</div>
                <div className="value accent">${data.packageName}</div>
            </div>
            <div className="field">
                <div className="label">Customer.Name</div>
                <div className="value">${data.name}</div>
            </div>
            <div className="field">
                <div className="label">Communication.Email</div>
                <div className="value">${data.email}</div>
            </div>
            <div className="field">
                <div className="label">Communication.Phone</div>
                <div className="value">${data.phone}</div>
            </div>
            <div className="field">
                <div className="label">Target.Schedule</div>
                <div className="value">${data.preferredDate} @ ${data.preferredTime}</div>
            </div>
            <div className="field">
                <div className="label">Target.Vehicle</div>
                <div className="value">${data.vehicleModel}</div>
            </div>
            <div className="field">
                <div className="label">Intelligence.Notes</div>
                <div className="value">${data.notes || "No additional intel provided."}</div>
            </div>
        </div>
        <div className="footer">
            UDI'S MULTIPRO | SYSTEM.NOTIFICATION_v2.5
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
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #050505; color: #ffffff; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #1a1a1a; }
        .hero { padding: 60px 40px; text-align: center; border-bottom: 1px solid #1a1a1a; }
        .hero h1 { color: #ffffff; font-size: 32px; font-weight: 900; margin-bottom: 10px; text-transform: uppercase; letter-spacing: -1px; }
        .hero p { color: #3b82f6; font-size: 14px; text-transform: uppercase; letter-spacing: 3px; }
        .details { padding: 40px; line-height: 1.6; }
        .details p { color: #a3a3a3; margin-bottom: 20px; }
        .p-box { background-color: #0f172a; border: 1px solid #1e293b; padding: 25px; border-radius: 15px; margin: 30px 0; }
        .p-label { color: #3b82f6; font-size: 11px; text-transform: uppercase; font-weight: bold; margin-bottom: 5px; }
        .p-value { color: #ffffff; font-size: 18px; font-weight: bold; }
        .cta { display: inline-block; padding: 15px 30px; background: linear-gradient(90deg, #2563eb, #0891b2); color: white; text-decoration: none; border-radius: 50px; font-weight: bold; text-transform: uppercase; font-size: 14px; letter-spacing: 2px; }
        .footer { padding: 30px; text-align: center; color: #404040; font-size: 11px; }
    </style>
</head>
<body>
    <div className="container">
        <div className="hero">
            <h1>Thank You, ${data.name.split(' ')[0]}</h1>
            <p>Booking Protocol Initiated</p>
        </div>
        <div className="details">
            <p>We've successfully received your request for your <strong>${data.vehicleModel}</strong>. Our elite specialists are currently reviewing the parameters for your selected package.</p>
            <div className="p-box">
                <div className="p-label">Selected Tier</div>
                <div className="p-value">${data.packageName}</div>
            </div>
            <div className="p-box">
                <div className="p-label">Scheduled Window</div>
                <div className="p-value">${data.preferredDate} @ ${data.preferredTime}</div>
            </div>
            <p>Our team will contact you shortly via <strong>${data.phone}</strong> to confirm the exact scheduling window and finalize the details of your restoration journey.</p>
            <div style="text-align: center; margin-top: 40px;">
                <a href="https://detailing.udismultipro.com" className="cta">Visit Our HQ</a>
            </div>
        </div>
        <div className="footer">
            &copy; 2026 UDI'S MULTIPRO DETAILING. ALL RIGHTS RESERVED.<br>
            UNMATCHED PRECISION. ABSOLUTE PERFECTION.
        </div>
    </div>
</body>
</html>
`;
