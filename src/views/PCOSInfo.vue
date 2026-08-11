<template>
  <div class="pcos-page">
    <!-- =========================
         Header
    ========================== -->

    <header class="page-header">
      <div class="header-icon">🧬</div>

      <h1>درباره بیماری PCOS</h1>

      <p>
        سندرم تخمدان پلی‌کیستیک
        <span>(Polycystic Ovary Syndrome)</span>
      </p>
    </header>

    <!-- =========================
         معرفی PCOS
    ========================== -->

    <section class="intro">
      <!-- تصویر -->

      <div class="image-container">
        <img :src="pcosImage" alt="تصویر مرتبط با سندرم تخمدان پلی‌کیستیک" class="pcos-image" />
      </div>

      <!-- متن -->

      <div class="intro-text">
        <h2>PCOS چیست؟</h2>

        <p>
          سندرم تخمدان پلی‌کیستیک یا PCOS یکی از شایع‌ترین اختلالات هورمونی در زنان در سنین باروری
          است.
        </p>

        <p>
          این اختلال می‌تواند با نامنظمی قاعدگی، اختلال در تخمک‌گذاری، افزایش هورمون‌های آندروژنی و
          برخی تغییرات متابولیکی همراه باشد.
        </p>

        <p>
          علائم و شدت PCOS در افراد مختلف متفاوت است و تشخیص آن باید بر اساس ارزیابی پزشکی، علائم
          بالینی و آزمایش‌های مرتبط انجام شود.
        </p>
      </div>
    </section>

    <!-- =========================
         علائم شایع
    ========================== -->

    <section class="information">
      <h2>علائم شایع PCOS</h2>

      <div class="info-grid">
        <!-- اختلال قاعدگی -->

        <div class="info-card">
          <div class="card-icon">🩸</div>

          <h3>اختلال قاعدگی</h3>

          <p>نامنظمی یا فاصله زیاد بین دوره‌های قاعدگی و اختلال در تخمک‌گذاری.</p>
        </div>

        <!-- اختلالات هورمونی -->

        <div class="info-card">
          <div class="card-icon">🧬</div>

          <h3>اختلالات هورمونی</h3>

          <p>افزایش هورمون‌های آندروژنی و بروز برخی علائم مرتبط با آن.</p>
        </div>

        <!-- علائم پوستی -->

        <div class="info-card">
          <div class="card-icon">👩</div>

          <h3>علائم پوستی</h3>

          <p>آکنه، افزایش موهای زائد و در برخی افراد ریزش مو.</p>
        </div>

        <!-- تغییرات وزن -->

        <div class="info-card">
          <div class="card-icon">⚖️</div>

          <h3>تغییرات وزن</h3>

          <p>افزایش وزن یا دشواری در کاهش وزن ممکن است در برخی افراد مشاهده شود.</p>
        </div>
      </div>
    </section>

    <!-- =========================
         عوامل مرتبط
    ========================== -->

    <section class="information">
      <h2>عوامل مرتبط با PCOS</h2>

      <p>
        PCOS یک اختلال چندعاملی است و عوامل ژنتیکی، هورمونی، متابولیکی و سبک زندگی می‌توانند در
        ایجاد یا تشدید ویژگی‌های آن نقش داشته باشند.
      </p>
    </section>

    <!-- =========================
         تشخیص
    ========================== -->

    <section class="information diagnosis-section">
      <h2>تشخیص PCOS</h2>

      <p>
        تشخیص سندرم تخمدان پلی‌کیستیک معمولاً بر اساس بررسی سابقه پزشکی، علائم بالینی، وضعیت قاعدگی،
        ارزیابی هورمونی و در صورت نیاز سونوگرافی انجام می‌شود.
      </p>

      <div class="notice">
        ⚠️ این اپلیکیشن ابزار کمکی برای ارزیابی و پیش‌بینی است و جایگزین تشخیص پزشک نیست.
      </div>
    </section>

    <!-- =========================
         بخش هوش مصنوعی
    ========================== -->

    <section class="ai-section">
      <div class="ai-icon">🤖</div>

      <h2>ارزیابی هوشمند PCOS</h2>

      <p>
        در این اپلیکیشن می‌توان از اطلاعات بالینی و شاخص‌های زیستی برای استفاده از مدل‌های یادگیری
        ماشین و پیش‌بینی خطر PCOS استفاده کرد.
      </p>

      <router-link to="/prediction" class="ai-button"> 🤖 ورود به بخش AI Prediction </router-link>
    </section>

    <!-- =========================
         دکمه‌های پایین صفحه
    ========================== -->

    <div class="navigation-buttons">
      <router-link to="/" class="back-button"> ← بازگشت به صفحه اصلی </router-link>

      <router-link to="/prediction" class="prediction-button"> شروع ارزیابی → </router-link>
    </div>
  </div>
</template>

<script setup>
import pcosImage from '../assets/images/pcos.jpg'
</script>

<style scoped>
/* =========================================
   صفحه اصلی
========================================= */

.pcos-page {
  min-height: 100vh;

  width: 100%;

  box-sizing: border-box;

  padding: 45px 25px 70px;

  /*
   * عمداً background تعریف نشده است.
   * پس‌زمینه از main.css گرفته می‌شود.
   */

  direction: rtl;

  color: #ffffff;

  font-family: Arial, 'B Nazanin', sans-serif;
}

/* =========================================
   Header
========================================= */

.page-header {
  text-align: center;

  margin-bottom: 45px;
}

.header-icon {
  font-size: 55px;

  margin-bottom: 10px;
}

.page-header h1 {
  color: #ffffff;

  font-size: 40px;

  margin: 0 0 12px 0;

  font-weight: 700;
}

.page-header p {
  color: #dce9f5;

  font-size: 19px;

  margin: 0;

  line-height: 1.8;
}

.page-header p span {
  direction: ltr;
}

/* =========================================
   معرفی
========================================= */

.intro {
  max-width: 1100px;

  margin: 0 auto 35px;

  padding: 35px;

  box-sizing: border-box;

  background: #ffffff;

  color: #333333;

  border-radius: 25px;

  display: flex;

  align-items: center;

  gap: 45px;

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}

/* =========================================
   تصویر
========================================= */

.image-container {
  flex: 1;

  display: flex;

  justify-content: center;

  align-items: center;
}

.pcos-image {
  display: block;

  width: 100%;

  max-width: 450px;

  height: auto;

  object-fit: contain;

  border-radius: 20px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
}

/* =========================================
   متن معرفی
========================================= */

.intro-text {
  flex: 1;
}

.intro-text h2 {
  color: #6c3483;

  font-size: 30px;

  margin: 0 0 20px;
}

.intro-text p {
  color: #555555;

  font-size: 17px;

  line-height: 2;

  margin: 0 0 15px;
}

/* =========================================
   بخش اطلاعات
========================================= */

.information {
  max-width: 1100px;

  margin: 0 auto 35px;

  padding: 35px;

  box-sizing: border-box;

  background: #ffffff;

  color: #333333;

  border-radius: 25px;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.information h2 {
  color: #2980b9;

  font-size: 28px;

  margin: 0 0 25px;
}

.information > p {
  color: #555555;

  font-size: 17px;

  line-height: 2;

  margin: 0;
}

/* =========================================
   کارت‌های علائم
========================================= */

.info-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 20px;
}

.info-card {
  background: linear-gradient(145deg, #f8f9fc, #eef3f8);

  padding: 25px;

  border-radius: 18px;

  text-align: center;

  border: 1px solid #e5eaf0;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-6px);

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.card-icon {
  font-size: 42px;

  margin-bottom: 10px;
}

.info-card h3 {
  color: #6c3483;

  font-size: 20px;

  margin: 10px 0;
}

.info-card p {
  color: #666666;

  line-height: 1.8;

  font-size: 15px;

  margin-bottom: 0;
}

/* =========================================
   بخش تشخیص
========================================= */

.diagnosis-section {
  border-right: 5px solid #8e44ad;
}

.notice {
  margin-top: 25px;

  padding: 15px 20px;

  background: #fff7e6;

  border-radius: 12px;

  color: #8a5a00;

  line-height: 1.8;
}

/* =========================================
   بخش AI
========================================= */

.ai-section {
  max-width: 900px;

  margin: 45px auto;

  padding: 45px 35px;

  text-align: center;

  border-radius: 25px;

  color: white;

  background: linear-gradient(135deg, #6c3483, #2980b9);

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}

.ai-icon {
  font-size: 55px;

  margin-bottom: 10px;
}

.ai-section h2 {
  font-size: 30px;

  margin: 0 0 15px;
}

.ai-section p {
  line-height: 2;

  font-size: 17px;

  max-width: 700px;

  margin: 0 auto;
}

/* =========================================
   دکمه AI
========================================= */

.ai-button {
  display: inline-block;

  margin-top: 25px;

  padding: 14px 28px;

  background: white;

  color: #6c3483;

  text-decoration: none;

  border-radius: 12px;

  font-weight: bold;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.ai-button:hover {
  transform: translateY(-3px);

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* =========================================
   دکمه‌های پایین
========================================= */

.navigation-buttons {
  display: flex;

  justify-content: center;

  align-items: center;

  gap: 15px;

  flex-wrap: wrap;

  margin-top: 30px;
}

.back-button,
.prediction-button {
  display: inline-block;

  padding: 12px 25px;

  border-radius: 10px;

  text-decoration: none;

  font-weight: bold;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.back-button {
  background: #6c3483;

  color: white;
}

.back-button:hover {
  background: #512e5f;

  transform: translateY(-2px);
}

.prediction-button {
  background: #2980b9;

  color: white;
}

.prediction-button:hover {
  background: #21618c;

  transform: translateY(-2px);
}

/* =========================================
   تبلت
========================================= */

@media (max-width: 900px) {
  .intro {
    flex-direction: column;

    text-align: center;
  }

  .intro-text {
    width: 100%;
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* =========================================
   موبایل
========================================= */

@media (max-width: 600px) {
  .pcos-page {
    padding: 30px 15px 50px;
  }

  .page-header h1 {
    font-size: 30px;
  }

  .page-header p {
    font-size: 16px;
  }

  .intro {
    padding: 20px;

    gap: 25px;
  }

  .pcos-image {
    max-width: 100%;
  }

  .intro-text h2 {
    font-size: 26px;
  }

  .intro-text p {
    font-size: 16px;
  }

  .information {
    padding: 25px 20px;
  }

  .information h2 {
    font-size: 24px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .ai-section {
    padding: 35px 20px;
  }

  .ai-section h2 {
    font-size: 25px;
  }

  .navigation-buttons {
    flex-direction: column;
  }

  .back-button,
  .prediction-button {
    width: 80%;

    text-align: center;
  }
}
</style>
