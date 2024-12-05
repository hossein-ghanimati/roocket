import { memo, useState } from "react";

const SiteDescription = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mb-10" id="description">
      <div className="container">
        <div
          x-data="{showMore:false}"
          className="relative lg:px-11 px-4 lg:pt-11 pt-4 border-gray-5 dark:border-opacity-20 border-2 rounded-lg mb-16"
        >
          <div x-transition="" className="h-550 overflow-hidden">
            <div className="mb-10">
              <svg
                className=" w-7 h-8 text-customOrange-700 mr-2 mb-4"
                viewBox="0 0 33 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 0H6V9C6 23.9117 18.0883 36 33 36V36V0Z"
                  fill="currentColor"
                  fill-opacity="0.2"
                ></path>
                <path
                  d="M27 6H-7.00355e-07V15C-7.00355e-07 29.9117 12.0883 42 27 42V42V6Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h1 className=" lg:text-33 sm:text-2xl text-lg font-bold  px-3 text-biscay-700 dark:bg-dark-890 dark:text-white bg-gray-3">
                آموزش برنامه نویسی با راکت
              </h1>
            </div>
            <div
              className={`md:text-right text-center content-area text-gray-360 dark:text-white leading-10 space-y-10 ${isOpen ? "pb-10" : "max-h-2/5vh"}`}
            >
              <p dir="rtl">
                برنامه نویسی یکی از حوزه‌های داغ در دنیای کنونی است و افراد
                بسیار زیادی تصمیم دارند تا فرایند آموزش برنامه نویسی را آغاز
                کنند. دلایل بسیار زیادی برای این موضوع وجود دارد که در ادامه به
                آن‌ها خواهیم پرداخت. اما این نکته را در ذهن داشته باشید که
                یادگیری و آموزش برنامه نویسی می‌تواند آینده شما را تضمین کرده و
                مسیر کاری مشخصی را برای شما ایجاد کند.
              </p>
              <p dir="rtl">
                در این مطلب از وبسایت راکت قصد داریم در ارتباط با ضرورت آموزش
                برنامه نویسی صحبت کنیم، تاریخچه‌ای کلی از آن را مورد ارزیابی
                قراردهیم، مسیری برای آموزش برنامه نویسی از صفر را به شما معرفی
                کنیم و همچنین از آموزش‌های رایگان و آموزش‌های مربوط به وب
                بگوییم.&nbsp;
              </p>
              <h2 dir="rtl">مزایا یادگیری و آموزش برنامه نویسی</h2>
              <p dir="rtl">
                دلایل زیادی برای یادگیری و آموزش برنامه نویسی وجود دارد. در
                اینجا چند مورد از مهم ترین آن‌ها آورده شده است:
              </p>
              <p dir="rtl">
                <strong>آینده شغلی</strong>: برنامه نویسی یکی از پرتقاضاترین
                مهارت ها در بازار کار امروز است. طبق گزارشی از مجمع جهانی
                اقتصاد، مهارت های نرم افزاری و فناوری اطلاعات در صدر لیست مهارت
                هایی قرار دارند که بیشترین تقاضا را در آینده دارند. یادگیری
                برنامه نویسی می تواند به شما کمک کند تا در دنیای کار رقابتی پیشی
                بگیرید و شغلی با درآمد بالا و رضایت بخش پیدا کنید.
              </p>
              <p dir="rtl">
                <strong>خلاقیت:</strong> برنامه نویسی یک فعالیت خلاقانه است. شما
                می توانید از آن برای ایجاد محصولات و خدمات جدید و نوآورانه
                استفاده کنید. یادگیری برنامه نویسی می تواند به شما کمک کند تا
                خلاقیت خود را بیان کنید و دنیا را به روشی جدید ببینید.
              </p>
              <p dir="rtl">
                <strong>حل مسئله:</strong> برنامه نویسی یک مهارت حل مسئله است.
                شما باید بتوانید مشکلات را به قطعات کوچکتر تقسیم کنید و راه حل
                هایی برای آنها پیدا کنید. یادگیری برنامه نویسی می تواند به شما
                کمک کند تا مهارت های حل مسئله خود را بهبود ببخشید و در زندگی و
                کار خود موفق تر باشید.
              </p>
              <p dir="rtl">
                <strong>تفکر منطقی</strong>: برنامه نویسی یک فعالیت منطقی است.
                شما باید بتوانید از منطق برای فکر کردن به مشکلات و یافتن راه حل
                های مناسب استفاده کنید. یادگیری برنامه نویسی می تواند به شما کمک
                کند تا تفکر منطقی خود را بهبود ببخشید و در زندگی و کار خود
                تصمیمات بهتری بگیرید.
              </p>
              <p dir="rtl">
                <strong>یادگیری سایر مهارت ها:</strong> برنامه نویسی می تواند به
                شما کمک کند تا سایر مهارت ها را نیز یاد بگیرید. به عنوان مثال،
                یادگیری برنامه نویسی می تواند به شما کمک کند تا مهارت های ریاضی،
                علوم کامپیوتر و زبان انگلیسی خود را بهبود ببخشید.
              </p>
              <h2 dir="rtl">تاریخچه مختصری از برنامه نویسی</h2>
              <p dir="rtl">
                تاریخچه برنامه نویسی به دهه 1940 میلادی باز می گردد. در آن زمان،
                رایانه ها بسیار بزرگ و گران بودند و فقط در دسترس دانشگاه‌ها و
                شرکت‌های بزرگ بودند. برنامه نویسی علمی بود که تنها در اختیار
                افراد بسیار محدودی بود و تنها آن‌ها می‌توانستند فرایند آموزش
                برنامه نویسی را طی کنند.
              </p>
              <h2 dir="rtl">اولین زبان برنامه نویسی سطح بالا</h2>
              <p dir="rtl">
                اولین زبان برنامه نویسی، Plankalkül&nbsp; نام داشت که توسط
                Konrad Zuse در سال های 1942 تا 1945 توسعه یافت. این زبان یک زبان
                برنامه نویسی سطح بالا بود که از مفهوم تابع استفاده می کرد.
                Plankalkül هرگز به صورت گسترده‌ای استفاده نشد، اما تأثیر زیادی
                بر توسعه زبان‌های برنامه نویسی بعدی داشت.
              </p>
              <h2 dir="rtl">ظهور زبان های برنامه نویسی سطح بالا</h2>
              <p dir="rtl">
                در دهه 1950، زبان های برنامه نویسی سطح بالا شروع به توسعه
                یافتند. زبان های برنامه نویسی سطح بالا برای انسان ها قابل خواندن
                تر هستند و استفاده از آنها آسان تر است. برخی از اولین زبان های
                برنامه نویسی سطح بالا عبارتند از:
              </p>
              <p dir="rtl">
                FORTRAN (1957) : یک زبان برنامه نویسی برای محاسبات علمی
              </p>
              <p dir="rtl">
                COBOL (1959): یک زبان برنامه نویسی برای سیستم های تجاری
              </p>
              <p dir="rtl">
                LISP (1958) : یک زبان برنامه نویسی برای هوش مصنوعی
              </p>
              <h2 dir="rtl">توسعه زبان های برنامه نویسی مدرن</h2>
              <p dir="rtl">
                در دهه های 1960 و 1970، زبان های برنامه نویسی مدرن شروع به توسعه
                کردند. این زبان ها از ویژگی های جدیدی مانند کلاس ها، شی گرایی و
                مجموعه ها استفاده می کردند. برخی از زبان های برنامه نویسی مدرن
                عبارتند از:
              </p>
              <p dir="rtl">
                C (1972) : یک زبان برنامه نویسی عمومی که برای سیستم عامل ها و
                برنامه های کاربردی استفاده می‌شود.
              </p>
              <p dir="rtl">
                Java (1995) : یک زبان برنامه نویسی شی گرا که برای توسعه وب و
                برنامه های کاربردی استفاده می‌شود.
              </p>
              <p dir="rtl">
                Python (1991) : یک زبان برنامه نویسی سطح بالا که برای یادگیری
                ماشین و هوش مصنوعی استفاده می‌شود.
              </p>
              <h2 dir="rtl">توسعه برنامه نویسی به عنوان یک شغل</h2>
              <p dir="rtl">
                در دهه های 1980 و 1990، برنامه نویسی به یک شغل محبوب تبدیل شد.
                با افزایش استفاده از کامپیو‌ترهای شخصی در همه زمینه های زندگی،
                تقاضا برای برنامه نویسان نیز افزایش یافت.
              </p>
              <p dir="rtl">
                امروزه، برنامه نویسی یکی از پرتقاضاترین مهارت ها در بازار کار
                است. برنامه نویسان می توانند در طیف گسترده ای از صنایع از جمله
                فناوری، مالی، پزشکی و دولتی کار کنند.
              </p>
              <h2 dir="rtl">آینده برنامه نویسی</h2>
              <p dir="rtl">
                با ادامه توسعه فناوری، آینده برنامه نویسی روشن است. برنامه
                نویسان نقش مهمی در ایجاد محصولات و خدمات جدید و نوآورانه ایفا
                خواهند کرد.
              </p>
              <h2 dir="rtl">آموزش برنامه نویسی از صفر&nbsp;</h2>
              <p dir="rtl">
                بسیاری از افراد این سوال را می‌پرسند که برای یادگیری برنامه
                نویسی نیاز است که از چه نقطه‌ای کار را شروع کنند. این سوالی است
                که بی نهایت جواب داشته و نمی‌توان به یک پاسخ واحد دست پیدا کرد.
                اما ما در اینجا قصد داریم شما را به صورت بهتری با این مسیر آشنا
                کنیم و همچنین یک دوره کاملا مقدماتی و البته رایگان را به شما
                معرفی کنیم.
              </p>
              <p dir="rtl">
                هر علمی در فرایند یادگیری خود نیاز به یکسری مقدمات دارد. برنامه
                نویسی نیز از این موضوع مستثنی نیست. برای یادگیری و آموزش برنامه
                نویسی ابتدا نیاز است که از که با مفاهیم اولیه برنامه نویسی آشنا
                شده و سپس مسیر یادگیری خود را در بین زبان‌ها و ابزارهای برنامه
                نویسی مختلف انتخاب کنید.&nbsp;
              </p>
              <p dir="rtl">
                <a href="https://roocket.ir/series/zero-programming-step">
                  <strong>دوره آموزشی قدم صفر برنامه نویسی</strong>
                </a>{" "}
                که به صورت رایگان در وبسایت منتشر شده دقیقا همین قصد را دارد. در
                خلال این دوره شما با تمام مفاهیم پایه‌ای و اصلی برنامه نویسی
                آشنا می‌شوید و پس از آن می‌توانید سراغ یک زبان یا تکنولوژی
                برنامه نویسی بروید.&nbsp;
              </p>
              <h2 dir="rtl">آموزش برنامه نویسی وب&nbsp;</h2>
              <p dir="rtl">
                یادگیری و آموزش برنامه نویسی سمت وب به شما این امکان را می‌دهد
                تا با استفاده از تکنولوژی‌های مختلفی بتوانید زیباترین و بهترین
                وبسایت‌ها را ایجاد کنید.&nbsp;
              </p>
              <p dir="rtl">
                بیشتر فرصت‌های شغلی مربوط به حوزه برنامه نویسی مربوط به برنامه
                نویسی وب بوده و به همین دلیل یکی از تمرکزهای اصلی ما در مجموعه
                راکت روی آموزش برنامه نویسی وب بوده است. برخی از کلیدی‌ترین
                تکنولوژی‌ها برای یادگیری برنامه نویسی وب، PHP، Javascript و
                Python است که ما هر کدام از این موارد را به صورت کامل آموزش
                می‌دهیم.&nbsp;
              </p>
              <p dir="rtl">
                برای یادگیری برنامه نویسی وب شما باید ابتدا مسیر خودتان را مشخص
                کنید. به برنامه نویسی سمت کلاینت علاقه دارید یا برنامه نویسی سمت
                سرور؟&nbsp;
              </p>
              <p dir="rtl">
                اگر به برنامه نویسی سمت کلاینت یا Front-End Development علاقه
                دارید نیاز است که{" "}
                <a href="https://roocket.ir/skills/frontend">
                  <strong>مسیر یادگیری «طراحی وبسایت»</strong>
                </a>{" "}
                را پیش بگیرید و سپس سراغ یکی از مسیرهای یادگیری زیر بروید:
              </p>
              <ul dir="rtl">
                <li>
                  <a href="https://roocket.ir/skills/javascript">
                    <strong>آموزش جاوا اسکریپت</strong>
                  </a>
                </li>
                <li>
                  <a href="https://roocket.ir/skills/react">
                    <strong>دوره آموزش </strong>
                    <strong>React</strong>
                  </a>
                </li>
                <li>
                  <a href="https://roocket.ir/skills/vue">
                    <strong>دوره آموزش </strong>
                    <strong>Vue.js</strong>
                  </a>
                </li>
              </ul>
              <p dir="rtl">
                اگر به برنامه نویسی سمت سرور علاقه دارید می‌توانید از مسیرهای
                یادگیری زیر استفاده کنید.&nbsp;
              </p>
              <ul dir="rtl">
                <li>
                  <a href="https://roocket.ir/skills/php">
                    <strong>آموزش </strong>
                    <strong>PHP</strong>
                  </a>
                </li>
                <li>
                  <a href="https://roocket.ir/skills/laravel">
                    <strong>آموزش لاراول</strong>
                  </a>
                </li>
                <li>
                  <a href="https://roocket.ir/skills/nodejs">
                    <strong>آموزش </strong>
                    <strong>Nodejs</strong>
                  </a>
                </li>
              </ul>
              <h2 dir="rtl">آموزش برنامه نویسی رایگان&nbsp;</h2>
              <p dir="rtl">
                در وبسایت راکت به عنوان یک مسئولیت اجتماعی تصمیم گرفتیم تا برخی
                از مهمترین دوره‌های آموزشی را به صورت رایگان در اختیار کاربران
                قرار دهیم. این دوره‌ها معمولا به عنوان نقطه‌های ورودی به دنیای
                آموزش برنامه نویسی در نظر گرفته شده‌اند و هدف‌شان این است که
                شانس یادگیری و آموزش برنامه نویسی را برای همگان فراهم کرده و هر
                کسی بتواند قدم‌های اولیه یادگیری برنامه نویسی را پیش برود.&nbsp;
              </p>
              <p dir="rtl">
                برخی از دوره‌های آموزشی رایگانی که در وبسایت راکت وجود دارد را
                در زیر قرار خواهیم داد:
              </p>
              <ul dir="rtl">
                <li>
                  <a href="https://roocket.ir/series/learning-php">
                    <strong>آموزش </strong>
                    <strong>PHP</strong>
                  </a>
                  : در دوره آموزش برنامه نویسی PHP سعی داریم شما را با مقدمات
                  زبان برنامه نویسی PHP به صورت رایگان آشنا کنیم.&nbsp;
                </li>
                <li>
                  <a href="https://roocket.ir/series/learn-python">
                    <strong>آموزش پایتون</strong>
                  </a>
                  : در دوره آموزش برنامه نویسی پایتون سعی داریم تا شما را با
                  مقدمات پایتون آشنا کرده و شما را برای دوره‌های پیشرفته‌تر
                  آماده کنیم.
                </li>
                <li>
                  <a href="https://roocket.ir/series/learn-git-and-github">
                    <strong>آموزش گیت و گیت هاب</strong>
                  </a>
                  : گیت و گیت‌هاب از جمله ضروری‌ترین تکنولوژی‌ها برای
                  برنامه‌نویسان و توسعه دهندگان است که در این دوره سعی داریم تا
                  به صورت رایگان آن را به شما آموزش دهیم.
                </li>
                <li>
                  <a href="https://roocket.ir/series/learn-css">
                    <strong>آموزش </strong>
                    <strong>CSS</strong>
                  </a>
                  : CSS جزو سه تکنولوژی ضروری دنیای وب بوده و یادگیری آن برای یک
                  توسعه دهنده و طراح وب ضروری است. در این دوره آموزشی به صورت
                  رایگان با CSS آشنا خواهید شد.&nbsp;
                </li>
              </ul>
              <p dir="rtl">
                برای مشاهده لیست کامل دوره‌های رایگان برنامه نویسی به{" "}
                <a href="https://roocket.ir/series?type%255B1%255D=free">
                  <strong>این لینک</strong>
                </a>{" "}
                مراجعه کنید.&nbsp;
              </p>
              <p dir="rtl">
                در وبسایت راکت تلاش بسیار زیادی برای آموزش برنامه نویسی
                داشته‌ایم و این موضوع را نیز کماکان ادامه خواهیم داد. امید است
                که با تهیه با کیفیت‌ترین آموزش‌های برنامه نویسی شما را همراهی
                کنیم و برای بازار کار شما را آماده کنیم.<strong>&nbsp;</strong>
              </p>
            </div>
          </div>
          {isOpen ? (
            ""
          ) : (
            <>
              <template x-if="showMore === false">
                <div className="bg-gradient-to-t absolute bottom-0 right-0 w-full h-56 dark:from-gray-950 dark:via-[#0000007e] from-white  to-transparent"></div>
              </template>
              <div className="bg-gradient-to-t absolute bottom-0 right-0 w-full h-56 dark:from-gray-950 dark:via-[#0000007e] from-white  to-transparent"></div>
            </>
          )}

          {isOpen ? (
            <button
              x-show="showMore"
              className="flex bg-custom-white dark:bg-gray-800 text-gray-500   dark:bg-dark-890 dark:hover:border-blue-450 dark:hover:text-blue-450 dark:text-gray-300 items-center md:text-22 text-lg font-medium px-4 py-2 border border-gray-210 rounded-lg absolute right-1/2 top-full transform  -mt-6 translate-x-1/2  hover:text-white transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              بستن مطلب
              <span className="mr-2">
                <svg
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.441643 5.89359C-0.147214 6.53437 -0.147214 7.46563 0.441643 8.10641C2.25469 10.0793 6.54403 14 12 14C17.456 14 21.7453 10.0793 23.5584 8.10641C24.1472 7.46563 24.1472 6.53437 23.5584 5.89359C21.7453 3.92067 17.456 0 12 0C6.54403 0 2.25469 3.92067 0.441643 5.89359ZM12 2C7.68339 2 4.04578 5.05757 2.20582 7C4.04578 8.94243 7.68339 12 12 12C16.3166 12 19.9542 8.94243 21.7942 7C19.9542 5.05757 16.3166 2 12 2Z"
                    fill="currentColor"
                    fill-opacity="0.4"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7ZM11 7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
          ) : (
            <button
              x-show="!showMore"
              onClick={() => setIsOpen(true)}
              className="text-gray-500 bg-custom-white dark:bg-gray-800 flex dark:bg-dark-890 dark:hover:border-blue-450 dark:hover:text-blue-450 dark:text-300 items-center md:text-22 text-lg font-medium px-4 py-2 border border-gray-210 rounded-lg absolute right-1/2 top-full transform -mt-6 translate-x-1/2  hover:text-white transition duration-200"
            >
              ادامه مطلب
              <span className="mr-2">
                <svg
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.441643 5.89359C-0.147214 6.53437 -0.147214 7.46563 0.441643 8.10641C2.25469 10.0793 6.54403 14 12 14C17.456 14 21.7453 10.0793 23.5584 8.10641C24.1472 7.46563 24.1472 6.53437 23.5584 5.89359C21.7453 3.92067 17.456 0 12 0C6.54403 0 2.25469 3.92067 0.441643 5.89359ZM12 2C7.68339 2 4.04578 5.05757 2.20582 7C4.04578 8.94243 7.68339 12 12 12C16.3166 12 19.9542 8.94243 21.7942 7C19.9542 5.05757 16.3166 2 12 2Z"
                    fill="currentColor"
                    fill-opacity="0.4"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7ZM11 7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
});

export default SiteDescription;