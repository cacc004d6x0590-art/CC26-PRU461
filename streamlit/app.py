import streamlit as st
import pandas as pd
import plotly.express as px

# =========================
# CONFIG
# =========================
st.set_page_config(
    page_title="Dashboard Rekomendasi Jurusan",
    page_icon="🎓",
    layout="wide"
)

# =========================
# LOAD DATA
# =========================
df = pd.read_csv("data/df_ready_for_model.csv")

# =========================
# HEADER
# =========================
st.title("🎓 Dashboard Rekomendasi Jurusan Siswa")

st.markdown("""
Dashboard ini digunakan untuk menganalisis data siswa berdasarkan
nilai akademik, minat karir, dan karakteristik lainnya untuk
mendukung rekomendasi kelompok jurusan.
""")

# =========================
# SIDEBAR FILTER
# =========================
st.sidebar.header("🔍 Filter Data")

jurusan = st.sidebar.selectbox(
    "Pilih Jurusan",
    ["Semua"] + sorted(df["major_group"].unique().tolist())
)

gender = st.sidebar.selectbox(
    "Pilih Gender",
    ["Semua"] + sorted(df["gender"].unique().tolist())
)

# Filter Data
df_filter = df.copy()

if jurusan != "Semua":
    df_filter = df_filter[df_filter["major_group"] == jurusan]

if gender != "Semua":
    df_filter = df_filter[df_filter["gender"] == gender]

# =========================
# METRIC
# =========================
st.header("📌 Ringkasan Dataset")

col1, col2, col3 = st.columns(3)

with col1:
    st.metric(
        "Jumlah Data",
        len(df_filter)
    )

with col2:
    st.metric(
        "Jumlah Fitur",
        len(df_filter.columns)
    )

with col3:
    st.metric(
        "Jumlah Jurusan",
        df_filter["major_group"].nunique()
    )

# =========================
# PREVIEW DATASET
# =========================
st.header("📂 Preview Dataset")

st.dataframe(df_filter.head(20))

# STATISTIK DATASET
st.header("📈 Statistik Dataset")

st.dataframe(
    df_filter.describe()
)

csv = df.to_csv(index=False)

# =========================
# DISTRIBUSI JURUSAN
# =========================
st.header("📊 Distribusi Jurusan")

fig1 = px.histogram(
    df_filter,
    x="major_group",
    color="major_group",
    title="Distribusi Kelompok Jurusan"
)

st.plotly_chart(fig1, use_container_width=True)

# =========================
# DISTRIBUSI PERFORMANCE
# =========================
st.header("📈 Distribusi Performance Category")

fig2 = px.pie(
    df_filter,
    names="performance_category",
    title="Performance Category"
)

st.plotly_chart(fig2, use_container_width=True)

# =========================
# DISTRIBUSI GENDER
# =========================
st.header("👨‍🎓 Distribusi Gender")

fig3 = px.pie(
    df_filter,
    names="gender",
    title="Gender"
)

st.plotly_chart(fig3, use_container_width=True)

# =========================
# DISTRIBUSI NILAI RATA-RATA
# =========================
st.header("📚 Distribusi Nilai Rata-rata")

fig4 = px.histogram(
    df_filter,
    x="average_score",
    nbins=20,
    title="Average Score"
)

st.plotly_chart(fig4, use_container_width=True)

# =========================
# BOXPLOT
# =========================
st.header("📦 Perbandingan Nilai per Jurusan")

fig5 = px.box(
    df_filter,
    x="major_group",
    y="average_score",
    color="major_group",
    title="Average Score berdasarkan Jurusan"
)
st.plotly_chart(fig5, use_container_width=True)

#RATA-RATA NILAI PER JURUSAN
avg_scores = df_filter.groupby("major_group")[
    ["math_score",
    "history_score",
    "physics_score",
    "chemistry_score",
    "biology_score",
    "english_score",
    "geography_score",
    "average_score",
    "sains_score",
    "sosial_score",
    "bahasa_score"]
].mean()
avg_scores_plot = avg_scores.reset_index()

st.header("📊 Rata-rata Nilai per Jurusan")
fig_avg = px.bar(
    avg_scores_plot,
    x="major_group",
    y="average_score",
    color="major_group",
    title="Rata-rata Nilai per Jurusan"
)

st.plotly_chart(fig_avg, use_container_width=True)

#geNDER PER JURUSAN
st.header(" Gender Berdasarkan Jurusan")

fig_gender = px.histogram(
    df_filter,
    x="major_group",
    color="gender",
    barmode="group",
    title="Distribusi Gender pada Setiap Jurusan"
)

st.plotly_chart(fig_gender, use_container_width=True)

# =========================
# CAREER ASPIRATION
# =========================
st.header("💼 Top Career Aspiration")

career_count = (
    df_filter["career_aspiration"]
    .value_counts()
    .head(10)
)

fig7 = px.bar(
    x=career_count.index,
    y=career_count.values,
    labels={
        "x": "Career Aspiration",
        "y": "Jumlah Siswa"
    },
    title="10 Career Aspiration Teratas"
)

st.plotly_chart(fig7, use_container_width=True)

# =========================
# HEATMAP KORELASI
# =========================
st.header("🔥 Heatmap Korelasi")

numeric_cols = [
    "math_score",
    "history_score",
    "physics_score",
    "chemistry_score",
    "biology_score",
    "english_score",
    "geography_score",
    "average_score",
    "sains_score",
    "sosial_score",
    "bahasa_score"
]

corr = df_filter[numeric_cols].corr()

fig8 = px.imshow(
    corr,
    text_auto=True,
    aspect="auto",
    title="Korelasi Antar Variabel"
)

st.plotly_chart(fig8, use_container_width=True)

#INSIGHT   
st.header("📌 Insight Utama")

st.info("""
1. Distribusi siswa menunjukkan bahwa setiap kelompok jurusan memiliki jumlah siswa yang berbeda, yang mengindikasikan adanya variasi minat dan kecenderungan akademik siswa.

2. Sebagian besar siswa berada pada kategori performa akademik menengah hingga tinggi, menunjukkan bahwa dataset didominasi oleh siswa dengan capaian akademik yang baik.

3. Analisis career aspiration menunjukkan bahwa pilihan karier siswa cenderung selaras dengan kelompok jurusan yang dipilih, sehingga faktor minat karier dapat menjadi indikator penting dalam proses rekomendasi jurusan.

4. Perbandingan nilai rata-rata antar jurusan menunjukkan adanya perbedaan karakteristik akademik pada setiap kelompok jurusan. Jurusan berbasis sains cenderung memiliki performa lebih tinggi pada mata pelajaran eksakta, sedangkan jurusan sosial dan bahasa menunjukkan keunggulan pada mata pelajaran yang relevan dengan bidangnya.

5. Hasil korelasi menunjukkan bahwa beberapa mata pelajaran memiliki hubungan yang cukup kuat, sehingga dapat digunakan sebagai faktor pendukung dalam pengembangan sistem rekomendasi jurusan siswa SMA.
""")

# =========================
# FOOTER
# =========================
st.markdown("---")

st.markdown("""
### 👨‍💻 Tim Capstone: CC26-PRU461 👨‍💻

""")