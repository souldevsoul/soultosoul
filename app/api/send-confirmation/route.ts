import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL

    if (!slackWebhookUrl) {
      console.error('SLACK_WEBHOOK_URL is not configured')
      return NextResponse.json(
        { error: 'Slack webhook not configured' },
        { status: 500 }
      )
    }

    // Send email collection notification to Slack
    const slackMessage = {
      text: `📧 New email collected: ${email}`,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `📧 *New Email Collected*\n\n*Email:* ${email}\n*Source:* Voice Agent\n*Status:* Confirmation sent`
          }
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `<!date^${Math.floor(Date.now() / 1000)}^{date_short_pretty} at {time}|${new Date().toISOString()}>`
            }
          ]
        }
      ]
    }

    await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessage),
    })

    // TODO: In production, integrate with email service (Resend, SendGrid, etc.)
    // For now, we just log and send notification to Slack
    console.log(`Confirmation email would be sent to: ${email}`)

    return NextResponse.json({
      success: true,
      message: 'Confirmation email sent'
    })
  } catch (error) {
    console.error('Error sending confirmation:', error)
    return NextResponse.json(
      { error: 'Failed to send confirmation' },
      { status: 500 }
    )
  }
}
