import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const colors = {
  project: "#FFE3E8",
  company: "#E8F8FF",
  school: "#F0E8FF",
  birth: "#FFF9CF",
  etc: "#BBEDC6",
};

const icons = {
  game: "🎮",
  company: "🏢",
  school: "🏫",
  birth: "🎉",
};

const timelineElements = [
  {
    id: "study-react",
    date: "2025/01〜",
    title: "React勉強中",
    description:
      "Webアプリに興味を持ち、勉強を始める。Webアプリ開発業界ではReactが流行している事を知り、Reactを勉強中。",
    color: colors.project,
    icon: "💻",
  },
  {
    id: "girl-game",
    date: "2024/01〜2024/12",
    title: "美少女ゲーム開発",
    description:
      "今まで培ってきたスキルを活かしゲームを自分で売るチャレンジをしてみる。企画 → リリースまで全て1人で手がけ、無事リリースしDL数300本を記録する。<br>使用ツール：Unity<br>プログラミング言語：C#",
    color: colors.project,
    icon: icons.game,
  },
  {
    id: "cross-out",
    date: "2023/12",
    title: "クロスゲームズ退社",
    description: "事業縮小の為、会社都合退職となる。",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "nft-game",
    date: "2022/08〜2023/11",
    title: "NFTゲーム開発",
    description:
      "すごろくでダンジョンを探索していくゲームのチームリーダーとして工数管理・機能追加を担当する。<br>チーム規模：小規模(10人)<br>使用ツール：Cocos Creator<br>プログラミング言語：TypeScript",
    color: colors.project,
    icon: icons.game,
  },
  {
    id: "cross-in",
    date: "2022/08",
    title: "クロスゲームズ入社",
    description: "ゲームを開発している会社に入社する。",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "uzu-out",
    date: "2022/03",
    title: "Uzufactory退社",
    description: "給与面で不満があり転職を決意。",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "rpg-game",
    date: "2020/03〜2021/07",
    title: "RPGゲーム開発",
    description:
      "キャラごとのスキルを発動し敵を倒しながらステージを進んでいくゲームの機能追加を担当する。<br>チーム規模：小規模(15人)<br>使用ツール：Cocos Creator<br>プログラミング言語：JavaScript",
    color: colors.project,
    icon: icons.game,
  },
  {
    id: "meta-verse-shopping-mall-app",
    date: "2021/07〜2022/03",
    title: "メタバースショッピングモールアプリ開発",
    description:
      "お店に売っている商品をスマートフォンからでもチェックできるアプリの機能追加を担当する。<br>チーム規模：中規模(約30⼈)<br>使用ツール：Unity・Visual Studio<br>プログラミング言語：C#",
    color: colors.project,
    icon: "🛒",
  },
  {
    id: "rithm-action-rpg-game",
    date: "2018/02〜2020/03",
    title: "リズムアクションRPGゲーム開発",
    description:
      "美少⼥がダンスしているのを鑑賞しながらリズムゲームができるゲームの機能追加を担当する。<br>チーム規模：大規模(約190⼈)<br>使用ツール：Unity・Rider<br>プログラミング言語：C#",
    color: colors.project,
    icon: icons.game,
  },
  {
    id: "tower-defense-game",
    date: "2016/04〜2018/01",
    title: "タワーディフェンスゲーム開発",
    description:
      "クラッシュ‧オブ‧クランにインスピレーションを得たタワーディフェンスゲームの機能追加を担当する。<br>チーム規模：中規模(約30⼈)<br>使用ツール：Unity・Visual Studio<br>プログラミング言語：C#",
    color: colors.project,
    icon: icons.game,
  },
  {
    id: "uzu-in",
    date: "2016/04",
    title: "Uzufactory入社",
    description: "福岡で療養後、ゲームを開発している会社に入社する。",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "serette-out",
    date: "2015/08",
    title: "セレッテ退社",
    description:
      "深夜残業の常態化など労働環境が期待と異なる部分があり、体調面も悪化したため退職する。",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "electricity-company",
    date: "2014/11〜2015/08",
    title: "電⼒会社⽤Webアプリ開発",
    description:
      "電⼒会社の料⾦計算Webアプリケーションで機能追加を担当する。<br>チーム規模：大規模(約500⼈)<br>使用ツール：Eclipse<br>プログラミング言語：Java",
    color: colors.project,
    icon: "⚡",
  },
  {
    id: "girl-game",
    date: "2014/07〜2014/11",
    title: "美少女育成ゲーム開発",
    description:
      "美少⼥の服を着せ替えたりして愛でるゲームの機能調整・リリース作業を担当する。<br>チーム規模：小規模(2人)<br>担当範囲：フロントエンド<br>使用ツール：Unity・MonoDevelop<br>プログラミング言語：C#・Ruby<br>フレームワーク：Ruby on Rails",
    color: colors.project,
    icon: icons.game,
  },
  {
    id: "snowboard-game",
    date: "2014/04〜2014/06",
    title: "スノーボードゲーム開発",
    description:
      "スノーボードで雪⼭を滑り降りながらアイテムを取ってハイスコアを⽬指すミニゲームの運⽤保守を担当。バグ修正や広告機能追加・アイテム追加等の改修を担当する。<br>チーム規模：小規模(5人)<br>担当範囲：フロントエンド<br>使用ツール：Unity・MonoDevelop・Android Studio<br>プログラミング言語：C#",
    color: colors.project,
    icon: icons.game,
  },
  {
    id: "serette-in",
    date: "2014/04",
    title: "セレッテ入社",
    description:
      "自社ゲームを制作している東京の会社を見つけ入社する。東京でひとり暮らしを始める。",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "kcs",
    date: "2011/04～2014/03",
    title: "KCS福岡情報専⾨学校在学",
    description:
      "大学に落ち意気消沈している頃、プログラミングの専門学校がある事を知り元々パソコンが好きでゲーム作りに興味があったのでゲームクリエイター科に入学。プログラミングとゲーム作りに没頭する。",
    color: colors.school,
    icon: icons.school,
  },
  {
    id: "ronin",
    date: "2009/04～2011/03",
    title: "浪人時代",
    description:
      "九州大学を目指し2年浪人するが、勉強の努力実らず二次試験に落ち玉砕する。",
    color: colors.school,
    icon: icons.school,
  },
  {
    id: "seinan",
    date: "2006～2009",
    title: "⻄南学院⾼等学校",
    description:
      "小中学校と学年上位の成績があった為、県内の進学校へ入学。しかしFPSゲームとゲーム内MOD制作に没頭し危うく留年しそうになる。先生方の慈悲もあって何とか卒業する。",
    color: colors.school,
    icon: icons.school,
  },
  {
    id: "birth",
    date: "1990/07",
    title: "生誕",
    description:
      "ごく一般的なサラリーマンの家庭に生まれる。幼少期はラジコンが好きな父の影響を受け、LEGOやミニ四駆などモノ作りをして遊んでいた。",
    color: colors.birth,
    icon: icons.birth,
  },
];

const Chronology = () => {
  return (
    <div>
      <h2>年表</h2>
      <VerticalTimeline lineColor="#ddd">
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: element.color, color: "#333" }}
            contentArrowStyle={{ borderRight: `7px solid ${element.color}` }}
            date={element.date}
            iconStyle={{ background: element.color }}
            icon={
              <span
                style={{
                  fontSize: "32px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {element.icon}
              </span>
            }
          >
            <h2
              className="vertical-timeline-element-title"
              style={{ color: "#333" }}
            >
              {element.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: element.description }} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Chronology;
