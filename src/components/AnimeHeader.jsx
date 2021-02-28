const AnimeHeader = () => {

  return (
    <>
      <header id="title">
        <div className="mainHeader">Anime List</div>
      </header>

      <section className="subHeader">
        <div className="update">
          <p>Updated: </p>
        </div>
        <div className="legend">
          <ul>
            <li className="legendM">Movie</li>
            <li className="legendR">Watch Count</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default AnimeHeader