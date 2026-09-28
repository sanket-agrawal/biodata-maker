import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { verified: false, error: 'Missing payment parameters' },
        { status: 400 }
      );
    }

    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_secret) {
      // Dev/test mode fallback — accept mock payments
      console.warn('[verify-payment] RAZORPAY_KEY_SECRET not set. Accepting in dev/mock mode.');
      return NextResponse.json({ verified: true, mode: 'mock' });
    }

    // Generate expected signature using HMAC SHA256
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expected_signature = crypto
      .createHmac('sha256', key_secret)
      .update(body)
      .digest('hex');

    const isValid = expected_signature === razorpay_signature;

    if (isValid) {
      return NextResponse.json({ verified: true });
    } else {
      console.error('[verify-payment] Signature mismatch!', {
        expected: expected_signature,
        received: razorpay_signature,
      });
      return NextResponse.json(
        { verified: false, error: 'Payment verification failed. Signature mismatch.' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('[verify-payment] Error:', error);
    return NextResponse.json(
      { verified: false, error: 'Internal server error during verification' },
      { status: 500 }
    );
  }
}