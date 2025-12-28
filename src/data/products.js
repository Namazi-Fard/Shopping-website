import mouseImg from "../assets/images/mouse.webp";
import headphoneImg from "../assets/images/headphone.webp";
import keyboardImg from "../assets/images/keyboard.webp";
import monitorImg from "../assets/images/monitor.webp";
import printerImg from "../assets/images/printer.webp";
import laptopImg from "../assets/images/laptop.webp";

export const productsList = [
  {
    id: 1,
    name: "لپ‌تاپ گیمینگ ایسوس",
    price: "75'000'000",
    image: laptopImg,
    stock: 5,
    discount: 12,
    sales: 120,
    category: "laptop",
    features: ["پردازنده Core i9 نسل 13", "گرافیک RTX 4080", "رم 32GB DDR5", "نمایشگر 165Hz QHD"],
    reviews: [
      { id: 1, user: "امیرحسین", comment: "قدرت فوق‌العاده‌ای داره، بازی‌ها رو راحت اجرا می‌کنه.", rating: 5 },
      { id: 2, user: "سارا", comment: "طراحیش خیلی عالیه ولی وزنش کمی زیاده.", rating: 4 }
    ]
  },
  {
    id: 2,
    name: "موس بی‌سیم لاجیتک",
    price: "2'100'000",
    image: mouseImg,
    stock: 0,
    discount: 0,
    sales: 450,
    category: "accessories",
    features: ["سنسور اپتیکال حرفه‌ای", "عمر باتری 24 ماهه", "اتصال بلوتوث و دانگل", "طراحی ارگونومیک"],
    reviews: [
      { id: 1, user: "نیما", comment: "خیلی خوش‌دسته، دقتش هم برای کارهای اداری عالیه.", rating: 5 }
    ]
  },
  {
    id: 3,
    name: "کیبورد مکانیکال ریزر",
    price: "5'500'000",
    image: keyboardImg,
    stock: 15,
    discount: 20,
    sales: 85,
    category: "accessories",
    features: ["سوییچ‌های زرد ریزر", "نورپردازی RGB", "بدنه آلومینیومی", "استراحتگاه مچ دست"],
    reviews: [
      { id: 1, user: "مهدی", comment: "صدای کلیدهاش فوق‌العاده‌ست. نورپردازیش هم حرف نداره.", rating: 5 },
      { id: 2, user: "رضا", comment: "کمی قیمتش بالاست ولی ارزش خرید داره.", rating: 4 }
    ]
  },
  {
    id: 4,
    name: "هدفون سونی XM5",
    price: "18'000'000",
    image: headphoneImg,
    stock: 8,
    discount: 0,
    sales: 300,
    category: "audio",
    features: ["نویز کنسلینگ هوشمند", "باتری 30 ساعته", "کیفیت صدای Hi-Res", "قابلیت اتصال چندگانه"],
    reviews: [
      { id: 1, user: "مریم", comment: "بهترین نویز کنسلینگی که تا حالا تجربه کردم!", rating: 5 }
    ]
  },
  {
    id: 5,
    name: "مانیتور ۳۲ اینچ سامسونگ",
    price: "14'500'000",
    image: monitorImg,
    stock: 3,
    discount: 5,
    sales: 40,
    category: "monitor",
    features: ["پنل VA با کیفیت 4K", "تکنولوژی HDR10", "نرخ نوسازی 60Hz", "ورودی HDMI و DisplayPort"],
    reviews: [
      { id: 1, user: "امید", comment: "رنگ‌ها خیلی زنده هستن. برای تماشای فیلم عالیه.", rating: 4 }
    ]
  },
  {
    id: 6,
    name: "پرینتر چندکاره اچ‌پی",
    price: "9'800'000",
    image: printerImg,
    stock: 10,
    discount: 0,
    sales: 15,
    category: "office",
    features: ["چاپ، اسکن و کپی", "قابلیت اتصال Wi-Fi", "سرعت چاپ بالا", "مصرف بهینه جوهر"],
    reviews: [
      { id: 1, user: "بهار", comment: "کاربریش راحته و سریع به گوشی وصل میشه.", rating: 5 }
    ]
  },
  {
    id: 7,
    name: "لپ‌تاپ مک‌بوک ایر",
    price: "62'000'000",
    image: laptopImg,
    stock: 2,
    discount: 0,
    sales: 210,
    category: "laptop",
    features: ["تراشه قدرتمند M2", "نمایشگر Liquid Retina", "بدنه فوق باریک", "عمر باتری 18 ساعته"],
    reviews: [
      { id: 1, user: "آرش", comment: "سرعتش در کارهای سنگین واقعا عجیبه. خیلی سبکه.", rating: 5 }
    ]
  },
  {
    id: 8,
    name: "موس پد گیمینگ",
    price: "450'000",
    image: mouseImg,
    stock: 50,
    discount: 30,
    sales: 600,
    category: "accessories",
    features: ["سطح پارچه‌ای میکرو بافت", "لبه‌های دوردوزی شده", "کف لاستیکی ضد لغزش", "ابعاد بزرگ"],
    reviews: [
      { id: 1, user: "یاسین", comment: "قیمت عالی و جنس خوب. خیلی بزرگ و راحته.", rating: 5 }
    ]
  },
  {
    id: 9,
    name: "اسپیکر بلوتوثی جی‌بی‌ال",
    price: "4'200'000",
    image: headphoneImg,
    stock: 0,
    discount: 0,
    sales: 180,
    category: "audio",
    features: ["صدای قدرتمند JBL Pro", "کاملا ضد آب (IP67)", "پخش 12 ساعته موسیقی", "قابلیت PartyBoost"],
    reviews: [
      { id: 1, user: "علی", comment: "صدای بیسش واقعا بلنده. برای تفریح عالیه.", rating: 5 }
    ]
  },
  {
    id: 10,
    name: "کیبورد بیسیم لاجیتک",
    price: "3'100'000",
    image: keyboardImg,
    stock: 25,
    discount: 10,
    sales: 95,
    category: "accessories",
    features: ["طراحی کم‌صدا", "کلیدهای مولتی‌مدیا", "عمر باتری طولانی", "اتصال امن 2.4GHz"],
    reviews: [
      { id: 1, user: "زهرا", comment: "برای تایپ طولانی اصلا دست رو خسته نمی‌کنه.", rating: 4 }
    ]
  },
  {
    id: 11,
    name: "مانیتور گیمینگ خمیده",
    price: "22'000'000",
    image: monitorImg,
    stock: 4,
    discount: 15,
    sales: 30,
    category: "monitor",
    features: ["انحنای 1500R", "نرخ نوسازی 240Hz", "زمان پاسخگویی 1ms", "تکنولوژی FreeSync"],
    reviews: [
      { id: 1, user: "حسین", comment: "تجربه بازی رو کاملا عوض می‌کنه. سرعتش بی‌نظیره.", rating: 5 }
    ]
  },
  {
    id: 12,
    name: "پرینتر لیزری کانن",
    price: "11'200'000",
    image: printerImg,
    stock: 6,
    discount: 0,
    sales: 22,
    category: "office",
    features: ["چاپ تک رنگ سریع", "کارتریج با ظرفیت بالا", "اشغال فضای کم", "کیفیت چاپ متون عالی"],
    reviews: [
      { id: 1, user: "پیمان", comment: "برای دفتر کار من بهترین انتخاب بود. خرابی نداره.", rating: 5 }
    ]
  },
  {
    id: 13,
    name: "هدفون گیمینگ هایپرایکس",
    price: "4'800'000",
    image: headphoneImg,
    stock: 12,
    discount: 25,
    sales: 410,
    category: "audio",
    features: ["فوم حافظه‌دار فوق نرم", "صدای محیطی 7.1", "میکروفون جداشونده", "بدنه فلزی مقاوم"],
    reviews: [
      { id: 1, user: "فرهاد", comment: "ساعت‌ها روی سر می‌مونه بدون اینکه اذیت کنه.", rating: 5 }
    ]
  },
  {
    id: 14,
    name: "لپ‌تاپ لنوو مدل Legion",
    price: "58'000'000",
    image: laptopImg,
    stock: 7,
    discount: 8,
    sales: 55,
    category: "laptop",
    features: ["پردازنده Ryzen 7", "گرافیک RTX 3060", "سیستم خنک‌کننده پیشرفته", "نورپردازی کیبورد RGB"],
    reviews: [
      { id: 1, user: "کامران", comment: "نسبت به قیمتش سخت‌افزار خیلی خوبی داره.", rating: 4 }
    ]
  },
  {
    id: 15,
    name: "موس گیمینگ ریزر",
    price: "3'400'000",
    image: mouseImg,
    stock: 18,
    discount: 0,
    sales: 140,
    category: "accessories",
    features: ["سنسور Focus+", "سوییچ‌های اپتیکال نسل ۲", "وزن بسیار سبک", "کابل منعطف Speedflex"],
    reviews: [
      { id: 1, user: "سعید", comment: "سرعت واکنش کلیدهاش عالیه. بهترین موس برای شوتینگ.", rating: 5 }
    ]
  },
  {
    id: 16,
    name: "وب‌کم لاجیتک 4K",
    price: "8'500'000",
    image: mouseImg,
    stock: 9,
    discount: 0,
    sales: 75,
    category: "accessories",
    features: ["کیفیت تصویر Ultra HD", "زوم 5 برابر دیجیتال", "میکروفون دوگانه استریو", "فناوری HDR"],
    reviews: [
      { id: 1, user: "هانیه", comment: "برای استریم و جلسات آنلاین کیفیتش بی‌رقیبه.", rating: 5 }
    ]
  },
  {
    id: 17,
    name: "هارد اکسترنال ۲ ترابایت",
    price: "4'100'000",
    image: laptopImg,
    stock: 30,
    discount: 12,
    sales: 280,
    category: "storage",
    features: ["مقاوم در برابر ضربه", "پورت USB 3.2", "سرعت انتقال بالا", "بدنه ضد شوک"],
    reviews: [
      { id: 1, user: "جواد", comment: "خیلی محکم و با خیالی راحت دیتا رو توش می‌ریزم.", rating: 4 }
    ]
  },
  {
    id: 18,
    name: "پاوربانک ۲۰ هزار",
    price: "1'900'000",
    image: laptopImg,
    stock: 0,
    discount: 0,
    sales: 500,
    category: "power",
    features: ["شارژ سریع 22.5W", "سه پورت خروجی", "نمایشگر دیجیتال", "ظرفیت واقعی بالا"],
    reviews: [
      { id: 1, user: "میلاد", comment: "گوشیم رو ۳ بار کامل شارژ می‌کنه. عالیه.", rating: 5 }
    ]
  },
  {
    id: 19,
    name: "کابل HDMI نسخه ۲.۱",
    price: "850'000",
    image: monitorImg,
    stock: 100,
    discount: 40,
    sales: 1000,
    category: "accessories",
    features: ["پشتیبانی از 8K 60Hz", "روکش کنفی مقاوم", "سرعت 48Gbps", "کانکتورهای طلا اندود"],
    reviews: [
      { id: 1, user: "سینا", comment: "تصویر رو بدون نویز منتقل می‌کنه. جنسش خیلی خوبه.", rating: 5 }
    ]
  },
  {
    id: 20,
    name: "میکروفون استودیویی",
    price: "15'000'000",
    image: headphoneImg,
    stock: 4,
    discount: 0,
    sales: 12,
    category: "audio",
    features: ["الگوی قطبی کاردیوئید", "پورت اتصال USB-C", "خروجی هدفون مانیتورینگ", "کنترل گین روی بدنه"],
    reviews: [
      { id: 1, user: "داوود", comment: "صدای گرم و شفافی ضبط می‌کنه. برای پادکست عالیه.", rating: 5 }
    ]
  }
];