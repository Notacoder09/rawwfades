export async function POST(req: Request) {
  try {
    const body = await req.json();

    const webhookUrl = process.env.GHL_WEBHOOK_URL;

    // If GHL webhook is configured, forward the data
    if (webhookUrl && webhookUrl !== "https://placeholder-webhook-url.com") {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: body.firstName,
          email: body.email,
          phone: body.phone,
          message: body.message,
          source: "RAWWFADEZ Website",
        }),
      });
    }

    // Always return success so form works even without GHL
    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
