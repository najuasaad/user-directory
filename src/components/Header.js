
function Header() {

  return (
    <div>
      <h1 className="text-align-center">Random User Directory</h1>
      <style jsx="true">{`
        h1 {
          background-color: black;
          color: white;
          font-size: 30px;
          text-align: center;
          padding: 30px;
        }`}
      </style>
    </div>
  );
}

export default Header;