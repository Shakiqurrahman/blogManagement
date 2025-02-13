import { v2 as cloudinary } from 'cloudinary';
import { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import { config } from '../config/config';
import catchAsync from './catchAsync';

// Cloudinary configuration
cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUD_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_API_SECRET,
});

// Extend Multer's File type
type MulterFile = Express.Multer.File;

export const uploadToCloudinary = catchAsync(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if (!req.files || !(req.files instanceof Array)) {
            res.status(400).json({ error: 'No files uploaded' });
            return;
        }

        const uploadPromises = req.files.map(async (file: MulterFile) => {
            const result = await cloudinary.uploader.upload(file.path, {
                transformation: [
                    { width: 800 },
                    { quality: 'auto' },
                    { fetch_format: 'auto' },
                ],
            });

            // Remove the temporary file after upload
            fs.unlinkSync(file.path);

            return result.secure_url;
        });

        try {
            if (req.files.length === 1) {
                const result = await uploadPromises[0];
                res.status(200).json({ imageUrl: result });
            } else {
                const imageUrls = await Promise.all(uploadPromises);
                res.status(200).json({ imageUrls });
            }
        } catch (error) {
            next(error); // Pass error to the error handler middleware
        }
    },
);
