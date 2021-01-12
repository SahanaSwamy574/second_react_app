import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

import blankImg from "./blank.gif";

import "./style.css";
import "./flags.min.css";

import countriesList from "./countries.json";

class App extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      search: ""
    });

    _defineProperty(this, "renderCountry", (country) => {
      const { search } = this.state;
      var code = country.code.toLowerCase();
      /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
          return null
      }*/

      return /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "col-md-3",
          style: {
            marginTop: "20px"
          }
        },
        /*#__PURE__*/ React.createElement(
          Card,
          null,
          /*#__PURE__*/ React.createElement(
            CardBody,
            null,
            /*#__PURE__*/ React.createElement(
              "p",
              {
                className: ""
              },
              /*#__PURE__*/ React.createElement("img", {
                src: blankImg,
                className: "flag flag-" + code,
                alt: country.name
              })
            ),
            /*#__PURE__*/ React.createElement(
              CardTitle,
              {
                title: country.name
              },
              country.name.substring(0, 15),
              country.name.length > 15 && "..."
            )
          )
        )
      );
    });

    _defineProperty(this, "onchange", (e) => {
      this.setState({
        search: e.target.value
      });
    });
  }

  render() {
    const { search } = this.state;
    const filteredCountries = countriesList.filter((country) => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "flyout"
      },
      /*#__PURE__*/ React.createElement(
        "main",
        {
          style: {
            marginTop: "4rem"
          }
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "container"
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "row"
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "col-12"
              },
              /*#__PURE__*/ React.createElement(
                "center",
                null,
                /*#__PURE__*/ React.createElement(
                  "h3",
                  null,
                  /*#__PURE__*/ React.createElement(
                    "a",
                    {
                      href: "https://www.youtube.com/watch?v=RM_nXOyHwN0",
                      target: "_blank"
                    },
                    "Watch youtube demo here"
                  )
                )
              )
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "col"
              },
              /*#__PURE__*/ React.createElement(Input, {
                label: "Search Country",
                icon: "search",
                onChange: this.onchange
              })
            ),
            /*#__PURE__*/ React.createElement("div", {
              className: "col"
            })
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "row"
            },
            filteredCountries.map((country) => {
              return this.renderCountry(country);
            })
          )
        )
      ),
      /*#__PURE__*/ React.createElement(
        Footer,
        {
          color: "indigo"
        },
        /*#__PURE__*/ React.createElement(
          "p",
          {
            className: "footer-copyright mb-0"
          },
          "\xA9 ",
          new Date().getFullYear(),
          " Copyright"
        )
      )
    );
  }
}

var _default = App;
exports.default = _default;
