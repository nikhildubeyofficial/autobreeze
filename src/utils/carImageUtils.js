// Helper to get brand folder name from car title for static_images path
const TITLE_TO_BRAND = {
  "bmw": "bmw",
  "mercedes": "mercedes",
  "range rover": "range-rover",
  "land rover": "range-rover",
  "nissan": "nissan",
  "chevy": "chevrolet",
  "chevrolet": "chevrolet",
  "jeep": "jeep",
  "ford": "ford",
  "mazda": "mazda",
  "cadillac": "cadillac",
  "infiniti": "infiniti",
  "infinity": "infiniti",
  "gmc": "gmc",
  "honda": "honda",
  "renault": "renault",
  "mg": "mg",
  "genesis": "genesis",
  "lexus": "lexus",
  "jetour": "jetour",
};

export function getBrandFromTitle(title) {
  if (!title) return "";
  const lower = title.toLowerCase();
  for (const [key, brand] of Object.entries(TITLE_TO_BRAND)) {
    if (lower.includes(key)) return brand;
  }
  // Fallback: first word lowercase
  return lower.split(/\s+/)[0] || "";
}

const S3_CAR_BASE = "https://car-image-bucket-2024.s3.ap-south-1.amazonaws.com/car";

export function getCarImageUrl(carDetail) {
  if (!carDetail?.img) return "";
  const brand = getBrandFromTitle(carDetail.title);
  if (brand) {
    // Prefer static_images: /static_images/{brand}/{img}
    return `/static_images/${brand}/${carDetail.img}`;
  }
  return `${S3_CAR_BASE}/${carDetail.img}`;
}

export function getCarImageFallbackUrl(carDetail) {
  if (!carDetail?.img) return "";
  return `${S3_CAR_BASE}/${carDetail.img}`;
}
