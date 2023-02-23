import React from "react";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // menyimpan elemen textInput
    this.textInput = React.createRef();
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // akses value dari ref textInput
    this.props.onSubmit(this.textInput.current.value);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="fied">
            <label> Video Search</label>
            {/* menghubungkan input dengan ref yg telah dibuat pada constructor */}
            <input type="text" ref={this.textInput} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
