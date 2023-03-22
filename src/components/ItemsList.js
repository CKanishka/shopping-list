const ItemsList = ({ list, selectedItem, setSelectedItem }) => {
  return (
    <div className="list-container">
      <div className="list-container__title">Shopping list</div>
      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`list-container__item ${
              selectedItem?.id === item.id
                ? "list-container__item--selected"
                : ""
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <svg
        className="list-container__wave-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#42C2FF"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,202.7C384,235,480,245,576,208C672,171,768,85,864,53.3C960,21,1056,43,1152,96C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="list-container__wave-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,256L40,213.3C80,171,160,85,240,85.3C320,85,400,171,480,224C560,277,640,299,720,272C800,245,880,171,960,165.3C1040,160,1120,224,1200,234.7C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default ItemsList;
