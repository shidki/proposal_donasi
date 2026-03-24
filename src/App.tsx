import React, { useState } from 'react';
import {
  TrendingUp,
  Target, 
  Layers, 
  ChevronRight, 
  ChevronLeft, 
  AlertCircle,
  CheckCircle2,
  Heart,
  Zap,
  DollarSign
} from 'lucide-react';

const Slide = ({ children, active }: { children: React.ReactNode; active: boolean }) => (
  <div className={`transition-all duration-500 absolute inset-0 flex flex-col items-center p-4 md:p-8 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
    <div className="w-full max-w-5xl h-full flex flex-col items-center justify-start md:justify-center overflow-y-auto pb-32 pt-4 md:pb-0">
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
        <div className="text-center px-2">
          <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4 md:mb-6">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            Aethra <span className="text-blue-600">Donasi</span>
          </h1>
          <p className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Solusi Platform Donasi Cepat, Transparan, dan Hemat Biaya Pengembangan (MVP Strategy).
          </p>
          <div className="mt-8 md:mt-12 text-[10px] md:text-sm font-semibold text-slate-400 uppercase tracking-widest">
            Presented by Shidki • Aethra Visionary Technology
          </div>
        </div>
      )
    },
    // SLIDE 2: Problem & Solution
    {
      content: (
        <div className="w-full max-w-4xl px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-500 w-6 h-6" /> Strategi MVP
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base">Membangun fitur esensial untuk memvalidasi ide tanpa biaya tinggi di awal.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Masalah Umum
              </h3>
              <ul className="text-xs md:text-sm space-y-2 text-slate-500">
                <li>• Biaya pembuatan web donasi sangat mahal.</li>
                <li>• Sistem terlalu kompleks untuk kebutuhan awal.</li>
                <li>• Kurangnya transparansi pada penyaluran dana.</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="font-bold text-blue-600 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Solusi Aethra
              </h3>
              <ul className="text-xs md:text-sm space-y-2 text-slate-700">
                <li>• Fokus pada fitur inti (Donasi & Laporan).</li>
                <li>• Integrasi Payment Gateway siap pakai (QRIS).</li>
                <li>• Transparansi manual yang kredibel & terdokumentasi.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 3: Benchmarking & Positioning
    {
      content: (
        <div className="w-full max-w-5xl px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center">Positioning Kita</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 opacity-60">
              <h3 className="font-bold text-lg mb-2 text-slate-600">Enterprise App</h3>
              <p className="text-[10px] md:text-xs text-slate-500 mb-4">Seperti Kitabisa</p>
              <ul className="text-[10px] md:text-xs space-y-1 text-slate-500">
                <li>• Biaya Dev: Rp 100jt+</li>
                <li>• Maintenance: Tinggi</li>
                <li>• Sistem: Sangat Rumit</li>
              </ul>
            </div>
            <div className="p-5 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-200 scale-105 z-10">
              <h3 className="font-bold text-lg md:text-xl mb-2 italic">Aethra MVP</h3>
              <p className="text-[10px] md:text-xs opacity-80 mb-4 font-bold uppercase tracking-wider">Pilihan Terbaik Saat Ini</p>
              <ul className="text-[10px] md:text-xs space-y-2">
                <li>★ Biaya Dev: Efisien & Hemat</li>
                <li>★ Fitur: Tepat Sasaran (Core Only)</li>
                <li>★ Launching: Sangat Cepat</li>
                <li>★ Scalable: Bisa dikembangkan nanti</li>
              </ul>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 opacity-60">
              <h3 className="font-bold text-lg mb-2 text-slate-600">Template Biasa</h3>
              <p className="text-[10px] md:text-xs text-slate-500 mb-4">Beli di internet</p>
              <ul className="text-[10px] md:text-xs space-y-1 text-slate-500">
                <li>• Sulit di-custom</li>
                <li>• Keamanan diragukan</li>
                <li>• Tidak ada support lokal</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 4: Core MVP Requirements
    {
      content: (
        <div className="w-full max-w-4xl px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
             <Target className="text-blue-600 w-6 h-6" /> Fitur Utama (MVP)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Quick Donation", d: "Donatur bisa langsung donasi via QRIS tanpa harus ribet login/daftar." },
              { t: "Basic Transparency", d: "Halaman khusus bukti penyaluran dana berupa upload foto & nota." },
              { t: "Campaign Page", d: "Halaman detail penggalangan dana dengan progress bar real-time." },
              { t: "Admin Panel", d: "Dashboard simpel untuk mengelola donasi masuk & update laporan." }
            ].map((f, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="bg-green-100 p-2 h-fit rounded-lg shrink-0"><CheckCircle2 className="text-green-600 w-4 h-4 md:w-5 md:h-5" /></div>
                <div>
                  <p className="font-bold text-sm md:text-base text-slate-800">{f.t}</p>
                  <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // SLIDE 5: Roadmap & Cost Efficiency
    {
      content: (
        <div className="w-full max-w-4xl px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Fase & Efisiensi</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-2xl border-2 border-blue-200">
              <div className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase shrink-0">Fase 1</div>
              <div>
                <h4 className="font-bold text-slate-800">Launch MVP (Portofolio Price)</h4>
                <p className="text-xs text-slate-600 mb-2">Fokus pada sistem donasi QRIS & landing page fungsional.</p>
                {/* <div className="inline-flex items-center gap-1 text-blue-600 font-bold text-xs bg-white px-2 py-1 rounded border border-blue-200">
                  <DollarSign className="w-3 h-3" /> Harga Terjangkau
                </div> */}
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 opacity-80">
              <div className="bg-slate-400 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase shrink-0">Fase 2+</div>
              <div>
                <h4 className="font-bold text-slate-800 italic">Advanced Features (Next Plan)</h4>
                <p className="text-xs text-slate-500">Otomatisasi Laporan WA, Sistem Relawan, & AI Monitoring.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 6: Why Shidki & Aethra?
    {
      content: (
        <div className="w-full max-w-4xl text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-8">Kelebihan Kami</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { t: "1 Year Exp", d: "Developer Aktif", icon: <Zap className="text-yellow-500" /> },
              { t: "Direct Support", d: "Fast Response", icon: <TrendingUp className="text-blue-500" /> },
              { t: "Lower Cost", d: "Hemat Budget", icon: <DollarSign className="text-green-500" /> },
              { t: "Scalable", d: "Siap Berkembang", icon: <Layers className="text-purple-500" /> }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 flex flex-col items-center shadow-sm">
                <div className="mb-3">{item.icon}</div>
                <h4 className="font-bold text-xs md:text-sm text-slate-800">{item.t}</h4>
                <p className="text-[10px] text-slate-400">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-slate-900 rounded-[2rem] text-white">
            <p className="text-sm md:text-lg italic font-medium">"Membangun kualitas profesional dengan budget yang rasional."</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 bg-slate-50 font-sans text-slate-900 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 md:p-6 flex justify-between items-center bg-white border-b border-slate-100 z-50">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="font-bold text-base md:text-xl tracking-tight text-slate-800">Aethra Donasi</span>
        </div>
        <div className="text-[10px] md:text-sm font-medium text-slate-400">
          Slide {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden">
        {slides.map((slide, index) => (
          <Slide key={index} active={currentSlide === index}>
            {slide.content}
          </Slide>
        ))}
      </div>

      {/* Controls */}
      <div className="p-4 md:p-8 flex justify-between items-center bg-white border-t border-slate-100 z-50">
        <button 
          onClick={prevSlide}
          className="flex items-center gap-1 md:gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl border border-slate-200 text-xs md:text-sm font-bold hover:bg-slate-50 transition-all active:scale-95 disabled:opacity-30"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>
        
        <div className="hidden md:flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'}`}
            ></div>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="flex items-center gap-1 md:gap-2 px-6 md:px-8 py-2 md:py-3 rounded-xl bg-blue-600 text-white text-xs md:text-sm font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100"
        >
          {currentSlide === slides.length - 1 ? 'Selesai' : 'Lanjut'} <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default App;