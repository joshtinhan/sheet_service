import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

function formatData(data: any) {

  return data;
}

export async function GET(req: Request) {
  if (req.method !== 'GET') NextResponse.json({ error: 'Methods not allowed' }, { status: 405 })

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: '工作表1!A1:D',
    });
    const rows = response.data.values;
    const formattedData = formatData(rows);
    console.log('====================================');
    console.log('123',rows);
    console.log('====================================');
    return NextResponse.json({"row":formattedData})
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

