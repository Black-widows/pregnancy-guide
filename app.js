// ===== 蔬菜水果SVG插画生成 =====
function generateVegSVG(week) {
  const svgs = {
    1: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="8" fill="#F8E8D0" stroke="#D4A574" stroke-width="1.5"/><circle cx="50" cy="50" r="4" fill="#D4A574" opacity="0.4"/></svg>`,
    2: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="10" fill="#F8E8D0" stroke="#D4A574" stroke-width="1.5"/><circle cx="48" cy="48" r="3" fill="#D4A574" opacity="0.3"/><circle cx="53" cy="52" r="2" fill="#D4A574" opacity="0.3"/></svg>`,
    3: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="52" rx="6" ry="8" fill="#F5E6D0" stroke="#C4A882" stroke-width="1.2"/><ellipse cx="50" cy="52" rx="4" ry="6" fill="#E8D4B8" opacity="0.5"/></svg>`,
    4: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="7" fill="#E8D4B8" stroke="#C4A882" stroke-width="1"/><circle cx="50" cy="50" r="3" fill="#C4A882" opacity="0.3"/></svg>`,
    5: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="52" rx="8" ry="10" fill="#8B6914" stroke="#6B4E0A" stroke-width="1.2"/><path d="M50 42 L50 48" stroke="#6B4E0A" stroke-width="1.5"/><path d="M48 44 Q50 40 52 44" fill="#4A7C3F" stroke="none"/></svg>`,
    6: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="52" rx="12" ry="8" fill="#C9A96E" stroke="#A08050" stroke-width="1.2"/><ellipse cx="50" cy="52" rx="8" ry="5" fill="#D4B87A" opacity="0.5"/><line x1="38" y1="52" x2="62" y2="52" stroke="#A08050" stroke-width="0.8" opacity="0.4"/></svg>`,
    7: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="52" r="14" fill="#4A6FA5" stroke="#3A5A8A" stroke-width="1.5"/><circle cx="46" cy="48" r="2" fill="#6B8FC5" opacity="0.6"/><circle cx="54" cy="48" r="1.5" fill="#6B8FC5" opacity="0.5"/><circle cx="50" cy="55" r="1.8" fill="#6B8FC5" opacity="0.4"/><path d="M46 38 L50 36 L54 38" fill="#4A7C3F" stroke="none"/></svg>`,
    8: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="44" cy="48" r="6" fill="#E74C3C" stroke="#C0392B" stroke-width="1"/><circle cx="56" cy="48" r="6" fill="#E74C3C" stroke="#C0392B" stroke-width="1"/><circle cx="50" cy="56" r="6" fill="#E74C3C" stroke="#C0392B" stroke-width="1"/><circle cx="44" cy="56" r="5" fill="#E74C3C" stroke="#C0392B" stroke-width="1"/><circle cx="56" cy="56" r="5" fill="#E74C3C" stroke="#C0392B" stroke-width="1"/><circle cx="50" cy="48" r="5" fill="#E74C3C" stroke="#C0392B" stroke-width="1"/><circle cx="47" cy="45" r="1.5" fill="#FF6B6B" opacity="0.6"/><circle cx="53" cy="53" r="1.5" fill="#FF6B6B" opacity="0.6"/></svg>`,
    9: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="54" r="12" fill="#E74C3C" stroke="#C0392B" stroke-width="1.2"/><circle cx="46" cy="50" r="2" fill="#FF6B6B" opacity="0.5"/><path d="M50 42 Q48 36 52 36 Q56 36 54 42" fill="#4A7C3F" stroke="none"/><path d="M50 42 Q52 36 56 38" fill="none" stroke="#4A7C3F" stroke-width="1.5"/><line x1="50" y1="42" x2="50" y2="36" stroke="#8B6914" stroke-width="1.5"/></svg>`,
    10: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 38 L38 56 Q38 68 50 70 Q62 68 62 56 Z" fill="#E74C3C" stroke="#C0392B" stroke-width="1.2"/><circle cx="46" cy="52" r="1.5" fill="#FFD700" opacity="0.6"/><circle cx="54" cy="56" r="1.5" fill="#FFD700" opacity="0.6"/><circle cx="50" cy="48" r="1.5" fill="#FFD700" opacity="0.6"/><circle cx="48" cy="62" r="1.5" fill="#FFD700" opacity="0.6"/><path d="M46 38 L50 34 L54 38" fill="#4A7C3F" stroke="none"/></svg>`,
    11: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="54" rx="14" ry="16" fill="#8B6914" stroke="#6B4E0A" stroke-width="1.2"/><ellipse cx="50" cy="58" rx="10" ry="10" fill="#A0522D" opacity="0.4"/><circle cx="48" cy="54" r="2" fill="#C0392B" opacity="0.3"/><circle cx="54" cy="58" r="1.5" fill="#C0392B" opacity="0.3"/><path d="M50 38 Q48 34 52 34 Q56 34 54 38" fill="#4A7C3F" stroke="none"/></svg>`,
    12: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="52" r="16" fill="#A8D86E" stroke="#7CB342" stroke-width="1.5"/><circle cx="46" cy="48" r="3" fill="#C5E1A5" opacity="0.5"/><circle cx="54" cy="52" r="2" fill="#C5E1A5" opacity="0.4"/><path d="M50 36 L50 40" stroke="#4A7C3F" stroke-width="2"/><path d="M46 38 Q50 34 54 38" fill="#4A7C3F" stroke="none"/></svg>`,
    13: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="52" r="18" fill="#FFB74D" stroke="#F57C00" stroke-width="1.2"/><circle cx="50" cy="52" r="18" fill="url(#peachGrad)" opacity="0.3"/><circle cx="46" cy="48" r="3" fill="#FFCC80" opacity="0.5"/><path d="M50 34 Q48 30 52 30 Q56 30 54 34" fill="#4A7C3F" stroke="none"/><defs><radialGradient id="peachGrad"><stop offset="0%" stop-color="#FFCC80"/><stop offset="100%" stop-color="#FF8A65"/></radialGradient></defs></svg>`,
    14: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="52" rx="16" ry="18" fill="#FFF176" stroke="#FBC02D" stroke-width="1.2"/><ellipse cx="46" cy="48" r="3" fill="#FFF9C4" opacity="0.5"/><path d="M50 34 L50 38" stroke="#4A7C3F" stroke-width="2"/><path d="M46 36 Q50 32 54 36" fill="#4A7C3F" stroke="none"/></svg>`,
    15: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="52" r="18" fill="#E74C3C" stroke="#C0392B" stroke-width="1.2"/><circle cx="46" cy="48" r="3" fill="#FF6B6B" opacity="0.5"/><path d="M50 34 Q48 30 52 30" fill="#4A7C3F" stroke="none"/><line x1="50" y1="34" x2="50" y2="30" stroke="#8B6914" stroke-width="1.5"/></svg>`,
    16: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="54" rx="16" ry="20" fill="#558B2F" stroke="#33691E" stroke-width="1.2"/><ellipse cx="50" cy="58" rx="12" ry="14" fill="#7CB342" opacity="0.4"/><circle cx="50" cy="62" r="8" fill="#8D6E63" stroke="none" opacity="0.6"/><circle cx="50" cy="62" r="4" fill="#5D4037" opacity="0.5"/><path d="M50 34 L50 38" stroke="#4A7C3F" stroke-width="2"/></svg>`,
    17: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 36 Q36 44 38 58 Q40 70 50 72 Q60 70 62 58 Q64 44 50 36" fill="#C8E6C9" stroke="#81C784" stroke-width="1.2"/><circle cx="46" cy="50" r="2" fill="#A5D6A7" opacity="0.5"/><path d="M50 36 Q48 32 52 32" fill="#4A7C3F" stroke="none"/><line x1="50" y1="36" x2="50" y2="32" stroke="#8B6914" stroke-width="1.5"/></svg>`,
    18: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M38 44 Q38 36 50 36 Q62 36 62 44 L62 68 Q62 72 50 72 Q38 72 38 68 Z" fill="#F44336" stroke="#D32F2F" stroke-width="1.2"/><path d="M38 44 L62 44" fill="none" stroke="#D32F2F" stroke-width="0.8" opacity="0.4"/><path d="M50 36 Q48 32 52 32" fill="#4A7C3F" stroke="none"/><line x1="50" y1="36" x2="50" y2="32" stroke="#4A7C3F" stroke-width="2"/><circle cx="46" cy="52" r="2" fill="#FFCDD2" opacity="0.5"/></svg>`,
    19: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="54" rx="18" ry="16" fill="#FFB74D" stroke="#F57C00" stroke-width="1.2"/><ellipse cx="46" cy="50" r="3" fill="#FFE0B2" opacity="0.5"/><path d="M50 38 Q48 34 52 34" fill="#4A7C3F" stroke="none"/><line x1="50" y1="38" x2="50" y2="34" stroke="#4A7C3F" stroke-width="2"/></svg>`,
    20: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M36 52 Q36 40 50 38 Q64 40 64 52 L62 68 Q60 72 50 72 Q40 72 38 68 Z" fill="#FFF176" stroke="#FBC02D" stroke-width="1.2"/><circle cx="44" cy="50" r="1.5" fill="#F57F17" opacity="0.3"/><circle cx="56" cy="54" r="1.5" fill="#F57F17" opacity="0.3"/><path d="M50 38 L50 34" stroke="#8B6914" stroke-width="2"/></svg>`,
    21: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 36 L42 80 Q42 84 50 84 Q58 84 58 80 Z" fill="#FF8F00" stroke="#E65100" stroke-width="1.2"/><path d="M46 44 L54 44" fill="none" stroke="#E65100" stroke-width="0.8" opacity="0.3"/><path d="M48 56 L52 56" fill="none" stroke="#E65100" stroke-width="0.8" opacity="0.3"/><path d="M50 36 L46 32 L50 28 L54 32 Z" fill="#4A7C3F" stroke="none"/></svg>`,
    22: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="56" rx="12" ry="20" fill="#FFF176" stroke="#FBC02D" stroke-width="1.2"/><circle cx="44" cy="48" r="4" fill="#FFD54F" stroke="#FBC02D" stroke-width="0.8"/><circle cx="56" cy="48" r="4" fill="#FFD54F" stroke="#FBC02D" stroke-width="0.8"/><circle cx="50" cy="56" r="4" fill="#FFD54F" stroke="#FBC02D" stroke-width="0.8"/><circle cx="44" cy="64" r="4" fill="#FFD54F" stroke="#FBC02D" stroke-width="0.8"/><circle cx="56" cy="64" r="4" fill="#FFD54F" stroke="#FBC02D" stroke-width="0.8"/><path d="M50 36 L46 32 L50 28 L54 32 Z" fill="#4A7C3F" stroke="none"/></svg>`,
    23: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="54" rx="20" ry="18" fill="#FFB74D" stroke="#F57C00" stroke-width="1.2"/><ellipse cx="46" cy="50" r="3" fill="#FFE0B2" opacity="0.5"/><path d="M50 36 Q48 32 52 32" fill="#4A7C3F" stroke="none"/><line x1="50" y1="36" x2="50" y2="32" stroke="#4A7C3F" stroke-width="2"/></svg>`,
    24: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="58" rx="14" ry="22" fill="#FFF176" stroke="#FBC02D" stroke-width="1.2"/><circle cx="44" cy="48" r="4" fill="#FFD54F" stroke="#FBC02D" stroke-width="0.8"/><circle cx="56" cy="48" r="4" fill="#FFD54F" stroke="#FBC02D" stroke-width="0.8"/><circle cx="50" cy="56" r="4" fill="#FFD54F" stroke="#FBC02D" stroke-width="0.8"/><circle cx="44" cy="64" r="4" fill="#FFD54F" stroke="#FBC02D" stroke-width="0.8"/><circle cx="56" cy="64" r="4" fill="#FFD54F" stroke="#FBC02D" stroke-width="0.8"/><circle cx="50" cy="40" r="4" fill="#FFD54F" stroke="#FBC02D" stroke-width="0.8"/><path d="M50 36 L46 32 L50 28 L54 32 Z" fill="#4A7C3F" stroke="none"/></svg>`,
    25: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="42" cy="46" r="8" fill="#66BB6A" stroke="#43A047" stroke-width="1"/><circle cx="58" cy="46" r="8" fill="#66BB6A" stroke="#43A047" stroke-width="1"/><circle cx="50" cy="54" r="8" fill="#66BB6A" stroke="#43A047" stroke-width="1"/><circle cx="42" cy="58" r="6" fill="#81C784" stroke="#43A047" stroke-width="1"/><circle cx="58" cy="58" r="6" fill="#81C784" stroke="#43A047" stroke-width="1"/><circle cx="50" cy="46" r="6" fill="#81C784" stroke="#43A047" stroke-width="1"/><path d="M50 36 L50 40" stroke="#4A7C3F" stroke-width="2"/></svg>`,
    26: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="54" rx="22" ry="18" fill="#C8E6C9" stroke="#81C784" stroke-width="1.2"/><ellipse cx="44" cy="50" rx="8" ry="6" fill="#A5D6A7" opacity="0.5"/><ellipse cx="56" cy="54" rx="8" ry="6" fill="#A5D6A7" opacity="0.5"/><path d="M36 54 Q50 40 64 54" fill="none" stroke="#81C784" stroke-width="1" opacity="0.5"/></svg>`,
    27: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="34" y="40" width="32" height="40" rx="16" fill="#81C784" stroke="#4CAF50" stroke-width="1.2"/><rect x="38" y="44" width="24" height="32" rx="12" fill="#C8E6C9" opacity="0.4"/><circle cx="46" cy="56" r="1.5" fill="#4CAF50" opacity="0.3"/><circle cx="54" cy="64" r="1.5" fill="#4CAF50" opacity="0.3"/><path d="M50 40 Q48 36 52 36" fill="#4A7C3F" stroke="none"/></svg>`,
    28: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="56" rx="16" ry="22" fill="#7B1FA2" stroke="#6A1B9A" stroke-width="1.2"/><ellipse cx="50" cy="56" rx="12" ry="18" fill="#9C27B0" opacity="0.3"/><path d="M50 34 Q48 30 52 30" fill="#4A7C3F" stroke="none"/><line x1="50" y1="34" x2="50" y2="30" stroke="#4A7C3F" stroke-width="2"/></svg>`,
    29: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="54" r="22" fill="#FF9800" stroke="#F57C00" stroke-width="1.2"/><path d="M34 54 Q50 38 66 54" fill="none" stroke="#E65100" stroke-width="1" opacity="0.3"/><circle cx="44" cy="50" r="3" fill="#FFB74D" opacity="0.5"/><path d="M50 32 Q48 28 52 28" fill="#4A7C3F" stroke="none"/><line x1="50" y1="32" x2="50" y2="28" stroke="#4A7C3F" stroke-width="2"/></svg>`,
    30: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="52" r="22" fill="#8D6E63" stroke="#6D4C41" stroke-width="1.5"/><circle cx="50" cy="52" r="18" fill="#D7CCC8" opacity="0.4"/><circle cx="46" cy="48" r="3" fill="#BCAAA4" opacity="0.5"/><circle cx="54" cy="48" r="2.5" fill="#BCAAA4" opacity="0.5"/><circle cx="50" cy="56" r="2" fill="#BCAAA4" opacity="0.5"/></svg>`,
    31: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="52" r="22" fill="#8D6E63" stroke="#6D4C41" stroke-width="1.5"/><circle cx="50" cy="52" r="18" fill="#D7CCC8" opacity="0.4"/><circle cx="46" cy="48" r="3" fill="#BCAAA4" opacity="0.5"/><circle cx="54" cy="48" r="2.5" fill="#BCAAA4" opacity="0.5"/><circle cx="50" cy="56" r="2" fill="#BCAAA4" opacity="0.5"/></svg>`,
    32: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="54" r="22" fill="#FFCC80" stroke="#FFB74D" stroke-width="1.2"/><path d="M34 54 Q50 36 66 54" fill="none" stroke="#FF9800" stroke-width="1.5" opacity="0.3"/><circle cx="44" cy="50" r="2" fill="#FFE0B2" opacity="0.5"/><circle cx="56" cy="58" r="2" fill="#FFE0B2" opacity="0.5"/></svg>`,
    33: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="56" rx="20" ry="22" fill="#FFB74D" stroke="#F57C00" stroke-width="1.2"/><path d="M36 44 L64 44" fill="none" stroke="#E65100" stroke-width="2" opacity="0.4"/><path d="M38 56 L62 56" fill="none" stroke="#E65100" stroke-width="1.5" opacity="0.3"/><path d="M50 34 L46 28 L50 24 L54 28 Z" fill="#4A7C3F" stroke="none"/><circle cx="46" cy="50" r="2" fill="#FFCC80" opacity="0.5"/></svg>`,
    34: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="56" rx="18" ry="20" fill="#FFB74D" stroke="#F57C00" stroke-width="1.2"/><path d="M38 44 L62 44" fill="none" stroke="#E65100" stroke-width="2" opacity="0.4"/><path d="M40 56 L60 56" fill="none" stroke="#E65100" stroke-width="1.5" opacity="0.3"/><path d="M50 36 L46 30 L50 26 L54 30 Z" fill="#4A7C3F" stroke="none"/></svg>`,
    35: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="54" r="22" fill="#C8E6C9" stroke="#81C784" stroke-width="1.2"/><path d="M34 54 Q50 36 66 54" fill="none" stroke="#66BB6A" stroke-width="1.5" opacity="0.3"/><circle cx="44" cy="50" r="2" fill="#A5D6A7" opacity="0.5"/></svg>`,
    36: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="54" rx="22" ry="18" fill="#C8E6C9" stroke="#81C784" stroke-width="1.2"/><ellipse cx="44" cy="50" rx="8" ry="6" fill="#A5D6A7" opacity="0.5"/><ellipse cx="56" cy="54" rx="8" ry="6" fill="#A5D6A7" opacity="0.5"/><path d="M36 54 Q50 40 64 54" fill="none" stroke="#81C784" stroke-width="1" opacity="0.5"/></svg>`,
    37: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="56" rx="18" ry="22" fill="#E8F5E9" stroke="#81C784" stroke-width="1.2"/><ellipse cx="50" cy="56" rx="14" ry="18" fill="#C8E6C9" opacity="0.4"/><path d="M50 34 Q48 30 52 30" fill="#4A7C3F" stroke="none"/><line x1="50" y1="34" x2="50" y2="30" stroke="#4A7C3F" stroke-width="2"/></svg>`,
    38: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="56" rx="20" ry="24" fill="#E8F5E9" stroke="#81C784" stroke-width="1.2"/><ellipse cx="50" cy="56" rx="16" ry="20" fill="#C8E6C9" opacity="0.4"/><path d="M50 32 Q48 28 52 28" fill="#4A7C3F" stroke="none"/><line x1="50" y1="32" x2="50" y2="28" stroke="#4A7C3F" stroke-width="2"/></svg>`,
    39: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="54" r="24" fill="#E74C3C" stroke="#C0392B" stroke-width="1.2"/><path d="M30 54 Q50 34 70 54" fill="none" stroke="#C0392B" stroke-width="2" opacity="0.4"/><path d="M34 60 Q50 44 66 60" fill="none" stroke="#2ECC71" stroke-width="2" opacity="0.4"/><circle cx="44" cy="50" r="2" fill="#FF6B6B" opacity="0.5"/><circle cx="56" cy="58" r="2" fill="#FF6B6B" opacity="0.5"/></svg>`,
    40: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="54" r="26" fill="#E74C3C" stroke="#C0392B" stroke-width="1.2"/><path d="M28 54 Q50 30 72 54" fill="none" stroke="#C0392B" stroke-width="2" opacity="0.4"/><path d="M32 60 Q50 40 68 60" fill="none" stroke="#2ECC71" stroke-width="2.5" opacity="0.4"/><circle cx="44" cy="48" r="2" fill="#FF6B6B" opacity="0.5"/><circle cx="56" cy="56" r="2" fill="#FF6B6B" opacity="0.5"/></svg>`
  };
  return svgs[week] || svgs[1];
}

// ===== 宝宝每周大小数据 =====
const weeklyData = [
  { week: 1, size: '受精卵', name: '第1周', detail: '受精卵形成，开始细胞分裂，沿着输卵管向子宫移动。此时还只是一个微小的细胞团。' },
  { week: 2, size: '约0.1mm', name: '第2周', detail: '受精卵着床于子宫内膜，开始发育为胚胎。胎盘开始形成。' },
  { week: 3, size: '约0.2mm 如芝麻', name: '第3周', detail: '胚胎由三个胚层组成，心脏、神经管等开始初步发育。' },
  { week: 4, size: '约1mm 如罂粟籽', name: '第4周', detail: '心脏开始跳动！大脑和脊柱正在发育，胚芽长约1毫米。' },
  { week: 5, size: '约2mm 如苹果籽', name: '第5周', detail: '手臂和腿的芽体开始出现，面部特征初步形成，心脏已分为四个腔室。' },
  { week: 6, size: '约5mm 如扁豆', name: '第6周', detail: '面部特征更加明显，手指和脚趾开始分化，大脑快速发育。' },
  { week: 7, size: '约1.3cm 如蓝莓', name: '第7周', detail: '四肢在生长，眼睑形成，嘴巴和鼻子更加清晰，尾巴逐渐消失。' },
  { week: 8, size: '约1.6cm 如覆盆子', name: '第8周', detail: '所有主要器官开始形成，手指间蹼膜消失，开始有细微动作。' },
  { week: 9, size: '约2.3cm 如樱桃', name: '第9周', detail: '从胚胎正式称为"胎儿"，外生殖器开始发育，可以做出细微动作。' },
  { week: 10, size: '约3.1cm 如草莓', name: '第10周', detail: '重要器官已基本形成并开始工作，指甲开始生长，骨骼开始硬化。' },
  { week: 11, size: '约4.1cm 如无花果', name: '第11周', detail: '胎儿可以打嗝、伸展、吸吮手指，牙齿开始在牙龈下发育。' },
  { week: 12, size: '约5.4cm 如青柠', name: '第12周', detail: '反射动作出现，肾脏开始产生尿液，声带形成。孕早期结束！' },
  { week: 13, size: '约7.4cm 如桃子', name: '第13周', detail: '进入孕中期！指纹形成，声带发育完成，胎儿可以做面部表情。' },
  { week: 14, size: '约8.7cm 如柠檬', name: '第14周', detail: '胎儿开始长出细小的胎毛（绒毛），可以感受到光线变化。' },
  { week: 15, size: '约10.1cm 如苹果', name: '第15周', detail: '骨骼进一步硬化，胎儿可以吞咽羊水，腿开始比手臂长。' },
  { week: 16, size: '约11.6cm 如牛油果', name: '第16周', detail: '妈妈可能开始感受到胎动！胎儿的眼睛可以感知光线。' },
  { week: 17, size: '约13cm 如梨', name: '第17周', detail: '脂肪开始沉积，脐带变得更加粗壮有力，胎儿心跳更有力。' },
  { week: 18, size: '约14.2cm 如甜椒', name: '第18周', detail: '胎儿开始听到外界声音，可能会被响声惊醒，开始有睡眠周期。' },
  { week: 19, size: '约15.3cm 如芒果', name: '第19周', detail: '皮肤被一层白色胎脂覆盖保护，感官开始快速发育。' },
  { week: 20, size: '约25cm（含腿）如香蕉', name: '第20周', detail: '孕期过半！胎儿可以听到妈妈的声音，吞咽更多羊水。' },
  { week: 21, size: '约26.7cm 如胡萝卜', name: '第21周', detail: '胎儿开始有规律的作息，运动和睡眠交替进行。眉毛和头发可见。' },
  { week: 22, size: '约27.8cm 如玉米', name: '第22周', detail: '肺部开始产生表面活性物质，为呼吸做准备。眼睛已完全形成。' },
  { week: 23, size: '约28.9cm 如大芒果', name: '第23周', detail: '皮肤仍然是半透明的，皮下脂肪在增加，肺部血管在发育。' },
  { week: 24, size: '约30cm 如玉米穗', name: '第24周', detail: '面部特征完全清晰，眉毛和睫毛明显，大脑快速发育。' },
  { week: 25, size: '约34.6cm 如花椰菜', name: '第25周', detail: '胎儿可以对声音做出反应，开始长出更多的头发。' },
  { week: 26, size: '约35.6cm 如生菜', name: '第26周', detail: '眼睛可以睁开，睫毛已长好，肺部仍在继续成熟。' },
  { week: 27, size: '约36.6cm 如黄瓜', name: '第27周', detail: '孕中期最后一个月！胎儿开始有规律地打嗝，大脑更加活跃。' },
  { week: 28, size: '约37.6cm 如大茄子', name: '第28周', detail: '进入孕晚期！胎儿可以做梦了，眼睛可以开合，呼吸动作练习中。' },
  { week: 29, size: '约38.6cm 如南瓜', name: '第29周', detail: '胎儿肌肉和肺部继续发育，大脑和神经系统进一步成熟。' },
  { week: 30, size: '约39.9cm 如椰子', name: '第30周', detail: '胎儿体重增长加快，皮下脂肪增加，皮肤变得更加光滑。' },
  { week: 31, size: '约41.1cm 如椰子', name: '第31周', detail: '胎儿的所有五种感觉都已发育，大脑连接数十亿个神经细胞。' },
  { week: 32, size: '约42.4cm 如哈密瓜', name: '第32周', detail: '胎儿指甲长到指尖，皮下脂肪层使皮肤从半透明变为不透明。' },
  { week: 33, size: '约43.7cm 如大菠萝', name: '第33周', detail: '骨骼继续硬化（但头骨保持柔软以便分娩），免疫系统发育中。' },
  { week: 34, size: '约45cm 如菠萝', name: '第34周', detail: '胎儿的中枢神经系统和肺部继续成熟，皮下脂肪继续积累。' },
  { week: 35, size: '约46.2cm 如蜜瓜', name: '第35周', detail: '胎儿大部分身体发育完成，肾脏完全发育，肝脏可以处理废物。' },
  { week: 36, size: '约47.4cm 如生菜头', name: '第36周', detail: '胎儿开始入盆，准备分娩位置。指甲超过了指尖。' },
  { week: 37, size: '约48.6cm 如冬瓜', name: '第37周', detail: '胎儿被认为是早期足月，器官已成熟，可以自主呼吸。' },
  { week: 38, size: '约49.8cm 如大冬瓜', name: '第38周', detail: '胎儿继续积累脂肪，抓握力很强，为出生做最后准备。' },
  { week: 39, size: '约50.7cm 如西瓜', name: '第39周', detail: '完全足月！所有器官已成熟，胎儿准备好来到这个世界。' },
  { week: 40, size: '约51.2cm 如大西瓜', name: '第40周', detail: '预产期！宝宝随时可能降临。平均体重约3.4kg，身长约51cm。' },
];

// ===== 孕期营养数据 =====
const nutritionData = {
  nut1: {
    title: '孕早期饮食 (1-12周)',
    desc: '此时胎儿很小，不需要额外增加热量，重点在于均衡营养和补充关键营养素。',
    sections: [
      { title: '🔑 关键营养素', items: [
        { icon: '💊', name: '叶酸', desc: '每天400-800微克，预防神经管缺陷。多吃深绿色蔬菜、豆类。' },
        { icon: '🥩', name: '铁', desc: '预防贫血，多吃红肉、菠菜、黑木耳，搭配维C促进吸收。' },
        { icon: '🥛', name: '钙', desc: '每天800-1000mg，牛奶、豆腐、芝麻等富含钙质。' },
        { icon: '🐟', name: 'DHA', desc: '促进大脑发育，每周吃2-3次深海鱼，或补充鱼油。' },
      ]},
      { title: '🍽️ 推荐食物', items: [
        { icon: '🥬', name: '绿叶蔬菜', desc: '菠菜、西兰花、芦笋，富含叶酸和多种维生素。' },
        { icon: '🥚', name: '鸡蛋', desc: '优质蛋白来源，每天1-2个，含卵磷脂促进胎儿大脑发育。' },
        { icon: '🫘', name: '豆制品', desc: '豆腐、豆浆，富含植物蛋白和钙质。' },
        { icon: '🥜', name: '坚果', desc: '核桃、杏仁等，每天一小把，补充不饱和脂肪酸。' },
        { icon: '🍊', name: '新鲜水果', desc: '柑橘类、猕猴桃富含维C，苹果助消化。' },
        { icon: '🍠', name: '全谷物', desc: '糙米、燕麦、全麦面包，提供B族维生素和膳食纤维。' },
      ]}
    ]
  },
  nut2: {
    title: '孕中期饮食 (13-27周)',
    desc: '胎儿快速生长，妈妈每天需额外摄入约300千卡热量，蛋白质需求增加。',
    sections: [
      { title: '🔑 关键营养素', items: [
        { icon: '🥩', name: '蛋白质', desc: '每天增加15g，鱼肉蛋奶豆类均衡摄入。' },
        { icon: '🦴', name: '钙 + 维生素D', desc: '每天需1000mg钙，适当晒太阳促进维D合成。' },
        { icon: '🩸', name: '铁', desc: '每天24-29mg，配合维C促进吸收，预防孕期贫血。' },
        { icon: '🧠', name: 'DHA', desc: '每天200-300mg，促进胎儿大脑和视网膜发育。' },
      ]},
      { title: '🍽️ 推荐食物', items: [
        { icon: '🐟', name: '鱼类', desc: '三文鱼、鲈鱼等低汞鱼类，每周2-3次，每次100-150g。' },
        { icon: '🥩', name: '瘦肉', desc: '牛肉、猪瘦肉、鸡肉，富含铁和优质蛋白。' },
        { icon: '🥛', name: '奶制品', desc: '牛奶、酸奶，每天300-500ml，补钙首选。' },
        { icon: '🥚', name: '鸡蛋', desc: '每天1-2个，提供优质蛋白和卵磷脂。' },
        { icon: '🥦', name: '深色蔬菜', desc: '每天300-500g蔬菜，深色蔬菜占一半以上。' },
        { icon: '🍎', name: '水果', desc: '每天200-400g，注意控制高糖水果摄入量。' },
      ]}
    ]
  },
  nut3: {
    title: '孕晚期饮食 (28-40周)',
    desc: '胎儿体重增长最快时期，需控制总热量避免过大儿，注重高蛋白低糖饮食。',
    sections: [
      { title: '🔑 关键营养素', items: [
        { icon: '🥩', name: '优质蛋白', desc: '每天增加至85g，支持胎儿快速增重。' },
        { icon: '🦴', name: '钙', desc: '每天1200mg，为胎儿骨骼钙化提供充足原料。' },
        { icon: '🩸', name: '铁', desc: '每天29mg，为分娩储备铁质，预防产后贫血。' },
        { icon: '🧂', name: '膳食纤维', desc: '预防便秘，多吃蔬菜水果和全谷物。' },
      ]},
      { title: '🍽️ 推荐食物', items: [
        { icon: '🥩', name: '高蛋白食物', desc: '鱼虾、瘦肉、鸡蛋、奶类、豆制品均衡搭配。' },
        { icon: '🥬', name: '蔬菜', desc: '每天500g以上，膳食纤维预防便秘，控制血糖。' },
        { icon: '🍠', name: '粗粮', desc: '红薯、糙米、燕麦，有助于控制血糖和体重。' },
        { icon: '🥛', name: '奶类', desc: '每天500ml，睡前一杯热牛奶还有助于睡眠。' },
        { icon: '🫛', name: '豆类', desc: '红豆、绿豆、黑豆，富含铁和膳食纤维。' },
        { icon: '💧', name: '充足饮水', desc: '每天1700-1900ml，少量多次饮用。' },
      ]}
    ]
  }
};

// ===== 每周指南数据 =====
const weeklyGuideData = {
  1: { mom: ['月经周期开始计算孕期', '身体尚无明显变化', '开始注意补充叶酸'], check: ['确认月经周期', '开始服用叶酸（400-800微克/天）'] },
  2: { mom: ['排卵期前后', '可能有轻微腹部不适', '保持良好作息'], check: ['继续补充叶酸', '如计划怀孕，可开始监测排卵'] },
  3: { mom: ['受精卵着床', '可能有少量着床出血', '乳房开始变得敏感'], check: ['继续补充叶酸', '避免剧烈运动'] },
  4: { mom: ['月经推迟，可验孕', '乳房胀痛加重', '开始出现疲劳感'], check: ['验孕确认（血HCG）', '开始建立孕期档案'] },
  5: { mom: ['恶心呕吐开始出现', '尿频明显', '情绪波动增大'], check: ['血HCG和孕酮检测', 'B超确认宫内妊娠'] },
  6: { mom: ['晨吐加重', '嗅觉变得敏感', '容易疲劳嗜睡'], check: ['第一次B超：确认胎心胎芽', '血常规检查'] },
  7: { mom: ['恶心持续', '食欲变化明显', '唾液增多'], check: ['继续观察', '如有出血及时就医'] },
  8: { mom: ['子宫增大如橙子', '腹部轻微隆起', '可能有便秘'], check: ['尿常规检查', '肝功能检查'] },
  9: { mom: ['恶心可能达到高峰', '腹部略有膨胀', '乳房持续增大'], check: ['血型检测（ABO+Rh）', '传染病筛查'] },
  10: { mom: ['恶心开始缓解', '精力逐渐恢复', '腰围开始增大'], check: ['血常规复查', '甲状腺功能检查'] },
  11: { mom: ['早孕反应减轻', '情绪趋于稳定', '皮肤可能变暗沉'], check: ['预约NT检查', '心电图检查'] },
  12: { mom: ['子宫如拳头大小', '腹部隆起更明显', '精力明显恢复'], check: ['NT检查（11-13+6周）', '早期唐氏筛查', 'B超测量胎儿颈项透明层'] },
  13: { mom: ['进入孕中期', '恶心基本消失', '食欲恢复增加'], check: ['无创DNA（如需要）', '常规产检'] },
  14: { mom: ['精力充沛', '腹部明显隆起', '可能出现鼻塞'], check: ['常规产检：血压、体重、宫高', '尿常规'] },
  15: { mom: ['可能感受到第一次胎动', '皮肤色素沉着', '头发变浓密'], check: ['中期唐氏筛查（15-20周）', '血常规'] },
  16: { mom: ['胎动逐渐明显', '腹部快速增大', '可能出现腰背痛'], check: ['产检常规项目', 'B超（如需要）'] },
  17: { mom: ['胎动更频繁', '韧带拉伸引起腹痛', '可能有静脉曲张'], check: ['常规产检', '血压监测'] },
  18: { mom: ['食欲大增', '体重增长加快', '可能出现腿抽筋'], check: ['产检常规项目', '补充钙剂'] },
  19: { mom: ['腹部明显突出', '皮肤瘙痒', '可能有色素沉着'], check: ['常规产检', '预约大排畸'] },
  20: { mom: ['孕期过半', '胎动规律化', '子宫底平脐'], check: ['大排畸彩超（20-24周）', '详细检查胎儿各器官'] },
  21: { mom: ['可能出现妊娠纹', '脚部水肿开始', '呼吸略感急促'], check: ['常规产检', '尿常规'] },
  22: { mom: ['腹部持续增大', '韧带疼痛加重', '可能有胃灼热'], check: ['产检常规项目', '血压体重监测'] },
  23: { mom: ['胎动更有力', '可能出现痔疮', '手脚水肿'], check: ['常规产检', '血常规'] },
  24: { mom: ['子宫如足球大小', '腰背疼痛加重', '皮肤拉伸瘙痒'], check: ['糖耐量检测（OGTT，24-28周）', '血常规'] },
  25: { mom: ['呼吸更加困难', '可能出现腕管综合征', '情绪波动'], check: ['常规产检', '尿常规'] },
  26: { mom: ['腹部沉重感', '睡眠质量下降', '频繁起夜'], check: ['产检常规项目', 'B超评估胎儿发育'] },
  27: { mom: ['孕中期最后一周', '可能出现假性宫缩', '水肿加重'], check: ['常规产检', '复查血常规'] },
  28: { mom: ['进入孕晚期', '子宫底在脐上', '呼吸更费力'], check: ['开始每两周产检一次', '乙肝抗体检测', '开始胎动计数'] },
  29: { mom: ['胎动更加活跃', '胃部受压感', '可能出现耻骨疼痛'], check: ['常规产检', '尿常规'] },
  30: { mom: ['腹部很大', '行动不便', '可能有便秘加重'], check: ['B超评估胎位和大小', '血常规'] },
  31: { mom: ['可能有不规律宫缩', '乳房可能分泌初乳', '腰背痛加剧'], check: ['常规产检', '胎心监护（如需要）'] },
  32: { mom: ['子宫底达到最高点', '呼吸最困难时期', '严重尿频'], check: ['胎心监护开始', 'B超评估胎位', 'GBS筛查准备'] },
  33: { mom: ['胎儿入盆（初产妇）', '呼吸稍有改善', '膀胱压力增大'], check: ['胎心监护', '常规产检'] },
  34: { mom: ['腹部有下坠感', '可能有少量乳汁分泌', '疲劳感加重'], check: ['胎心监护', 'B超评估胎儿体重'] },
  35: { mom: ['胎儿下降感明显', '骨盆压迫感', '行动更加不便'], check: ['胎心监护', '产检：评估分娩方式'] },
  36: { mom: ['胎儿入盆（经产妇）', '宫缩可能更频繁', '精力下降'], check: ['每周产检开始', '胎心监护', 'B超评估胎位和大小'] },
  37: { mom: ['随时可能分娩', '宫缩不规律', '可能有"见红"'], check: ['胎心监护', '产检：评估宫颈条件', 'GBS（B族链球菌）筛查'] },
  38: { mom: ['胎儿完全成熟', '行动非常不便', '可能出现产前焦虑'], check: ['胎心监护', '产检：确认分娩计划'] },
  39: { mom: ['随时待产', '宫缩可能加重', '可能有破水'], check: ['胎心监护', '产检：评估是否需要催产'] },
  40: { mom: ['预产期', '密切关注胎动', '准备待产包'], check: ['胎心监护', '产检：评估是否需要催产', '如超过41周需住院观察'] },
};

// ===== 胎教数据 =====
const prenatalEduData = {
  1: { method: ['保持心情愉悦，为宝宝创造良好的孕育环境', '规律作息，早睡早起'], music: ['轻柔钢琴曲《月光》德彪西', '自然白噪音（雨声、海浪声）'], notes: ['避免接触有害化学物质', '远离二手烟环境', '不要随意服用药物'] },
  2: { method: ['每天散步20-30分钟', '听舒缓音乐放松心情'], music: ['《小星星变奏曲》莫扎特', '轻音乐《春江花月夜》'], notes: ['避免过度劳累', '保持情绪稳定', '远离噪音环境'] },
  3: { method: ['开始胎教日记，记录心情和感受', '阅读优美的诗歌或散文'], music: ['《致爱丽丝》贝多芬', '《梁祝》小提琴协奏曲'], notes: ['避免剧烈运动和重体力劳动', '保持充足睡眠', '远离电磁辐射'] },
  4: { method: ['轻声对宝宝说话、唱歌', '每天保持30分钟音乐胎教', '开始阅读育儿书籍'], music: ['《摇篮曲》勃拉姆斯', '《蓝色多瑙河》施特劳斯', '轻柔儿歌《小燕子》'], notes: ['音量不宜过大，控制在60分贝以下', '避免长时间使用耳机', '保持心情愉快'] },
  5: { method: ['每天固定时间与宝宝对话', '用手轻轻抚摸腹部', '听音乐时可以跟着哼唱'], music: ['《G大调小步舞曲》贝多芬', '《茉莉花》中国民歌', '轻音乐《渔舟唱晚》'], notes: ['避免接触宠物粪便', '注意饮食卫生', '远离噪音和震动'] },
  6: { method: ['继续每天的音乐胎教', '朗读优美的故事或诗歌', '保持适度运动如散步'], music: ['《土耳其进行曲》莫扎特', '《高山流水》古琴曲', '自然音乐《森林鸟鸣》'], notes: ['避免去人多嘈杂的场所', '注意保暖防感冒', '不要长时间站立'] },
  7: { method: ['与宝宝分享每天的生活', '轻拍腹部与宝宝互动', '保持愉快的社交活动'], music: ['《月光奏鸣曲》贝多芬', '《二泉映月》二胡曲', '轻音乐《秋日私语》'], notes: ['避免接触油漆等化学物品', '注意口腔卫生', '保持室内通风'] },
  8: { method: ['每天定时播放胎教音乐', '给宝宝讲简单的故事', '做孕妇瑜伽放松身心'], music: ['《卡农》帕赫贝尔', '《春之声圆舞曲》', '中国古典音乐《平沙落雁》'], notes: ['避免久坐不动', '注意补充水分', '避免情绪大幅波动'] },
  9: { method: ['增加与宝宝的语言互动', '触摸腹部感受宝宝', '欣赏艺术作品和美景'], music: ['《小夜曲》莫扎特', '《彩云追月》广东音乐', '胎教音乐《宝宝的梦》'], notes: ['避免接触染发剂', '注意休息不要熬夜', '远离嘈杂环境'] },
  10: { method: ['坚持每天的胎教时间', '给宝宝唱儿歌', '保持心情平和愉悦'], music: ['《G弦上的咏叹调》巴赫', '《渔光曲》中国歌曲', '轻音乐《童年》'], notes: ['避免长时间看手机电脑', '注意均衡饮食', '适当户外活动晒太阳'] },
  11: { method: ['与准爸爸一起进行胎教', '给宝宝读绘本故事', '听不同风格的音乐'], music: ['《四季·春》维瓦尔第', '《茉莉花》江苏民歌版', '《梦幻曲》舒曼'], notes: ['避免搬运重物', '注意个人卫生', '保持适度活动'] },
  12: { method: ['坚持语言胎教，每天对话10-15分钟', '轻柔按摩腹部', '保持规律的胎教作息'], music: ['《胡桃夹子组曲》柴可夫斯基', '《十面埋伏》琵琶曲', '《小星星》英文版'], notes: ['避免去空气不流通的地方', '注意监测体重变化', '如有不适及时就医'] },
  13: { method: ['进入孕中期，胎教可更丰富', '增加互动式胎教（轻拍、抚摸）', '给宝宝讲故事、读诗词'], music: ['《天鹅湖》柴可夫斯基', '《百鸟朝凤》唢呐曲', '《摇篮曲》舒伯特'], notes: ['避免长时间弯腰', '注意补钙补铁', '可以开始准备孕妇瑜伽'] },
  14: { method: ['每天与宝宝互动20分钟', '播放不同类型的音乐', '准爸爸参与胎教对话'], music: ['《命运交响曲》贝多芬', '《渔舟唱晚》古筝版', '《小夜曲》舒伯特'], notes: ['避免高处作业', '注意防晒', '保持心情愉快'] },
  15: { method: ['宝宝开始能听到声音，增加声音刺激', '用温柔的声音讲故事', '轻柔按摩腹部促进触觉发育'], music: ['《春江花月夜》琵琶版', '《梦幻曲》舒曼', '《宝贝》张悬'], notes: ['避免穿高跟鞋', '注意睡姿（建议左侧卧）', '适当进行散步运动'] },
  16: { method: ['宝宝对光线有反应，可以用手电筒轻照腹部', '继续语言和音乐胎教', '与宝宝分享美好的事物'], music: ['《蓝色多瑙河》施特劳斯', '《梁祝》钢琴版', '《小幸运》田馥甄'], notes: ['避免长时间站立', '注意补充蛋白质', '保持充足睡眠'] },
  17: { method: ['增加与宝宝的互动频率', '给宝宝读唐诗宋词', '播放节奏明快的音乐'], music: ['《土耳其进行曲》莫扎特', '《赛马》二胡曲', '《虫儿飞》儿歌'], notes: ['避免情绪紧张焦虑', '注意补钙预防腿抽筋', '适当进行游泳运动'] },
  18: { method: ['宝宝能听到外界声音，多与宝宝交流', '播放有节奏感的音乐', '准爸爸讲故事给宝宝听'], music: ['《拉德茨基进行曲》', '《高山流水》古琴版', '《宝贝宝贝》樊桐舟'], notes: ['避免接触二手烟', '注意控制体重增长', '定期产检'] },
  19: { method: ['感官发育期，多方位刺激', '触摸不同质感的物品并描述给宝宝', '听不同风格的音乐'], music: ['《月光》德彪西', '《二泉映月》二胡版', '《亲亲我的宝贝》周华健'], notes: ['避免去嘈杂的商场', '注意皮肤保湿', '适当补充DHA'] },
  20: { method: ['孕期过半，胎教进入黄金期', '每天固定时间进行胎教', '增加互动游戏（轻拍回应）'], music: ['《致爱丽丝》贝多芬', '《茉莉花》民乐合奏', '《听妈妈的话》周杰伦'], notes: ['避免长时间坐姿不动', '注意补充铁质', '可以开始准备婴儿用品'] },
  21: { method: ['规律作息建立宝宝生物钟', '给宝宝唱固定的歌曲', '保持每天的胎教时间'], music: ['《小步舞曲》贝多芬', '《彩云追月》广东音乐', '《世上只有妈妈好》'], notes: ['避免接触洗涤剂', '注意补充膳食纤维', '适当进行孕妇瑜伽'] },
  22: { method: ['宝宝眼睛已形成，可以用光照刺激', '继续语言和音乐胎教', '与宝宝分享日常生活'], music: ['《卡农》帕赫贝尔', '《春江花月夜》民乐版', '《宝贝》张悬'], notes: ['避免久站久坐', '注意监测血压', '保持心情愉悦'] },
  23: { method: ['增加触觉胎教，轻柔按摩', '给宝宝描述看到的事物', '播放古典音乐'], music: ['《四季·夏》维瓦尔第', '《十面埋伏》琵琶版', '《摇篮曲》勃拉姆斯'], notes: ['避免情绪波动过大', '注意补充钙质', '适当散步运动'] },
  24: { method: ['宝宝大脑快速发育，加强语言刺激', '每天讲故事、读诗歌', '播放优美旋律的音乐'], music: ['《G大调小步舞曲》贝多芬', '《渔光曲》中国歌曲', '《小星星》中文版'], notes: ['避免接触有害物质', '注意控制血糖', '定期产检'] },
  25: { method: ['宝宝对声音反应更明显', '用不同声调与宝宝交流', '增加互动式胎教游戏'], music: ['《胡桃夹子》柴可夫斯基', '《百鸟朝凤》唢呐版', '《虫儿飞》钢琴版'], notes: ['避免过度劳累', '注意补充蛋白质', '保持充足睡眠'] },
  26: { method: ['继续规律的胎教作息', '给宝宝描述颜色和形状', '准爸爸参与讲故事'], music: ['《月光奏鸣曲》贝多芬', '《赛马》二胡版', '《宝贝宝贝》儿歌'], notes: ['避免长时间使用电子设备', '注意补铁补钙', '适当进行游泳运动'] },
  27: { method: ['孕中期最后一周，保持胎教频率', '与宝宝进行更多互动', '播放轻松愉快的音乐'], music: ['《小夜曲》莫扎特', '《茉莉花》合唱版', '《小幸运》田馥甄'], notes: ['避免情绪紧张', '注意休息和睡眠', '准备进入孕晚期'] },
  28: { method: ['进入孕晚期，胎教更加重要', '增加光照胎教（手电筒轻照）', '每天与宝宝对话30分钟'], music: ['《命运交响曲》贝多芬', '《高山流水》古琴版', '《亲亲我的宝贝》周华健'], notes: ['避免长途旅行', '注意监测胎动', '准备待产包'] },
  29: { method: ['宝宝大脑神经连接增多，加强刺激', '播放多种类型的音乐', '给宝宝讲更复杂的故事'], music: ['《天鹅湖》柴可夫斯基', '《平沙落雁》古琴版', '《听妈妈的话》周杰伦'], notes: ['避免长时间站立', '注意补充营养', '定期产检'] },
  30: { method: ['继续每天的胎教时间', '与宝宝分享家庭生活', '轻柔按摩促进亲子连接'], music: ['《春之声圆舞曲》', '《二泉映月》二胡版', '《世上只有妈妈好》'], notes: ['避免剧烈运动', '注意控制体重', '保持心情平和'] },
  31: { method: ['五感已发育完全，全方位胎教', '触摸、声音、光照综合刺激', '给宝宝描述未来的美好'], music: ['《卡农》帕赫贝尔', '《渔舟唱晚》古筝版', '《宝贝》张悬'], notes: ['避免情绪焦虑', '注意补充DHA', '适当散步运动'] },
  32: { method: ['加强语言胎教，多与宝宝交流', '播放固定的安抚音乐', '准爸爸每天讲故事'], music: ['《月光》德彪西', '《茉莉花》民乐版', '《摇篮曲》舒伯特'], notes: ['避免去人多的地方', '注意监测胎动和宫缩', '准备分娩知识'] },
  33: { method: ['宝宝入盆后继续胎教', '用温柔的声音安抚宝宝', '保持规律的胎教作息'], music: ['《小夜曲》舒伯特', '《彩云追月》广东音乐', '《小星星变奏曲》莫扎特'], notes: ['避免长途出行', '注意休息和营养', '学习分娩呼吸法'] },
  34: { method: ['继续每天的胎教互动', '给宝宝唱安抚歌曲', '保持心情愉悦和放松'], music: ['《致爱丽丝》贝多芬', '《渔光曲》中国歌曲', '《宝贝宝贝》樊桐舟'], notes: ['避免过度劳累', '注意补充铁质', '定期产检'] },
  35: { method: ['宝宝已基本发育完全', '继续语言和音乐胎教', '与宝宝建立情感连接'], music: ['《G弦上的咏叹调》巴赫', '《百鸟朝凤》唢呐版', '《虫儿飞》儿歌'], notes: ['避免情绪紧张', '注意监测胎动', '准备待产物品'] },
  36: { method: ['随时可能分娩，保持平静', '继续轻柔的胎教', '给宝宝安全感和爱'], music: ['《摇篮曲》勃拉姆斯', '《茉莉花》合唱版', '《亲亲我的宝贝》周华健'], notes: ['避免独自外出', '注意休息和睡眠', '学习拉玛泽呼吸法'] },
  37: { method: ['足月宝宝，继续安抚式胎教', '用温柔的声音与宝宝交流', '播放舒缓的音乐'], music: ['《月光奏鸣曲》贝多芬', '《春江花月夜》民乐版', '《听妈妈的话》周杰伦'], notes: ['随时准备去医院', '注意宫缩和破水信号', '保持冷静和信心'] },
  38: { method: ['宝宝随时降生，保持愉悦心情', '继续每天的胎教时间', '给宝宝讲述家人的期待'], music: ['《小夜曲》莫扎特', '《高山流水》古琴版', '《世上只有妈妈好》'], notes: ['避免焦虑和紧张', '注意休息', '确认待产包已准备好'] },
  39: { method: ['保持平静和耐心', '继续轻柔的音乐胎教', '与宝宝说悄悄话'], music: ['《四季·春》维瓦尔第', '《茉莉花》民乐合奏', '《宝贝》张悬'], notes: ['注意胎动变化', '如有规律宫缩及时就医', '保持体力准备分娩'] },
  40: { method: ['预产期！保持积极心态', '继续与宝宝交流', '给宝宝讲述即将到来的见面'], music: ['《致爱丽丝》贝多芬', '《摇篮曲》舒伯特', '《小幸运》田馥甄'], notes: ['密切关注胎动', '如超过41周及时就医', '相信自己，迎接新生命！'] },
};

// ===== 分类标记 =====
function getWeekTrimester(week) {
  if (week <= 12) return 0;
  if (week <= 27) return 1;
  return 2;
}

const tabMap = { 't1-weeks': 0, 't2-weeks': 1, 't3-weeks': 2 };
const guideTabMap = { 'g1': 0, 'g2': 1, 'g3': 2 };
const eduTabMap = { 'e1': 0, 'e2': 1, 'e3': 2 };

// ===== 渲染每周指南 =====
function renderGuide(trimesterIndex) {
  const timeline = document.getElementById('guide-timeline');
  const startWeek = trimesterIndex * 13 + 1;
  const endWeek = Math.min(startWeek + 11 + (trimesterIndex === 2 ? 1 : 0), 40);
  const badgeClass = trimesterIndex === 0 ? 'badge-t1' : trimesterIndex === 1 ? 'badge-t2' : 'badge-t3';
  const badgeText = trimesterIndex === 0 ? '孕早期' : trimesterIndex === 1 ? '孕中期' : '孕晚期';

  let html = '';
  for (let w = startWeek; w <= endWeek; w++) {
    const data = weeklyGuideData[w];
    if (!data) continue;
    html += `
      <div class="guide-week">
        <div class="guide-week-left">
          <div class="guide-week-num">第${w}周</div>
        </div>
        <div class="guide-week-content">
          <div class="guide-week-title">
            第${w}周
            <span class="week-badge ${badgeClass}">${badgeText}</span>
          </div>
          <div class="guide-columns">
            <div class="guide-col col-mom">
              <h4>👩 妈妈的变化</h4>
              <ul>${data.mom.map(m => `<li>${m}</li>`).join('')}</ul>
            </div>
            <div class="guide-col col-check">
              <h4>🏥 检查项目</h4>
              <ul>${data.check.map(c => `<li>${c}</li>`).join('')}</ul>
            </div>
          </div>
        </div>
      </div>`;
  }
  timeline.innerHTML = html;
}

// ===== 渲染胎教内容 =====
function renderEdu(trimesterIndex) {
  const container = document.getElementById('edu-timeline');
  const startWeek = trimesterIndex * 13 + 1;
  const endWeek = Math.min(startWeek + 11 + (trimesterIndex === 2 ? 1 : 0), 40);
  const badgeClass = trimesterIndex === 0 ? 'badge-t1' : trimesterIndex === 1 ? 'badge-t2' : 'badge-t3';
  const badgeText = trimesterIndex === 0 ? '孕早期' : trimesterIndex === 1 ? '孕中期' : '孕晚期';

  let html = '';
  for (let w = startWeek; w <= endWeek; w++) {
    const data = prenatalEduData[w];
    if (!data) continue;
    html += `
      <div class="guide-week">
        <div class="guide-week-left">
          <div class="guide-week-num">第${w}周</div>
        </div>
        <div class="guide-week-content edu-content">
          <div class="guide-week-title">
            第${w}周 胎教
            <span class="week-badge ${badgeClass}">${badgeText}</span>
          </div>
          <div class="edu-sections">
            <div class="edu-section">
              <h4>🤱 胎教方式</h4>
              <ul>${data.method.map(m => `<li>${m}</li>`).join('')}</ul>
            </div>
            <div class="edu-section">
              <h4>🎵 推荐音乐</h4>
              <ul>${data.music.map(m => `<li>${m}</li>`).join('')}</ul>
            </div>
            <div class="edu-section">
              <h4>⚠️ 注意事项</h4>
              <ul>${data.notes.map(n => `<li>${n}</li>`).join('')}</ul>
            </div>
          </div>
        </div>
      </div>`;
  }
  container.innerHTML = html;
}

// ===== 渲染周卡 =====
function renderWeeks(trimesterIndex) {
  const grid = document.getElementById('week-grid');
  const filtered = weeklyData.filter(w => getWeekTrimester(w.week) === trimesterIndex);
  grid.innerHTML = filtered.map(w => `
    <div class="week-card">
      <div class="week-header">
        <div class="baby-svg-wrap">${generateVegSVG(w.week)}</div>
        <div class="week-info">
          <h3>${w.name}</h3>
          <span class="week-size">约 ${w.size}</span>
        </div>
      </div>
      <p class="week-detail">${w.detail}</p>
    </div>
  `).join('');
}

// ===== 渲染营养内容 =====
function renderNutrition(key) {
  const data = nutritionData[key];
  const container = document.getElementById('nutrition-content');
  let html = `<div class="nut-section-title">📌 ${data.title}</div>`;
  html += `<p style="color:var(--text-light);margin-bottom:24px;font-size:0.95rem;">${data.desc}</p>`;
  data.sections.forEach(sec => {
    html += `<div class="nut-section-title">${sec.title}</div>`;
    html += '<div class="nut-grid">';
    sec.items.forEach(item => {
      html += `
        <div class="nut-item">
          <div class="nut-item-icon">${item.icon}</div>
          <div class="nut-item-text">
            <h5>${item.name}</h5>
            <p>${item.desc}</p>
          </div>
        </div>`;
    });
    html += '</div>';
  });
  container.innerHTML = html;
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  renderWeeks(0);
  renderNutrition('nut1');
  renderGuide(0);
  renderEdu(0);

  // 周卡 Tab 切换
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWeeks(tabMap[btn.dataset.tab]);
    });
  });

  // 营养 Tab 切换
  document.querySelectorAll('.nut-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nut-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderNutrition(btn.dataset.nut);
    });
  });

  // 每周指南 Tab 切换
  document.querySelectorAll('.guide-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.guide-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGuide(guideTabMap[btn.dataset.guide]);
    });
  });

  // 胎教 Tab 切换
  document.querySelectorAll('.edu-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.edu-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderEdu(eduTabMap[btn.dataset.edu]);
    });
  });

  // 移动端汉堡菜单
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // 导航高亮
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navItems.forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('active');
          }
        });
      }
    });
  });

  // 回到顶部按钮
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backTop.classList.add('visible');
    } else {
      backTop.classList.remove('visible');
    }
  });
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
