import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import formidable from 'formidable';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3 = new S3Client({
  region: 'eu-north-1',
});

async function parseForm(req: any): Promise<{ fields: any; files: any }> {
  return new Promise((resolve, reject) => {
    const form = formidable({ keepExtensions: true });
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(req: NextRequest) {
  try {
    const { fields, files } = await parseForm(req);

    const uploadFile = async (file: any, type: string) => {
      if (!file) return null;

      const data = await fs.readFile(file[0].filepath);
      const key = `courses/${fields.title}/${file[0].originalFilename}`;

      await s3.send(new PutObjectCommand({
        Bucket: 'arn:aws:s3:eu-north-1:796973489725:accesspoint/action',
        Key: key,
        Body: data,
        ContentType: file[0].mimetype,
      }));

      return key;
    };

    const videoKey = await uploadFile(files.video, 'video');
    const thumbnailKey = await uploadFile(files.thumbnail, 'thumbnail');
    const pdfKey = await uploadFile(files.pdf, 'pdf');

    // ✅ Save `fields.title`, `fields.description`, videoKey, etc. to tbl_course (DB connection goes here)

    return NextResponse.json({
      success: true,
      videoKey,
      thumbnailKey,
      pdfKey,
    });
  } catch (err: any) {
    console.error('Upload failed:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
