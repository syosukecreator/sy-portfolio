import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const colors = {
  game: "#ffe3e8",
  company: "#E3F0FF",
};

const icons = {
  game: "🎮",
  company: "🏢",
};

const timelineElements = [
  {
    id: "girl-game",
    date: "2024/06〜2025/01",
    title: "美少女ゲーム開発",
    description: "Unity・C#",
    color: colors.game,
    icon: icons.game,
  },
  {
    id: "cross-out",
    date: "2023/12",
    title: "クロスゲームズ退社",
    description: "",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "nft-game",
    date: "2022/08〜2023/11",
    title: "NFTゲーム開発",
    description: "Unity・C#",
    color: colors.game,
    icon: icons.game,
  },
  {
    id: "cross-in",
    date: "2022/08",
    title: "クロスゲームズ入社",
    description: "",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "uzu-out",
    date: "2022/03",
    title: "Uzufactory退社",
    description: "",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "tower-defense-game",
    date: "2020/03〜2021/07",
    title: "RPGゲーム開発",
    description: "Unity・C#",
    color: colors.game,
    icon: icons.game,
  },
  {
    id: "meta-verse-shopping-mall-app",
    date: "2021/07〜2022/03",
    title: "メタバースショッピングモールアプリ開発",
    description: "Unity・C#",
    color: "#E3FFED",
    icon: "🛒",
  },
  {
    id: "rithm-action-rpg-game",
    date: "2018/02〜2020/03",
    title: "リズムアクションRPGゲーム開発",
    description: "Unity・C#",
    color: colors.game,
    icon: icons.game,
  },
  {
    id: "tower-defense-game",
    date: "2016/04〜2018/01",
    title: "タワーディフェンスゲーム開発",
    description: "Unity・C#",
    color: colors.game,
    icon: icons.game,
  },
  {
    id: "uzu-in",
    date: "2016/04",
    title: "Uzufactory入社",
    description: "",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "serette-out",
    date: "2015/08",
    title: "セレッテ退社",
    description: "",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "electricity-company",
    date: "2014/11〜2015/08",
    title: "電⼒会社⽤Webアプリ開発",
    description: "Eclipse・Java",
    color: "#FFFEE3",
    icon: "⚡",
  },
  {
    id: "girl-game",
    date: "2014/07〜2014/11",
    title: "美少女育成ゲーム開発",
    description: "Unity・C#",
    color: colors.game,
    icon: icons.game,
  },
  {
    id: "snowboard-game",
    date: "2014/04〜2014/06",
    title: "スノーボードゲーム開発",
    description: "Unity・C#・Android Studio",
    color: colors.game,
    icon: icons.game,
  },
  {
    id: "serette-in",
    date: "2014/04",
    title: "セレッテ入社",
    description: "新卒入社",
    color: colors.company,
    icon: icons.company,
  },
  {
    id: "birth",
    date: "1990/07",
    title: "生誕",
    description: "この世に生まれる",
    color: "#EDE3FF",
    icon: "🎉",
  },
];

const Chronology = () => {
  return (
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
          <p>{element.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Chronology;
