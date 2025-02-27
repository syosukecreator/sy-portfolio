const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="public/me.png"
          alt="自画像"
          style={{ width: "374px", height: "560px" }}
        />
        <div style={{ marginLeft: "16px" }}>
          <p>名前：長谷川 翔亮</p>
          <p>好きな食べ物：博多ラーメン</p>
          <p>好きな動物：狐</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
