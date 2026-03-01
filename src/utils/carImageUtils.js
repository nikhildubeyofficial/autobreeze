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

// Default image per static_images folder for fleet card (must exist in public/static_images)
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

// Different images per folder for detail page: [section1, section2, key_feature]
const STATIC_FOLDER_DETAIL_IMAGES = {
  "BMW X5": ["DSC_0038.jpg", "DSC_0042.jpg", "DSC_0045.jpg"],
  "Cadillac": ["DSC_0001.jpg", "DSC_0005.jpg", "DSC_0010.jpg"],
  "Chevy Trailblazer": ["DSC_0019.jpg", "DSC_0024.jpg", "DSC_0029.jpg"],
  "Ford Mustang": ["DSC_0020.jpg", "DSC_0026.jpg", "DSC_0030.jpg"],
  "Genesis G70": ["_MG_1824.jpg", "_MG_1827.jpg", "_MG_1833.jpg"],
  "Genesis G70 white": ["_MG_1841.jpg", "_MG_1846.jpg", "_MG_1850.jpg"],
  "Honda HR-V": ["DSC_0035.jpg", "DSC_0040.jpg", "DSC_0045.jpg"],
  "Infinity QX 50": ["IMG_6972.jpg", "IMG_6977.jpg", "IMG_6983.jpg"],
  "Jeep": ["IMG_6947.jpg", "IMG_6952.jpg", "IMG_6958.jpg"],
  "Jetour T2": ["IMG_6008.jpg", "IMG_6012.jpg", "IMG_6018.jpg"],
  "Lexus IS 350": ["IMG_1682.jpg", "IMG_1686.jpg", "IMG_1692.jpg"],
  "MAZDA CX30": ["IMG_6923.jpg", "IMG_6927.jpg", "IMG_6932.jpg"],
  "Mazda CX-5": ["DSC_0026.jpg", "DSC_0030.jpg", "DSC_0034.jpg"],
  "Mazda CX-30": ["DSC_0002.jpg", "DSC_0006.jpg", "DSC_0009.jpg"],
  "MG HS": ["DSC_0040.jpg", "DSC_0045.jpg", "DSC_0050.jpg"],
  "Nissan X-TRAIL": ["IMG_6033.jpg", "IMG_6038.jpg", "IMG_6042.jpg"],
  "Renault Koleos": ["DSC_0001.jpg", "DSC_0005.jpg", "DSC_0007.jpg"],
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
  if (!carDetail) return "";
  // 1. Prefer static: CAR_STATIC_IMAGE_MAP by car_id
  const mapping = CAR_STATIC_IMAGE_MAP[carDetail.car_id];
  if (mapping) {
    const encodedFolder = encodeURIComponent(mapping.folder);
    return `/static_images/${encodedFolder}/${mapping.image}`;
  }
  // 2. Prefer static: title -> folder + default image
  const folder = getFolderFromTitle(carDetail.title);
  if (folder) {
    const image = STATIC_FOLDER_DEFAULT_IMAGE[folder];
    if (image) {
      const encodedFolder = encodeURIComponent(folder);
      return `/static_images/${encodedFolder}/${image}`;
    }
  }
  // 3. Fall back to S3 only when we have img
  if (carDetail.img) return `${S3_CAR_BASE}/${carDetail.img}`;
  return "";
}

export function getCarImageFallbackUrl(carDetail) {
  if (!carDetail?.img) return "";
  return `${S3_CAR_BASE}/${carDetail.img}`;
}

const DETAIL_SECTION_INDEX = { section1: 0, section2: 1, key_feature: 2 };

/**
 * Returns static image URL for a detail section when we have one for this car.
 * section: 'section1' | 'section2' | 'key_feature' to get a different image per section.
 */
export function getDetailSectionPrimaryUrl(carDetail, section = "section1") {
  return getDetailSectionStaticFallback(carDetail, section);
}

/**
 * Returns static fallback URL for detail page images (section1, section2, key_feature).
 * Uses different images from the same brand folder per section when available.
 */
export function getDetailSectionStaticFallback(carDetail, section = "section1") {
  if (!carDetail) return null;
  const mapping = CAR_STATIC_IMAGE_MAP[carDetail.car_id];
  const folder = mapping?.folder || getFolderFromTitle(carDetail.title);
  if (!folder) return null;
  const detailImages = STATIC_FOLDER_DETAIL_IMAGES[folder];
  const index = DETAIL_SECTION_INDEX[section] ?? 0;
  const image = detailImages?.[index] || (mapping?.image || STATIC_FOLDER_DEFAULT_IMAGE[folder]);
  if (image) {
    const encodedFolder = encodeURIComponent(folder);
    return `/static_images/${encodedFolder}/${image}`;
  }
  return null;
}
