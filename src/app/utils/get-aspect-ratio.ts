export function getAspectRatio(file: any): Promise<number> {
  return new Promise((resolve, reject) => {
    if (file.type.startsWith('image/')) {
      const img = new Image();
      img.onload = function () {
        const width = img.width;
        const height = img.height;
        const aspectRatio = width / height;
        resolve(aspectRatio);
      };
      img.onerror = function () {
        reject(new Error('Failed to load image'));
      };
      img.src = URL.createObjectURL(file);
    } else if (file.type.startsWith('video/')) {
      const video = document.createElement('video');
      video.onloadedmetadata = function () {
        const width = video.videoWidth;
        const height = video.videoHeight;
        const aspectRatio = width / height;
        resolve(aspectRatio);
      };
      video.onerror = function () {
        reject(new Error('Failed to load video'));
      };
      video.src = URL.createObjectURL(file);
    } else {
      reject(new Error('Unsupported file type'));
    }
  });
}
