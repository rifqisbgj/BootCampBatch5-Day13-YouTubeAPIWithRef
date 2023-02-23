import React from "react";
import SearchBar from "./SearchBar";
// set up api key
import youtube from "./youtube";

class Video extends React.Component {
  // penyimpanan data video
  state = { videos: [] };

  onSearchSubmit = async (term) => {
    const res = await youtube.get("/search", {
      // ambil data dari youtube berdasarkan term/inputan user
      params: { q: term },
    });

    this.setState({ videos: res.data.items });
    console.log(res.data.items);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* get term from search bar */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div>
          <div class="ui equal width grid">
            {/* tampilkan video pada index pertama */}
            {this.state.videos.map((content, i) => {
              if (i === 0) {
                return (
                  <div className="eight wide column">
                    <iframe
                      src={`https://www.youtube.com/embed/${content.id.videoId}`}
                      title={content.snippet.channelTitle}
                      frameborder="0"
                      width="560"
                      height="315"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                );
              }
              return null;
            })}

            {/* tampilkan list video pada index 1 - 4 dengan menampilkan thumbnail dan judul */}
            <div className="column">
              {this.state.videos.map((content, i) => {
                if (i > 0) {
                  return (
                    <div>
                      <img
                        width="480px"
                        height="360px"
                        src={content.snippet.thumbnails.high.url}
                        alt=""
                        class="ui small top aligned image"
                      />
                      <span>
                        {" "}
                        <b>{content.snippet.title}</b>
                      </span>

                      <div class="ui divider"></div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
