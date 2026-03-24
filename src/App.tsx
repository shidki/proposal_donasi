import React, { useState } from 'react';
import { 
  ShieldCheck, 
  TrendingUp,
  Target, 
  Layers, 
  ChevronRight, 
  ChevronLeft, 
  AlertCircle,
  CheckCircle2,
  BarChart3,
  Heart,
  Eye
} from 'lucide-react';

// Komponen Slide dengan sistem scroll mandiri
const Slide = ({ children, active }: { children: React.ReactNode; active: boolean }) => (
  <div className={`transition-all duration-500 absolute inset-0 flex flex-col p-4 md:p-8 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
    {/* pb-40 supaya konten paling bawah gak ketutup tombol navigasi di HP */}
    <div className="w-full max-w-5xl mx-auto h-full overflow-y-auto pb-40 pt-16 md:pt-20 md:pb-24 scrollbar-hide">
      {children}
    </div>
  </div>
);

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slides = [
    // SLIDE 1: Intro
    {
      content: (
        <div className="text-center px-4 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-6">
            <Heart className="w-10 h-10 md:w-14 md:h-14 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Membangun Jembatan <span className="text-blue-600">Kebaikan</span> yang Terpercaya
          </h1>
          <p className="text-lg md:text-2xl text-slate-500 max-w-2xl leading-relaxed">
            Platform Donasi Digital dengan Fokus Transparansi Radikal & Akuntabilitas Filantropi.
          </p>
          <div className="mt-12 text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">
            Presented by Shidki • Aethra Visionary Technology
          </div>
        </div>
      )
    },
    // SLIDE 2: Analisis Masalah
    {
      content: (
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <AlertCircle className="text-red-500 w-7 h-7" /> Analisis Masalah
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Trust Crisis", desc: "Donatur ragu apakah uang mereka sampai atau dipotong biaya admin siluman.", icon: <ShieldCheck className="text-red-500" /> },
              { title: "Lack of Proof", desc: "Update laporan seringkali hanya teks tanpa bukti fisik/nota yang detail & transparan.", icon: <Eye className="text-orange-500" /> },
              { title: "Giving Friction", desc: "Proses donasi yang berbelit memaksa calon donatur membatalkan niat baiknya.", icon: <TrendingUp className="text-slate-400 md:rotate-90" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-start">
                <div className="mb-4 p-2 bg-slate-50 rounded-lg">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // SLIDE 3: Benchmarking (Vertical on Mobile)
    {
      content: (
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-8 text-center">Market Benchmarking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-xl mb-4 text-blue-600">Kitabisa</h3>
              <ul className="text-sm space-y-2 text-slate-600 font-medium">
                <li>✓ Ekosistem Terbesar</li>
                <li>✓ Pembayaran Sangat Lengkap</li>
                <li>⚠ Transparansi Standard</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-xl mb-4 text-emerald-600">Sedulur Bangun Negeri</h3>
              <ul className="text-sm space-y-2 text-slate-600 font-medium">
                <li>✓ Fokus Komunitas Lokal</li>
                <li>✓ Pendekatan Emosional</li>
                <li>⚠ Skalabilitas Teknologi</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-200">
              <h3 className="font-bold text-xl mb-4">Aethra Donasi (USP)</h3>
              <ul className="text-sm space-y-2 font-medium">
                <li>★ Radical Transparency</li>
                <li>★ Real-time Digital Audit</li>
                <li>★ Bukti Nota & Foto Wajib</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 4: USP / Transparansi (Vertical on Mobile)
    {
      content: (
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Transparansi Radikal</h2>
          <p className="text-slate-500 mb-10 text-sm md:text-lg">Solusi Utama mengembalikan kepercayaan publik</p>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <div className="flex-1 bg-white p-8 rounded-3xl border-2 border-blue-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-slate-800">Digital Audit Trail</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Buku kas terbuka yang bisa dipantau siapa saja secara real-time.</p>
            </div>
            <div className="flex-1 bg-white p-8 rounded-3xl border-2 border-emerald-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                <Layers className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-slate-800">Proof of Impact</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Arsip digital nota belanja dan dokumentasi penyerahan bantuan.</p>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 5: Roadmap (Vertical on Mobile)
    {
      content: (
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-10 text-center">Fase Pengembangan</h2>
          <div className="space-y-6">
            {[
              { phase: "Fase 1", title: "MVP Launch", items: "Donasi Dasar, Payment Gateway, & Digital Audit Trail.", color: "bg-blue-600" },
              { phase: "Fase 2", title: "Expansion", items: "Zakat, Wakaf, Mobile App (Android/iOS), & Notifikasi WA.", color: "bg-emerald-600" },
              { phase: "Fase 3", title: "Scale Up", items: "Relawan Network & AI Fraud Detection System.", color: "bg-purple-600" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className={`px-4 py-1 rounded-full text-white text-[10px] font-black uppercase ${item.color} shrink-0`}>
                  {item.phase}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // SLIDE 6: Requirements Summary
    {
      content: (
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-8 flex items-center gap-3">
             <Target className="text-blue-600 w-7 h-7" /> Final Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100">
                <div className="bg-blue-100 p-2 h-fit rounded-lg"><CheckCircle2 className="text-blue-600 w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-slate-800">Seamless Donation</p>
                  <p className="text-xs text-slate-500">Guest Mode, QRIS, & E-Wallet Integration.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100">
                <div className="bg-blue-100 p-2 h-fit rounded-lg"><CheckCircle2 className="text-blue-600 w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-slate-800">Geo-Location</p>
                  <p className="text-xs text-slate-500">Filter donasi berdasarkan lokasi terdekat.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100">
                <div className="bg-blue-100 p-2 h-fit rounded-lg"><CheckCircle2 className="text-blue-600 w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-slate-800">KYC Verification</p>
                  <p className="text-xs text-slate-500">Validasi KTP & Izin Yayasan otomatis.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100">
                <div className="bg-blue-100 p-2 h-fit rounded-lg"><CheckCircle2 className="text-blue-600 w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-slate-800">Auto Impact Update</p>
                  <p className="text-xs text-slate-500">Laporan penyaluran via WhatsApp & Email.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 bg-slate-50 font-sans text-slate-900 flex flex-col overflow-hidden">
      {/* HEADER FIXED */}
      <div className="fixed top-0 left-0 right-0 h-16 p-4 md:p-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100 z-[100]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tight text-slate-800">Aethra Donasi</span>
        </div>
        <div className="text-[10px] md:text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Slide {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 relative">
        {slides.map((slide, index) => (
          <Slide key={index} active={currentSlide === index}>
            {slide.content}
          </Slide>
        ))}
      </div>

      {/* NAVIGATION FIXED */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md border-t border-slate-100 z-[100] flex justify-between items-center">
        <button 
          onClick={prevSlide}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-slate-100 font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-20 transition-all active:scale-95"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5" /> <span className="hidden md:inline">Prev</span>
        </button>
        
        <div className="hidden md:flex gap-3">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-10 bg-blue-600' : 'w-2 bg-slate-200'}`}
            ></div>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95"
        >
          {currentSlide === slides.length - 1 ? 'Start Over' : 'Lanjut'} <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default App;