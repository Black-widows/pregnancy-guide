// ===== 宝宝每周大小数据 =====
const weeklyData = [
  // 孕早期
  { week: 1, emoji: '🧬', size: '受精卵', name: '第1周', detail: '受精卵形成，开始细胞分裂，沿着输卵管向子宫移动。此时还只是一个微小的细胞团。' },
  { week: 2, emoji: '🔬', size: '约0.1mm', name: '第2周', detail: '受精卵着床于子宫内膜，开始发育为胚胎。胎盘开始形成。' },
  { week: 3, emoji: '🫐', size: '约0.2mm 如芝麻', name: '第3周', detail: '胚胎由三个胚层组成，心脏、神经管等开始初步发育。' },
  { week: 4, emoji: '🌱', size: '约1mm 如罂粟籽', name: '第4周', detail: '心脏开始跳动！大脑和脊柱正在发育，胚芽长约1毫米。' },
  { week: 5, emoji: '🫘', size: '约2mm 如苹果籽', name: '第5周', detail: '手臂和腿的芽体开始出现，面部特征初步形成，心脏已分为四个腔室。' },
  { week: 6, emoji: '🥜', size: '约5mm 如扁豆', name: '第6周', detail: '面部特征更加明显，手指和脚趾开始分化，大脑快速发育。' },
  { week: 7, emoji: '🫒', size: '约1.3cm 如蓝莓', name: '第7周', detail: '四肢在生长，眼睑形成，嘴巴和鼻子更加清晰，尾巴逐渐消失。' },
  { week: 8, emoji: '🍇', size: '约1.6cm 如覆盆子', name: '第8周', detail: '所有主要器官开始形成，手指间蹼膜消失，开始有细微动作。' },
  { week: 9, emoji: '🍒', size: '约2.3cm 如樱桃', name: '第9周', detail: '从胚胎正式称为"胎儿"，外生殖器开始发育，可以做出细微动作。' },
  { week: 10, emoji: '🍓', size: '约3.1cm 如草莓', name: '第10周', detail: '重要器官已基本形成并开始工作，指甲开始生长，骨骼开始硬化。' },
  { week: 11, emoji: '🫐', size: '约4.1cm 如无花果', name: '第11周', detail: '胎儿可以打嗝、伸展、吸吮手指，牙齿开始在牙龈下发育。' },
  { week: 12, emoji: '🍋', size: '约5.4cm 如青柠', name: '第12周', detail: '反射动作出现，肾脏开始产生尿液，声带形成。孕早期结束！' },
  // 孕中期
  { week: 13, emoji: '🍑', size: '约7.4cm 如桃子', name: '第13周', detail: '进入孕中期！指纹形成，声带发育完成，胎儿可以做面部表情。' },
  { week: 14, emoji: '🍐', size: '约8.7cm 如柠檬', name: '第14周', detail: '胎儿开始长出细小的胎毛（绒毛），可以感受到光线变化。' },
  { week: 15, emoji: '🍏', size: '约10.1cm 如苹果', name: '第15周', detail: '骨骼进一步硬化，胎儿可以吞咽羊水，腿开始比手臂长。' },
  { week: 16, emoji: '🥑', size: '约11.6cm 如牛油果', name: '第16周', detail: '妈妈可能开始感受到胎动！胎儿的眼睛可以感知光线。' },
  { week: 17, emoji: '🍐', size: '约13cm 如梨', name: '第17周', detail: '脂肪开始沉积，脐带变得更加粗壮有力，胎儿心跳更有力。' },
  { week: 18, emoji: '🌶️', size: '约14.2cm 如甜椒', name: '第18周', detail: '胎儿开始听到外界声音，可能会被响声惊醒，开始有睡眠周期。' },
  { week: 19, emoji: '🥭', size: '约15.3cm 如芒果', name: '第19周', detail: '皮肤被一层白色胎脂覆盖保护，感官开始快速发育。' },
  { week: 20, emoji: '🍌', size: '约25cm（含腿）如香蕉', name: '第20周', detail: '孕期过半！胎儿可以听到妈妈的声音，吞咽更多羊水。' },
  { week: 21, emoji: '🥕', size: '约26.7cm 如胡萝卜', name: '第21周', detail: '胎儿开始有规律的作息，运动和睡眠交替进行。眉毛和头发可见。' },
  { week: 22, emoji: '🌽', size: '约27.8cm 如玉米', name: '第22周', detail: '肺部开始产生表面活性物质，为呼吸做准备。眼睛已完全形成。' },
  { week: 23, emoji: '🍆', size: '约28.9cm 如大芒果', name: '第23周', detail: '皮肤仍然是半透明的，皮下脂肪在增加，肺部血管在发育。' },
  { week: 24, emoji: '🌽', size: '约30cm 如玉米穗', name: '第24周', detail: '面部特征完全清晰，眉毛和睫毛明显，大脑快速发育。' },
  { week: 25, emoji: '🥦', size: '约34.6cm 如花椰菜', name: '第25周', detail: '胎儿可以对声音做出反应，开始长出更多的头发。' },
  { week: 26, emoji: '🥬', size: '约35.6cm 如生菜', name: '第26周', detail: '眼睛可以睁开，睫毛已长好，肺部仍在继续成熟。' },
  { week: 27, emoji: '🥒', size: '约36.6cm 如黄瓜', name: '第27周', detail: '孕中期最后一个月！胎儿开始有规律地打嗝，大脑更加活跃。' },
  // 孕晚期
  { week: 28, emoji: '🎃', size: '约37.6cm 如大茄子', name: '第28周', detail: '进入孕晚期！胎儿可以做梦了，眼睛可以开合，呼吸动作练习中。' },
  { week: 29, emoji: '🎃', size: '约38.6cm 如南瓜', name: '第29周', detail: '胎儿肌肉和肺部继续发育，大脑和神经系统进一步成熟。' },
  { week: 30, emoji: '🥥', size: '约39.9cm 如椰子', name: '第30周', detail: '胎儿体重增长加快，皮下脂肪增加，皮肤变得更加光滑。' },
  { week: 31, emoji: '🥥', size: '约41.1cm 如椰子', name: '第31周', detail: '胎儿的所有五种感觉都已发育，大脑连接数十亿个神经细胞。' },
  { week: 32, emoji: '🍈', size: '约42.4cm 如哈密瓜', name: '第32周', detail: '胎儿指甲长到指尖，皮下脂肪层使皮肤从半透明变为不透明。' },
  { week: 33, emoji: '🍈', size: '约43.7cm 如大菠萝', name: '第33周', detail: '骨骼继续硬化（但头骨保持柔软以便分娩），免疫系统发育中。' },
  { week: 34, emoji: '🍍', size: '约45cm 如菠萝', name: '第34周', detail: '胎儿的中枢神经系统和肺部继续成熟，皮下脂肪继续积累。' },
  { week: 35, emoji: '🍈', size: '约46.2cm 如蜜瓜', name: '第35周', detail: '胎儿大部分身体发育完成，肾脏完全发育，肝脏可以处理废物。' },
  { week: 36, emoji: '🥬', size: '约47.4cm 如生菜头', name: '第36周', detail: '胎儿开始入盆，准备分娩位置。指甲超过了指尖。' },
  { week: 37, emoji: '🎃', size: '约48.6cm 如冬瓜', name: '第37周', detail: '胎儿被认为是早期足月，器官已成熟，可以自主呼吸。' },
  { week: 38, emoji: '🎃', size: '约49.8cm 如大冬瓜', name: '第38周', detail: '胎儿继续积累脂肪，抓握力很强，为出生做最后准备。' },
  { week: 39, emoji: '🍉', size: '约50.7cm 如西瓜', name: '第39周', detail: '完全足月！所有器官已成熟，胎儿准备好来到这个世界。' },
  { week: 40, emoji: '🍉', size: '约51.2cm 如大西瓜', name: '第40周', detail: '预产期！宝宝随时可能降临。平均体重约3.4kg，身长约51cm。' },
];

// ===== 孕期营养数据 =====
const nutritionData = {
  nut1: {
    title: '孕早期饮食 (1-12周)',
    desc: '此时胎儿很小，不需要额外增加热量，重点在于均衡营养和补充关键营养素。',
    sections: [
      {
        title: '🔑 关键营养素',
        items: [
          { icon: '💊', name: '叶酸', desc: '每天400-800微克，预防神经管缺陷。多吃深绿色蔬菜、豆类。' },
          { icon: '🥩', name: '铁', desc: '预防贫血，多吃红肉、菠菜、黑木耳，搭配维C促进吸收。' },
          { icon: '🥛', name: '钙', desc: '每天800-1000mg，牛奶、豆腐、芝麻等富含钙质。' },
          { icon: '🐟', name: 'DHA', desc: '促进大脑发育，每周吃2-3次深海鱼，或补充鱼油。' },
        ]
      },
      {
        title: '🍽️ 推荐食物',
        items: [
          { icon: '🥬', name: '绿叶蔬菜', desc: '菠菜、西兰花、芦笋，富含叶酸和多种维生素。' },
          { icon: '🥚', name: '鸡蛋', desc: '优质蛋白来源，每天1-2个，含卵磷脂促进胎儿大脑发育。' },
          { icon: '🫘', name: '豆制品', desc: '豆腐、豆浆，富含植物蛋白和钙质。' },
          { icon: '🥜', name: '坚果', desc: '核桃、杏仁等，每天一小把，补充不饱和脂肪酸。' },
          { icon: '🍊', name: '新鲜水果', desc: '柑橘类、猕猴桃富含维C，苹果助消化。' },
          { icon: '🍠', name: '全谷物', desc: '糙米、燕麦、全麦面包，提供B族维生素和膳食纤维。' },
        ]
      }
    ]
  },
  nut2: {
    title: '孕中期饮食 (13-27周)',
    desc: '胎儿快速生长，妈妈每天需额外摄入约300千卡热量，蛋白质需求增加。',
    sections: [
      {
        title: '🔑 关键营养素',
        items: [
          { icon: '🥩', name: '蛋白质', desc: '每天增加15g，鱼肉蛋奶豆类均衡摄入。' },
          { icon: '🦴', name: '钙 + 维生素D', desc: '每天需1000mg钙，适当晒太阳促进维D合成。' },
          { icon: '🩸', name: '铁', desc: '每天24-29mg，配合维C促进吸收，预防孕期贫血。' },
          { icon: '🧠', name: 'DHA', desc: '每天200-300mg，促进胎儿大脑和视网膜发育。' },
        ]
      },
      {
        title: '🍽️ 推荐食物',
        items: [
          { icon: '🐟', name: '鱼类', desc: '三文鱼、鲈鱼等低汞鱼类，每周2-3次，每次100-150g。' },
          { icon: '🥩', name: '瘦肉', desc: '牛肉、猪瘦肉、鸡肉，富含铁和优质蛋白。' },
          { icon: '🥛', name: '奶制品', desc: '牛奶、酸奶，每天300-500ml，补钙首选。' },
          { icon: '🥚', name: '鸡蛋', desc: '每天1-2个，提供优质蛋白和卵磷脂。' },
          { icon: '🥦', name: '深色蔬菜', desc: '每天300-500g蔬菜，深色蔬菜占一半以上。' },
          { icon: '🍎', name: '水果', desc: '每天200-400g，注意控制高糖水果摄入量。' },
        ]
      }
    ]
  },
  nut3: {
    title: '孕晚期饮食 (28-40周)',
    desc: '胎儿体重增长最快时期，需控制总热量避免过大儿，注重高蛋白低糖饮食。',
    sections: [
      {
        title: '🔑 关键营养素',
        items: [
          { icon: '🥩', name: '优质蛋白', desc: '每天增加至85g，支持胎儿快速增重。' },
          { icon: '🦴', name: '钙', desc: '每天1200mg，为胎儿骨骼钙化提供充足原料。' },
          { icon: '🩸', name: '铁', desc: '每天29mg，为分娩储备铁质，预防产后贫血。' },
          { icon: '🧂', name: '膳食纤维', desc: '预防便秘，多吃蔬菜水果和全谷物。' },
        ]
      },
      {
        title: '🍽️ 推荐食物',
        items: [
          { icon: '🥩', name: '高蛋白食物', desc: '鱼虾、瘦肉、鸡蛋、奶类、豆制品均衡搭配。' },
          { icon: '🥬', name: '蔬菜', desc: '每天500g以上，膳食纤维预防便秘，控制血糖。' },
          { icon: '🍠', name: '粗粮', desc: '红薯、糙米、燕麦，有助于控制血糖和体重。' },
          { icon: '🥛', name: '奶类', desc: '每天500ml，睡前一杯热牛奶还有助于睡眠。' },
          { icon: '🫛', name: '豆类', desc: '红豆、绿豆、黑豆，富含铁和膳食纤维。' },
          { icon: '💧', name: '充足饮水', desc: '每天1700-1900ml，少量多次饮用。' },
        ]
      }
    ]
  }
};

// ===== 分类标记 =====
function getWeekTrimester(week) {
  if (week <= 12) return 0;
  if (week <= 27) return 1;
  return 2;
}

const tabMap = {
  't1-weeks': 0,
  't2-weeks': 1,
  't3-weeks': 2,
};

// ===== 渲染周卡 =====
function renderWeeks(trimesterIndex) {
  const grid = document.getElementById('week-grid');
  const filtered = weeklyData.filter(w => getWeekTrimester(w.week) === trimesterIndex);
  grid.innerHTML = filtered.map(w => `
    <div class="week-card">
      <div class="week-header">
        <div class="week-emoji">${w.emoji}</div>
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
  // 默认渲染
  renderWeeks(0);
  renderNutrition('nut1');

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

  // 移动端汉堡菜单
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // 点击导航链接关闭菜单
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
