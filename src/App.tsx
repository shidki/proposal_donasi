import React, { useState } from 'react';
import {
  TrendingUp,
  Layers, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2,
  Heart,
  Zap,
  ClipboardList,
  Server,
  Code2,
  Smartphone,
  ShieldCheck,
  BarChart3
} from 'lucide-react';

const Slide = ({ children, active }: { children: React.ReactNode; active: boolean }) => (
  <div className={`transition-all duration-500 absolute inset-0 flex flex-col items-center p-4 md:p-8 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
    <div className="w-full max-w-5xl h-full flex flex-col items-center justify-start md:justify-center overflow-y-auto pb-32 pt-4 md:pb-0 scrollbar-hide text-left md:text-center">
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
            Solusi Platform Donasi Efisien & Terpercaya (Fase-1 MVP).
          </p>
          <div className="mt-8 md:mt-12 text-[10px] md:text-sm font-semibold text-slate-400 uppercase tracking-widest">
            Presented by Shidki • Aethra Visionary Technology
          </div>
        </div>
      )
    },
    // SLIDE 2: Focus
    {
      content: (
        <div className="w-full max-w-4xl px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Zap className="text-yellow-500 w-6 h-6" /> Prioritas Utama
          </h2>
          <p className="text-slate-600 mb-8 text-sm md:text-base text-left">Fokus pada fungsionalitas utama agar platform bisa langsung digunakan secepat mungkin.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-blue-600 mb-2 flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4" /> Inti Sistem
              </h3>
              <ul className="text-xs space-y-2 text-slate-500">
                <li>• Landing Page Informatif & Clean</li>
                <li>• Sistem Pembayaran QRIS (Snap)</li>
                <li>• Pencatatan Donasi Real-time</li>
              </ul>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-emerald-600 mb-2 flex items-center gap-2 text-sm">
                <Layers className="w-4 h-4" /> Transparansi
              </h3>
              <ul className="text-xs space-y-2 text-slate-500">
                <li>• Halaman Update Progres Kampanye</li>
                <li>• Fitur Upload Bukti Salur (Foto/Nota)</li>
                <li>• List Donatur Publik (Guest Mode)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 3: Fitur Detail (NEW SLIDE)
    {
      content: (
        <div className="w-full max-w-5xl px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Bedah Fitur Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="text-blue-600 w-5 h-5" />
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">Sisi Donatur</h4>
                </div>
                <ul className="text-left text-[11px] md:text-xs space-y-2 text-slate-600">
                  <li className="flex gap-2"><span>✅</span> <b>Kemudahan Bayar:</b> Scan QRIS langsung dari HP tanpa login.</li>
                  <li className="flex gap-2"><span>✅</span> <b>Kepercayaan:</b> Melihat progres dana terkumpul secara live.</li>
                  <li className="flex gap-2"><span>✅</span> <b>Doa & Dukungan:</b> Bisa tinggalkan pesan/doa di kolom donasi.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="text-emerald-600 w-5 h-5" />
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">Sisi Pengelola (Admin Om)</h4>
                </div>
                <ul className="text-left text-[11px] md:text-xs space-y-2 text-slate-600">
                  <li className="flex gap-2"><span>✅</span> <b>Dashboard Simple:</b> Pantau total saldo masuk tiap hari.</li>
                  <li className="flex gap-2"><span>✅</span> <b>Update Laporan:</b> Upload foto nota/kegiatan dalam hitungan detik.</li>
                  <li className="flex gap-2"><span>✅</span> <b>Manajemen Konten:</b> Edit deskripsi penggalangan dana kapan saja.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4 text-left">
            <BarChart3 className="text-slate-400 w-10 h-10 shrink-0" />
            <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed italic">
              "Sistem ini memastikan setiap rupiah yang masuk terdokumentasi dengan rapi, mengurangi beban kerja manual Om dalam mencatat keuangan."
            </p>
          </div>
        </div>
      )
    },
    // SLIDE 4: Budget Breakdown
    {
      content: (
        <div className="w-full max-w-4xl px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center">Rencana Investasi</h2>
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
            <div className="p-5 bg-slate-900 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ClipboardList className="text-blue-400 w-5 h-5" />
                <span className="font-bold text-sm md:text-base tracking-tight">MVP Package (Special Intro)</span>
              </div>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <span className="text-xs md:text-sm text-slate-600 font-medium">Core Web Development (React/Node)</span>
                <span className="font-bold text-slate-900 text-xs md:text-sm">Rp 2.000.000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <span className="text-xs md:text-sm text-slate-600 font-medium">Payment & QRIS Integration</span>
                <span className="font-bold text-slate-900 text-xs md:text-sm">Rp 1.500.000</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <span className="text-xs md:text-sm text-slate-600 font-medium">Simple Dashboard Admin</span>
                <span className="font-bold text-slate-900 text-xs md:text-sm">Rp 1.000.000</span>
              </div>
              
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-100 flex justify-between items-center">
                <div className="flex items-center gap-2 text-amber-700">
                    <Server className="w-4 h-4" />
                    <span className="text-[10px] md:text-xs font-bold uppercase">Biaya Server & Domain</span>
                </div>
                <span className="font-bold text-amber-700 text-[10px] md:text-xs tracking-wider">BY CLIENT</span>
              </div>

              <div className="mt-6 pt-6 border-t-2 border-dashed border-slate-200 flex justify-between items-center">
                <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total Biaya</p>
                    <p className="text-[10px] text-blue-600 font-bold italic">*Special Price for Aethra Portfolio</p>
                </div>
                <div className="text-right">
                    <p className="text-2xl md:text-4xl font-black text-blue-600 tracking-tighter">Rp 4.500.000</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-[10px] text-slate-400 italic text-center">Estimasi pengerjaan: 2-3 Minggu kerja intensif.</p>
        </div>
      )
    },
    // SLIDE 5: Value & Future
    {
      content: (
        <div className="w-full max-w-4xl text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-10">Kenapa Harga Ini?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex gap-4 items-start">
               <div className="bg-blue-100 p-3 rounded-2xl shrink-0"><Code2 className="text-blue-600 w-6 h-6" /></div>
               <div>
                 <h4 className="font-bold text-slate-800 text-sm">Professional Stack</h4>
                 <p className="text-[10px] md:text-xs text-slate-500">Meskipun harga terjangkau, teknologi tetap menggunakan standar industri (React & Tailwind).</p>
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="bg-emerald-100 p-3 rounded-2xl shrink-0"><TrendingUp className="text-emerald-600 w-6 h-6" /></div>
               <div>
                 <h4 className="font-bold text-slate-800 text-sm">Scalable Roadmap</h4>
                 <p className="text-[10px] md:text-xs text-slate-500">Sistem didesain agar bisa ditambah fitur canggih lainnya di masa depan tanpa harus bongkar ulang.</p>
               </div>
            </div>
          </div>
          <div className="mt-16 p-6 bg-slate-900 rounded-[2.5rem] text-white">
            <p className="text-base md:text-xl font-medium tracking-tight">"Membantu Om mewujudkan platform yang berkah dengan cara yang paling efektif."</p>
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
          <span className="font-bold text-lg tracking-tight text-slate-800">Aethra Donasi</span>
        </div>
        <div className="text-[10px] font-bold text-slate-400">
          Proposal {currentSlide + 1} / {slides.length}
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
          className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 text-xs font-bold hover:bg-slate-50 disabled:opacity-30"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        
        <button 
          onClick={nextSlide}
          className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 shadow-xl shadow-blue-100 active:scale-95 transition-all"
        >
          {currentSlide === slides.length - 1 ? 'Selesai' : 'Lanjut'} <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default App;