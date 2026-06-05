1. Clone repository
   git clone https://github.com/[username-tim]/CC26-PRU461
   cd CC26-PRU461

2. Siapkan dataset
   Upload Dataset.csv dan student-scores-6k.csv ke Google Drive
   Sesuaikan path di notebook: /content/drive/MyDrive/

3. Buka notebook
   Buka Capstone_CC26_PRU461.ipynb di Google Colab
   Jalankan: Runtime > Run all

4. Urutan eksekusi sel
   Import & Library → Data Wrangling (Gathering > Assessing > Cleaning)
   → Mapping Career → EDA & Visualization → Feature Engineering
5. Output yang dihasilkan
   main_data.csv              — dataset utama (6.000 baris, 14 kolom)
   df_ready_for_model.csv     — dataset siap modeling (6.000 baris, 23 kolom)
   scores_clean.csv           — dataset bersih Dataset 2
   heatmap_korelasi
   bar_korelasi
   grouped_bar_jurusan
   boxplot_jurusan
   distribusi_aspirasi
   minat_vs_nilai

6. Jalankan model
   Masuk folder /model, ikuti instruksi di model/README.md

7. Jalankan website
   Masuk folder /webapp
   pip install -r requirements.txt
   streamlit run app.py
