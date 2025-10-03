export const supportedLocales = ['en', 'ja'] as const;
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = 'ja';

type ToolIconKey = 'unity' | 'vscode' | 'clipStudio' | 'aseprite';

type ContactIconKey = 'x' | 'discord';

type Project = {
  title: string;
  role: string;
  description: string;
  href?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
};

type Tool = {
  name: string;
  note: string;
  iconKey: ToolIconKey;
};

type Contribution = {
  title: string;
  detail: string;
};

type ContactLink = {
  title: string;
  href?: string;
  icon: ContactIconKey;
};

export type LocaleContent = {
  metaTitle: string;
  metaDescription: string;
  htmlLang: string;
  profile: {
    name: string;
    tagline: string;
    summary: string;
  };
  contactLinks: ContactLink[];
  aboutParagraphs: string[];
  specialties: string[];
  tools: Tool[];
  contributions: Contribution[];
  languages: string[];
  programmingLanguagesNote: string;
  projects: Project[];
  sectionTitles: {
    projects: string;
    about: string;
    specialties: string;
    tools: string;
    contributions: string;
    programmingLanguages: string;
  };
};

export const contentByLocale: Record<Locale, LocaleContent> = {
  en: {
    metaTitle: 'portfolio',
    metaDescription:
      'Portfolio site showcasing indie game development projects, art, and tooling.',
    htmlLang: 'en',
    profile: {
      name: '4423',
      tagline: 'Game Developer / Designer',
      summary:
        'I create indie games end to end, moving between programming and art to build worlds with a distinct atmosphere. Here is a look at the projects I have been working on.',
    },
    contactLinks: [
      { title: 'X (Twitter)', href: 'https://x.com/MYosh4423', icon: 'x' },
      { title: 'Discord', href: 'https://discord.gg/gpdhjVCM', icon: 'discord' },
    ],
    aboutParagraphs: [
      'My core focus is Unity (C#) development, while Clip Studio and Aseprite let me create digital and pixel art tailored to each project. I also build workflow tools and prototype machine-learning utilities in Python, keeping programming and art tightly connected.',
      'The sections below outline my key strengths, the tools I rely on, and the projects I have contributed to.',
    ],
    specialties: [
      'Game programming and systems design in Unity',
      'UI design',
      'Pixel art',
      'Workflow automation and ML prototyping with Python',
    ],
    tools: [
      { name: 'Unity', note: 'Game engine', iconKey: 'unity' },
      { name: 'Visual Studio Code', note: 'IDE', iconKey: 'vscode' },
      { name: 'Clip Studio Paint', note: 'Digital art', iconKey: 'clipStudio' },
      { name: 'Aseprite', note: 'Pixel art', iconKey: 'aseprite' },
    ],
    contributions: [
      { title: '----', detail: 'UI programming support (2025)' },
    ],
    languages: ['C#', 'Python', 'C++'],
    programmingLanguagesNote:
      'Primary languages I rely on in development.',
    projects: [
      {
        title: 'Step On All Stars',
        role: 'Systems design & game design / Aug 2024',
        description:
          'A rhythm-infused bullet-dodging action game about weaving through falling meteors and stomping stars arranged as constellations.',
        href: 'https://myosh4423.itch.io/step-on-all-stars',
        thumbnail: 'steponallstars_title.png',
        thumbnailAlt: 'Step On All Stars thumbnail',
      },
      // {
      //   title: 'Game Title 02',
      //   role: 'Technical Artist / 2023',
      //   description:
      //     'Built shader-driven environment assets, established art-to-engine workflows, and optimized asset import pipelines.',
      //   href: '/blog/long-title/',
      //   thumbnail: 'coming-soon.png',
      //   thumbnailAlt: 'Placeholder cover for Game Title 02',
      // },
    ],
    sectionTitles: {
      projects: 'Projects',
      about: 'About Me',
      specialties: 'Specialties',
      tools: 'Tools & Engines',
      contributions: 'Team Contributions',
      programmingLanguages: 'Programming Languages',
    },
  },
  ja: {
    metaTitle: 'ホーム',
    metaDescription: 'ゲーム開発の実績やツール、経験をまとめたポートフォリオサイトです。',
    htmlLang: 'ja',
    profile: {
      name: '4423',
      tagline: 'ゲーム開発者 / デザイナー',
      summary:
        'インディーゲームを制作しています。プログラミングからアートまで自分で手がけ、世界観のある作品づくりを目指しています。これまでの取り組みをご紹介します。',
    },
    contactLinks: [
      { title: 'X（旧Twitter）', href: 'https://x.com/MYosh4423', icon: 'x' },
      { title: 'Discord', href: 'https://discord.gg/gpdhjVCM', icon: 'discord' },
    ],
    aboutParagraphs: [
      'Unity（C#）を用いたゲーム開発に加え、Clip StudioやAsepriteを活用したデジタルアート・ドット絵制作も行っています。さらに、Pythonによる深層学習モデルの構築経験もあり、プログラミングとアートの両面からゲーム制作に取り組んでいます。',
      '下記では主な強み、使用ツール、参画したプロジェクトについて概要をまとめています。',
    ],
    specialties: [
      'Unityによるゲームプログラミング・システム設計',
      'UIデザイン',
      'PixelArt',
      'Pythonを利用した深層学習モデル開発'
    ],
    tools: [
      { name: 'Unity', note: 'ゲームエンジン', iconKey: 'unity' },
      { name: 'Visual Studio Code', note: 'IDE', iconKey: 'vscode' },
      { name: 'Clip Studio Paint', note: 'デジタルアート', iconKey: 'clipStudio' },
      { name: 'Aseprite', note: 'ドット絵制作', iconKey: 'aseprite' },
    ],
    contributions: [
      { title: '----', detail: 'UIプログラムサポート / 2025年' },
    ],
    languages: ['C#', 'Python', 'C++'],
    programmingLanguagesNote:
      '主に開発に利用している言語',
    projects: [
      {
        title: 'Step On All Stars',
        role: 'システム設計・デザイン / 2024年8月',
        description:
          '迫りくる隕石をよけながら、星座の形に配置される星々を踏みつける弾幕回避ゲーム',
        href: 'https://myosh4423.itch.io/step-on-all-stars',
        thumbnail: 'steponallstars_title.png',
        thumbnailAlt: 'steponallstars_thumbnail',
      },
      // {
      //   title: 'ゲームタイトル02',
      //   role: 'テクニカルアーティスト / 2023年',
      //   description:
      //     'シェーダーによる背景演出、アートからエンジンへの制作パイプライン整備、アセット最適化を担当。',
      //   href: '/blog/missing-content/',
      //   thumbnail: 'coming-soon.png',
      //   thumbnailAlt: 'Game Title 02のプレースホルダー画像',
      // },
    ],
    sectionTitles: {
      projects: '制作実績',
      about: 'プロフィール',
      specialties: '得意分野',
      tools: '使用ツール・エンジン',
      contributions: '開発参加作品',
      programmingLanguages: '使用言語',
    },
  },
};











