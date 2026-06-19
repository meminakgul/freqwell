/* İyileştirici Frekanslar Wellness Independent Showcase Script
   Fiyat, sepet ve ödeme sistemi özellikle eklenmemiştir.
   Tüm haklar sahiplerine aittir. Independent consultancy platform.
*/

const WHATSAPP_NUMBER = "905456345664"; // Değiştirilebilir WhatsApp Numarası

const CATEGORIES = [
  { slug: "editions", title: "Healy Editions", icon: "◒", description: "Healy cihaz modellerini keşfedin ve kullanım ihtiyacınıza uygun seçenekler hakkında bilgi alın." },
  { slug: "integrated-wellness", title: "Entegre Wellness Çözümleri", icon: "∞", description: "Günlük yaşam, rahatlama ve kişisel bakım rutininizi desteklemeye yönelik entegre wellness çözümleri." },
  { slug: "maghealy-applications", title: "MagHealy Uygulamaları", icon: "≈", description: "MagHealy deneyimini genişletmeye yönelik dijital uygulama ve modül seçenekleri." },
  { slug: "program-groups", title: "Program Grupları", icon: "▦", description: "Healy kullanım alanlarını genişletmeye yönelik program gruplarını keşfedin." },
  { slug: "add-ons", title: "Ek Ürünler", icon: "+", description: "Healy deneyimini geliştirmeye yönelik ek ürün ve aksesuar seçenekleri." },
  { slug: "app-modules", title: "App Modülleri ve Veri Tabanları", icon: "☷", description: "Healy ve HealAdvisor deneyimini dijital modüller ve veri tabanlarıyla genişletin." },
  { slug: "upgrades", title: "Yükseltmeler", icon: "↑", description: "Mevcut Healy veya MagHealy deneyiminizi daha gelişmiş program seçenekleriyle yükseltmeye yönelik upgrade seçenekleri." },
  { slug: "business-suite", title: "Business Suite", icon: "◇", description: "Healy iş süreçleri, paylaşım ve ekip yönetimi için dijital destek paketleri." },
  { slug: "accessories", title: "Aksesuarlar", icon: "○", description: "Healy ve MagHealy kullanımını desteklemeye yönelik aksesuar seçenekleri." },
  { slug: "replacements", title: "Yedek / Değişim Ürünleri", icon: "↻", description: "Cihaz değişimi veya yenileme ihtiyacı için replacement seçenekleri hakkında bilgi alın." }
];

const PRODUCTS = [
  // HEALY EDITIONS
  {
    name: "Healy Discover",
    slug: "healy-discover",
    category: "editions",
    description: "Healy ekosistemine giriş yapmak isteyen kullanıcılar için temel wellness programlarına odaklanan başlangıç modeli.",
    tags: ["Başlangıç seviyesi", "Wellness deneyimi", "Mobil uygulama"]
  },
  {
    name: "Healy Evolve",
    slug: "healy-evolve",
    category: "editions",
    description: "Kişisel gelişim, denge ve günlük wellness deneyimini desteklemeye yönelik gelişmiş program seçenekleri sunan model.",
    tags: ["Gelişmiş programlar", "Kişisel denge", "Günlük kullanım"]
  },
  {
    name: "Healy Pro",
    slug: "healy-pro",
    category: "editions",
    description: "Daha kapsamlı frekans programları ve gelişmiş uygulama seçenekleriyle bütünsel wellness deneyimine odaklanan model.",
    tags: ["Kapsamlı içerik", "Frekans programları", "İleri seviye"]
  },
  {
    name: "Healy Obsidian",
    slug: "healy-obsidian",
    category: "editions",
    description: "Premium tasarım anlayışı ve genişletilmiş içerik erişimiyle üst seviye Healy deneyimi sunan model.",
    tags: ["Premium model", "Geniş içerik", "Üst seviye deneyim"]
  },
  {
    name: "MagHealy Discover",
    slug: "maghealy-discover",
    category: "editions",
    description: "MagHealy ekosistemine giriş yapmak isteyen kullanıcılar için temel manyetik alan programlarına odaklanan başlangıç modeli.",
    tags: ["MagHealy", "Başlangıç", "Wellness deneyimi"]
  },
  {
    name: "MagHealy Evolve",
    slug: "maghealy-evolve",
    category: "editions",
    description: "MagHealy kullanım deneyimini daha gelişmiş program seçenekleriyle genişletmeye yönelik model.",
    tags: ["MagHealy", "Gelişmiş kullanım", "Program seçeneği"]
  },
  {
    name: "MagHealy Pro",
    slug: "maghealy-pro",
    category: "editions",
    description: "Gelişmiş manyetik alan uygulamalarıyla daha kapsamlı MagHealy deneyimi sunan üst seviye model.",
    tags: ["MagHealy Pro", "İleri seviye", "Program çeşitliliği"]
  },
  {
    name: "MagHealy Obsidian",
    slug: "maghealy-obsidian",
    category: "editions",
    description: "Premium tasarım ve genişletilmiş içerik deneyimiyle üst seviye MagHealy kullanımına odaklanan model.",
    tags: ["Premium", "MagHealy", "Üst seviye"]
  },
  {
    name: "The Basic Bundle",
    slug: "the-basic-bundle",
    category: "editions",
    description: "Healy ve MagHealy deneyimini temel seviyede birlikte keşfetmek isteyen kullanıcılar için başlangıç paketi.",
    tags: ["Bundle", "Başlangıç", "Healy + MagHealy"]
  },
  {
    name: "The Elevate Bundle",
    slug: "the-elevate-bundle",
    category: "editions",
    description: "Daha gelişmiş wellness araçları ve kişisel kullanım seçenekleri isteyen kullanıcılar için hazırlanmış paket.",
    tags: ["Bundle", "Gelişmiş deneyim", "Wellness"]
  },
  {
    name: "The Ultimate Bundle",
    slug: "the-ultimate-bundle",
    category: "editions",
    description: "Daha kapsamlı cihaz, program ve premium kullanım deneyimi arayan kullanıcılar için üst seviye paket.",
    tags: ["Premium bundle", "Kapsamlı deneyim", "Üst seviye"]
  },

  // INTEGRATED WELLNESS SOLUTIONS
  {
    name: "Zero Hertz – Sleep Mask – Navy Blue",
    slug: "zero-hertz-sleep-mask-navy-blue",
    category: "integrated-wellness",
    description: "Uyku ve dinlenme rutininizi desteklemeye yönelik tasarlanmış wellness odaklı uyku maskesi.",
    tags: ["Uyku rutini", "Rahatlama", "Günlük destek"]
  },
  {
    name: "Holistic Sleep Duo",
    slug: "holistic-sleep-duo",
    category: "integrated-wellness",
    description: "Uyku, dinlenme ve rahatlama deneyimini desteklemeye yönelik bütünleşik wellness paketi.",
    tags: ["Uyku desteği", "Rahatlama deneyimi", "Wellness paketi"]
  },

  // MAGHEALY APPLICATIONS
  {
    name: "HealAdvisor Analyse Meridian Module",
    slug: "healadvisor-analyse-meridian-module-mag",
    category: "maghealy-applications",
    description: "Meridyen odaklı analiz deneyimi sunan, MagHealy kullanımını destekleyen dijital modül.",
    tags: ["Analiz modülü", "Meridyen odağı", "Dijital içerik"]
  },
  {
    name: "McMakin Application",
    slug: "mcmakin-application",
    category: "maghealy-applications",
    description: "MagHealy deneyimini belirli uygulama seçenekleriyle genişletmeye yönelik dijital uygulama.",
    tags: ["Uygulama desteği", "MagHealy", "Dijital modül"]
  },
  {
    name: "Water Application",
    slug: "water-application",
    category: "maghealy-applications",
    description: "Su ile ilişkili kullanım senaryolarına odaklanan MagHealy uygulama seçeneği.",
    tags: ["Su uygulaması", "MagHealy", "Program desteği"]
  },
  {
    name: "Atmosphere Application",
    slug: "atmosphere-application",
    category: "maghealy-applications",
    description: "Yaşam alanı atmosferi ve çevresel uyum deneyimine odaklanan MagHealy uygulama seçeneği.",
    tags: ["Atmosfer", "Yaşam alanı", "MagHealy"]
  },

  // PROGRAM GROUPS
  {
    name: "Soul Cycle",
    slug: "soul-cycle",
    category: "program-groups",
    description: "Kişisel farkındalık, içsel denge ve günlük wellness deneyimine odaklanan program grubu.",
    tags: ["Farkındalık", "Kişisel denge", "Program grubu"]
  },
  {
    name: "The Power of Three",
    slug: "the-power-of-three",
    category: "program-groups",
    description: "Üçlü program yaklaşımıyla wellness deneyimini destekleyen özel program grubu.",
    tags: ["Üçlü yaklaşım", "Wellness", "Dijital program"]
  },
  {
    name: "Beauty",
    slug: "beauty",
    category: "program-groups",
    description: "Kişisel bakım ve güzellik rutininizi desteklemeye yönelik wellness program grubu.",
    tags: ["Kişisel bakım", "Güzellik rutini", "Wellness"]
  },
  {
    name: "Chakras",
    slug: "chakras",
    category: "program-groups",
    description: "Enerji merkezleri, denge ve biyoenerjetik uyum deneyimine odaklanan program grubu.",
    tags: ["Denge", "Enerji merkezleri", "Biyoenerjetik uyum"]
  },
  {
    name: "Fitness",
    slug: "fitness",
    category: "program-groups",
    description: "Hareket, günlük aktivite ve kişisel bakım rutininizi desteklemeye yönelik program grubu.",
    tags: ["Fitness", "Günlük aktivite", "Wellness"]
  },
  {
    name: "Learning",
    slug: "learning",
    category: "program-groups",
    description: "Öğrenme süreci, odaklanma deneyimi ve zihinsel rutinleri desteklemeye yönelik program grubu.",
    tags: ["Öğrenme", "Odak", "Dijital program"]
  },
  {
    name: "Job",
    slug: "job",
    category: "program-groups",
    description: "İş yaşamı, üretkenlik ve günlük çalışma rutininize odaklanan program grubu.",
    tags: ["İş rutini", "Üretkenlik", "Denge"]
  },
  {
    name: "Mental Balance",
    slug: "mental-balance",
    category: "program-groups",
    description: "Zihinsel denge, sakinlik ve günlük farkındalık deneyimini desteklemeye yönelik program grubu.",
    tags: ["Mental denge", "Farkındalık", "Rahatlama"]
  },
  {
    name: "Bioenergetic Defence",
    slug: "bioenergetic-defence",
    category: "program-groups",
    description: "Biyoenerjetik uyum ve kişisel denge deneyimine odaklanan program grubu.",
    tags: ["Biyoenerjetik uyum", "Denge", "Program grubu"]
  },
  {
    name: "Skin",
    slug: "skin",
    category: "program-groups",
    description: "Kişisel bakım ve cilt rutininizi desteklemeye yönelik wellness program grubu.",
    tags: ["Cilt rutini", "Kişisel bakım", "Wellness"]
  },
  {
    name: "Sleep",
    slug: "sleep",
    category: "program-groups",
    description: "Uyku rutini, dinlenme ve rahatlama deneyimine odaklanan program grubu.",
    tags: ["Uyku", "Dinlenme", "Rahatlama"]
  },
  {
    name: "Local Stimulation",
    slug: "local-stimulation",
    category: "program-groups",
    description: "Belirli kullanım alanlarına odaklanan program seçenekleriyle Healy deneyimini genişletir.",
    tags: ["Lokal kullanım", "Program seçeneği", "Healy"]
  },
  {
    name: "Bioenergetic Harmony 1",
    slug: "bioenergetic-harmony-1",
    category: "program-groups",
    description: "Biyoenerjetik uyum ve kişisel denge deneyimini desteklemeye yönelik program grubu.",
    tags: ["Biyoenerjetik", "Denge", "Harmony"]
  },
  {
    name: "Bioenergetic Harmony 2",
    slug: "bioenergetic-harmony-2",
    category: "program-groups",
    description: "Daha kapsamlı biyoenerjetik uyum deneyimi arayan kullanıcılar için hazırlanmış program grubu.",
    tags: ["Harmony", "Wellness", "Program grubu"]
  },
  {
    name: "Meridians 1 & 2",
    slug: "meridians-1-2",
    category: "program-groups",
    description: "Meridyen akışları ve enerji yolları odağında biyoenerjetik dengeyi desteklemeye yönelik program grubu.",
    tags: ["Meridyenler", "Enerji kanalları", "Biyoenerjetik denge"]
  },
  {
    name: "Deep Cycle",
    slug: "deep-cycle",
    category: "program-groups",
    description: "Derin döngü programlarıyla sistemin bütünsel rahatlamasına ve yenilenmesine odaklanan program grubu.",
    tags: ["Derin döngü", "Yenilenme", "Bütünsel destek"]
  },
  {
    name: "Wellbeing",
    slug: "wellbeing",
    category: "program-groups",
    description: "Genel iyi hissetme hali, zindelik ve yaşam enerjisini destekleyen temel wellness program grubu.",
    tags: ["İyi hissetme", "Zindelik", "Temel wellness"]
  },

  // ADD-ONS
  {
    name: "Healy HighWave",
    slug: "healy-highwave",
    category: "add-ons",
    description: "Healy kullanım deneyimini daha esnek ve bütünsel hale getirmeye yardımcı olan destekleyici ürün.",
    tags: ["Ek ürün", "Kullanım desteği", "Healy deneyimi"]
  },
  {
    name: "Healy Coil",
    slug: "healy-coil",
    category: "add-ons",
    description: "Healy cihazıyla birlikte kullanılabilen, kullanım deneyimini genişletmeye yönelik destekleyici aksesuar.",
    tags: ["Aksesuar", "Healy uyumlu", "Destekleyici kullanım"]
  },

  // APP MODULES & DATABASES
  {
    name: "Plant Power Database",
    slug: "plant-power-database",
    category: "app-modules",
    description: "Bitki temelli içeriklere odaklanan dijital veri tabanı modülü.",
    tags: ["Bitki verisi", "Dijital içerik", "Veri tabanı"]
  },
  {
    name: "HealAdvisor Analyse Essential Oils Module",
    slug: "healadvisor-analyse-essential-oils-module",
    category: "app-modules",
    description: "Esansiyel yağlar odağında dijital analiz ve içerik desteği sunan modül.",
    tags: ["Esansiyel yağlar", "Analiz", "Dijital modül"]
  },
  {
    name: "HealAdvisor Analyse Meridian Module",
    slug: "healadvisor-analyse-meridian-module-app",
    category: "app-modules",
    description: "Meridyen odağında analiz deneyimi sunan gelişmiş HealAdvisor modülü.",
    tags: ["Meridyen", "Analiz", "HealAdvisor"]
  },
  {
    name: "HealAdvisor Natural Cycle Module",
    slug: "healadvisor-natural-module",
    category: "app-modules",
    description: "Doğal wellness yaklaşımını desteklemeye yönelik dijital modül.",
    tags: ["Doğal yaklaşım", "Wellness", "Dijital modül"]
  },
  {
    name: "Personal Growth Database",
    slug: "personal-growth-database",
    category: "app-modules",
    description: "Kişisel gelişim, hedefler ve bireysel potansiyeli desteklemeye yönelik dijital veri tabanı modülü.",
    tags: ["Kişisel gelişim", "Veri tabanı", "Gelişim desteği"]
  },
  {
    name: "HealAdvisor Digital Nutrition Module",
    slug: "healadvisor-digital-nutrition-module",
    category: "app-modules",
    description: "Günlük beslenme profilinize uygun frekans program önerileri sunan dijital beslenme asistanı modülü.",
    tags: ["Dijital beslenme", "Frekans önerisi", "Asistan modülü"]
  },
  {
    name: "HealAdvisor Animal Module",
    slug: "healadvisor-animal-module",
    category: "app-modules",
    description: "Evcil hayvanların biyoenerjetik alanını ve genel iyi hissetme halini desteklemeye yönelik özel program modülü.",
    tags: ["Evcil hayvanlar", "Biyoenerjetik alan", "Özel program"]
  },
  {
    name: "HealAdvisor Bioenergetic Vitalization Module",
    slug: "healadvisor-bioenergetic-vitalization-module",
    category: "app-modules",
    description: "Bütünsel zindelik, yenilenme ve yaşam enerjisini destekleyen biyoenerjetik vitalizasyon program modülü.",
    tags: ["Zindelik", "Biyoenerjetik vitalizasyon", "Yenilenme"]
  },
  {
    name: "HealAdvisor Analyse Success Coach Module",
    slug: "healadvisor-analyse-success-coach-module",
    category: "app-modules",
    description: "Kariyer, hedefler ve başarı süreçlerinizi analiz ederek biyoenerjetik olarak destekleyen koçluk modülü.",
    tags: ["Başarı koçluğu", "Kariyer", "Biyoenerjetik analiz"]
  },
  {
    name: "HealAdvisor Analyse Personal Coach Module",
    slug: "healadvisor-analyse-personal-coach-module",
    category: "app-modules",
    description: "İlişkiler, kişisel gelişim ve bireysel yaşam alanlarında analiz ve destek sunan kişisel koçluk modülü.",
    tags: ["Kişisel koçluk", "İlişkiler", "Yaşam analizi"]
  },
  {
    name: "HealAdvisor Search Module",
    slug: "healadvisor-search-module",
    category: "app-modules",
    description: "Belirli wellness temalarına göre ihtiyacınız olan Healy programlarını kolayca bulmanızı sağlayan arama modülü.",
    tags: ["Arama modülü", "Program bulucu", "Hızlı arama"]
  },
  {
    name: "HealAdvisor Analyse Resonance Module",
    slug: "healadvisor-analyse-resonance-module",
    category: "app-modules",
    description: "Biyoenerjetik alanınızda hangi program gruplarının en yüksek rezonansa sahip olduğunu gösteren analiz modülü.",
    tags: ["Rezonans analizi", "Biyoenerjetik alan", "Program tespiti"]
  },
  {
    name: "HealAdvisor Analyse Aura Module",
    slug: "healadvisor-analyse-aura-module",
    category: "app-modules",
    description: "Çakralarınızın enerji durumunu görselleştirerek biyoenerjetik alan analizi sunan aura modülü.",
    tags: ["Aura analizi", "Çakra enerjisi", "Görsel analiz"]
  },
  {
    name: "Healy Watch Connector Module",
    slug: "healy-watch-connector-module",
    category: "app-modules",
    description: "Healy Watch verileriniz ile Healy cihazınız arasında bağlantı kurarak frekans önerileri üreten modül.",
    tags: ["Watch bağlantısı", "Frekans önerisi", "Akıllı saat entegrasyonu"]
  },

  // UPGRADES
  {
    name: "Upgrade from Healy Discover to Healy Evolve",
    slug: "upgrade-healy-discover-to-healy-evolve",
    category: "upgrades",
    description: "Healy Discover deneyimini daha gelişmiş program seçenekleriyle Evolve seviyesine taşımaya yönelik yükseltme seçeneği.",
    tags: ["Upgrade", "Discover", "Evolve"]
  },
  {
    name: "Upgrade from Healy Discover to Healy Pro",
    slug: "upgrade-healy-discover-to-healy-pro",
    category: "upgrades",
    description: "Healy Discover deneyimini daha kapsamlı program ve uygulama seçenekleriyle Pro seviyesine yükseltir.",
    tags: ["Upgrade", "Discover", "Pro"]
  },
  {
    name: "Upgrade from Healy Evolve to Healy Pro",
    slug: "upgrade-healy-evolve-to-healy-pro",
    category: "upgrades",
    description: "Healy Evolve deneyimini daha geniş içerik ve gelişmiş kullanım seçenekleriyle Pro seviyesine taşır.",
    tags: ["Upgrade", "Evolve", "Pro"]
  },
  {
    name: "Upgrade from MagHealy Discover to MagHealy Evolve",
    slug: "upgrade-maghealy-discover-to-maghealy-evolve",
    category: "upgrades",
    description: "MagHealy Discover deneyimini daha gelişmiş program seçenekleriyle Evolve seviyesine yükseltmeye yönelik seçenek.",
    tags: ["MagHealy", "Upgrade", "Evolve"]
  },
  {
    name: "Upgrade from MagHealy Discover to MagHealy Pro",
    slug: "upgrade-maghealy-discover-to-maghealy-pro",
    category: "upgrades",
    description: "MagHealy Discover deneyimini daha kapsamlı program seçenekleriyle Pro seviyesine taşımaya yönelik yükseltme seçeneği.",
    tags: ["MagHealy", "Upgrade", "Pro"]
  },
  {
    name: "Upgrade from MagHealy Evolve to MagHealy Pro",
    slug: "upgrade-maghealy-evolve-to-maghealy-pro",
    category: "upgrades",
    description: "MagHealy Evolve kullanım deneyimini daha gelişmiş içeriklerle Pro seviyesine yükseltmeye yönelik seçenek.",
    tags: ["MagHealy", "Evolve", "Pro"]
  },
  {
    name: "Upgrade from Healy Gold to Healy Evolve",
    slug: "upgrade-healy-gold-to-healy-evolve",
    category: "upgrades",
    description: "Healy Gold deneyimini Evolve seviyesine taşıyarak daha güncel program seçeneklerine geçiş imkânı sunan yükseltme.",
    tags: ["Healy Gold", "Evolve", "Upgrade"]
  },
  {
    name: "Upgrade from Healy Holistic to Healy Evolve",
    slug: "upgrade-healy-holistic-to-healy-evolve",
    category: "upgrades",
    description: "Healy Holistic deneyimini Evolve seviyesine yükseltmek isteyen kullanıcılar için hazırlanmış seçenek.",
    tags: ["Healy Holistic", "Evolve", "Upgrade"]
  },
  {
    name: "Upgrade from Healy Gold to Healy Pro",
    slug: "upgrade-healy-gold-to-healy-pro",
    category: "upgrades",
    description: "Mevcut Healy Gold modelinizi en üst seviye frekans programlarına sahip Healy Pro modeline yükseltin.",
    tags: ["Upgrade", "Healy Gold", "Pro"]
  },
  {
    name: "Upgrade from Healy Holistic to Healy Pro",
    slug: "upgrade-healy-holistic-to-healy-pro",
    category: "upgrades",
    description: "Holistic modelinizi genişletilmiş frekans paketleri ve analiz modülleriyle Healy Pro seviyesine taşıyın.",
    tags: ["Upgrade", "Healy Holistic", "Pro"]
  },
  {
    name: "Upgrade from Healy Holistic Health Plus to Healy Pro",
    slug: "upgrade-healy-holistic-health-plus-to-healy-pro",
    category: "upgrades",
    description: "Holistic Health Plus modelinizi en gelişmiş analiz ve frekans seçenekleriyle Healy Pro seviyesine yükseltin.",
    tags: ["Upgrade", "Holistic Health Plus", "Pro"]
  },
  {
    name: "Upgrade from Healy Resonance to Healy Pro",
    slug: "upgrade-healy-resonance-to-healy-pro",
    category: "upgrades",
    description: "Mevcut Healy Resonance modelinizi daha kapsamlı wellness ve frekans programları için Healy Pro modeline yükseltin.",
    tags: ["Upgrade", "Resonance", "Pro"]
  },
  {
    name: "Upgrade from Healy Resonance Plus to Healy Pro",
    slug: "upgrade-healy-resonance-plus-to-healy-pro",
    category: "upgrades",
    description: "Resonance Plus modelinizi bütünsel wellness ve frekans programlarına tam erişim için Healy Pro modeline taşıyın.",
    tags: ["Upgrade", "Resonance Plus", "Pro"]
  },
  {
    name: "Upgrade from HealAdvisor Analyse Personal Coach to HealAdvisor Analyse Success Coach",
    slug: "upgrade-personal-coach-to-success-coach",
    category: "upgrades",
    description: "Kişisel koçluk analizlerinizi kariyer, hedefler ve başarı odaklı Success Coach modülüne yükseltin.",
    tags: ["Upgrade", "Personal Coach", "Success Coach"]
  },

  // BUSINESS SUITE
  {
    name: "Business Suite – Sharer Bundle",
    slug: "business-suite-sharer-bundle",
    category: "business-suite",
    description: "Ürün paylaşımı ve temel iş geliştirme süreçleri için hazırlanmış dijital destek paketi.",
    tags: ["İş desteği", "Paylaşım", "Dijital paket"]
  },
  {
    name: "Business Suite – Team Builder Bundle",
    slug: "business-suite-team-builder-bundle",
    category: "business-suite",
    description: "Ekip oluşturma ve iş geliştirme süreçlerini desteklemeye yönelik dijital paket.",
    tags: ["Ekip", "İş geliştirme", "Dijital araçlar"]
  },
  {
    name: "Business Suite – Leader Bundle",
    slug: "business-suite-leader-bundle",
    category: "business-suite",
    description: "Liderlik, ekip yönetimi ve gelişmiş iş süreçleri için hazırlanmış kapsamlı dijital paket.",
    tags: ["Liderlik", "Ekip yönetimi", "Gelişmiş paket"]
  },

  // ACCESSORIES
  {
    name: "MagHealy Inductive Charger",
    slug: "maghealy-inductive-charger",
    category: "accessories",
    description: "MagHealy cihazı için kullanım kolaylığı sağlayan endüktif şarj aksesuarı.",
    tags: ["Şarj", "MagHealy", "Aksesuar"]
  },
  {
    name: "Adhesive Electrodes Press Button Round Ø 32 mm, 8 pcs.",
    slug: "adhesive-electrodes-press-button-round-32mm",
    category: "accessories",
    description: "Healy kullanımında destekleyici olarak kullanılan yuvarlak yapışkan elektrot seti.",
    tags: ["Elektrot", "Healy uyumlu", "8 adet"]
  },
  {
    name: "Bracelets, 2 pcs.",
    slug: "bracelets-2-pcs",
    category: "accessories",
    description: "Healy kullanım deneyimini destekleyen bileklik seti.",
    tags: ["Bileklik", "2 adet", "Aksesuar"]
  },
  {
    name: "Connection Cable 96 Press Button on 2 mm White, 1 pc.",
    slug: "connection-cable-96-press-button",
    category: "accessories",
    description: "Healy bağlantı deneyimini destekleyen beyaz bağlantı kablosu.",
    tags: ["Kablo", "Bağlantı", "Aksesuar"]
  },
  {
    name: "Charging Cable USB 0.15 m – WHITE (1 pc.)",
    slug: "charging-cable-usb-0-15m-white",
    category: "accessories",
    description: "Healy ve MagHealy cihazlarınızı beyaz renkli USB kablosu ile kolayca şarj edin.",
    tags: ["Şarj kablosu", "Beyaz", "Aksesuar"]
  },
  {
    name: "Travel Case",
    slug: "travel-case",
    category: "accessories",
    description: "Healy cihazınızı ve aksesuarlarınızı güvenle taşımanız için tasarlanmış özel taşıma çantası.",
    tags: ["Taşıma çantası", "Koruma", "Seyahat"]
  },
  {
    name: "Charging Cable USB 0.15 m – BLACK (1 pc.)",
    slug: "charging-cable-usb-0-15m-black",
    category: "accessories",
    description: "Healy ve MagHealy cihazlarınızı siyah renkli USB kablosu ile kolayca şarj edin.",
    tags: ["Şarj kablosu", "Siyah", "Aksesuar"]
  },
  {
    name: "Connection Cable 96 cm – press button on 2 mm – BLACK (1 pc.)",
    slug: "connection-cable-96-press-button-black",
    category: "accessories",
    description: "Healy bağlantı deneyimini destekleyen siyah bağlantı kablosu.",
    tags: ["Kablo", "Bağlantı", "Siyah", "Aksesuar"]
  },

  // REPLACEMENTS
  {
    name: "MagHealy Obsidian – Replacement Device",
    slug: "maghealy-obsidian-replacement-device",
    category: "replacements",
    description: "MagHealy Obsidian için değişim cihazı seçeneği hakkında bilgi almak isteyen kullanıcılar için.",
    tags: ["Replacement", "MagHealy Obsidian", "Cihaz değişimi"]
  },
  {
    name: "Healy Obsidian – Replacement Device",
    slug: "healy-obsidian-replacement-device",
    category: "replacements",
    description: "Healy Obsidian için değişim cihazı seçeneği hakkında bilgi almak isteyen kullanıcılar için.",
    tags: ["Replacement", "Healy Obsidian", "Cihaz değişimi"]
  },
  {
    name: "Healy Replacement Device",
    slug: "healy-replacement-device",
    category: "replacements",
    description: "Healy cihazı için değişim ve yenileme seçenekleri hakkında bilgi almak isteyen kullanıcılar için.",
    tags: ["Replacement", "Healy", "Yenileme"]
  },
  {
    name: "MagHealy Replacement Device",
    slug: "maghealy-replacement-device",
    category: "replacements",
    description: "MagHealy cihazı için değişim ve yenileme seçenekleri hakkında bilgi almak isteyen kullanıcılar için.",
    tags: ["Replacement", "MagHealy", "Yenileme"]
  }
];

const CATEGORY_OVERVIEWS = {
  "editions": {
    title: "Healy Editions",
    subtitle: "Healy cihaz modellerini tek bakışta keşfedin.",
    description: "Healy Editions kategorisi, farklı kullanım ihtiyaçlarına göre sunulan Healy cihaz modellerini kapsar. Başlangıç seviyesinden premium modellere kadar farklı seçeneklerle kullanıcıların wellness, kişisel denge ve günlük kullanım deneyimini desteklemeye odaklanır.",
    suitableFor: [
      "Healy ekosistemine yeni başlamak isteyenler",
      "Günlük wellness deneyimini desteklemek isteyenler",
      "Daha kapsamlı frekans programları arayanlar",
      "Premium cihaz deneyimi isteyen kullanıcılar"
    ],
    highlights: [
      "Günlük wellness rutini",
      "Kişisel denge deneyimi",
      "Mobil uygulama ile program kullanımı",
      "Gelişmiş frekans program seçenekleri"
    ],
    products: ["Healy Discover", "Healy Evolve", "Healy Pro", "Healy Obsidian", "MagHealy Discover", "MagHealy Evolve", "MagHealy Pro", "MagHealy Obsidian", "The Basic Bundle", "The Elevate Bundle", "The Ultimate Bundle"]
  },
  "integrated-wellness": {
    title: "Entegre Wellness Çözümleri",
    subtitle: "Günlük yaşam tarzınızı destekleyen entegre wellness çözümleri.",
    description: "Entegre Wellness Çözümleri kategorisi, uyku, dinlenme, rahatlama ve yaşam tarzı rutininizi desteklemeye yönelik wellness ürünlerinden oluşur. Bu ürünler günlük yaşamda daha bütünsel bir kişisel bakım deneyimi sunmaya odaklanır.",
    suitableFor: [
      "Uyku ve dinlenme rutinini desteklemek isteyenler",
      "Günlük rahatlama deneyimine önem verenler",
      "Healy ekosistemini yaşam tarzı ürünleriyle tamamlamak isteyenler",
      "Kişisel bakım rutinine wellness odaklı ürünler eklemek isteyenler"
    ],
    highlights: ["Uyku rutini", "Dinlenme deneyimi", "Günlük rahatlama", "Bütünsel wellness yaklaşımı"],
    products: ["Zero Hertz – Sleep Mask – Navy Blue", "Holistic Sleep Duo"]
  },
  "maghealy-applications": {
    title: "MagHealy Uygulamaları",
    subtitle: "MagHealy deneyimini genişleten dijital uygulama seçenekleri.",
    description: "MagHealy Uygulamaları kategorisi, MagHealy kullanım deneyimini farklı uygulama alanlarıyla genişletmeye yönelik dijital modül ve uygulamalardan oluşur. Bu kategori, kullanıcıya daha kişiselleştirilmiş bir MagHealy deneyimi sunmayı hedefler.",
    suitableFor: [
      "MagHealy kullananlar",
      "Dijital modüllerle deneyimini genişletmek isteyenler",
      "Yaşam alanı, atmosfer ve uygulama çeşitliliğine önem verenler",
      "MagHealy kullanımında daha fazla seçenek arayanlar"
    ],
    highlights: ["MagHealy uygulama desteği", "Yaşam alanı deneyimi", "Dijital modül kullanımı", "Kişiselleştirilmiş program seçenekleri"],
    products: ["HealAdvisor Analyse Meridian Module", "McMakin Application", "Water Application", "Atmosphere Application"]
  },
  "program-groups": {
    title: "Program Grupları",
    subtitle: "Healy kullanım alanlarını genişleten program grupları.",
    description: "Program Grupları kategorisi, Healy deneyimini farklı yaşam alanlarına ve kişisel odaklara göre genişletmeye yönelik program gruplarından oluşur. Bu gruplar wellness, kişisel bakım, denge, farkındalık ve günlük kullanım deneyimi gibi alanlara odaklanır.",
    suitableFor: [
      "Healy program seçeneklerini genişletmek isteyenler",
      "Kişisel bakım ve wellness rutinini desteklemek isteyenler",
      "Farkındalık, denge ve yaşam kalitesi deneyimine önem verenler",
      "Dijital program gruplarıyla farklı alanları keşfetmek isteyenler"
    ],
    highlights: ["Kişisel farkındalık", "Wellness rutini", "Güzellik ve kişisel bakım", "Denge ve biyoenerjetik uyum", "Uyku, öğrenme ve mental denge odaklı kullanım deneyimleri"],
    products: ["Soul Cycle", "The Power of Three", "Beauty", "Chakras", "Fitness", "Learning", "Job", "Mental Balance", "Bioenergetic Defence", "Skin", "Sleep", "Local Stimulation", "Bioenergetic Harmony 1", "Bioenergetic Harmony 2", "Meridians 1 & 2", "Deep Cycle", "Wellbeing"]
  },
  "add-ons": {
    title: "Ek Ürünler",
    subtitle: "Healy deneyimini bir üst seviyeye taşımaya yönelik ek ürünler.",
    description: "Ek Ürünler kategorisi, Healy cihazlarıyla birlikte kullanılabilen ve kullanım deneyimini genişletmeye yardımcı olan destekleyici ürünlerden oluşur. Bu ürünler Healy kullanımını daha esnek, pratik ve tamamlayıcı hale getirmeye odaklanır.",
    suitableFor: [
      "Mevcut Healy cihazını daha kapsamlı kullanmak isteyenler",
      "Healy deneyimini destekleyici ürünlerle geliştirmek isteyenler",
      "Kablosuz veya daha esnek kullanım seçenekleri arayanlar",
      "Aksesuar ve tamamlayıcı ürün arayan kullanıcılar"
    ],
    highlights: ["Ek kullanım deneyimi", "Healy cihazını destekleme", "Daha esnek kullanım", "Wellness deneyimini genişletme"],
    products: ["Healy HighWave", "Healy Coil"]
  },
  "app-modules": {
    title: "App Modülleri ve Veri Tabanları",
    subtitle: "Healy ve HealAdvisor deneyimini dijital modüllerle genişletin.",
    description: "App Modülleri ve Veri Tabanları kategorisi, dijital modüller ve veri tabanları aracılığıyla Healy ve HealAdvisor kullanım deneyimini genişletmeye yönelik içeriklerden oluşur. Bitki verileri, esansiyel yağlar, meridyen odaklı içerikler ve doğal wellness yaklaşımı bu kategoride yer alır.",
    suitableFor: [
      "Dijital modüllerle daha kapsamlı kullanım isteyenler",
      "HealAdvisor içeriklerini genişletmek isteyen kullanıcılar",
      "Bitki, esansiyel yağ ve doğal yaklaşım içeriklerine ilgi duyanlar",
      "Analiz ve veri tabanı odaklı modüller arayanlar"
    ],
    highlights: ["Dijital veri tabanı", "Esansiyel yağ içerikleri", "Meridyen modülleri", "Doğal wellness yaklaşımı"],
    products: [
      "Plant Power Database",
      "HealAdvisor Analyse Essential Oils Module",
      "HealAdvisor Analyse Meridian Module",
      "HealAdvisor Natural Cycle Module",
      "Personal Growth Database",
      "HealAdvisor Digital Nutrition Module",
      "HealAdvisor Animal Module",
      "HealAdvisor Bioenergetic Vitalization Module",
      "HealAdvisor Analyse Success Coach Module",
      "HealAdvisor Analyse Personal Coach Module",
      "HealAdvisor Search Module",
      "HealAdvisor Analyse Resonance Module",
      "HealAdvisor Analyse Aura Module",
      "Healy Watch Connector Module"
    ]
  },
  "upgrades": {
    title: "Yükseltmeler",
    subtitle: "Mevcut Healy veya MagHealy deneyiminizi yükseltin.",
    description: "Yükseltmeler kategorisi, mevcut Healy veya MagHealy cihaz deneyimini daha gelişmiş program seçenekleriyle genişletmek isteyen kullanıcılar için hazırlanmıştır. Bu seçenekler, kullanıcıların mevcut cihaz seviyesinden daha kapsamlı bir deneyime geçmesine yardımcı olur.",
    suitableFor: [
      "Healy Discover’dan daha gelişmiş modellere geçmek isteyenler",
      "Healy Evolve deneyimini Pro seviyesine taşımak isteyenler",
      "MagHealy Discover veya Evolve kullanıcıları",
      "Mevcut cihazını daha kapsamlı programlarla kullanmak isteyenler"
    ],
    highlights: ["Cihaz seviyesini yükseltme", "Daha fazla program seçeneği", "Gelişmiş kullanım deneyimi", "Healy ve MagHealy ekosistemini genişletme"],
    products: [
      "Upgrade from Healy Discover to Healy Evolve",
      "Upgrade from Healy Discover to Healy Pro",
      "Upgrade from Healy Evolve to Healy Pro",
      "Upgrade from MagHealy Discover to MagHealy Evolve",
      "Upgrade from MagHealy Discover to MagHealy Pro",
      "Upgrade from MagHealy Evolve to MagHealy Pro",
      "Upgrade from Healy Gold to Healy Evolve",
      "Upgrade from Healy Holistic to Healy Evolve",
      "Upgrade from Healy Gold to Healy Pro",
      "Upgrade from Healy Holistic to Healy Pro",
      "Upgrade from Healy Holistic Health Plus to Healy Pro",
      "Upgrade from Healy Resonance to Healy Pro",
      "Upgrade from Healy Resonance Plus to Healy Pro",
      "Upgrade from HealAdvisor Analyse Personal Coach to HealAdvisor Analyse Success Coach"
    ]
  },
  "business-suite": {
    title: "Business Suite",
    subtitle: "Paylaşım, ekip yönetimi ve iş geliştirme süreçleri için dijital destek paketleri.",
    description: "Business Suite kategorisi, Healy iş süreçlerinde paylaşım, ekip oluşturma, liderlik ve dijital iş geliştirme alanlarına odaklanan paketlerden oluşur. Bu kategori ürün satışı değil, bilgilendirme ve danışmanlık odaklı tanıtılmalıdır.",
    suitableFor: ["Healy iş tarafıyla ilgilenen kullanıcılar", "Ürün paylaşımı yapanlar", "Ekip geliştirme süreçlerine odaklananlar", "Dijital iş destek araçları arayanlar"],
    highlights: ["Ürün paylaşımı", "Ekip oluşturma", "Liderlik desteği", "Dijital iş araçları"],
    products: ["Business Suite – Sharer Bundle", "Business Suite – Team Builder Bundle", "Business Suite – Leader Bundle"]
  },
  "accessories": {
    title: "Aksesuarlar",
    subtitle: "Healy ve MagHealy kullanımını destekleyen aksesuarlar.",
    description: "Aksesuarlar kategorisi, Healy ve MagHealy kullanımını desteklemeye yönelik tamamlayıcı ürünlerden oluşur. Şarj aksesuarları, elektrotlar, bileklikler ve bağlantı kabloları gibi günlük kullanımda ihtiyaç duyulabilecek ürünleri kapsar.",
    suitableFor: ["Healy veya MagHealy aksesuarlarına ihtiyaç duyanlar", "Kullanım deneyimini tamamlayıcı ürünlerle desteklemek isteyenler", "Yedek veya yardımcı parçalar arayanlar", "Daha pratik bir kullanım düzeni oluşturmak isteyenler"],
    highlights: ["Şarj desteği", "Elektrot kullanımı", "Bağlantı kabloları", "Yardımcı aksesuarlar"],
    products: [
      "MagHealy Inductive Charger",
      "Adhesive Electrodes Press Button Round Ø 32 mm, 8 pcs.",
      "Bracelets, 2 pcs.",
      "Connection Cable 96 Press Button on 2 mm White, 1 pc.",
      "Charging Cable USB 0.15 m – WHITE (1 pc.)",
      "Travel Case",
      "Charging Cable USB 0.15 m – BLACK (1 pc.)",
      "Connection Cable 96 cm – press button on 2 mm – BLACK (1 pc.)"
    ]
  },
  "replacements": {
    title: "Yedek / Değişim Ürünleri",
    subtitle: "Cihaz değişimi ve yenileme seçenekleri hakkında bilgi alın.",
    description: "Yedek / Değişim Ürünleri kategorisi, cihazı hasar gören, kaybolan veya değişim ihtiyacı olan kullanıcılar için replacement seçenekleri hakkında bilgilendirme sunar. Bu sayfa yalnızca danışmanlık ve bilgi alma amacıyla hazırlanmalıdır.",
    suitableFor: ["Cihaz değişimi hakkında bilgi almak isteyenler", "Replacement seçeneklerini karşılaştırmak isteyenler", "Healy veya MagHealy cihazı için yenileme seçeneği arayanlar", "Danışmanlık üzerinden doğru ürünü belirlemek isteyenler"],
    highlights: ["Cihaz değişimi", "Yenileme seçenekleri", "Replacement danışmanlığı", "Ürün uygunluğu hakkında bilgi alma"],
    products: ["MagHealy Obsidian – Replacement Device", "Healy Obsidian – Replacement Device", "Healy Replacement Device", "MagHealy Replacement Device"]
  }
};

function getCategory(slug) {
  return CATEGORIES.find((category) => category.slug === slug);
}

function productByName(name) {
  return PRODUCTS.find((product) => product.name.trim().toLowerCase() === name.trim().toLowerCase());
}

function makeWhatsappUrl(productName = "Healy") {
  const message = `Merhaba, ${productName} ürünü hakkında bilgi almak istiyorum.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function goToWhatsapp(productName) {
  window.open(makeWhatsappUrl(productName), "_blank", "noopener,noreferrer");
}

function productCard(product, isOverviewPage = false) {
  const pathPrefix = isOverviewPage ? "" : "pages/";
  const imgPrefix = isOverviewPage ? "../" : "";
  const badges = product.tags.map((tag) => `<span class="badge">${tag}</span>`).join("");
  return `
    <article class="product-card reveal" data-category="${product.category}">
      <div class="product-art" aria-hidden="true" style="background-image: url('${imgPrefix}images/${product.slug}.jpg'); background-size: contain; background-repeat: no-repeat; background-position: center; background-color: #fafdfd;"></div>
      <h3><a href="${pathPrefix}product-detail.html?product=${product.slug}" class="product-title-link">${product.name}</a></h3>
      <p>${product.description}</p>
      <div class="badge-row">${badges}</div>
      <div class="product-card-actions" style="display: flex; flex-direction: column; gap: 8px; margin-top: auto; width: 100%;">
        <button class="primary-btn" data-product-whatsapp="${product.name}" style="width: 100%;">WhatsApp'tan Bilgi Al</button>
        <a href="${pathPrefix}product-detail.html?product=${product.slug}" class="secondary-btn small" style="width: 100%; text-align: center; font-size: 0.82rem; padding: 8px 12px; font-weight: 700;">Detayları İncele</a>
      </div>
    </article>
  `;
}

function renderHome() {
  const productSections = document.getElementById("productSections");

  if (productSections) {
    productSections.innerHTML = `
      <div class="category-grid">
        ${CATEGORIES.map((category) => `
          <article class="category-grid-card reveal">
            <div class="category-grid-icon-box" aria-hidden="true">${category.icon}</div>
            <h3>${category.title}</h3>
            <p>${category.description}</p>
            <div class="category-grid-actions" style="margin-top: auto; width: 100%;">
              <a class="primary-btn small" href="pages/category-overview.html?category=${category.slug}" style="width: 100%; text-align: center; font-size: 0.88rem; padding: 10px 16px;">Kategoriyi İncele</a>
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  bindWhatsappButtons();
  observeReveal();
}

function bindFilterButtons() {
  const buttons = document.querySelectorAll("[data-filter]");
  const sections = document.querySelectorAll("[data-section-category]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      sections.forEach((section) => {
        const match = filter === "all" || section.dataset.sectionCategory === filter;
        section.classList.toggle("hidden", !match);
      });
    });
  });
}

function renderOverview() {
  const root = document.getElementById("overviewRoot");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const categorySlug = params.get("category") || "editions";
  const data = CATEGORY_OVERVIEWS[categorySlug];

  if (!data) {
    root.innerHTML = `
      <section class="error-state container">
        <div>
          <span class="eyebrow">Hata</span>
          <h1>Kategori bulunamadı</h1>
          <p>Aradığınız genel bakış kategorisi mevcut değil.</p>
          <a class="primary-btn" href="../index.html#products">Ürünlere Dön</a>
        </div>
      </section>
    `;
    return;
  }

  const productCards = data.products.map((name) => {
    const existing = productByName(name);
    if (existing) {
      return productCard(existing, true);
    } else {
      return `
        <article class="product-card reveal">
          <div class="product-art" aria-hidden="true"></div>
          <h3><a href="product-detail.html?product=${encodeURIComponent(name)}" class="product-title-link">${name}</a></h3>
          <p>Bu ürünün detaylı genel bakış içeriği yakında eklenecektir.</p>
          <div class="badge-row"><span class="badge">${data.title}</span></div>
          <div class="product-card-actions" style="display: flex; flex-direction: column; gap: 8px; margin-top: auto; width: 100%;">
            <button class="primary-btn" data-product-whatsapp="${name}" style="width: 100%;">WhatsApp'tan Bilgi Al</button>
            <a href="product-detail.html?product=${encodeURIComponent(name)}" class="secondary-btn small" style="width: 100%; text-align: center; font-size: 0.82rem; padding: 8px 12px; font-weight: 700;">Detayları İncele</a>
          </div>
        </article>
      `;
    }
  }).join("");

  root.innerHTML = `
    <div class="breadcrumb container">
      <a href="../index.html">Ana Sayfa</a> / <a href="../index.html#products">Ürünler</a> / <span>${data.title}</span>
    </div>

    <section class="overview-hero">
      <div class="container overview-hero-grid">
        <div class="reveal">
          <span class="eyebrow">Genel Bakış</span>
          <h1>${data.title}</h1>
          <p class="subtitle"><strong>${data.subtitle}</strong></p>
          <p class="desc-text">${data.description}</p>
          <div class="hero-actions">
            <button class="primary-btn" data-whatsapp-general>WhatsApp'tan Bilgi Al</button>
            <a class="secondary-btn" href="../index.html#products">Tüm Ürünlere Dön</a>
          </div>
        </div>
        <div class="overview-mock reveal" aria-hidden="true">
          <div class="mock-card-inner">
            <div class="mock-pulse"></div>
            <div class="mock-wave-decor"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="overview-section">
      <div class="container overview-split">
        <div class="overview-list-card reveal">
          <h2>Kimler için uygun?</h2>
          <ul class="clean-list">
            ${data.suitableFor.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="overview-list-card reveal">
          <h2>Öne çıkan kullanım alanları</h2>
          <ul class="clean-list">
            ${data.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>

    <section class="overview-section alt">
      <div class="container">
        <div class="section-heading reveal">
          <span class="eyebrow">Kategori Ürünleri</span>
          <h2>${data.title} Ürünleri</h2>
          <p>Bu sayfada fiyat veya ödeme alanı yoktur. Ürün hakkında bilgi almak için WhatsApp üzerinden iletişime geçebilirsiniz.</p>
        </div>
        <div class="product-grid">
          ${productCards}
        </div>
      </div>
    </section>

    <section class="overview-cta">
      <div class="container cta-card reveal">
        <div>
          <span class="eyebrow">Danışmanlık</span>
          <h2>Bu kategori hakkında bilgi almak ister misiniz?</h2>
          <p>Size uygun ürün veya modül seçeneklerini birlikte değerlendirmek için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.</p>
        </div>
        <button class="primary-btn" data-whatsapp-general>WhatsApp'tan Bilgi Al</button>
      </div>
    </section>

    <section class="overview-warning">
      <div class="container">
        <p><strong>Yasal Uyarı:</strong> İyileştirici Frekanslar bağımsız bir tanıtım ve danışmanlık platformudur. Healy markası ve ilgili ürün adları kendi marka sahiplerine aittir. Bu sitedeki bilgiler yalnızca genel bilgilendirme ve wellness amaçlıdır. Ürünler tıbbi teşhis, tedavi, iyileştirme veya hastalık önleme amacıyla sunulmamaktadır. Sağlıkla ilgili konularda doktorunuza danışınız.</p>
      </div>
    </section>
  `;

  document.title = `İyileştirici Frekanslar | ${data.title} Genel Bakış`;
  bindWhatsappButtons();
  observeReveal();
}

function renderProductDetailPlaceholder() {
  const page = document.body.dataset.page;
  if (page !== "product-detail") return;

  const params = new URLSearchParams(window.location.search);
  const productSlug = params.get("product");
  const product = PRODUCTS.find((item) => item.slug === productSlug);
  const title = document.getElementById("productDetailTitle");
  const desc = document.getElementById("productDetailDesc");
  const button = document.getElementById("detailWhatsappBtn");
  const breadcrumbSpan = document.getElementById("breadcrumbProduct");
  const metaDesc = document.querySelector('meta[name="description"]');

  if (product) {
    if (title) title.textContent = `${product.name} - Genel Bakış`;
    if (desc) desc.textContent = product.description + " Bu ürünün detaylı genel bakış içeriği yakında eklenecektir.";
    if (breadcrumbSpan) breadcrumbSpan.textContent = product.name;
    document.title = `İyileştirici Frekanslar | ${product.name} Genel Bakış`;
    if (metaDesc) metaDesc.setAttribute("content", `${product.name} detaylı genel bakış sayfası. ${product.description}`);
  }

  if (button) {
    button.addEventListener("click", () => goToWhatsapp(product?.name || "Healy"));
  }
}

function bindWhatsappButtons() {
  document.querySelectorAll("[data-whatsapp-general]").forEach((button) => {
    button.onclick = () => goToWhatsapp("Healy");
  });

  document.querySelectorAll("[data-product-whatsapp]").forEach((button) => {
    button.onclick = () => goToWhatsapp(button.dataset.productWhatsapp);
  });
}

function bindFaq() {
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.closest(".faq-item");
      if (item) {
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach((f) => f.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      }
    });
  });
}

// Hamburger menu toggle
function bindMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function bindHeaderScroll() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const update = () => header.classList.toggle("scrolled", window.scrollY > 10);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function observeReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach((element) => observer.observe(element));
}

function init() {
  const page = document.body.dataset.page;
  bindMenu();
  bindHeaderScroll();
  bindFaq();
  bindWhatsappButtons();
  initQuiz();
  initWhatsappWidget();

  if (page === "home") renderHome();
  if (page === "overview") renderOverview();
  if (page === "product-detail") renderProductDetailPlaceholder();

  observeReveal();
}

document.addEventListener("DOMContentLoaded", init);

// FREKANS ASİSTANI (QUIZ) LOGIC
const QUIZ_QUESTIONS = [
  {
    step: 1,
    title: "Fiziksel Durum ve Destek İhtiyacı",
    subtitle: "Günlük yaşamınızda fiziksel olarak en çok hangi alanda desteğe ihtiyaç duyuyorsunuz?",
    options: [
      { text: "Eklem/Kas gerginlikleri veya lokal rahatsızlıklar", value: "pain-tension", letter: "A" },
      { text: "Kronik yorgunluk ve gün içi düşük enerji seviyesi", value: "fatigue-energy", letter: "B" },
      { text: "Sindirim rutini ve metabolizma dengesi", value: "digestion-metabolism", letter: "C" },
      { text: "Baş bölgesi yoğunluğu ve stres kaynaklı kasılmalar", value: "head-stress", letter: "D" },
      { text: "Herhangi bir fiziksel şikayetim yok, koruyucu wellness", value: "none-physical", letter: "E" }
    ]
  },
  {
    step: 2,
    title: "Zihinsel Durum ve Uyku Rutini",
    subtitle: "Zihinsel dengenizi ve uyku kalitenizi en iyi hangisi tanımlıyor?",
    options: [
      { text: "Uykuya geçişte zorlanıyorum veya uykum sık bölünüyor", value: "sleep-issues", letter: "A" },
      { text: "Gün içinde yoğun zihinsel doluluk ve stres hissediyorum", value: "mental-stress", letter: "B" },
      { text: "Motivasyon eksikliği veya duygusal dalgalanmalar yaşıyorum", value: "emotional-mood", letter: "C" },
      { text: "Zihinsel olarak sakin, dengeli ve düzenli uyuyorum", value: "calm-balanced", letter: "D" }
    ]
  },
  {
    step: 3,
    title: "Günlük Yaşam Tarzı ve Aktivite",
    subtitle: "Günlük yaşam rutininizi en iyi hangisi yansıtıyor?",
    options: [
      { text: "Masa başı iş, yüksek ekran süresi ve zihinsel yoğunluk", value: "desk-office", letter: "A" },
      { text: "Aktif spor, fitness ve yoğun fiziksel efor", value: "sport-fitness", letter: "B" },
      { text: "Yoga, meditasyon, bütünsel wellness çalışmaları", value: "holistic-yoga", letter: "C" },
      { text: "Yoğun ev/aile düzeni ve sürekli koşturmaca", value: "busy-home", letter: "D" }
    ]
  },
  {
    step: 4,
    title: "Enerji Alanı (Aura/Çakra) Analiz Merakı",
    subtitle: "Çakralarınızın, enerji meridyenlerinizin ve aura durumunuzun anlık ölçüm ve analizini yapmak ister misiniz?",
    options: [
      { text: "Evet, mutlaka çakra ve aura analizi yapıp frekans göndermek isterim.", value: "yes-analysis", letter: "A" },
      { text: "Hayır, sadece cihazın içindeki hazır frekans programlarını çalıştırmak yeterli.", value: "no-analysis", letter: "B" },
      { text: "Kararsızım, her iki kullanım şeklini de merak ediyorum.", value: "maybe-analysis", letter: "C" }
    ]
  },
  {
    step: 5,
    title: "Ortam ve Yaşam Alanı Dengesi",
    subtitle: "Frekans etkisini bedeninizde mi yoksa ev/ofis ortamında ve suda da hissetmek istersiniz?",
    options: [
      { text: "Sadece kendi bedenim için (Taşınabilir mikroakım kullanımı)", value: "personal-only", letter: "A" },
      { text: "Ev halkı, evcil hayvanlar, oda havası ve su kodlama için (Manyetik Alan)", value: "space-only", letter: "B" },
      { text: "Hem kendi bedenim hem de tüm yaşam alanım için bir arada (Tam Kapsamlı)", value: "both-combined", letter: "C" }
    ]
  },
  {
    step: 6,
    title: "Kapsam ve Paket Seviyesi Tercihiniz",
    subtitle: "Size sunulacak program zenginliği seviyesini seçin.",
    options: [
      { text: "Temel ihtiyaçlara odaklanan başlangıç paketi.", value: "starter-level", letter: "A" },
      { text: "Fiyat/Performans odaklı dengeli bir orta-üst paket.", value: "balanced-level", letter: "B" },
      { text: "En kapsamlı profesyonel yazılım paketleri (Sınır olmasın).", value: "unlimited-level", letter: "C" }
    ]
  }
];

let quizCurrentStep = 0;
let quizAnswers = [];

function initQuiz() {
  const modal = document.getElementById("quizModal");
  const navBtn = document.getElementById("quizNavBtn");
  const floatingBtn = document.getElementById("quizFloatingBtn");
  const closeBtn = document.getElementById("quizCloseBtn");
  const overlay = document.getElementById("quizModalOverlay");

  if (!modal) return;

  const openQuiz = (e) => {
    if (e) e.preventDefault();
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Lock page scroll
    quizCurrentStep = 0;
    quizAnswers = [];
    renderQuizStep();
  };

  const closeQuiz = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Unlock page scroll
  };

  if (navBtn) navBtn.addEventListener("click", openQuiz);
  if (floatingBtn) floatingBtn.addEventListener("click", openQuiz);
  if (closeBtn) closeBtn.addEventListener("click", closeQuiz);
  if (overlay) overlay.addEventListener("click", closeQuiz);
}

function renderQuizStep() {
  const content = document.getElementById("quizContent");
  const progressBar = document.getElementById("quizProgressBar");
  if (!content) return;

  const totalSteps = QUIZ_QUESTIONS.length;
  const progressPercent = (quizCurrentStep / totalSteps) * 100;
  if (progressBar) progressBar.style.width = `${progressPercent}%`;

  if (quizCurrentStep >= totalSteps) {
    renderQuizLoading();
    return;
  }

  const q = QUIZ_QUESTIONS[quizCurrentStep];
  content.innerHTML = `
    <h3 class="quiz-step-title">${q.title}</h3>
    <p class="quiz-step-subtitle">${q.subtitle}</p>
    <div class="quiz-options">
      ${q.options.map((opt) => `
        <button class="quiz-option-card" data-value="${opt.value}">
          <span class="quiz-option-letter">${opt.letter}</span>
          <span class="quiz-option-text">${opt.text}</span>
        </button>
      `).join("")}
    </div>
  `;

  content.querySelectorAll(".quiz-option-card").forEach((card) => {
    card.addEventListener("click", () => {
      quizAnswers.push(card.dataset.value);
      quizCurrentStep++;
      renderQuizStep();
    });
  });
}

function renderQuizLoading() {
  const content = document.getElementById("quizContent");
  const progressBar = document.getElementById("quizProgressBar");
  if (progressBar) progressBar.style.width = "100%";
  if (!content) return;

  content.innerHTML = `
    <div class="quiz-loading">
      <div class="quiz-spinner"></div>
      <p style="font-weight: 600; color: var(--primary); margin: 0;">Seçenekleriniz analiz ediliyor...</p>
      <p style="font-size: 0.88rem; color: var(--muted); margin: -10px 0 0;">İyileştirici Frekanslar sizin için en uygun programları hesaplıyor.</p>
    </div>
  `;

  setTimeout(() => {
    renderQuizResult();
  }, 1200);
}

function renderQuizResult() {
  const content = document.getElementById("quizContent");
  if (!content) return;

  const physical = quizAnswers[0];
  const mental = quizAnswers[1];
  const lifestyle = quizAnswers[2];
  const analysis = quizAnswers[3];
  const space = quizAnswers[4];
  const level = quizAnswers[5];

  let recommendation = {
    title: "Healy Evolve",
    badge: "Bütünsel Denge",
    desc: "Günlük wellness, aktif spor aktiviteleri ve biyoenerjetik alan dengelemesi için ideal programları sunan çok yönlü frekans paketidir.",
    details: "Healy Evolve modeli; Gold Cycle programlarına ek olarak Fitness, Biyoenerjetik Uyum 1 & 2 ve Lokal Stimülasyon (ağrı/rahatlama) program gruplarını içerir. Günlük yaşamınızda fiziksel kondisyonunuzu ve zihinsel dengenizi korumanızda en yakın yardımcınız olacaktır."
  };

  // Karar Ağacı Mantığı (Decision Tree):
  if (space === "space-only") {
    // 1. Sadece ortam ve manyetik dengeleme isteyenler -> MagHealy Pro
    recommendation = {
      title: "MagHealy Pro",
      badge: "Manyetik Alan Deneyimi",
      desc: "Yaşam alanınızın atmosferini düzenlemek, içme suyunuzu frekanslarla uyumlamak ve bulunduğunuz ortamda biyoenerjetik denge kurmak için tasarlanmış manyetik alan cihazıdır.",
      details: "MagHealy Pro; Atmosphere (yaşam alanı/ofis), Water (su kodlama), McMakin (manyetik alan mikroakım) ve Harmonization program uygulamalarını içerir. Özellikle tüm ev halkı, evcil hayvanlar ve ortam dengelenmesi için mükemmel bir alternatiftir."
    };
  } else if (space === "both-combined") {
    // 2. Hem bireysel hem ortam isteyenler -> The Elevate Bundle
    recommendation = {
      title: "The Elevate Bundle",
      badge: "Nihai Wellness Paketi",
      desc: "Hem kendi bedeninizdeki biyoenerjetik akışı düzenlemek hem de yaşam alanınızın frekansını optimize etmek için iki teknolojiyi birleştiren en kapsamlı çözümdür.",
      details: "Bu bundle paketi, taşınabilir Healy cihazını (bireysel mikroakım programları için) ve MagHealy cihazını (yaşam alanı ve su aktivasyonu için) bir arada sunar. Hem kişisel wellness hedeflerinize ulaşmanızı hem de aileniz için dengeli bir atmosfer yaratmanızı sağlar."
    };
  } else if (analysis === "yes-analysis" || level === "unlimited-level") {
    // 3. Aura/Çakra analiz modülü isteyenler veya limitsiz paket seçenler -> Healy Pro
    recommendation = {
      title: "Healy Pro",
      badge: "Bütünsel Wellness & Analiz",
      desc: "Çakralar, meridyenler, kişisel gelişim veri tabanları ve rezonans analiz modüllerine tam erişim sunan, sınır tanımayan en üst düzey Healy paketidir.",
      details: "Bu gelişmiş paket; Chakras, Meridians 1 & 2, Learning, Job, Beauty, Skin ve tüm HealAdvisor analiz modüllerini (Aura, Rezonans, Success/Personal Coach) kapsar. Kendi biyoenerjetik alanınızı ölçümlemek ve analiz odaklı çalışmak için nihai seçenektir."
    };
  } else if (mental === "sleep-issues" || mental === "mental-stress") {
    // 4. Yoğun uyku ve stres problemi olup çakra analizi aramayanlar
    if (level === "starter-level") {
      recommendation = {
        title: "Healy Discover",
        badge: "Temel Wellness",
        desc: "Frekans teknolojisiyle tanışmak ve temel düzeyde zihinsel rahatlama/wellness desteği almak isteyenler için ideal başlangıç modelidir.",
        details: "Healy Discover modeli; Nuno Nina'nın efsanevi Gold Cycle (Saf, Bakım, Varlık, Enerji, Zihin, Salınım, Denge) program grubunu ve Bioenergetic Support (biyoenerjetik alan koruma) programını içerir. Günlük stresinizi yönetmek ve kaliteli bir uyku altyapısı kurmak için harika bir adımdır."
      };
    } else {
      recommendation = {
        title: "Healy Pro",
        badge: "Üst Seviye Zihinsel Denge",
        desc: "Zihinsel denge, derin uyku programları ve derin döngü frekanslarına tam erişim sağlamak isteyen kullanıcılar için en gelişmiş modeldir.",
        details: "Healy Pro; Sleep (Uyku), Mental Balance (Zihinsel Denge), Soul Cycle, Deep Cycle H ve Bioenergetic Vitalization program gruplarını tam kapasite içerir. Yoğun stres, uyku düzensizlikleri ve derin rahatlama ihtiyaçları için en profesyonel çözümleri sunar."
      };
    }
  } else if (physical === "pain-tension" || lifestyle === "sport-fitness") {
    // 5. Spor ve fiziksel gerginlikler ön plandaysa -> Healy Evolve
    recommendation = {
      title: "Healy Evolve",
      badge: "Fiziksel Kondisyon & Denge",
      desc: "Spor aktivitelerini desteklemek, fiziksel kondisyonu korumak ve eklem/kas gerginliklerini rahatlatmak için tasarlanmış f/p odaklı ideal modeldir.",
      details: "Healy Evolve modeli; Gold Cycle'a ek olarak Fitness, Biyoenerjetik Uyum 1 & 2 ve Lokal Stimülasyon (ağrı/rahatlama) program gruplarını içerir. Günlük hareket rutininizi desteklemek için en dengeli seçenektir."
    };
  } else if (level === "starter-level") {
    // 6. Genel başlangıç seviyesi istekleri -> Healy Discover
    recommendation = {
      title: "Healy Discover",
      badge: "Temel Biyoenerjetik Uyum",
      desc: "Temel frekans programlarıyla biyoenerjetik alan korumasına ve zindelik desteğine odaklanan başlangıç paketidir.",
      details: "Healy Discover modeli; Gold Cycle ve Bioenergetic Support programlarını içerir. Cihazı genel yaşam kalitesini korumak ve frekansları denemek için kullanmak isteyenlere hitap eder."
    };
  }

  // Pre-filled Message
  const whatsappMsg = `Merhaba, İyileştirici Frekanslar Asistanı'nı tamamladım. Test sonucunda bana "${recommendation.title}" tavsiye edildi. Bu model ve içindeki program grupları hakkında detaylı bilgi ve danışmanlık alabilir miyim?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

  content.innerHTML = `
    <div class="quiz-result-card">
      <span class="quiz-result-badge">${recommendation.badge}</span>
      <h2 class="quiz-result-title">${recommendation.title}</h2>
      <p class="quiz-result-desc">${recommendation.desc}</p>
      <div class="quiz-result-details">
        <strong>Neden Bu Model?</strong>
        <p>${recommendation.details}</p>
      </div>
      <div class="quiz-result-actions">
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="primary-btn">
          WhatsApp'tan Detaylı Bilgi Al
        </a>
        <button class="secondary-btn small" id="quizRestartBtn">Testi Yeniden Çöz</button>
      </div>
    </div>
  `;

  const restartBtn = document.getElementById("quizRestartBtn");
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      quizCurrentStep = 0;
      quizAnswers = [];
      renderQuizStep();
    });
  }
}

function initWhatsappWidget() {
  if (document.getElementById("waWidget")) return;

  const widget = document.createElement("div");
  widget.className = "wa-widget";
  widget.id = "waWidget";

  const defaultMsg = "Merhaba, Healy frekans cihazları ve wellness çözümleri hakkında detaylı bilgi alabilir miyim?";
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMsg)}`;

  widget.innerHTML = `
    <div class="wa-popup" id="waPopup" aria-hidden="true">
      <div class="wa-popup-header">
        <div class="wa-popup-avatar">💬</div>
        <div class="wa-popup-info">
          <span class="wa-popup-name">Destek Asistanı</span>
          <span class="wa-popup-status"><span class="wa-popup-dot"></span>Çevrimiçi</span>
        </div>
        <button class="wa-popup-close" id="waPopupClose" aria-label="Kapat">&times;</button>
      </div>
      <div class="wa-popup-body">
        <div class="wa-popup-msg">
          Merhaba! 👋 Healy frekans cihazları, program grupları veya size en uygun modelin seçimi hakkında bilgi almak için bana yazabilirsiniz. Nasıl yardımcı olabilirim?
        </div>
      </div>
      <div class="wa-popup-footer">
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="wa-popup-btn" id="waPopupBtn">
          <svg class="wa-icon" viewBox="0 0 24 24">
            <path fill="#ffffff" d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.758.459 3.414 1.258 4.869l-1.282 4.707 4.819-1.264c1.402.766 2.998 1.202 4.693 1.202 5.506 0 9.988-4.482 9.988-9.988 0-5.506-4.482-9.988-9.988-9.988zm5.725 14.18c-.244.688-1.218 1.25-1.954 1.32-.505.048-1.168.077-3.39-.843-2.842-1.176-4.678-4.068-4.821-4.258-.142-.19-1.144-1.523-1.144-2.909 0-1.385.731-2.067 1.01-2.351.278-.284.61-.355.814-.355.203 0 .407.003.584.012.183.009.431-.07.674.512.247.591.843 2.057.915 2.205.072.148.12.32.02.521-.099.201-.15.32-.3.493-.15.172-.315.385-.45.518-.15.148-.306.309-.133.608.173.299.769 1.267 1.65 2.048.136.12.253.181.393.26.14.079.28.13.433.09.153-.04.664-.287.842-.482.179-.195.239-.329.355-.203.116.126.744.752.871.815.127.063.211.095.314.116.103.021.505-.17.749-.858z"/>
          </svg>
          Sohbete Başla
        </a>
      </div>
    </div>
    <button class="wa-floating-btn" id="waFloatingBtn" aria-label="WhatsApp Destek Hattı">
      <svg class="wa-floating-icon" viewBox="0 0 24 24" width="30" height="30">
        <path fill="#ffffff" d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.758.459 3.414 1.258 4.869l-1.282 4.707 4.819-1.264c1.402.766 2.998 1.202 4.693 1.202 5.506 0 9.988-4.482 9.988-9.988 0-5.506-4.482-9.988-9.988-9.988zm5.725 14.18c-.244.688-1.218 1.25-1.954 1.32-.505.048-1.168.077-3.39-.843-2.842-1.176-4.678-4.068-4.821-4.258-.142-.19-1.144-1.523-1.144-2.909 0-1.385.731-2.067 1.01-2.351.278-.284.61-.355.814-.355.203 0 .407.003.584.012.183.009.431-.07.674.512.247.591.843 2.057.915 2.205.072.148.12.32.02.521-.099.201-.15.32-.3.493-.15.172-.315.385-.45.518-.15.148-.306.309-.133.608.173.299.769 1.267 1.65 2.048.136.12.253.181.393.26.14.079.28.13.433.09.153-.04.664-.287.842-.482.179-.195.239-.329.355-.203.116.126.744.752.871.815.127.063.211.095.314.116.103.021.505-.17.749-.858z"/>
      </svg>
    </button>
  `;

  document.body.appendChild(widget);

  const floatingBtn = document.getElementById("waFloatingBtn");
  const popup = document.getElementById("waPopup");
  const closeBtn = document.getElementById("waPopupClose");

  floatingBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    popup.classList.toggle("active");
    const isActive = popup.classList.contains("active");
    popup.setAttribute("aria-hidden", !isActive);
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    popup.classList.remove("active");
    popup.setAttribute("aria-hidden", "true");
  });

  popup.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    if (popup.classList.contains("active")) {
      popup.classList.remove("active");
      popup.setAttribute("aria-hidden", "true");
    }
  });
}
