// =============================================
//  PHYSICS CROSSWORD QUIZ
//  Oral mode: Đúng / Sai buttons
// =============================================

const questions = [
  {
    num: 1,
    text: "Trong vật lý, từ nào mô tả các hiện tượng trên?",
    answer: "CHUYỂNĐỘNG",
    displayAnswer: "CHUYỂN ĐỘNG",
    shift: 4,
    diagram: "trajectories",
  },
  {
    num: 2,
    text: "Số vòng vật đi được trong 1 giây gọi là gì?",
    answer: "TẦNSỐ",
    displayAnswer: "TẦN SỐ",
    shift: 4,
    diagram: null,
  },
  {
    num: 3,
    text: "Trong vật lý, đơn vị đo của góc gọi là gì?",
    answer: "RADIAN",
    shift: 4,
    diagram: null,
  },
  {
    num: 4,
    text: "“Thân em chẳng cánh mà bay\nNhờ ai nâng đỡ, đôi tay nhịp nhàng\nMột đầu nặng trĩu vẻ vang\nĐầu kia nhấn nhẹ, thế gian xoay tròn”\n\nĐố bạn “nhân vật” được nói đến trong đoạn thơ trên là “ai”?",
    answer: "ĐÒNBẨY",
    displayAnswer: "ĐÒN BẨY",
    shift: 3,
    diagram: null,
    audio: "voices/cau_4_than_em_chang_canh_ma_bay_nho_ai_nang_do_b0587045-791a-43ed-98ab-b26657168ea3.mp3",
  },
  {
    num: 5,
    text: "Hệ quy chiếu sau đây mô tả quỹ đạo của chuyển động nào?",
    answer: "NÉMNGANG",
    displayAnswer: "NÉM NGANG",
    shift: 4,
    diagram: "projectile",
  },
  {
    num: 6,
    text: "Rad/s là đơn vị của đại lượng vật lý nào?",
    answer: "TỐCĐỘGÓC",
    displayAnswer: "TỐC ĐỘ GÓC",
    shift: 1, // Đ is index 3, 3 + 1 = 4
    diagram: null,
  },
  {
    num: 7,
    text: "“Tay cầm bàn xoa, tay cầm bay\nXây tường, trát vách khéo léo thay\nNắng mưa chẳng ngại, công trình mọc”\n\nĐố bạn trong đoạn thơ trên đang miêu tả người này làm Thợ gì?",
    answer: "NỀ",
    displayAnswer: "NỀ",
    shift: 3,
    diagram: null,
    audio: "voices/cau_7_tay_cam_ban_xoa_tay_cam_bay_xay_tuong_5f170671-62bc-4e7f-bc7d-928c2698a83d.mp3",
  },
  {
    num: 8,
    text: "Khoảng thời gian để vật chuyển động đi được 1 vòng quỹ đạo thì gọi là gì?",
    answer: "CHUKỲ",
    displayAnswer: "CHU KỲ",
    shift: 2,
    diagram: null,
  },
];
const secretKeywords = ["CHUYENDONG", "TRONDEU"];

// =============================================
//  Diagram SVGs
// =============================================
const diagrams = {
  car: () => `<svg width="100%" height="auto" viewBox="0 0 300 150">
        <defs>
           <filter id="glCar"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <!-- Glowing drawn track -->
        <line x1="20" y1="120" x2="280" y2="120" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" stroke-dasharray="100" stroke-dashoffset="100" pathLength="100">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.5s" repeatCount="indefinite" />
        </line>
        
        <!-- Car Group -->
        <g>
            <animateTransform attributeName="transform" type="translate" from="20 0" to="280 0" dur="2.5s" repeatCount="indefinite"/>
            <g transform="translate(-115, 0)">
                <!-- car body facing right -->
                <path d="M10 110 L10 85 Q10 75 25 70 L45 55 Q55 45 70 45 L85 45 Q95 45 105 60 L125 80 Q130 85 130 95 L130 110 Z" fill="#fbbf24"/>
                <path d="M30 70 L48 53 L65 53 L65 70 Z" fill="#1e293b"/>
                <path d="M72 53 L85 53 L100 70 L72 70 Z" fill="#1e293b"/>
                <!-- wheels -->
                <circle cx="35" cy="110" r="12" fill="#cbd5e1" stroke="#0f172a" stroke-width="4">
                     <animateTransform attributeName="transform" type="rotate" from="0 35 110" to="360 35 110" dur="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="110" r="12" fill="#cbd5e1" stroke="#0f172a" stroke-width="4">
                     <animateTransform attributeName="transform" type="rotate" from="0 100 110" to="360 100 110" dur="0.5s" repeatCount="indefinite"/>
                </circle>
            </g>
        </g>
    </svg>`,

  circle: (isDone) => {
    const txt = isDone ? "O" : "...";
    return `<svg width="100%" height="auto" viewBox="0 0 240 220">
        <defs>
            <filter id="gl"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#818cf8"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
        </defs>
        
        <!-- The drawn glowing track. -->
        <circle cx="120" cy="105" r="75" fill="none" stroke="url(#rg)" stroke-width="3" filter="url(#gl)" opacity=".85" stroke-dasharray="100" stroke-dashoffset="100" pathLength="100" transform="rotate(-90 120 105)">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="120" cy="105" r="5" fill="#fbbf24"/>
        <line x1="120" y1="105" x2="187" y2="72" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,4" opacity=".8"/>
        
        <!-- Animated dot. Starts from top center since circle draws from there. -->
        <circle cx="195" cy="105" r="6" fill="#f43f5e" filter="url(#gl)">
             <animateTransform attributeName="transform" type="rotate" from="-90 120 105" to="270 120 105" dur="3s" repeatCount="indefinite"/>
        </circle>

        <!-- Labels -->
        <text x="110" y="130" fill="#fbbf24" font-size="16" font-weight="800" text-anchor="middle" class="dt">${txt}</text>
        <text x="160" y="82" fill="#fbbf24" font-size="14" font-weight="700" class="dt">R</text>
        <text x="120" y="205" fill="#a1a1aa" font-size="11" text-anchor="middle" class="dt">Đường tròn tâm ${txt}, bán kính R</text>
    </svg>`;
  },

  projectile: () => `<svg width="100%" height="auto" viewBox="0 0 320 200">
        <defs>
            <marker id="ar-x" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#fbbf24"/></marker>
            <marker id="ar-y" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#34d399"/></marker>
            <pattern id="hatch" patternUnits="userSpaceOnUse" width="12" height="12">
                <path d="M 14 -2 L -2 14" stroke="#475569" stroke-width="1.5"/>
            </pattern>
            <filter id="glProj"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        
        <!-- Mặt đất -->
        <rect x="25" y="160" width="280" height="15" fill="url(#hatch)" />
        <line x1="25" y1="160" x2="310" y2="160" stroke="#94a3b8" stroke-width="2"/>
        
        <!-- Trục -->
        <line x1="50" y1="20" x2="280" y2="20" stroke="#fbbf24" stroke-width="2" marker-end="url(#ar-x)"/>
        <text x="285" y="25" fill="#fbbf24" font-size="14" font-weight="700" font-style="italic">x</text>
        <line x1="50" y1="20" x2="50" y2="150" stroke="#34d399" stroke-width="2" marker-end="url(#ar-y)"/>
        <text x="35" y="155" fill="#34d399" font-size="14" font-weight="700" font-style="italic">y</text>
        <text x="33" y="15" fill="#cbd5e1" font-size="14" font-weight="700" font-style="italic">O</text>
        <circle cx="50" cy="20" r="3" fill="#cbd5e1" />
        
        <!-- Vận tốc v0 -->
        <g opacity="0.8">
            <line x1="50" y1="20" x2="110" y2="20" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
            <polygon points="106,16 114,20 106,24" fill="#f43f5e"/>
            <text x="85" y="12" fill="#f43f5e" font-size="14" font-weight="700" font-style="italic">v<tspan dy="5" font-size="10">0</tspan></text>
        </g>
        
        <!-- Quỹ đạo Ném Ngang (1 nét Parabol) -->
        <path id="tr-p" d="M 50 20 Q 150 20 260 160" fill="none" stroke="#38bdf8" stroke-width="3.5" filter="url(#glProj)" stroke-dasharray="100" stroke-dashoffset="100" pathLength="100">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite"/>
        </path>
        
        <circle r="7" fill="#fbbf24" filter="url(#glProj)">
             <animateMotion dur="2s" repeatCount="indefinite">
                 <mpath href="#tr-p"/>
             </animateMotion>
        </circle>
    </svg>`,

  trajectories: () => `<svg width="100%" height="auto" viewBox="0 0 440 440">
        <defs>
            <marker id="ar-w" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#e2e8f0"/></marker>
            <marker id="ar-v" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#34d399"/></marker>
            <pattern id="hatch-t" patternUnits="userSpaceOnUse" width="10" height="10">
                <path d="M 12 -2 L -2 12" stroke="#475569" stroke-width="1.5"/>
            </pattern>
            <filter id="glo"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <linearGradient id="rg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#a855f7"/></linearGradient>
            <clipPath id="clip-q1"><rect x="0" y="0" width="220" height="220"/></clipPath>
            <clipPath id="clip-q2"><rect x="220" y="0" width="220" height="220"/></clipPath>
            <clipPath id="clip-q3"><rect x="0" y="220" width="220" height="220"/></clipPath>
            <clipPath id="clip-q4"><rect x="220" y="220" width="220" height="220"/></clipPath>
        </defs>

        <!-- Viền phân chia 4 ô -->
        <line x1="220" y1="0" x2="220" y2="440" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
        <line x1="0" y1="220" x2="440" y2="220" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>

        <!-- ===== Ô 1 (trên trái): Người đi bộ ===== -->
        <g clip-path="url(#clip-q1)">
        <g transform="translate(10, 10)">
            <!-- Đường đi -->
            <line x1="20" y1="165" x2="195" y2="165" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ar-w)"/>
            <text x="197" y="169" fill="#e2e8f0" font-size="12" font-style="italic" font-weight="bold">x</text>
            <!-- Vệt đường sáng -->
            <path d="M 20 163 L 195 163" fill="none" stroke="#22d3ee" stroke-width="2.5" filter="url(#glo)" stroke-dasharray="100" stroke-dashoffset="100" pathLength="100">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.5s" repeatCount="indefinite"/>
            </path>
            <!-- Người đi bộ Neon Cyan -->
            <g stroke="#22d3ee" filter="url(#glo)">
                <animateTransform attributeName="transform" type="translate" from="20 0" to="175 0" dur="2.5s" repeatCount="indefinite"/>
                <!-- Đầu -->
                <circle cx="0" cy="120" r="11" fill="none" stroke-width="2.5"/>
                <!-- Thân -->
                <line x1="0" y1="131" x2="0" y2="150" stroke-width="2.5"/>
                <!-- Tay trái swing -->
                <line x1="0" y1="136" x2="-13" y2="148" stroke-width="2.5">
                    <animateTransform attributeName="transform" type="rotate" values="-20 0 136; 20 0 136; -20 0 136" dur="0.45s" repeatCount="indefinite" additive="sum"/>
                </line>
                <!-- Tay phải swing ngược pha -->
                <line x1="0" y1="136" x2="13" y2="148" stroke-width="2.5">
                    <animateTransform attributeName="transform" type="rotate" values="20 0 136; -20 0 136; 20 0 136" dur="0.45s" repeatCount="indefinite" additive="sum"/>
                </line>
                <!-- Chân trái -->
                <line x1="0" y1="150" x2="-12" y2="165" stroke-width="2.5">
                    <animateTransform attributeName="transform" type="rotate" values="-25 0 150; 25 0 150; -25 0 150" dur="0.45s" repeatCount="indefinite" additive="sum"/>
                </line>
                <!-- Chân phải -->
                <line x1="0" y1="150" x2="12" y2="165" stroke-width="2.5">
                    <animateTransform attributeName="transform" type="rotate" values="25 0 150; -25 0 150; 25 0 150" dur="0.45s" repeatCount="indefinite" additive="sum"/>
                </line>
            </g>
        </g>
        </g>

        <!-- ===== Ô 2 (trên phải): Xe ô tô ===== -->
        <g clip-path="url(#clip-q2)">
        <g transform="translate(230, 30)">
            <!-- Đường -->
            <rect x="-10" y="142" width="220" height="14" fill="rgba(255,255,255,0.05)"/>
            <!-- Vạch ranh giới mặt đường -->
            <line x1="-10" y1="142" x2="210" y2="142" stroke="#94a3b8" stroke-width="1.5"/>
            <!-- Vạch kẻ giữa đường Neon Yellow -->
            <line x1="-10" y1="149" x2="210" y2="149" stroke="#fbbf24" stroke-width="3" stroke-dasharray="25, 20" filter="url(#glo)" opacity="0.9">
                <animate attributeName="stroke-dashoffset" from="0" to="45" dur="0.8s" repeatCount="indefinite"/>
            </line>

            <!-- Xe ô tô Neon Purple -->
            <g>
                <animateTransform attributeName="transform" type="translate" from="-80 0" to="215 0" dur="2s" repeatCount="indefinite"/>
                <!-- Thân dưới tản sáng -->
                <rect x="-40" y="100" width="80" height="30" rx="6" fill="#8b5cf6" stroke="#d8b4fe" stroke-width="2" filter="url(#glo)"/>
                <!-- Cabin tối -->
                <rect x="-28" y="76" width="56" height="26" rx="5" fill="#2e1065" stroke="#d8b4fe" stroke-width="1.5"/>
                <!-- Kính trước -->
                <line x1="-28" y1="102" x2="-18" y2="78" stroke="#38bdf8" stroke-width="2.5" filter="url(#glo)"/>
                <!-- Kính sau -->
                <line x1="28" y1="102" x2="18" y2="78" stroke="#38bdf8" stroke-width="2.5" filter="url(#glo)"/>
                <!-- Đèn lùi sáng rực -->
                <rect x="-44" y="109" width="6" height="5" rx="1.5" fill="#f43f5e" filter="url(#glo)"/>
                <!-- Đèn pha vàng chóe -->
                <rect x="37" y="109" width="8" height="6" rx="1.5" fill="#fde047" filter="url(#glo)"/>
                <!-- Bánh trước viền Cyan -->
                <circle cx="25" cy="131" r="11" fill="#0f172a" stroke="#22d3ee" stroke-width="2.5" filter="url(#glo)">
                    <animateTransform attributeName="transform" type="rotate" from="0 25 131" to="360 25 131" dur="0.35s" repeatCount="indefinite"/>
                </circle>
                <!-- Vành bánh trước -->
                <line x1="25" y1="120" x2="25" y2="142" stroke="#22d3ee" stroke-width="2.5">
                    <animateTransform attributeName="transform" type="rotate" from="0 25 131" to="360 25 131" dur="0.35s" repeatCount="indefinite"/>
                </line>
                <!-- Bánh sau viền Cyan -->
                <circle cx="-25" cy="131" r="11" fill="#0f172a" stroke="#22d3ee" stroke-width="2.5" filter="url(#glo)">
                    <animateTransform attributeName="transform" type="rotate" from="0 -25 131" to="360 -25 131" dur="0.35s" repeatCount="indefinite"/>
                </circle>
                <line x1="-25" y1="120" x2="-25" y2="142" stroke="#22d3ee" stroke-width="2.5">
                    <animateTransform attributeName="transform" type="rotate" from="0 -25 131" to="360 -25 131" dur="0.35s" repeatCount="indefinite"/>
                </line>
            </g>
        </g>
        </g>

        <!-- ===== Ô 3 (dưới trái): Ném ngang ===== -->
        <g clip-path="url(#clip-q3)">
        <g transform="translate(10, 230)">
            <!-- Trục siêu nét -->
            <line x1="40" y1="20" x2="190" y2="20" stroke="#cbd5e1" stroke-width="2" marker-end="url(#ar-w)"/>
            <text x="192" y="24" fill="#f8fafc" font-size="12" font-weight="bold" font-style="italic">x</text>
            <line x1="40" y1="20" x2="40" y2="155" stroke="#cbd5e1" stroke-width="2" marker-end="url(#ar-w)"/>
            <text x="28" y="158" fill="#f8fafc" font-size="12" font-weight="bold" font-style="italic">y</text>
            <text x="23" y="15" fill="#f8fafc" font-size="12" font-weight="bold">O</text>
            <circle cx="40" cy="20" r="3" fill="#f8fafc" filter="url(#glo)"/>

            <!-- Vận tốc đầu rực sáng -->
            <line x1="40" y1="20" x2="90" y2="20" stroke="#34d399" stroke-width="2.5" marker-end="url(#ar-v)" filter="url(#glo)"/>
            <text x="62" y="13" fill="#34d399" font-size="12" font-weight="900" font-style="italic" filter="url(#glo)">v₀</text>

            <!-- Quỹ đạo ném ngang neon Blue -->
            <path id="tr-nn" d="M 40 20 Q 130 20 190 155" fill="none" stroke="#38bdf8" stroke-width="3.5" filter="url(#glo)" stroke-dasharray="100" stroke-dashoffset="100" pathLength="100">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite"/>
            </path>
            <!-- Viên đạn bốc hỏa -->
            <circle r="7" fill="#fbbf24" filter="url(#glo)">
                <animateMotion dur="2s" repeatCount="indefinite">
                    <mpath href="#tr-nn"/>
                </animateMotion>
            </circle>
            <!-- Mặt đất nổi rực -->
            <rect x="20" y="155" width="175" height="10" fill="url(#hatch-t)" stroke="#94a3b8" stroke-width="1"/>
        </g>
        </g>

        <!-- ===== Ô 4 (dưới phải): Chuyển động tròn ===== -->
        <g clip-path="url(#clip-q4)">
        <g transform="translate(230, 230)">
            <!-- Đường tròn vẽ dần Glow Purple/Cyan -->
            <circle cx="105" cy="105" r="72" fill="none" stroke="url(#rg2)" stroke-width="4" filter="url(#glo)" stroke-dasharray="100" stroke-dashoffset="100" pathLength="100" transform="rotate(-90 105 105)">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite"/>
            </circle>
            <!-- Tâm siêu sáng -->
            <circle cx="105" cy="105" r="5" fill="#fbbf24" filter="url(#glo)"/>
            <!-- Bán kính vàng chói -->
            <line x1="105" y1="105" x2="168" y2="75" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="5,4" filter="url(#glo)"/>
            <text x="142" y="78" fill="#fbbf24" font-size="14" font-weight="900" filter="url(#glo)">R</text>
            <text x="96" y="122" fill="#fbbf24" font-size="16" font-weight="900" filter="url(#glo)">O</text>
            <!-- Chấm chạy nổ tung -->
            <circle cx="177" cy="105" r="8" fill="#f43f5e" filter="url(#glo)">
                <animateTransform attributeName="transform" type="rotate" from="-90 105 105" to="270 105 105" dur="3s" repeatCount="indefinite"/>
            </circle>
        </g>
        </g>
    </svg>`,

  lever: () => `<svg width="100%" height="auto" viewBox="0 0 350 250">
        <defs>
            <filter id="glLvr" filterUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <pattern id="htLvr" patternUnits="userSpaceOnUse" width="12" height="12">
                <path d="M 14 -2 L -2 14" stroke="#475569" stroke-width="1.5"/>
            </pattern>
        </defs>

        <!-- Mặt đất -->
        <rect x="20" y="210" width="310" height="15" fill="url(#htLvr)" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="20" y1="210" x2="330" y2="210.01" stroke="#cbd5e1" stroke-width="2"/>
        
        <!-- Cột giữ đòn bẩy -->
        <polygon points="120,210 135,150 150,210" fill="#334155" stroke="#94a3b8" stroke-width="2.5"/>
        <circle cx="135" cy="150" r="6" fill="#facc15" filter="url(#glLvr)"/>

        <!-- Đòn Bẩy và Vật nặng -->
        <g>
            <!-- Lắc đều. Góc +/- 12 độ -->
            <animateTransform attributeName="transform" type="rotate" values="12 135 150; -12 135 150; 12 135 150" dur="2.5s" repeatCount="indefinite" />
            
            <!-- Thanh đòn bẩy -->
            <line x1="30" y1="150" x2="280" y2="150.01" stroke="#22d3ee" stroke-width="8" stroke-linecap="round" filter="url(#glLvr)"/>
            
            <!-- Vật nặng (Tím rực rỡ) ở x=60. Bán kính = 75 (135-60) -->
            <g transform="translate(60, 110)">
                <rect x="-25" y="0" width="50" height="40" rx="5" fill="#8b5cf6" stroke="#d8b4fe" stroke-width="2" filter="url(#glLvr)"/>
                <text x="0" y="26" fill="#fff" font-size="16" font-weight="900" text-anchor="middle" filter="url(#glLvr)">M</text>
            </g>

            <!-- Vector lực F của tay người đẩy (Màu đỏ neon) -->
            <g>
               <animate attributeName="opacity" values="1; 0.2; 1" dur="2.5s" repeatCount="indefinite"/>
               <!-- Mũi tên nhấn xuống tại tay (280, 150) -->
               <line x1="280" y1="110" x2="280.01" y2="145" stroke="#f43f5e" stroke-width="3" filter="url(#glLvr)"/>
               <polygon points="275,138 285,138 280,148" fill="#f43f5e" filter="url(#glLvr)"/>
               <text x="290" y="130" fill="#f43f5e" font-size="18" font-weight="900" filter="url(#glLvr)">F</text>
            </g>
        </g>

        <!-- Người đứng bẩy. Bay lơ lửng, nhún đồng điệu -->
        <g stroke="#34d399" fill="none" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glLvr)">
            <animateTransform attributeName="transform" type="translate" values="0 30; 0 -30; 0 30" dur="2.5s" repeatCount="indefinite" />
            <!-- Đầu -->
            <circle cx="305" cy="70" r="12" />
            <!-- Thân -->
            <line x1="305" y1="82" x2="305.01" y2="135" />
            <!-- Tay gập đẩy đòn bẩy (Tay chạm 280, 150) -->
            <path d="M 305 95 L 295 125 L 280 150" />
            <path d="M 305 95 L 315 125 L 280 150" stroke="#059669" />
            <!-- Chân -->
            <path d="M 305 135 L 290 170" />
            <path d="M 305 135 L 320 170" />
        </g>
    </svg>`,
};

// =============================================
//  DOM
// =============================================
const $ = (id) => document.getElementById(id);
const grid = $("grid");
const gridCard = $("grid-card");
const qCard = $("q-card");
const qBadge = $("q-badge");
const qNum = $("q-num");
const qText = $("q-text");
const qContent = document.querySelector(".q-content");
const qDiagram = $("q-diagram");
const qAnsBox = $("q-ans-box");
const qAnsText = $("q-ans-text");
const qBtns = $("q-btns");
const btnSai = $("btn-sai");
const btnDung = $("btn-dung");
const btnBack = $("btn-back");
const fxWrong = $("fx-wrong");
const fxCorrect = $("fx-correct");
const btnKw = $("btn-kw");
const btnKwCancel = $("btn-kw-cancel");
const winOvl = $("win");
const btnCW = $("btn-close-win");
const kw1 = $("kw1");
const kw2 = $("kw2");
const timerWidget = $("timer-widget");
const qTimer = $("q-timer");
const btnStartTimer = $("btn-start-timer");
const timeoutAlert = $("timeout-alert");

let active = -1;
let done = new Array(questions.length).fill(false);

let questionTimer = null;
let timeLeft = 20;

btnStartTimer.addEventListener("click", () => {
  btnStartTimer.style.display = "none";
  
  // Mở khoá Audio cho trình duyệt khắt khe như Safari/Chrome để có thể phát sau 20s
  customVoices.timeout.volume = 0;
  customVoices.timeout.play().then(() => {
    customVoices.timeout.pause();
    customVoices.timeout.currentTime = 0;
    customVoices.timeout.volume = 1;
  }).catch(e => console.log(e));

  startQuestionTimer();
});

function startQuestionTimer() {
  if (questionTimer) clearInterval(questionTimer);
  timeLeft = 20;
  qTimer.textContent = timeLeft;
  qTimer.classList.remove("warning");

  questionTimer = setInterval(() => {
    timeLeft--;
    qTimer.textContent = timeLeft;

    if (timeLeft <= 5 && timeLeft > 0) {
      qTimer.classList.add("warning");
      au();
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "square";
      o.frequency.value = 800;
      g.gain.setValueAtTime(0.05, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(ctx.currentTime);
      o.stop(ctx.currentTime + 0.1);
    }

    if (timeLeft === 0) {
      clearInterval(questionTimer);
      questionTimer = null;
      qTimer.classList.add("warning");
      qTimer.textContent = "00";
      playVoice(customVoices.timeout);
      
      // Hiện thông báo hết thời gian và tự động ẩn 
      timeoutAlert.classList.remove("hidden");
      // Dùng requestAnimationFrame để transition chạy mượt
      requestAnimationFrame(() => {
        timeoutAlert.classList.add("show");
      });
      
      setTimeout(() => {
        timeoutAlert.classList.remove("show");
        stopVoice(); // Buộc ngắt tiếng chuông sau 3s (nếu nó còn đang phát)
        setTimeout(() => timeoutAlert.classList.add("hidden"), 400); // 400ms khớp CSS transition
      }, 3000); // Popup chớp giữ 3 giây trên màn hình
    }
  }, 1000);
}

function stopQuestionTimer() {
  if (questionTimer) {
    clearInterval(questionTimer);
    questionTimer = null;
  }
  timerWidget.classList.add("hidden");
  qTimer.classList.remove("warning");
}

// =============================================
//  Audio
// =============================================
const AC = window.AudioContext || window.webkitAudioContext;
let ctx;
function au() {
  if (!ctx) ctx = new AC();
  if (ctx.state === "suspended") ctx.resume();
}

function tick() {
  au();
  const o = ctx.createOscillator(),
    g = ctx.createGain();
  o.type = "sine";
  o.frequency.setValueAtTime(1200, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.05);
  g.gain.setValueAtTime(0.05, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
  o.connect(g);
  g.connect(ctx.destination);
  o.start();
  o.stop(ctx.currentTime + 0.05);
}

function selectSound() {
  au();
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  const now = ctx.currentTime;
  const spacing = 0.12; // Khoảng cách giữa các nốt dài hơn
  const ringOut = 1.0; // Độ ngân chuông dài hơn
  
  notes.forEach((freq, i) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = freq;

    g.gain.setValueAtTime(0, now + i * spacing);
    g.gain.linearRampToValueAtTime(0.15, now + i * spacing + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, now + i * spacing + ringOut);

    o.connect(g);
    g.connect(ctx.destination);

    o.start(now + i * spacing);
    o.stop(now + i * spacing + ringOut);
  });
}

let bgmInterval;
function startOlympiaBGM() {
  stopBGM();
  au();
  let step = 0;

  // Olympia-style gentle suspense ostinato (Dm - Am pattern)
  const notes = [
    293.66,
    349.23,
    440.0,
    349.23, // Dm
    293.66,
    349.23,
    440.0,
    349.23,
    220.0,
    261.63,
    329.63,
    261.63, // Am
    220.0,
    261.63,
    329.63,
    261.63,
  ];

  bgmInterval = setInterval(() => {
    // 1. Ticking sound (Clock)
    const tOsc = ctx.createOscillator();
    const tGain = ctx.createGain();
    tOsc.type = "square";
    tOsc.frequency.setValueAtTime(800, ctx.currentTime);
    tGain.gain.setValueAtTime(0.04, ctx.currentTime);
    tGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    tOsc.connect(tGain);
    tGain.connect(ctx.destination);
    tOsc.start();
    tOsc.stop(ctx.currentTime + 0.05);

    // 2. Arpeggio note
    let freq = notes[step % notes.length];
    const nOsc = ctx.createOscillator();
    const nGain = ctx.createGain();
    nOsc.type = "sine";
    nOsc.frequency.setValueAtTime(freq, ctx.currentTime);
    nGain.gain.setValueAtTime(0, ctx.currentTime);
    nGain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.05);
    nGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    nOsc.connect(nGain);
    nGain.connect(ctx.destination);
    nOsc.start();
    nOsc.stop(ctx.currentTime + 0.4);

    // 3. Bass pad (every 8 steps = 1 chord)
    if (step % 8 === 0) {
      const bFreq = step % 16 === 0 ? 146.83 : 110.0; // D3 / A2
      const bOsc = ctx.createOscillator();
      const bGain = ctx.createGain();
      bOsc.type = "triangle";
      bOsc.frequency.setValueAtTime(bFreq, ctx.currentTime);
      bGain.gain.setValueAtTime(0, ctx.currentTime);
      bGain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.5);
      bGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.0);
      bOsc.connect(bGain);
      bGain.connect(ctx.destination);
      bOsc.start();
      bOsc.stop(ctx.currentTime + 2.0);
    }

    step++;
  }, 250);
}

function stopBGM() {
  if (bgmInterval) {
    clearInterval(bgmInterval);
    bgmInterval = null;
  }
}

function playClap() {
  try {
    const audio = new Audio("tieng_vo_tay_tra_loi_Dung-www_tiengdong_com.mp3");
    audio.play();
  } catch (e) {
    console.error("Lỗi âm thanh vỗ tay MP3:", e);
  }
}

function buzz() {
  au();
  const freqs = [155.56, 185.0, 220.0];
  freqs.forEach((fr) => {
    const o = ctx.createOscillator(),
      g = ctx.createGain();
    o.type = "sawtooth";
    o.frequency.setValueAtTime(fr, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(fr * 0.7, ctx.currentTime + 0.7);
    g.gain.setValueAtTime(0.15, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.2);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.7);
    o.connect(g);
    g.connect(ctx.destination);
    o.start(ctx.currentTime);
    o.stop(ctx.currentTime + 0.7);
  });
}

function chime() {
  au();
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((fr, i) => {
    const o = ctx.createOscillator(),
      g = ctx.createGain();
    o.type = "triangle";
    o.frequency.value = fr;
    g.gain.setValueAtTime(0, ctx.currentTime + i * 0.1);
    g.gain.linearRampToValueAtTime(0.3, ctx.currentTime + i * 0.1 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.6);
    o.connect(g);
    g.connect(ctx.destination);
    o.start(ctx.currentTime + i * 0.1);
    o.stop(ctx.currentTime + i * 0.1 + 0.6);
  });
}

function fanfare() {
  au();
  const notes = [
    { f: 261.63, t: 0 },
    { f: 329.63, t: 0.15 },
    { f: 392.0, t: 0.3 },
    { f: 523.25, t: 0.45 },
    { f: 659.25, t: 0.6 },
    { f: 783.99, t: 0.75 },
    { f: 1046.5, t: 0.9, dur: 2 },
  ];
  notes.forEach((n) => {
    const dur = n.dur || 0.4;
    const o = ctx.createOscillator(),
      g = ctx.createGain(),
      f = ctx.createBiquadFilter();
    o.type = "square";
    f.type = "lowpass";
    f.frequency.setValueAtTime(2500, ctx.currentTime + n.t);
    f.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + n.t + dur);
    o.frequency.value = n.f;
    g.gain.setValueAtTime(0, ctx.currentTime + n.t);
    g.gain.linearRampToValueAtTime(0.1, ctx.currentTime + n.t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + n.t + dur);
    o.connect(f);
    f.connect(g);
    g.connect(ctx.destination);
    o.start(ctx.currentTime + n.t);
    o.stop(ctx.currentTime + n.t + dur);
  });
}

const customVoices = {
  dung: new Audio("voices/chuc_mung_ban_da_co_cau_tra_loi_chinh_xac_32f03615-d13c-4840-9959-b335191978ce.mp3"),
  sai: new Audio("voices/rat_tiec_cam_on_ban_ban_co_gang_o_lan_sau_nhe_f2a64b8e-716a-48c8-91af-6051e3b39dd7.mp3"),
  tukhoa: new Audio("voices/tuyet_voi_tu_khoa_bi_mat_cua_tro_choi_hom_nay_95433002-2a91-479c-9ab9-779d3eeb1062.mp3"),
  timeout: new Audio("chuong.mp3")
};

let currentVoice = null;
function playVoice(src, onEndedCallback) {
  stopVoice();
  if (!src) return;
  if (typeof src === "string") {
    currentVoice = new Audio(src);
  } else {
    currentVoice = src;
    currentVoice.currentTime = 0;
  }
  
  if (onEndedCallback) {
    currentVoice.onended = onEndedCallback;
  }
  
  currentVoice.play().catch(e => console.log(e));
}

function stopVoice() {
  if (currentVoice) {
    currentVoice.pause();
    currentVoice.currentTime = 0;
    currentVoice = null;
  }
}

function pop() {
  const box = $("confetti");
  const e = ["🎉", "✨", "🌟", "💫", "⭐", "🎊", "🥳"];
  for (let i = 0; i < 22; i++) {
    const s = document.createElement("span");
    s.className = "conf";
    s.textContent = e[Math.floor(Math.random() * e.length)];
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDelay = Math.random() * 0.5 + "s";
    s.style.animationDuration = 2 + Math.random() + "s";
    box.appendChild(s);
    setTimeout(() => s.remove(), 3200);
  }
}

// =============================================
//  Build Grid
// =============================================
function buildGrid() {
  grid.innerHTML = "";
  questions.forEach((q, ri) => {
    const row = document.createElement("div");
    row.className = "cw-row";
    row.style.marginLeft = `calc(${q.shift} * (var(--box) + var(--gap)))`;

    const num = document.createElement("div");
    num.className = "cw-num";
    num.textContent = q.num;
    row.appendChild(num);

    for (let i = 0; i < q.answer.length; i++) {
      const b = document.createElement("div");
      if (q.answer[i] === " ") {
        b.className = "cw-space";
        b.style.width = "var(--box)";
        b.style.height = "var(--box)";
      } else {
        b.className = "cw-box";
        if (ri === 0 || i + q.shift === 4) b.classList.add("kcol");
        b.textContent = q.answer[i];
      }
      row.appendChild(b);
    }

    row.addEventListener("click", () => pick(ri));
    grid.appendChild(row);
  });
}

// =============================================
//  Build Keyword
// =============================================
function buildKw() {
  const kwAll = $("kw-all");
  kwAll.innerHTML = "";
  const secretKeywordsVi = ["CHUYỂN ĐỘNG", "TRÒN ĐỀU"];
  const fullText = secretKeywordsVi.join(" ");
  let wordIndex = 0;
  
  fullText.split("").forEach((c, ci) => {
    if (c === " ") {
      const gap = document.createElement("div");
      // Khoảng cách giữa 2 chữ trong 1 từ hẹp, còn giữa 2 từ khóa rộng hơn
      const isWordBreak = secretKeywordsVi[0].length === ci;
      gap.className = isWordBreak ? "kw-sep" : "kw-gap";
      kwAll.appendChild(gap);
      return;
    }
    const b = document.createElement("div");
    // k1 cho từ khoá 1, k2 cho từ khoá 2
    const isK2 = ci > secretKeywordsVi[0].length;
    b.className = `kw-box ${isK2 ? "k2" : "k1"}`;
    b.textContent = c;
    kwAll.appendChild(b);
  });
}

// =============================================
//  Pick Row
// =============================================
function pick(i) {
  if (active === i) return;

  selectSound();
  stopVoice();

  active = i;
  const q = questions[i];

  document
    .querySelectorAll(".cw-row")
    .forEach((r) => r.classList.remove("active"));
  document.querySelectorAll(".cw-row")[i].classList.add("active");

  qCard.classList.add("active");
  if (q.text.includes("\n")) {
    gridCard.classList.add("q-active"); // Thu nhỏ do câu hỏi là Đoạn thơ dài
  } else {
    gridCard.classList.remove("q-active"); // Các câu ngắn vẫn giữ form khổng lồ
  }
  
  // Kích hoạt hiệu ứng mượt "Fade Switch" cho text câu hỏi
  qContent.classList.remove("fade-switch");
  void qContent.offsetWidth; // Trigger DOM reflow để restart animation
  qContent.classList.add("fade-switch");

  qNum.textContent = q.num;

  if (done[i]) {
    qText.textContent = q.text;
    btnSai.style.display = "none";
    btnDung.style.display = "none";
    qAnsText.textContent = q.displayAnswer || q.answer;
    qAnsBox.classList.remove("hidden");
  } else {
    qText.textContent = q.text;
    btnSai.style.display = "";
    btnDung.style.display = "";
    qAnsBox.classList.add("hidden");
    
    // Chuẩn bị Widget thời gian: Hiện Widget, hiển thị sẵn 20s, nút Bắt Đầu ở trạng thái Tắt/Bật tuỳ ý
    stopQuestionTimer();
    timerWidget.classList.remove("hidden");
    qTimer.textContent = "20";
    qTimer.classList.remove("warning");
    btnStartTimer.style.display = ""; // Hiện lại nút bấm Bắt Đầu

    if (q.audio) {
      setTimeout(() => {
        if (active !== i) return; // Đã chuyển câu khác thì bỏ qua
        playVoice(q.audio); // CHỈ đọc audio, KHÔNG kích hoạt thời gian nữa
      }, 500);
    }
  }

  if (q.diagram && diagrams[q.diagram]) {
    qDiagram.innerHTML = diagrams[q.diagram](done[i]);
    qDiagram.classList.remove("hidden");
    gridCard.classList.add("has-diagram");
  } else {
    qDiagram.classList.add("hidden");
    gridCard.classList.remove("has-diagram");
  }

  qBtns.classList.remove("hidden");
}

// =============================================
//  Sai
// =============================================
btnSai.addEventListener("click", () => {
  if (active < 0) return;
  stopBGM();
  stopQuestionTimer();
  au();
  buzz();
  playVoice(customVoices.sai);
  fxWrong.classList.remove("hidden");
  setTimeout(() => fxWrong.classList.add("hidden"), 1500);
});

// =============================================
//  Đúng
// =============================================
btnDung.addEventListener("click", () => {
  if (active < 0) return;
  stopBGM();
  stopQuestionTimer();
  au();
  pop();
  playClap();
  playVoice(customVoices.dung);

  const idx = active;
  const q = questions[idx];
  done[idx] = true;

  qAnsText.textContent = q.displayAnswer || q.answer;
  qAnsBox.classList.remove("hidden");

  const rowEl = document.querySelectorAll(".cw-row")[idx];
  const boxes = rowEl.querySelectorAll(".cw-box");

  boxes.forEach((b, i) => {
    setTimeout(() => {
      b.classList.add("show", "anim");
      tick();
    }, i * 90);
  });

  rowEl.classList.add("done");
  rowEl.classList.remove("active");

  fxCorrect.classList.remove("hidden");
  setTimeout(() => fxCorrect.classList.add("hidden"), 1500);

  qCard.classList.remove("active");
  qNum.textContent = "✓";
  qText.textContent = q.text;

  if (q.diagram && diagrams[q.diagram]) {
    qDiagram.innerHTML = diagrams[q.diagram](true);
    qDiagram.classList.remove("hidden");
    gridCard.classList.add("has-diagram");
  }

  // Giữ lại qBtns nhưng ẩn nút Đúng Sai đi để hiện mỗi nút Quay Lại
  btnSai.style.display = "none";
  btnDung.style.display = "none";
});

// =============================================
//  Quay Lại
// =============================================
btnBack.addEventListener("click", () => {
  if (active < 0) return;
  stopBGM();
  stopQuestionTimer();
  au();
  stopVoice();

  // Tính năng Hoàn tác (Undo): Xoá đáp án khỏi ô chữ nếu đã trả lời
  if (done[active]) {
    done[active] = false;
    const rowEl = document.querySelectorAll(".cw-row")[active];
    rowEl.classList.remove("done");
    rowEl.querySelectorAll(".cw-box").forEach((b) => {
      b.classList.remove("show", "anim");
    });
  }

  document
    .querySelectorAll(".cw-row")
    .forEach((r) => r.classList.remove("active"));
  qCard.classList.remove("active");
  qNum.textContent = "?";
  qText.textContent = "Nhấn vào một hàng ngang để xem câu hỏi";
  qDiagram.classList.add("hidden");
  gridCard.classList.remove("has-diagram");
  gridCard.classList.remove("q-active"); // Nhả grid phình to trở lại
  qBtns.classList.add("hidden");
  qAnsBox.classList.add("hidden");

  // Khôi phục lại hiển thị của 2 nút Đúng/Sai
  btnSai.style.display = "";
  btnDung.style.display = "";

  active = -1;
});

// =============================================
//  Keyword
// =============================================
let winTimeout;
let kwTimeouts = [];

btnKw.addEventListener("click", () => {
  au();
  fanfare();
  
  // Tráo đổi nút: Ẩn nút Mở, hiện nút Trở lại
  btnKw.classList.add("hidden");
  btnKwCancel.classList.remove("hidden");

  const b1 = document.querySelectorAll(".k1");
  const b2 = document.querySelectorAll(".k2");
  
  kwTimeouts = []; // Reset lưu trữ

  b1.forEach((b, i) => {
    const t = setTimeout(() => {
      b.classList.add("show", "pop");
      tick();
    }, i * 110);
    kwTimeouts.push(t);
  });

  const d = b1.length * 110 + 150;
  b2.forEach((b, i) => {
    const t = setTimeout(
      () => {
        b.classList.add("show", "pop");
        tick();
      },
      d + i * 110,
    );
    kwTimeouts.push(t);
  });

  // Mở màn hình win sau khi lật xong
  winTimeout = setTimeout(
    () => {
      winOvl.classList.remove("hidden");
      pop();
      playVoice(customVoices.tukhoa);
    },
    d + b2.length * 110 + 400,
  );
});

btnKwCancel.addEventListener("click", () => {
  au();
  // Khôi phục nút
  btnKwCancel.classList.add("hidden");
  btnKw.classList.remove("hidden");
  
  // HỦY ngay lập tức quá trình hẹn giờ mở màn hình Win!
  clearTimeout(winTimeout);
  
  // Dập tắt toàn bộ các lệnh lật ô chữ (nếu Đóng khi nó đang chạy chữ)
  kwTimeouts.forEach(t => clearTimeout(t));
  kwTimeouts = [];
  
  // Ẩn toàn bộ từ khóa
  document.querySelectorAll(".k1, .k2").forEach((b) => {
    b.classList.remove("show", "pop");
  });
});

btnCW.addEventListener("click", () => winOvl.classList.add("hidden"));

// =============================================
//  Welcome Screen
// =============================================
const welcomeScreen = document.getElementById("welcome-screen");
const btnStart = document.getElementById("btn-start");

btnStart.addEventListener("click", () => {
  selectSound();
  welcomeScreen.classList.add("fade-out");
  setTimeout(() => {
    welcomeScreen.classList.add("hidden");
  }, 650);
});

// =============================================
//  Init
// =============================================
window.addEventListener("DOMContentLoaded", () => {
  buildGrid();
  buildKw();
});
