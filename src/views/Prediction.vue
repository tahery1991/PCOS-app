<template>
  <div class="prediction-page">
    <!-- Header -->
    <header class="page-header">
      <div class="header-icon">🤖</div>

      <h1>ارزیابی هوشمند PCOS--- نسخه جدید</h1>

      <p>
        اطلاعات بالینی و آزمایشگاهی خود را وارد کنید تا احتمال PCOS توسط مدل یادگیری ماشین ارزیابی
        شود.
      </p>
    </header>

    <!-- Form -->
    <section class="prediction-card">
      <h2>اطلاعات فردی</h2>

      <div class="form-grid">
        <div class="form-group">
          <label>نام</label>
          <input v-model="form.first_name" type="text" placeholder="نام" />
        </div>

        <div class="form-group">
          <label>نام خانوادگی</label>
          <input v-model="form.last_name" type="text" placeholder="نام خانوادگی" />
        </div>

        <div class="form-group">
          <label>سن (سال)</label>
          <input v-model.number="form.age" type="number" min="1" />
        </div>

        <div class="form-group">
          <label>قد (سانتی‌متر)</label>
          <input v-model.number="form.height" type="number" min="1" />
        </div>

        <div class="form-group">
          <label>وزن (کیلوگرم)</label>
          <input v-model.number="form.weight" type="number" min="1" />
        </div>
      </div>

      <!-- Laboratory information -->
      <h2>شاخص‌های آزمایشگاهی</h2>

      <div class="form-grid">
        <div class="form-group">
          <label>AMH (ng/mL)</label>
          <input v-model.number="form.amh" type="number" step="0.01" />
        </div>

        <div class="form-group">
          <label>FSH (mIU/mL)</label>
          <input v-model.number="form.fsh" type="number" step="0.01" />
        </div>

        <div class="form-group">
          <label>LH (mIU/mL)</label>
          <input v-model.number="form.lh" type="number" step="0.01" />
        </div>

        <div class="form-group">
          <label>Testosterone</label>
          <input v-model.number="form.testosterone" type="number" step="0.01" />
        </div>

        <div class="form-group">
          <label>DHEA</label>
          <input v-model.number="form.dhea" type="number" step="0.01" />
        </div>

        <div class="form-group">
          <label>Prolactin (ng/mL)</label>
          <input v-model.number="form.prolactin" type="number" step="0.01" />
        </div>

        <div class="form-group">
          <label>TSH (mIU/L)</label>
          <input v-model.number="form.tsh" type="number" step="0.01" />
        </div>

        <div class="form-group">
          <label>Anti-TPO (IU/mL)</label>
          <input v-model.number="form.anti_tpo" type="number" step="0.01" />
        </div>
      </div>

      <!-- Clinical information -->
      <h2>علائم و شاخص‌های بالینی</h2>

      <div class="form-grid">
        <div class="form-group">
          <label>آکنه</label>

          <select v-model.number="form.acne">
            <option :value="0">خیر</option>
            <option :value="1">بله</option>
          </select>
        </div>

        <div class="form-group">
          <label>پرمویی (Hirsutism)</label>

          <select v-model.number="form.hirsutism">
            <option :value="0">خیر</option>
            <option :value="1">بله</option>
          </select>
        </div>

        <div class="form-group">
          <label>نامنظمی قاعدگی</label>

          <select v-model.number="form.menstrual_irregularity">
            <option :value="0">خیر</option>
            <option :value="1">بله</option>
          </select>
        </div>

        <div class="form-group">
          <label>علائم هایپرآندروژنیسم</label>

          <select v-model.number="form.hyperandrogenism">
            <option :value="0">خیر</option>
            <option :value="1">بله</option>
          </select>
        </div>

        <div class="form-group">
          <label>کیست تخمدان</label>

          <select v-model.number="form.ovarian_cyst">
            <option :value="0">خیر</option>
            <option :value="1">بله</option>
          </select>
        </div>

        <div class="form-group">
          <label>تخمدان غیرطبیعی</label>

          <select v-model.number="form.abnormal_ovaries">
            <option :value="0">خیر</option>
            <option :value="1">بله</option>
          </select>
        </div>
      </div>

      <!-- Calculated feature -->
      <div v-if="form.fsh > 0 && form.lh >= 0" class="calculated-box">
        <strong>نسبت LH/FSH:</strong>

        {{ lhFsh.toFixed(2) }}
      </div>

      <!-- Error -->
      <div v-if="errorMessage" class="error-box">⚠️ {{ errorMessage }}</div>

      <!-- Loading -->
      <div v-if="loading" class="loading-box">⏳ در حال تحلیل اطلاعات توسط مدل هوش مصنوعی...</div>

      <!-- Predict button -->
      <button class="predict-button" :disabled="loading" @click="predictPCOS">
        {{ loading ? 'در حال پردازش...' : '🤖 پیش‌بینی PCOS' }}
      </button>
    </section>

    <!-- Result -->
    <section
      v-if="result"
      class="result-card"
      :class="result.prediction.class === 1 ? 'pcos-result' : 'normal-result'"
    >
      <div class="result-icon">
        {{ result.prediction.class === 1 ? '⚠️' : '✅' }}
      </div>

      <h2>نتیجه ارزیابی</h2>

      <h3>
        {{ result.prediction.label }}
      </h3>

      <div class="probability">
        <div class="probability-item">
          <span>احتمال PCOS</span>

          <strong> {{ result.prediction.pcos_probability }}% </strong>
        </div>

        <div class="probability-item">
          <span>احتمال عدم PCOS</span>

          <strong> {{ result.prediction.no_pcos_probability }}% </strong>
        </div>
      </div>

      <div class="interpretation">
        {{ result.interpretation }}
      </div>

      <!-- Calculated model features -->
      <div v-if="result.calculated_features" class="features-box">
        <h3>شاخص‌های استفاده‌شده توسط مدل</h3>

        <p>
          <strong>LH/FSH:</strong>
          {{ result.calculated_features.LH_FSH }}
        </p>

        <p>
          <strong>Testosterone:</strong>
          {{ result.calculated_features.Testosterone }}
        </p>

        <p>
          <strong>DHEA:</strong>
          {{ result.calculated_features.DHEA }}
        </p>

        <p>
          <strong>Abnormal ovaries:</strong>
          {{ result.calculated_features.Abnormalovaries }}
        </p>
      </div>

      <!-- Clinical score -->
      <div v-if="result.clinical_score !== undefined" class="clinical-score">
        امتیاز بالینی:
        <strong>{{ result.clinical_score }}</strong>
      </div>

      <!-- Warnings -->
      <div v-if="result.warnings && result.warnings.length" class="warnings">
        <h3>هشدارها</h3>

        <ul>
          <li v-for="(warning, index) in result.warnings" :key="index">
            {{ warning }}
          </li>
        </ul>
      </div>

      <div class="medical-notice">
        ⚕️ این نتیجه یک ارزیابی کمکی مبتنی بر مدل یادگیری ماشین است و جایگزین تشخیص پزشک یا متخصص
        نیست.
      </div>
    </section>

    <!-- Navigation -->
    <div class="navigation-buttons">
      <router-link to="/" class="back-button"> ← بازگشت به صفحه اصلی </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/* =========================================
   Backend URL
========================================= */

const API_URL = 'https://pcos-backend-jzi1.onrender.com/predict'

/* =========================================
   Form
========================================= */

const form = ref({
  first_name: '',
  last_name: '',

  age: null,
  height: null,
  weight: null,

  amh: null,
  fsh: null,
  lh: null,

  testosterone: null,
  dhea: null,

  acne: 0,
  hirsutism: 0,
  menstrual_irregularity: 0,
  hyperandrogenism: 0,
  ovarian_cyst: 0,
  abnormal_ovaries: 0,

  prolactin: null,
  tsh: null,
  anti_tpo: null,
})

/* =========================================
   State
========================================= */

const loading = ref(false)

const errorMessage = ref('')

const result = ref(null)

/* =========================================
   LH / FSH
========================================= */

const lhFsh = computed(() => {
  if (!form.value.fsh || form.value.fsh <= 0) {
    return 0
  }

  return form.value.lh / form.value.fsh
})

/* =========================================
   Prediction
========================================= */

async function predictPCOS() {
  errorMessage.value = ''

  result.value = null

  /* Basic validation */

  if (!form.value.first_name || !form.value.last_name) {
    errorMessage.value = 'لطفاً نام و نام خانوادگی را وارد کنید.'

    return
  }

  if (!form.value.age || !form.value.height || !form.value.weight) {
    errorMessage.value = 'لطفاً سن، قد و وزن را وارد کنید.'

    return
  }

  if (
    form.value.fsh === null ||
    form.value.lh === null ||
    form.value.testosterone === null ||
    form.value.dhea === null
  ) {
    errorMessage.value = 'لطفاً مقادیر FSH، LH، Testosterone و DHEA را وارد کنید.'

    return
  }

  loading.value = true

  try {
    const response = await fetch(API_URL, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify({
        first_name: form.value.first_name,
        last_name: form.value.last_name,

        age: form.value.age,
        height: form.value.height,
        weight: form.value.weight,

        amh: form.value.amh,
        fsh: form.value.fsh,
        lh: form.value.lh,

        testosterone: form.value.testosterone,
        dhea: form.value.dhea,

        acne: form.value.acne,
        hirsutism: form.value.hirsutism,

        menstrual_irregularity: form.value.menstrual_irregularity,

        hyperandrogenism: form.value.hyperandrogenism,

        ovarian_cyst: form.value.ovarian_cyst,

        abnormal_ovaries: form.value.abnormal_ovaries,

        prolactin: form.value.prolactin,
        tsh: form.value.tsh,
        anti_tpo: form.value.anti_tpo,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.detail || 'خطا در دریافت نتیجه از سرور')
    }

    result.value = data
  } catch (error) {
    console.error(error)

    errorMessage.value = error.message || 'اتصال به Backend برقرار نشد.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.prediction-page {
  min-height: 100vh;

  padding: 45px 25px 70px;

  background: linear-gradient(135deg, #f5f7fb 0%, #eef2f7 100%);

  direction: rtl;

  color: #333;

  font-family: Arial, 'B Nazanin', sans-serif;
}

/* Header */

.page-header {
  text-align: center;

  margin-bottom: 40px;
}

.header-icon {
  font-size: 55px;
}

.page-header h1 {
  color: #6c3483;

  font-size: 38px;

  margin: 10px 0;
}

.page-header p {
  color: #666;

  font-size: 18px;
}

/* Card */

.prediction-card,
.result-card {
  max-width: 1100px;

  margin: 0 auto 35px;

  padding: 35px;

  background: white;

  border-radius: 25px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.prediction-card h2 {
  color: #2980b9;

  margin: 10px 0 25px;

  border-right: 4px solid #6c3483;

  padding-right: 12px;
}

/* Form */

.form-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;

  margin-bottom: 35px;
}

.form-group {
  display: flex;

  flex-direction: column;
}

.form-group label {
  margin-bottom: 8px;

  font-weight: bold;

  color: #555;
}

.form-group input,
.form-group select {
  padding: 12px;

  border: 1px solid #d5d9df;

  border-radius: 10px;

  font-size: 16px;

  box-sizing: border-box;

  background: white;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;

  border-color: #6c3483;

  box-shadow: 0 0 0 3px rgba(108, 52, 131, 0.1);
}

/* Calculated */

.calculated-box {
  margin-bottom: 25px;

  padding: 15px;

  background: #eef6ff;

  border-radius: 12px;

  color: #21618c;
}

/* Button */

.predict-button {
  width: 100%;

  padding: 16px;

  border: none;

  border-radius: 12px;

  background: linear-gradient(135deg, #6c3483, #2980b9);

  color: white;

  font-size: 18px;

  font-weight: bold;

  cursor: pointer;
}

.predict-button:hover {
  transform: translateY(-2px);

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.predict-button:disabled {
  opacity: 0.6;

  cursor: not-allowed;
}

/* Loading */

.loading-box {
  margin-bottom: 20px;

  padding: 15px;

  background: #eef6ff;

  border-radius: 10px;

  text-align: center;
}

/* Error */

.error-box {
  margin-bottom: 20px;

  padding: 15px;

  background: #fdecea;

  color: #c0392b;

  border-radius: 10px;
}

/* Result */

.result-card {
  text-align: center;
}

.result-icon {
  font-size: 55px;
}

.result-card h2 {
  color: #2980b9;
}

.result-card h3 {
  font-size: 28px;
}

.pcos-result h3 {
  color: #c0392b;
}

.normal-result h3 {
  color: #27ae60;
}

/* Probability */

.probability {
  display: flex;

  justify-content: center;

  gap: 25px;

  margin: 30px 0;
}

.probability-item {
  min-width: 220px;

  padding: 20px;

  background: #f8f9fc;

  border-radius: 15px;
}

.probability-item span {
  display: block;

  margin-bottom: 10px;

  color: #666;
}

.probability-item strong {
  font-size: 30px;

  color: #6c3483;
}

/* Interpretation */

.interpretation {
  padding: 20px;

  background: #f5f7fb;

  border-radius: 12px;

  line-height: 2;
}

/* Features */

.features-box {
  margin-top: 25px;

  padding: 20px;

  background: #f8f9fc;

  border-radius: 15px;

  text-align: right;
}

.features-box h3 {
  color: #6c3483;
}

.features-box p {
  margin: 10px 0;
}

/* Clinical score */

.clinical-score {
  margin-top: 20px;

  padding: 15px;

  background: #eef6ff;

  border-radius: 10px;
}

/* Warnings */

.warnings {
  margin-top: 25px;

  padding: 20px;

  background: #fff7e6;

  border-radius: 12px;

  text-align: right;

  color: #8a5a00;
}

.warnings li {
  margin: 8px 0;
}

/* Medical notice */

.medical-notice {
  margin-top: 25px;

  padding: 15px;

  background: #f8f9fc;

  border-radius: 10px;

  color: #666;

  line-height: 1.8;
}

/* Navigation */

.navigation-buttons {
  display: flex;

  justify-content: center;
}

.back-button {
  padding: 12px 25px;

  border-radius: 10px;

  background: #6c3483;

  color: white;

  text-decoration: none;

  font-weight: bold;
}

/* Tablet */

@media (max-width: 900px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */

@media (max-width: 600px) {
  .prediction-page {
    padding: 30px 15px 50px;
  }

  .prediction-card,
  .result-card {
    padding: 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 30px;
  }

  .probability {
    flex-direction: column;
  }

  .probability-item {
    width: 100%;

    box-sizing: border-box;
  }
}
</style>
