import me from "../../public/me.png";

const Profile = () => {
  return (
    <div>
      <h2>プロフィール</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={me}
          alt="自画像"
          style={{ width: "374px", height: "560px" }}
        />
        <div style={{ marginLeft: "16px" }}>
          <p>
            こんにちは！長谷川
            翔亮と申します。年齢は34歳(2025/02現在)で、福岡県出身です。
          </p>
          <p>
            ものづくりが好きで少年期ではLEGOやミニ四駆で遊んでおり、学生時代ではFPSゲームのMODを作って遊んでいました。その延長線上でプログラミングとゲーム作りに興味を持ち、プログラマーとゲーム開発者のキャリアを積んできました。
            現在、個人ゲーム開発で売れるゲームを作ることを目指しています。
          </p>
          <p>
            趣味はゲーム作りとキャンプで、ゲーム作りではUnityを使ってゲームを作ることが多いです。キャンプでは荷台の広い車を使って車中泊やキャンプを楽しんでいます。
          </p>
          <p>好きな動物は白狐で、好きな食べ物は博多ラーメンです。</p>
          <p>よろしくお願いします。</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
