/**
 * تابعی برای محاسبه تخفیف و فرمت‌دهی قیمت به صورت استاندارد
 */
export const formatPrice = (price, discount = 0) => {
  // ۱. تبدیل ورودی به عدد خالص (حذف جداکننده‌های احتمالی)
  const rawPrice = typeof price === 'string'
    ? parseInt(price.replace(/[' ,]/g, ""))
    : price;

  if (isNaN(rawPrice)) return "۰";

  // ۲. محاسبه قیمت نهایی با اعمال تخفیف
  const finalPrice = discount > 0
    ? rawPrice * (1 - discount / 100)
    : rawPrice;

  // ۳. رند کردن، فرمت‌دهی ۳ رقم ۳ رقم و تغییر جداکننده به بالا
  return Math.floor(finalPrice)
    .toLocaleString('en-US')
    .replace(/,/g, "’");
};