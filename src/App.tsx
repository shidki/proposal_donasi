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

const Slide = ({ children, active }: { children: React.ReactNode; active: boolean }) => (
  <div className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center p-8 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
    {children}
  </div>
);

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slides = [
    // SLIDE 1: Title
    {
      content: (
        <div className="text-center">
          <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-6">
            <Heart className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Membangun Jembatan <span className="text-blue-600">Kebaikan</span> yang Terpercaya
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Platform Donasi Digital dengan Fokus Transparansi Radikal & Akuntabilitas Filantropi.
          </p>
          <div className="mt-12 text-sm font-semibold text-slate-400 uppercase tracking-widest">
            Presented by Shidki • Aethra Visionary Technology
          </div>
        </div>
      )
    },
    // SLIDE 2: Problem
    {
      content: (
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-center gap-3">
            <AlertCircle className="text-red-500" /> Analisis Masalah
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Trust Crisis", desc: "Donatur ragu apakah uang mereka benar-benar sampai atau dipotong biaya admin siluman.", icon: <ShieldCheck className="text-red-500" /> },
              { title: "Lack of Proof", desc: "Update laporan seringkali hanya teks tanpa bukti fisik/nota yang detail & terverifikasi.", icon: <Eye className="text-orange-500" /> },
              { title: "Giving Friction", desc: "Proses donasi yang berbelit memaksa calon donatur membatalkan niat baiknya.", icon: <TrendingUp className="text-slate-500 rotate-90" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // SLIDE 3: Vision & Goals
    {
      content: (
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-10">Tujuan Strategis</h2>
          <div className="space-y-4">
            {[
              { label: "Meningkatkan Partisipasi", desc: "Mempermudah donasi mulai dari Rp 1.000 dengan sistem seamless.", color: "bg-blue-500" },
              { label: "Standardisasi Akuntabilitas", desc: "Setiap rupiah yang keluar wajib memiliki bukti digital (nota & foto).", color: "bg-green-500" },
              { label: "Pemberdayaan Lokal", desc: "Fokus pada kedekatan emosional komunitas lokal seperti Sedulur Bangun Negeri.", color: "bg-purple-500" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className={`w-3 h-12 ${item.color} rounded-full`}></div>
                <div>
                  <h4 className="font-bold text-slate-800">{item.label}</h4>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // SLIDE 4: Benchmarking
    {
      content: (
        <div className="w-full max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Market Benchmarking</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-xl mb-4 text-blue-600 italic">Kitabisa</h3>
              <ul className="text-sm space-y-2 text-slate-600">
                <li>• Ekosistem masif</li>
                <li>• Pembayaran efisien</li>
                <li>• Brand awareness kuat</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-xl mb-4 text-emerald-600 italic text-center text-xs">Sedulur Bangun Negeri</h3>
              <ul className="text-sm space-y-2 text-slate-600">
                <li>• Fokus komunitas lokal</li>
                <li>• Dampak sosial nyata</li>
                <li>• Personal approach</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-200 ring-4 ring-blue-100">
              <h3 className="font-bold text-xl mb-4">Our Application</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Hybrid Model</li>
                <li>• <b>Radical Transparency</b></li>
                <li>• Real-time Audit Trail</li>
                <li>• WhatsApp Impact Notification</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 5: Requirement - Fitur Pengguna
    {
      content: (
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 flex items-center gap-3">
             <Target className="text-blue-600" /> User Requirements
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-2 h-fit rounded-lg"><CheckCircle2 className="text-blue-600 w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-slate-800">Seamless Experience</p>
                  <p className="text-sm text-slate-500">Guest Mode & Integrasi QRIS/E-Wallet.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 p-2 h-fit rounded-lg"><CheckCircle2 className="text-blue-600 w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-slate-800">Campaign Discovery</p>
                  <p className="text-sm text-slate-500">Filter kategori & Geo-location (Terdekat).</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-2 h-fit rounded-lg"><CheckCircle2 className="text-blue-600 w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-slate-800">Trust Signals</p>
                  <p className="text-sm text-slate-500">Verified Badge (KTP & Dokumen Yayasan).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 p-2 h-fit rounded-lg"><CheckCircle2 className="text-blue-600 w-5 h-5" /></div>
                <div>
                  <p className="font-bold text-slate-800">Impact Reports</p>
                  <p className="text-sm text-slate-500">Update foto & video langsung dari lapangan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 6: Unique Selling Point
    {
      content: (
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Radical Transparency</h2>
          <p className="text-slate-500 mb-12">Fitur yang membuat kita unggul dari kompetitor</p>
          <div className="flex justify-center items-center gap-12">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4 border-2 border-blue-200">
                <BarChart3 className="w-10 h-10 text-blue-600" />
              </div>
              <p className="font-bold text-slate-800">Digital Audit Trail</p>
              <p className="text-xs text-slate-400">Buku kas terbuka publik</p>
            </div>
            <ChevronRight className="w-10 h-10 text-slate-200" />
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-4 border-2 border-emerald-200">
                <Layers className="w-10 h-10 text-emerald-600" />
              </div>
              <p className="font-bold text-slate-800">Proof Gallery</p>
              <p className="text-xs text-slate-400">Arsip nota & dokumentasi</p>
            </div>
            <ChevronRight className="w-10 h-10 text-slate-200" />
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-4 border-2 border-purple-200">
                <CheckCircle2 className="w-10 h-10 text-purple-600" />
              </div>
              <p className="font-bold text-slate-800">Auto-Report</p>
              <p className="text-xs text-slate-400">Update via WA Donatur</p>
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 7: Roadmap
    {
      content: (
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Fase Pengembangan</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2"></div>
            <div className="grid grid-cols-3 relative gap-4">
              {[
                { phase: "Fase 1", title: "MVP Launch", items: ["Donasi Dasar", "Audit Trail", "KYC User"] },
                { phase: "Fase 2", title: "Expansion", items: ["Zakat & Wakaf", "Qurban Online", "Mobile App"] },
                { phase: "Fase 3", title: "Scale", items: ["Relawan Network", "AI Fraud Detection", "Partnership"] }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full mb-6 z-10 border-4 border-white"></div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 w-full">
                    <p className="text-blue-600 font-bold text-xs mb-1">{item.phase}</p>
                    <h4 className="font-bold text-slate-800 mb-4">{item.title}</h4>
                    <ul className="text-xs space-y-2 text-slate-500">
                      {item.items.map((li, j) => <li key={j}>✓ {li}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // SLIDE 8: Conclusion
    {
      content: (
        <div className="text-center bg-blue-600 p-16 rounded-[3rem] text-white shadow-2xl shadow-blue-200">
          <h2 className="text-4xl font-bold mb-6 italic">"Kebaikan yang Terukur adalah Kebaikan yang Menenangkan."</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Kita bukan hanya membangun website, kita membangun sistem kepercayaan digital untuk Indonesia.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setCurrentSlide(0)} className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
              Ulangi Presentasi
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-6 flex justify-between items-center bg-white border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">Aethra Donasi</span>
        </div>
        <div className="text-sm font-medium text-slate-400">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center">
        {slides.map((slide, index) => (
          <Slide key={index} active={currentSlide === index}>
            {slide.content}
          </Slide>
        ))}
      </div>

      {/* Controls */}
      <div className="p-8 flex justify-between items-center bg-white border-t border-slate-100">
        <button 
          onClick={prevSlide}
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 font-bold hover:bg-slate-50 transition-all active:scale-95 disabled:opacity-30"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-5 h-5" /> Previous
        </button>
        
        {/* Progress Bar */}
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
          className="flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100"
        >
          {currentSlide === slides.length - 1 ? 'Finish' : 'Next'} <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Help Note */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-[10px] text-slate-300 pointer-events-none">
        Use buttons to navigate through the proposal
      </div>
    </div>
  );
};

export default App;