// 360-degree spin view URLs for fleet cars - mapped by car_id and title keywords
export const CAR_SPIN_360_URLS = {
  // car_id mapping (primary)
  21: "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_bmwx5", // BMW X5 M50I
  7: "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_jeep", // Jeep Wrangler (Sahara)
  22: "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_jeep", // Jeep Gladiator Sport
  9: "https://spins.impel.io/dubizzlenonturntable/mz_autobreeze_mazdacx30", // Mazda CX 30
  10: "https://spins.impel.io/dubizzlenonturntable/ms_autobrees_cx5", // Mazda CX5
  13: "https://spins.impel.io/dubizzlenonturntable/ms__autobreez__ct5", // Cadillac CT5
  14: "https://spins.impel.io/dubizzlenonturntable/mz_autobreeze_chevytrailblazer", // Chevrolet Trailblazer
  15: "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_infinity_qx50", // Infinity QX 50
  18: "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_zrv", // Honda ZR-V
  24: "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_koleos", // Renault Koleos
  19: "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_xtrail", // Nissan X Trail
  20: "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_mg", // MG HS Trophy
};

// Fallback: map by title keywords (for API data that may use different car_id)
export const CAR_SPIN_360_BY_TITLE = {
  "nissan xterra": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_xterra",
  "jetour": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_jetour",
  "renault koleos": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_koleos",
  "honda zr-v": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_zrv",
  "honda hr-v": "https://spins.impel.io/dubizzlenonturntable/mz_autobreeze_hondahrv",
  "chevrolet trailblazer": "https://spins.impel.io/dubizzlenonturntable/mz_autobreeze_chevytrailblazer",
  "mazda cx-30": "https://spins.impel.io/dubizzlenonturntable/mz_autobreeze_mazdacx30",
  "genesis (white)": "https://spins.impel.io/dubizzlenonturntable/mz_autobreeze_genesis_white",
  "genesis": "https://spins.impel.io/dubizzlenonturntable/mz_autobreeze_genesis",
  "jetour t2": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_t2",
  "lexus is350": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_lexus_is350",
  "mg": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_mg",
  "nissan x-trail": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_xtrail",
  "mazda cx-5": "https://spins.impel.io/dubizzlenonturntable/ms_autobrees_cx5",
  "infiniti qx50": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_infinity_qx50",
  "infinity qx 50": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_infinity_qx50",
  "mazda cx 30": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_mazda_cx30",
  "mazda cx5": "https://spins.impel.io/dubizzlenonturntable/ms_autobrees_cx5",
  "jeep": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_jeep",
  "bmw x5": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_bmwx5",
  "ford mustang": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_mustang",
  "cadillac ct5": "https://spins.impel.io/dubizzlenonturntable/ms__autobreez__ct5",
  "mg hs trophy": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_mg",
  "nissan x trail": "https://spins.impel.io/dubizzlenonturntable/ms_autobreez_xtrail",
};

export function getSpin360Url(carDetail) {
  if (!carDetail) return null;
  // Try car_id first
  const byId = CAR_SPIN_360_URLS[carDetail.car_id];
  if (byId) return byId;
  // Try title match (case-insensitive)
  const title = (carDetail.title || "").toLowerCase().trim();
  for (const [key, url] of Object.entries(CAR_SPIN_360_BY_TITLE)) {
    if (title.includes(key)) return url;
  }
  return null;
}
