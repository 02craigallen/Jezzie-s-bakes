import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8MB

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = String(formData.get('name') || '').trim();
    const contact = String(formData.get('contact') || '').trim();
    const date = String(formData.get('date') || '');
    const type = String(formData.get('type') || '');
    const guests = String(formData.get('guests') || '');
    const flavour = String(formData.get('flavour') || '');
    const budget = String(formData.get('budget') || '');
    const ideas = String(formData.get('ideas') || '');
    const inspiration = formData.get('inspiration');

    if (!name || !contact || !type) {
      return NextResponse.json({ error: 'Please fill in your name, contact details and cake type.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.ENQUIRY_TO_EMAIL || 'hello@jezzbakes.co.uk';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Jezz Bakes Website <onboarding@resend.dev>';

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured — enquiry not sent:', {
        name,
        contact,
        date,
        type,
        guests,
        flavour,
        budget,
        ideas,
      });
      return NextResponse.json(
        { error: 'The enquiry form is not fully set up yet. Please email hello@jezzbakes.co.uk directly.' },
        { status: 503 },
      );
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    if (inspiration instanceof File && inspiration.size > 0) {
      if (inspiration.size > MAX_FILE_BYTES) {
        return NextResponse.json({ error: 'Inspiration image must be under 8MB.' }, { status: 400 });
      }
      const bytes = Buffer.from(await inspiration.arrayBuffer());
      attachments.push({ filename: inspiration.name || 'inspiration.jpg', content: bytes });
    }

    const rows: [string, string][] = [
      ['Name', name],
      ['Email / phone', contact],
      ['Celebration date', date || 'Not specified'],
      ['Cake type', type],
      ['Number of guests', guests || 'Not specified'],
      ['Flavour preference', flavour || 'Not specified'],
      ['Budget', budget || 'Not specified'],
    ];

    const html = `
      <h2 style="font-family:Georgia,serif;">New cake enquiry from ${escapeHtml(name)}</h2>
      <table cellpadding="6" style="border-collapse:collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="color:#6E6259;font-weight:bold;vertical-align:top;">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
          )
          .join('')}
      </table>
      <p style="color:#6E6259;font-weight:bold;">Cake ideas</p>
      <p style="white-space:pre-wrap;">${escapeHtml(ideas || 'Not specified')}</p>
      ${attachments.length ? '<p><em>An inspiration image is attached.</em></p>' : ''}
    `;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: contact.includes('@') ? contact : undefined,
      subject: `Cake enquiry from ${name} (${type})`,
      html,
      attachments: attachments.length ? attachments : undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Could not send your enquiry. Please try again or email us directly.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Enquiry submission failed:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again or email us directly.' }, { status: 500 });
  }
}
