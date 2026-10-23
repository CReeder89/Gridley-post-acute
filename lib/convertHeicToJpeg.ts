export function isHeicFile(file: File): boolean {
  return /\.(heic|heif)$/i.test(file.name) || file.type === 'image/heic' || file.type === 'image/heif';
}

export async function convertHeicToJpeg(file: File): Promise<File> {
  if (!isHeicFile(file)) return file;

  const { default: heic2any } = await import('heic2any');
  const converted = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.9 });
  const jpegBlob = Array.isArray(converted) ? converted[0] : converted;
  if (!jpegBlob) throw new Error('Could not convert this HEIC photo. Please choose another image or save it as JPEG.');

  const jpegName = /\.(heic|heif)$/i.test(file.name)
    ? file.name.replace(/\.(heic|heif)$/i, '.jpg')
    : `${file.name.replace(/\.[^.]+$/, '') || 'image'}.jpg`;
  return new File([jpegBlob], jpegName, { type: 'image/jpeg', lastModified: file.lastModified });
}
