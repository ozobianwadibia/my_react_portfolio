import React, { Component } from "react";

class ScrollButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    window.pageYOffset > 200
      ? this.setState({ is_visible: true })
      : this.setState({ is_visible: false });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div>
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <button className="scrollArrow">
              <span>&#8593;</span>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ScrollButton;
