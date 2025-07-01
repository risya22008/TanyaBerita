# 📰 Tanya Berita – AI-Powered News Platform

Tanya Berita adalah aplikasi berita full-stack yang memungkinkan pengguna untuk membaca berita berdasarkan kategori, mencari topik tertentu, dan berinteraksi dengan chatbot berbasis AI untuk mendapatkan ringkasan atau penjelasan dari berita yang tersedia.

Proyek ini dirancang untuk memberikan pengalaman membaca berita yang lebih interaktif dan informatif dengan menggabungkan teknologi pencarian, REST API, dan integrasi model bahasa besar (LLM).

---

## 🚀 Fitur Utama

* **🔍 Pencarian & Filter Kategori**
    * Pengguna dapat menelusuri berita berdasarkan kata kunci dan kategori tertentu (politik, ekonomi, teknologi, dll).
* **🤖 Chatbot AI**
    * Fitur chatbot interaktif yang menggunakan LLM (OpenAI API) untuk menjawab pertanyaan pengguna berdasarkan berita yang ada.
* **🌐 Integrasi API Berita**
    * Menggunakan News API dari `newsapi.ai` untuk memperoleh konten berita aktual dan terstruktur.
* **☁️ Deploy ke Google Cloud**
    * Backend dan frontend dapat di-deploy secara scalable menggunakan layanan cloud.

---

## 🧱 Tech Stack

#### 🖥 Frontend
* React
* Vite
* TailwindCSS

#### 🛠 Backend
* TypeScript
* Express.js
* RESTful API

#### 🔗 Integrasi & API
* News API – untuk konten berita
* OpenAI API (ChatGPT) – untuk fitur chatbot AI

#### ☁️ Deployment & Tools
* Google Cloud Platform (GCP)
* Postman
* VS Code
* Git & GitHub

---

## 🔧 Fitur Endpoint Backend (Contoh)

* `GET /api/articles`
    * Mendapatkan daftar artikel berdasarkan kategori, keyword, dan pagination.
    * **Query Params**:
        * `category`
        * `q` (query pencarian)
        * `page`, `limit`

* `POST /api/chatbot/ask`
    * Mengirim pertanyaan pengguna ke chatbot berbasis OpenAI dan mengembalikan jawaban berbasis konteks berita.
    * **Body**:
        ```json
        {
          "question": "Apa isi utama dari berita ini?",
          "context": "Isi lengkap artikel berita..."
        }
        ```

---

## 📸 Tampilan Aplikasi

![image](https://github.com/user-attachments/assets/0b670357-dca0-45fd-a51f-f937f3c2ce6f)


---

## 📁 Struktur Folder

tanya-berita/
├── backend/              # Express API
├── frontend/             # React App
└── README.md
