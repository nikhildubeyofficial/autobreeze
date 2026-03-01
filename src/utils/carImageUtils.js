// Map title keywords to exact static_images folder names
// Order matters: more specific matches first
const TITLE_TO_STATIC_FOLDER = [
  ["bmw x5", "BMW X5"],
  ["cadillac", "Cadillac"],
  ["chevrolet trailblazer", "Chevy Trailblazer"],
  ["chevy trailblazer", "Chevy Trailblazer"],
  ["ford mustang", "Ford Mustang"],
  ["genesis g70 white", "Genesis G70 white"],
  ["genesis g70", "Genesis G70"],
  ["genesis", "Genesis G70"],
  ["honda hr-v", "Honda HR-V"],
  ["honda zr-v", "Honda HR-V"],
  ["infinity qx 50", "Infinity QX 50"],
  ["infiniti qx50", "Infinity QX 50"],
  ["jeep", "Jeep"],
  ["jetour t2", "Jetour T2"],
  ["jetour", "Jetour T2"],
  ["lexus is 350", "Lexus IS 350"],
  ["lexus is350", "Lexus IS 350"],
  ["mazda cx30", "MAZDA CX30"],
  ["mazda cx 30", "MAZDA CX30"],
  ["mazda cx-30", "Mazda CX-30"],
  ["mazda cx5", "Mazda CX-5"],
  ["mazda cx 5", "Mazda CX-5"],
  ["mazda cx-5", "Mazda CX-5"],
  ["mg hs", "MG HS"],
  ["nissan x trail", "Nissan X-TRAIL"],
  ["nissan x-trail", "Nissan X-TRAIL"],
  ["renault koleos", "Renault Koleos"],
];

// Default image per static_images folder (must exist in public/static_images)
const STATIC_FOLDER_DEFAULT_IMAGE = {
  "BMW X5": "DSC_0038.jpg",
  "Cadillac": "DSC_0001.jpg",
  "Chevy Trailblazer": "DSC_0019.jpg",
  "Ford Mustang": "DSC_0020.jpg",
  "Genesis G70": "_MG_1824.jpg",
  "Genesis G70 white": "_MG_1841.jpg",
  "Honda HR-V": "DSC_0035.jpg",
  "Infinity QX 50": "IMG_6972.jpg",
  "Jeep": "IMG_6947.jpg",
  "Jetour T2": "IMG_6008.jpg",
  "Lexus IS 350": "IMG_1682.jpg",
  "MAZDA CX30": "IMG_6923.jpg",
  "Mazda CX-5": "DSC_0026.jpg",
  "Mazda CX-30": "DSC_0002.jpg",
  "MG HS": "DSC_0040.jpg",
  "Nissan X-TRAIL": "IMG_6033.jpg",
  "Renault Koleos": "DSC_0001.jpg",
};

// Map car_id to { folder, image } - folder names match static_images structure
// Images in public/static_images/{folder}/{image}
export const CAR_STATIC_IMAGE_MAP = {
  21: { folder: "BMW X5", image: "DSC_0038.jpg" },
  13: { folder: "Cadillac", image: "DSC_0001.jpg" },
  14: { folder: "Chevy Trailblazer", image: "DSC_0019.jpg" },
  7: { folder: "Jeep", image: "IMG_6947.jpg" },
  22: { folder: "Jeep", image: "IMG_6947.jpg" },
  15: { folder: "Infinity QX 50", image: "IMG_6972.jpg" },
  18: { folder: "Honda HR-V", image: "DSC_0035.jpg" },
  10: { folder: "Mazda CX-5", image: "DSC_0026.jpg" },
  9: { folder: "MAZDA CX30", image: "IMG_6923.jpg" },
  20: { folder: "MG HS", image: "DSC_0040.jpg" },
  19: { folder: "Nissan X-TRAIL", image: "IMG_6033.jpg" },
  24: { folder: "Renault Koleos", image: "DSC_0001.jpg" },
};

function getFolderFromTitle(title) {
  if (!title) return "";
  const lower = title.toLowerCase().trim();
  for (const [key, folder] of TITLE_TO_STATIC_FOLDER) {
    if (lower.includes(key)) return folder;
  }
  return "";
}

const S3_CAR_BASE = "https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/car";

export function getCarImageUrl(carDetail) {
  if (!carDetail?.img) return "";
  // 1. Use CAR_STATIC_IMAGE_MAP if car_id matches
  const mapping = CAR_STATIC_IMAGE_MAP[carDetail.car_id];
  if (mapping) {
    const encodedFolder = encodeURIComponent(mapping.folder);
    return `/static_images/${encodedFolder}/${mapping.image}`;
  }
  // 2. Use title -> folder + default image
  const folder = getFolderFromTitle(carDetail.title);
  if (folder) {
    const image = STATIC_FOLDER_DEFAULT_IMAGE[folder];
    if (image) {
      const encodedFolder = encodeURIComponent(folder);
      return `/static_images/${encodedFolder}/${image}`;
    }
  }
  // 3. Fall back to S3
  return `${S3_CAR_BASE}/${carDetail.img}`;
}

export function getCarImageFallbackUrl(carDetail) {
  if (!carDetail?.img) return "";
  return `${S3_CAR_BASE}/${carDetail.img}`;
}

/**
 * Returns static fallback URL for detail page images (section1, section2, key_feature).
 * Used when S3 URL fails to load.
 */
export function getDetailSectionStaticFallback(carDetail) {
  if (!carDetail) return null;
  const mapping = CAR_STATIC_IMAGE_MAP[carDetail.car_id];
  const folder = mapping?.folder || getFolderFromTitle(carDetail.title);
  const image = mapping?.image || (folder && STATIC_FOLDER_DEFAULT_IMAGE[folder]);
  if (folder && image) {
    const encodedFolder = encodeURIComponent(folder);
    return `/static_images/${encodedFolder}/${image}`;
  }
  return null;
}
