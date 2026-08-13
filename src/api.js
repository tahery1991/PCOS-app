const API_URL = "https://pcos-backend-jzi1.onrender.com";

export async function predictPCOS(patientData) {
  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patientData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "Prediction failed");
  }

  return await response.json();
}

export async function getPatients() {
  const response = await fetch(`${API_URL}/patients`);

  if (!response.ok) {
    throw new Error("Could not load patients");
  }

  return await response.json();
}

export async function getPatient(patientId) {
  const response = await fetch(`${API_URL}/patients/${patientId}`);

  if (!response.ok) {
    throw new Error("Patient not found");
  }

  return await response.json();
}

export async function checkBackend() {
  const response = await fetch(`${API_URL}/`);

  if (!response.ok) {
    throw new Error("Backend is not available");
  }

  return await response.json();
}