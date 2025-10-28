const root = ReactDOM.createRoot(document.getElementById("root"));
const img1 = React.createElement("img", {
      src: "https://vlebazaar.in/image/cache/catalog//B0C78GR61T/realme-11-Pro-5G-Sunrise-Beige-8GB-RAM-256GB-Storage--120-Hz-Curved-Display--100-1200x1200h.jpg",
      alt: "Realme 11 Pro",
      style: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px"
      }
    });

    const h2 = React.createElement(
      "h2",
      { style: { margin: "10px 0 5px", fontSize: "20px" } },
      "RMX3771"
    );

    const h21 = React.createElement(
      "h3",
      { style: { margin: "0 0 10px", color: "#2e8b57" } },
      "Rs. 24,999"
    );

    const h23 = React.createElement(
      "p",
      {
        style: {
          fontSize: "14px",
          lineHeight: "1.5",
          color: "#555",
          textAlign: "justify"
        }
      },
      "The Realme 11 Pro 5G features a 6.7-inch Super AMOLED display, MediaTek Dimensity 1200 processor, and 8GB RAM for smooth performance and multitasking."
    );

    const button = React.createElement(
      "button",
      {
        onClick: () => alert("Item added to cart!"),
      },
      "Add to Cart"
    );

    const wrapper = React.createElement(
      "div",
      {
        style: {
          width: "260px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          padding: "15px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif"
        }
      },
      img1,
      h2,
      h21,
      h23,
      button
    );

    root.render(wrapper);
