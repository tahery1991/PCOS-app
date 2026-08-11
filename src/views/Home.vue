```vue
<template>
  <div class="home">
    <!-- =========================
         عنوان اپلیکیشن
    ========================== -->

    <div class="header">
      <!-- آیکون اپ -->
      <img src="/pcos-icon.png" alt="PCOS Smart App" class="app-logo" />

      <!-- عنوان -->
      <h1>PCOS Smart App</h1>

      <!-- توضیح -->
      <p class="subtitle">
        سیستم هوشمند مدیریت و پیش‌بینی
        <strong>سندرم تخمدان پلی‌کیستیک</strong>
      </p>
    </div>

    <!-- =========================
         منوی اصلی
    ========================== -->

    <div class="menu">
      <!-- =====================
           درباره بیماری PCOS
      ====================== -->

      <router-link to="/pcos" class="card purple">
        <div class="icon">🧬</div>

        <h2>درباره بیماری</h2>

        <p>PCOS چیست؟</p>
      </router-link>

      <!-- =====================
           داشبورد
      ====================== -->

      <router-link to="/dashboard" class="card blue">
        <div class="icon">📊</div>

        <h2>داشبورد</h2>

        <p>مشاهده اطلاعات</p>
      </router-link>

      <!-- =====================
           هوش مصنوعی
      ====================== -->

      <router-link to="/prediction" class="card green">
        <div class="icon">🤖</div>

        <h2>AI Prediction</h2>

        <p>پیش‌بینی PCOS</p>
      </router-link>

      <!-- =====================
           درباره ما
      ====================== -->

      <router-link to="/about" class="card orange">
        <div class="icon">ℹ️</div>

        <h2>درباره ما</h2>

        <p>درباره برنامه</p>
      </router-link>
    </div>

    <!-- =========================
         Footer
    ========================== -->

    <footer class="footer">
      <p>PCOS Smart App</p>

      <span> سیستم هوشمند مدیریت و پیش‌بینی PCOS </span>
    </footer>
  </div>
</template>

<style scoped>
/* =========================================
   صفحه اصلی
========================================= */

.home {
  min-height: 100vh;

  width: 100%;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  padding: 35px 20px;

  box-sizing: border-box;

  direction: rtl;

  font-family: Arial, 'B Nazanin', sans-serif;

  /* پس زمینه سرمه‌ای حرفه‌ای */

  background: radial-gradient(circle at top, #183b66 0%, #0b1f3a 45%, #07172b 100%);

  color: white;
}

/* =========================================
   Header
========================================= */

.header {
  text-align: center;

  margin-bottom: 40px;
}

/* =========================================
   لوگوی اپ
========================================= */

.app-logo {
  display: block;

  width: 115px;

  height: 115px;

  object-fit: contain;

  margin: 0 auto 18px auto;

  border-radius: 28px;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* حرکت لوگو */

.app-logo:hover {
  transform: scale(1.05);

  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.45);
}

/* =========================================
   عنوان اصلی
========================================= */

h1 {
  color: #ffffff;

  font-size: 42px;

  margin: 0 0 12px 0;

  font-weight: 700;

  letter-spacing: 0.5px;
}

/* =========================================
   توضیح زیر عنوان
========================================= */

.subtitle {
  color: #dce9f5;

  font-size: 18px;

  margin: 0;

  line-height: 2;

  max-width: 700px;
}

/* تأکید روی PCOS */

.subtitle strong {
  color: #5eead4;

  font-weight: 700;
}

/* =========================================
   منوی اصلی
========================================= */

.menu {
  display: grid;

  grid-template-columns: repeat(2, 220px);

  gap: 25px;

  justify-content: center;
}

/* =========================================
   کارت‌ها
========================================= */

.card {
  width: 220px;

  height: 220px;

  border-radius: 28px;

  color: white;

  text-decoration: none;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  text-align: center;

  position: relative;

  overflow: hidden;

  box-sizing: border-box;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* =========================================
   افکت نور روی کارت
========================================= */

.card::before {
  content: '';

  position: absolute;

  width: 130px;

  height: 130px;

  border-radius: 50%;

  top: -55px;

  right: -40px;

  background: rgba(255, 255, 255, 0.12);
}

/* =========================================
   Hover کارت
========================================= */

.card:hover {
  transform: translateY(-8px) scale(1.02);

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.38);
}

/* =========================================
   آیکون کارت
========================================= */

.icon {
  font-size: 54px;

  margin-bottom: 12px;

  position: relative;

  z-index: 1;
}

/* =========================================
   عنوان کارت
========================================= */

.card h2 {
  margin: 5px 0;

  font-size: 23px;

  font-weight: 700;

  position: relative;

  z-index: 1;
}

/* =========================================
   توضیح کارت
========================================= */

.card p {
  margin: 6px 0 0;

  font-size: 15px;

  opacity: 0.92;

  position: relative;

  z-index: 1;
}

/* =========================================
   رنگ کارت‌ها
========================================= */

.purple {
  background: linear-gradient(135deg, #9b59b6, #6c3483);
}

.blue {
  background: linear-gradient(135deg, #3498db, #21618c);
}

.green {
  background: linear-gradient(135deg, #1abc9c, #117864);
}

.orange {
  background: linear-gradient(135deg, #f39c12, #d35400);
}

/* =========================================
   Footer
========================================= */

.footer {
  margin-top: 35px;

  text-align: center;

  color: #b7c9dc;

  font-size: 13px;

  line-height: 1.8;
}

.footer p {
  margin: 0 0 3px 0;

  color: #ffffff;

  font-weight: 700;

  font-size: 14px;
}

.footer span {
  opacity: 0.85;
}

/* =========================================
   تبلت و موبایل
========================================= */

@media (max-width: 600px) {
  .home {
    padding: 30px 15px;
  }

  .app-logo {
    width: 95px;

    height: 95px;

    margin-bottom: 14px;
  }

  h1 {
    font-size: 33px;
  }

  .subtitle {
    font-size: 15px;

    line-height: 1.8;

    margin: 0 auto;
  }

  .header {
    margin-bottom: 30px;
  }

  .menu {
    grid-template-columns: repeat(2, 1fr);

    gap: 15px;

    width: 100%;

    max-width: 460px;
  }

  .card {
    width: 100%;

    height: 190px;

    border-radius: 22px;
  }

  .icon {
    font-size: 43px;

    margin-bottom: 8px;
  }

  .card h2 {
    font-size: 19px;
  }

  .card p {
    font-size: 13px;
  }

  .footer {
    margin-top: 25px;
  }
}

/* =========================================
   موبایل خیلی کوچک
========================================= */

@media (max-width: 380px) {
  .app-logo {
    width: 85px;

    height: 85px;
  }

  h1 {
    font-size: 28px;
  }

  .subtitle {
    font-size: 14px;
  }

  .menu {
    grid-template-columns: 1fr;

    max-width: 270px;
  }

  .card {
    width: 270px;

    height: 165px;
  }
}
</style>
```
