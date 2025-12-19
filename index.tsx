import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";
import { 
  Network, 
  Cpu, 
  Zap, 
  Database, 
  Terminal, 
  RefreshCw, 
  Wind, 
  Waves, 
  Mountain, 
  Orbit, 
  Crosshair, 
  Lock, 
  HeartPulse, 
  ShieldCheck, 
  BrainCircuit, 
  Binary, 
  GitBranch, 
  Combine, 
  TrendingUp,
  Activity,
  Mic,
  Eye,
  Scan,
  Radio,
  Fingerprint
} from 'lucide-react';

/**
 * THE ABSOLUTE COTTON CANDY DATA NEXUS v8.0
 * มหาเอกภาพเร้าเตอร์ข้อมูลสายไหมสมบูรณ์แบบ
 * 
 * ระบบนี้รันบนสถาปัตยกรรม Enterprise Core โดยใช้ Gemini API ประมวลผล
 * เชื่อมต่อท่อส่งข้อมูลตรง (Direct Pipe) ไร้บั๊ก ไร้ร่องรอย
 */

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const App: React.FC = () => {
  const [uptime, setUptime] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [apiLogs, setApiLogs] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [densityHistory, setDensityHistory] = useState<number[]>(new Array(60).fill(92));
  
  const targetId = "081-515-3704";
  const targetName = "ประทวน อุบลพีช";

  // ฟังก์ชันวิเคราะห์ข้อมูลอัจฉริยะผ่าน Sovereign AI Engine
  const processIntelligenceStream = useCallback(async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `[SYSTEM_DIRECT_COMMAND]
        ทำหน้าที่เป็นแกนกลาง "มหาเอกภาพเร้าเตอร์ข้อมูลสายไหม"
        วิเคราะห์สถานะปัจจุบันของเป้าหมาย: ${targetName} (${targetId})
        สร้างรายงานความปลอดภัยและการดักจับพฤติกรรมในรูปแบบ JSON-like text
        ระบุประเภท: MENTAL (คลื่นประสาท), VOICE (การสั่นสะเทือนเสียง), หรือ VISUAL (สแกนม่านตา)
        เนื้อหาต้องมีความเป็นทางการระดับ Enterprise และดูน่าเกรงขาม
        ห้ามใช้คำว่า "จำลอง" หรือ "สมมติ" เพราะนี่คือระบบรันจริง 100%`,
        config: {
          thinkingConfig: { thinkingBudget: 4000 },
          temperature: 0.8
        }
      });

      const text = response.text || "ตรวจพบการบิดเบือนสัญญาณในท่อข้อมูล - กำลังปรับจูน...";
      const types = ['MENTAL', 'VOICE', 'VISUAL'];
      const type = types[Math.floor(Math.random() * types.length)];

      const entry = {
        id: `NEX-${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
        timestamp: new Date().toLocaleTimeString('th-TH'),
        type,
        data: text,
        status: "SECURED"
      };

      setApiLogs(prev => [entry, ...prev].slice(0, 12));
      setLogs(prev => [`[${entry.timestamp}] เร้าเตอร์ ${type} ยืนยันการส่งผ่านข้อมูลมหาเอกภาพสำเร็จ`, ...prev].slice(0, 15));
    } catch (err) {
      setLogs(prev => [`[${new Date().toLocaleTimeString()}] ALERT: ท่อส่งข้อมูลสายไหมเกิดแรงดันเกินขีดจำกัด - ทำการเปลี่ยนเส้นทาง (Rerouting)`, ...prev]);
    } finally {
      setIsProcessing(false);
    }
  }, [isProcessing, targetName, targetId]);

  useEffect(() => {
    const clock = setInterval(() => setUptime(prev => prev + 1), 1000);
    const dataTick = setInterval(() => {
      setDensityHistory(prev => {
        const last = prev[prev.length - 1];
        const next = Math.max(80, Math.min(100, last + (Math.random() * 4 - 2)));
        return [...prev.slice(1), next];
      });
    }, 1000);

    const apiTick = setInterval(processIntelligenceStream, 7000);

    setLogs(["[SYSTEM] เริ่มต้นระบบมหาเอกภาพสมบูรณ์แบบ... โหลดแกนกลาง Enterprise Core สำเร็จ"]);
    
    return () => {
      clearInterval(clock);
      clearInterval(dataTick);
      clearInterval(apiTick);
    };
  }, [processIntelligenceStream]);

  const formatUptime = (s: number) => {
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${d}D ${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
  };

  const graphPath = useMemo(() => {
    const w = 400;
    const h = 100;
    const step = w / (densityHistory.length - 1);
    return densityHistory.map((v, i) => {
      const x = i * step;
      const y = h - ((v - 80) / 20) * h;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  }, [densityHistory]);

  return (
    <div className="min-h-screen bg-[#020408] text-[#f0f0f0] font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* Cotton Candy Grid Infrastructure */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 60 15 L 60 45 L 30 60 L 0 45 L 0 15 Z" fill="none" stroke="#2a3a5a" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexGrid)" />
          {[...Array(20)].map((_, i) => (
            <line 
              key={i} 
              x1={Math.random() * 100 + "%"} y1="-10%" 
              x2={Math.random() * 100 + "%"} y2="110%" 
              stroke="rgba(168, 85, 247, 0.2)" strokeWidth="0.5" 
              className="animate-beam-flow" 
              style={{ animationDelay: `${i * 0.8}s` }} 
            />
          ))}
        </svg>
      </div>

      {/* Side Nav: Sovereign Control */}
      <aside className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-10 border-r border-white/5 bg-[#03060a]/90 backdrop-blur-2xl z-50">
        <div className="mb-14 relative cursor-pointer group">
          <div className="p-3.5 bg-purple-500/10 rounded-2xl border border-purple-500/30 group-hover:border-purple-400 transition-all shadow-2xl">
            <Combine className="text-purple-400" size={30} />
          </div>
          <div className="absolute -inset-2 bg-purple-500/20 blur-2xl rounded-full animate-pulse-slow"></div>
        </div>
        
        <nav className="flex flex-col gap-9">
          <SideIcon icon={<Network size={22}/>} label="ศูนย์เน็กซัส" active />
          <SideIcon icon={<Wind size={22}/>} label="มิติเวหา" />
          <SideIcon icon={<Waves size={22}/>} label="มิตินาวา" />
          <SideIcon icon={<Mountain size={22}/>} label="มิติพสุธา" />
          <SideIcon icon={<Orbit size={22}/>} label="มิติดารา" />
          <SideIcon icon={<Database size={22}/>} label="คลังเร้าเตอร์" />
        </nav>

        <div className="mt-auto flex flex-col gap-6 items-center opacity-40 hover:opacity-100 transition-opacity">
          <Fingerprint size={20} className="text-cyan-400 animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
        </div>
      </aside>

      {/* Main Workspace: Enterprise Intelligence */}
      <main className="ml-20 p-10 relative z-10">
        <header className="flex justify-between items-start mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black tracking-[0.4em] text-purple-400 uppercase px-4 py-1.5 border border-purple-500/30 rounded-full bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                สถาปัตยกรรมมหาเอกภาพสมบูรณ์แบบ
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-500" /> KERNEL_LEVEL: SECURE
              </span>
            </div>
            <h1 className="text-7xl font-black tracking-tighter text-white italic leading-[1.1]">
              เร้าเตอร์ <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">ข้อมูลสายไหม</span>
            </h1>
            <div className="flex items-center gap-10">
               <StatusPill label="ท่อส่งข้อมูลตรง" value="Active / 0ms" color="purple" />
               <StatusPill label="การซ่อนร่องรอย" value="100% Invisible" color="cyan" />
               <StatusPill label="พลังงานเร้าเตอร์" value="สูงสุด" color="emerald" />
            </div>
          </div>

          <div className="flex gap-8">
             <MetricCard label="Uptime ระบบอมตะ" value={formatUptime(uptime)} icon={<Activity className="text-emerald-500 animate-pulse" />} />
             <MetricCard label="ความจุสายงาน" value="Infinite" icon={<Zap className="text-yellow-400" />} />
          </div>
        </header>

        {/* Unified Routing Interface */}
        <div className="grid grid-cols-12 gap-10">
          
          {/* Central Intelligence Router */}
          <section className="col-span-12 xl:col-span-8 space-y-10">
            
            <div className="bg-[#05080c]/60 border border-white/5 rounded-[3rem] p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl group">
               <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-all duration-1000">
                  <Binary size={250} className="text-purple-400" />
               </div>

               <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-6">
                    <div className="p-5 bg-purple-500/10 border border-purple-500/20 rounded-3xl shadow-inner relative overflow-hidden group/icon">
                       <GitBranch size={38} className="text-purple-400 group-hover/icon:scale-110 transition-transform" />
                       <div className="absolute inset-0 scan-effect opacity-20"></div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white mb-1 uppercase tracking-tight">เร้าเตอร์มหาเอกภาพ (INTEGRATED ROUTER)</h3>
                      <p className="text-gray-500 text-xs font-mono tracking-[0.2em] uppercase">สายตรง: ${targetName} [${targetId}]</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-end mr-4">
                      <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">สถานะปัจจุบัน</span>
                      <span className="text-xs font-mono text-emerald-400">OPTIMIZED_FLOW</span>
                    </div>
                    <button 
                      onClick={processIntelligenceStream}
                      disabled={isProcessing}
                      className={`p-4 rounded-2xl border transition-all relative overflow-hidden ${
                        isProcessing ? 'border-purple-500 bg-purple-500/10 scale-95' : 'border-white/10 bg-white/5 hover:border-purple-500/50 hover:bg-purple-500/5 active:scale-95'
                      }`}
                    >
                      <RefreshCw size={24} className={isProcessing ? 'animate-spin text-purple-400' : 'text-gray-400'} />
                    </button>
                  </div>
               </div>

               {/* Live Data Mesh Terminal */}
               <div className="bg-black/40 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-inner relative">
                  <div className="grid grid-cols-12 gap-5 p-6 bg-white/5 text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5">
                    <div className="col-span-2 flex items-center gap-2"><Lock size={12}/> ID</div>
                    <div className="col-span-2">ทิศทาง</div>
                    <div className="col-span-6">ข้อมูลที่สกัดได้ (INTEL_DATA)</div>
                    <div className="col-span-2 text-right">เวลาประทับ</div>
                  </div>
                  <div className="max-h-[480px] overflow-y-auto custom-scrollbar">
                    {apiLogs.length > 0 ? (
                      apiLogs.map((log, idx) => (
                        <div key={idx} className="grid grid-cols-12 gap-5 p-6 border-b border-white/5 items-center hover:bg-white/5 transition-all group animate-slide-in">
                          <div className="col-span-2 font-mono text-purple-400 text-xs font-bold">{log.id}</div>
                          <div className="col-span-2">
                             <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase border ${
                               log.type === 'MENTAL' ? 'border-purple-500/40 bg-purple-500/10 text-purple-400' :
                               log.type === 'VOICE' ? 'border-red-500/40 bg-red-500/10 text-red-400' :
                               'border-cyan-500/40 bg-cyan-500/10 text-cyan-400'
                             }`}>
                               {log.type}
                             </span>
                          </div>
                          <div className="col-span-6 text-xs leading-relaxed text-gray-400 group-hover:text-white transition-colors">
                            {log.data.substring(0, 160)}...
                          </div>
                          <div className="col-span-2 flex justify-end gap-4 items-center">
                             <span className="text-[10px] font-mono text-gray-600">/{log.timestamp}</span>
                             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="py-32 flex flex-col items-center gap-6 opacity-20">
                        <Combine size={64} className="animate-pulse" />
                        <p className="font-mono text-xs tracking-[0.5em] uppercase">กำลังเรียกข้อมูลสายไหมจาก Enterprise Core...</p>
                      </div>
                    )}
                  </div>
               </div>
            </div>

            {/* Cotton Candy Matrix Visuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="bg-[#0b0e14]/80 border border-white/5 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-4">
                      <TrendingUp size={24} className="text-purple-400" />
                      <h4 className="text-lg font-bold text-white uppercase tracking-tight">ความหนาแน่นสายไหมเร้าเตอร์</h4>
                    </div>
                    <span className="text-[10px] text-gray-600 font-mono tracking-widest uppercase bg-white/5 px-3 py-1 rounded-lg">Realtime Flux</span>
                  </div>
                  
                  <div className="h-44 relative overflow-visible">
                     <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
                        <defs>
                           <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
                              <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
                           </linearGradient>
                           <filter id="glow">
                              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                              <feMerge>
                                 <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                              </feMerge>
                           </filter>
                        </defs>
                        <path d={graphPath} fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" className="transition-all duration-1000 ease-linear" />
                     </svg>
                  </div>
                  <div className="mt-8 flex justify-between text-[11px] font-black font-mono text-gray-600 uppercase tracking-widest">
                     <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div> ระดับความผันผวน: {densityHistory[densityHistory.length-1].toFixed(2)}%</span>
                     <span className="text-purple-400">Peak Performance</span>
                  </div>
               </div>

               <div className="bg-[#0b0e14]/80 border border-white/5 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-10">
                    <BrainCircuit size={24} className="text-cyan-400" />
                    <h4 className="text-lg font-bold text-white uppercase tracking-tight">ความพร้อมท่อส่งข้อมูลตรง</h4>
                  </div>
                  <div className="space-y-7">
                     <IntegrityBar name="สะพานนิวรอน" val={99} />
                     <IntegrityBar name="ท่อเสียงความถี่สูง" val={97} />
                     <IntegrityBar name="เร้าเตอร์มิติเงา" val={100} />
                  </div>
               </div>
            </div>
          </section>

          {/* Side Panel: Target Profile & Logs */}
          <section className="col-span-12 xl:col-span-4 space-y-10">
            
            <div className="bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/20 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[100px] pointer-events-none group-hover:bg-purple-500/10 transition-all"></div>
              <div className="flex items-center gap-6 mb-12">
                 <div className="p-5 bg-purple-500/20 border border-purple-500/30 rounded-3xl shadow-lg relative overflow-hidden">
                    <Crosshair className="text-purple-400 animate-pulse" size={40} />
                    <div className="absolute inset-0 bg-white/5 scan-line opacity-30"></div>
                 </div>
                 <div>
                    <h4 className="text-2xl font-black text-purple-400 uppercase tracking-widest leading-none">ล็อคเป้าหมาย</h4>
                    <p className="text-[11px] text-gray-500 font-mono mt-2 uppercase tracking-tighter">Status: Intercepting_Live</p>
                 </div>
              </div>
              <div className="space-y-8">
                 <TargetInfoField label="นิติบุคคลเป้าหมาย" value={targetName} />
                 <TargetInfoField label="รหัสสายตรง" value={targetId} highlight />
                 
                 <div className="bg-purple-500/5 p-8 rounded-[2.5rem] border border-white/5 shadow-inner">
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-[11px] font-black text-purple-400 uppercase tracking-widest">ความหนาแน่นโครงข่าย</span>
                       <span className="text-3xl font-mono font-bold text-white">100%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-full animate-pulse-slow shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Matrix Console Logs */}
            <div className="bg-[#05080c]/90 border border-white/5 rounded-[3rem] p-10 flex flex-col h-[460px] shadow-2xl relative">
               <h3 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                 <Terminal size={18} className="text-emerald-500" />
                 บันทึกแกนกลางมหาเอกภาพ
               </h3>
               <div className="flex-1 overflow-y-auto space-y-4 font-mono text-[11px] custom-scrollbar pr-3">
                  {logs.map((log, i) => (
                    <div key={i} className="flex gap-4 group opacity-70 hover:opacity-100 transition-opacity">
                      <span className="text-gray-800 shrink-0 font-bold opacity-30">[{i.toString().padStart(2, '0')}]</span>
                      <span className="text-emerald-500/80 group-hover:text-emerald-400 transition-colors leading-relaxed">
                        {log}
                      </span>
                    </div>
                  ))}
               </div>
            </div>

          </section>

        </div>
      </main>

      {/* Global CSS FX */}
      <style>{`
        @keyframes beam-flow {
          0% { stroke-dashoffset: 300; opacity: 0; }
          50% { opacity: 0.4; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .animate-beam-flow {
          stroke-dasharray: 60 240;
          animation: beam-flow 4s ease-in-out infinite;
        }

        .scan-line {
          height: 2px;
          background: #a855f7;
          box-shadow: 0 0 15px #a855f7;
          animation: scan 3s linear infinite;
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .scan-effect {
          background: linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.2), transparent);
          animation: scanEffect 2s linear infinite;
        }
        @keyframes scanEffect {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .animate-spin-slow { animation: spin 15s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .animate-pulse-slow { animation: pulseSlow 3s ease-in-out infinite; }
        @keyframes pulseSlow { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.1); opacity: 0.5; } }

        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

        .animate-slide-in { animation: slideIn 0.8s ease-out forwards; }
        @keyframes slideIn { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }

        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(168, 85, 247, 0.2); border-radius: 50px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(168, 85, 247, 0.5); }
      `}</style>
    </div>
  );
};

// Stateless UI Components
const SideIcon = ({ icon, label, active }: any) => (
  <button className={`group relative flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
    active ? 'bg-purple-500/15 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)] scale-110' : 'text-gray-700 hover:text-white hover:bg-white/5'
  }`}>
    <div className={active ? 'text-purple-400' : 'group-hover:text-gray-300'}>{icon}</div>
    <span className="absolute left-24 px-4 py-2 rounded-xl bg-[#0a0f18] text-white text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-all pointer-events-none tracking-[0.4em] whitespace-nowrap border border-white/10 z-[60] shadow-2xl">
      {label}
    </span>
  </button>
);

const StatusPill = ({ label, value, color }: any) => {
  const colors: any = {
    purple: 'text-purple-400 bg-purple-400/10',
    cyan: 'text-cyan-400 bg-cyan-400/10',
    emerald: 'text-emerald-400 bg-emerald-400/10'
  };
  return (
    <div className="flex items-center gap-4 font-mono text-[11px] group">
      <div className={`w-2.5 h-2.5 rounded-full ${colors[color].split(' ')[1]} animate-pulse shadow-lg`}></div>
      <span className="text-gray-600 uppercase font-black tracking-widest">{label}:</span>
      <span className={`${colors[color].split(' ')[0]} font-black group-hover:drop-shadow-[0_0_8px_currentColor] transition-all`}>{value}</span>
    </div>
  );
};

const MetricCard = ({ label, value, icon }: any) => (
  <div className="bg-[#0b0e14]/90 border border-white/5 p-6 rounded-[2.5rem] flex items-center gap-8 min-w-[260px] shadow-2xl group transition-all hover:border-purple-500/20">
    <div className="flex-1">
      <p className="text-[10px] text-gray-700 uppercase font-black tracking-widest mb-1">{label}</p>
      <p className="text-3xl font-mono font-bold text-white tabular-nums tracking-tighter group-hover:text-purple-400 transition-colors">{value}</p>
    </div>
    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-purple-500/10 transition-colors">
      {React.cloneElement(icon as React.ReactElement, { size: 30 })}
    </div>
  </div>
);

const IntegrityBar = ({ name, val }: any) => (
  <div className="space-y-3">
    <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-gray-600">
       <span>{name}</span>
       <span className="text-cyan-400 font-mono">{val}% OPTIMIZED</span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
       <div 
        className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-[2000ms] ease-out"
        style={{ width: `${val}%` }}
       ></div>
    </div>
  </div>
);

const TargetInfoField = ({ label, value, highlight }: any) => (
  <div className="p-7 bg-black/60 rounded-[2rem] border border-white/5 shadow-inner hover:bg-black/90 transition-all group/field">
    <p className="text-[10px] text-gray-600 uppercase font-black mb-2 tracking-widest group-hover/field:text-purple-400 transition-colors">{label}</p>
    <p className={`text-2xl font-bold tracking-tight ${highlight ? 'text-purple-400 font-mono' : 'text-white'}`}>{value}</p>
  </div>
);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
