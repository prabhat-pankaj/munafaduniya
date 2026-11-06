const FLIPKART_PATTERN = /(?:flipkart|flixcart|fkrt\.it|fkcdn)/i;

const TEXT_FIELDS = [
  "campaignName",
  "campaignDomain",
  "trackingUrl",
  "title",
  "description",
  "terms",
  "advertiserName",
  "shopName",
  "brand",
  "imageLink",
  "productImage",
  "promotionLink",
  "productDetailUrl",
  "campaign_name",
  "campaign_domain",
  "tracking_url",
  "advertiser_name",
  "shop_name",
  "image_link",
  "promotion_link",
  "product_detail_url",
  "product_title",
];

export function mentionsFlipkart(value) {
  return FLIPKART_PATTERN.test(String(value || ""));
}

export function isFlipkartRecord(record) {
  if (!record || typeof record !== "object") {
    return false;
  }

  if (TEXT_FIELDS.some((field) => mentionsFlipkart(record[field]))) {
    return true;
  }

  return (
    Array.isArray(record.categories) &&
    record.categories.some((category) => mentionsFlipkart(category))
  );
}

export function filterFlipkart(records) {
  return Array.isArray(records)
    ? records.filter((record) => !isFlipkartRecord(record))
    : [];
}
