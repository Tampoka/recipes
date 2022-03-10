// function List({data = [], renderEmpty, renderItem}) {
function List({ data = [], renderItem }) {
  /*    return !data.length
          ? renderEmpty
          : (<ul>
              {data.map((item, i) => (
                  <li key={i}>{renderItem(item)}</li>
              ))}
          </ul>)*/

  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;
