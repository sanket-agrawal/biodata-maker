import { NextResponse } from 'next/server';
import clientPromise from '@/app/utils/mongodb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { biodata, templateId, templateName, isPaid, razorpayOrderId, razorpayPaymentId } = body;

    const logEntry = {
      name: biodata?.name || 'Anonymous',
      gender: biodata?.religious || '',
      religion: biodata?.religious || '',
      caste: biodata?.caste || '',
      contactPerson: biodata?.contactPerson || '',
      contactNumber: biodata?.contactNumber || '',
      email: biodata?.email || '',
      templateId,
      templateName,
      isPaid: Boolean(isPaid),
      razorpayOrderId: razorpayOrderId || null,
      razorpayPaymentId: razorpayPaymentId || null,
      createdAt: new Date(),
      userAgent: request.headers.get('user-agent') || 'Unknown',
    };

    if (clientPromise) {
      const client = await clientPromise;
      if (client) {
        const db = client.db(process.env.MONGODB_DB_NAME || 'biodata_maker');
        const result = await db.collection('biodata_logs').insertOne(logEntry);
        return NextResponse.json({ success: true, id: result.insertedId });
      }
    }

    // Fallback if MongoDB is not connected
    console.log('[Audit Log - Dev Fallback Mode]:', logEntry);
    return NextResponse.json({ success: true, mode: 'fallback_logged' });
  } catch (error) {
    console.error('Error saving biodata log to MongoDB:', error);
    return NextResponse.json({ success: false, error: 'Failed to save log' }, { status: 500 });
  }
}
