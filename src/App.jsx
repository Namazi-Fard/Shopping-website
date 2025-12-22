import Button from "../components/Button.jsx";
import Input from "../components/Input";

// App Component
// This is the main entrance of our application.
// این فایل نقطه شروع برنامه ماست.
function App() {
  return <>
  {/* تست دکمه‌های هوشمند */}
  <div className="p-10 flex flex-col gap-4 items-center">
        <h1 className="text-xl font-bold">تست دکمه‌های هوشمند ما:</h1>
        {/* دکمه اصلی */}
        <Button>ذخیره تغییرات</Button>

        {/* دکمه با مدل خطی */}
        <Button variant="outline">انصراف</Button>

        {/* دکمه با مدل خطرناک */}
        <Button variant="danger" onClick={() => alert("پاک شد!")}>
          حذف محصول
        </Button>
      </div>
      {/* تست فیلدهای ورودی هوشمند */}
      <div className="p-10 flex flex-col gap-6 max-w-md mx-auto">
        <Input label="نام کاربری" placeholder="مثلاً: ali_developer" />

        <Input
          label="ایمیل"
          type="email"
          placeholder="example@mail.com"
          error="فرمت ایمیل صحیح نیست"
        />
      </div>
  </>;
}

export default App;
