const API_BASE = import.meta.env.VITE_API_URL || '';

export const api = {
  // Check backend server & database status
  async checkHealth() {
    try {
      const res = await fetch(`${API_BASE}/api/health`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.warn('API health check warning:', err.message);
      return { success: false, status: 'offline', error: err.message };
    }
  },

  // Submit contact message to MongoDB
  async submitContact(formData) {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) {
      const errorMsg = data.errors ? data.errors.join(' ') : (data.message || 'Submission failed');
      throw new Error(errorMsg);
    }

    return data;
  },

  // Download links
  getPdfDownloadUrl() {
    return `${API_BASE}/api/resume/pdf`;
  },

  getDocxDownloadUrl() {
    return `${API_BASE}/api/resume/docx`;
  }
};
