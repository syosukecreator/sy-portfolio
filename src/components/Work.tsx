import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineElements = [
  {
    id: "nft-game",
    date: "2024/06〜2025/01",
    title: "美少女ゲーム",
    description: "Unity・C#",
    color: "#bd196a",
  },
  {
    id: "nft-game",
    date: "2022/08〜2023/11",
    title: "NFTゲーム",
    description: "Unity・C#",
    color: "#bd196a",
  },
  {
    id: "tower-defense-game",
    date: "2020/03〜2021/07",
    title: "RPGゲーム",
    description: "Unity・C#",
    color: "#bd196a",
  },
  {
    id: "meta-verse-shopping-mall-app",
    date: "2021/07〜2022/03",
    title: "メタバースショッピングモールアプリ",
    description: "Unity・C#",
    color: "#2f4858",
  },
  {
    id: "rithm-action-rpg-game",
    date: "2018/02〜2020/03",
    title: "リズムアクションRPGゲーム",
    description: "Unity・C#",
    color: "#bd196a",
  },
  {
    id: "tower-defense-game",
    date: "2016/04〜2018/01",
    title: "タワーディフェンスゲーム",
    description: "Unity・C#",
    color: "#bd196a",
  },
  {
    id: "electricity-company",
    date: "2014/11〜2015/08",
    title: "電⼒会社⽤Webアプリ",
    description: "Eclipse・Java",
    color: "#594a89",
  },
  {
    id: "girl-game",
    date: "2014/07〜2014/11",
    title: "美少女育成ゲーム",
    description: "Unity・C#",
    color: "#bd196a",
  },
  {
    id: "snowboard-game",
    date: "2014/04〜2014/06",
    title: "スノーボードゲーム",
    description: "Unity・C#・Android Studio",
    color: "#bd196a",
  },
];

const Work = () => {
  return (
    <VerticalTimeline lineColor="#ddd">
      {timelineElements.map((element) => (
        <VerticalTimelineElement
          key={element.id}
          className="vertical-timeline-element--work"
          contentStyle={{ background: element.color, color: "white" }}
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
              🌟
            </span>
          }
        >
          <h2
            className="vertical-timeline-element-title"
            style={{ color: "white" }}
          >
            {element.title}
          </h2>
          <p>{element.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Work;
