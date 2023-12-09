import { ImageSize } from 'types/images';

export const findImageOfSize = (
  images: string[],
  size: ImageSize
): string | null => {
  const image = images.find((img) => img.includes(size));
  return image || null;
};
