export default function Footer({ items }) {
  const itemsLength = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const itemLeft = Math.round((itemPacked / itemsLength) * 100);

  if (itemLeft === 100) {
    return (
      <footer className="footer">
        <em>You got everything reeady to go ✈</em>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <em>
        {itemsLength < 1
          ? "Start adding some items to your packing list 🛫"
          : `💼 You have ${itemsLength} items on your list, and you already packed ${itemPacked} (${itemLeft}%)`}{" "}
      </em>
      <p className="footer__paragraph">
        design by{" "}
        <a
          href="https://github.com/CyberScript007"
          target="_blank"
          rel="noreferrer"
        >
          busari shakrullahi
        </a>
      </p>
    </footer>
  );
}
