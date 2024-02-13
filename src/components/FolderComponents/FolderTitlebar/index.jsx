import "./style.css";

function Titlebar() {
  return (
    <section className="titlebar-container">
      <div className="container">
        <div className="addlink-box">
          <input type="text" placeholder="링크를 추가해 보세요." />
          <button>추가하기</button>
        </div>
      </div>
    </section>
  );
}

export default Titlebar;
