export const compressImage = (file: File, quality: number = 0.7): Promise<File> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target?.result as string;

            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                if (ctx) {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);

                    canvas.toBlob((blob) => {
                        if (blob) {
                            const compressedFile = new File([blob], file.name, {
                                type: 'image/jpeg',
                                lastModified: Date.now()
                            });
                            resolve(compressedFile);
                        } else {
                            reject(new Error('Compression failed'));
                        }
                    }, 'image/jpeg', quality);
                } else {
                    reject(new Error('Canvas context creation failed'));
                }
            };

            img.onerror = () => {
                reject(new Error('Image load error'));
            };
        };

        reader.onerror = () => {
            reject(new Error('File read error'));
        };

        reader.readAsDataURL(file);
    });
};
