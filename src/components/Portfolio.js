import React, { Component } from "react"
import axios from "axios"
import styled from "styled-components"
import PortfolioCard from "./PortfolioCard"
import bg from "../images/works-background.jpg"

const PortfolioContainer = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg}) no-repeat top center, #202020;
  background-size: cover;
  padding-top: 90px;
  padding-bottom: 60px;
  height: 100vh;
  display: flex;
  align-items: center;

  h1 {
    font: 40px/46px "opensans-semibold", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
    margin-bottom: 48px;
    color: #39b1ff;
    text-shadow: #154a6d 1px 1px;
    font-weight: 700;
  }

  h2.loading {
    text-align: center;
    grid-column: 1 / span 3;
    color: #fff;
  }

  /* Portfolio Content */
  #portfolio-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
  }

  #portfolio-wrapper::before {
    display: none;
  }

  #portfolio-wrapper .portfolio-item {
    background-color: #1f1f1fde;
    padding: 10px;
    border: #154a6d 3px solid;
    box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.8);
    color: #fff;
    transition: 0.3s;
  }

  #portfolio-wrapper .portfolio-item:hover {
    box-shadow: 3px 5px 8px #154a6d;
    transition: 0.3s;
  }

  #portfolio-wrapper .portfolio-item a {
    text-decoration: none;
  }

  #portfolio-wrapper .portfolio-item h4 {
    color: #39b1ff;
    text-align: center;
  }

  #portfolio-wrapper .portfolio-item p {
    color: #afafaf;
    margin: 0 auto;
    text-align: center;
  }

  #portfolio-wrapper .portfolio-item span {
    color: #afafaf;
    margin: 0 auto;
    text-align: center;
    display: block;
  }

  #portfolio-wrapper .portfolio-item span.language {
    display: inline;
  }

  #portfolio-wrapper .portfolio-item span.language:hover {
    color: #39b1ff;
    transition: 0.1s;
  }
`

class Portfolio extends Component {
  state = {
    data: null,
    isLoading: true,
  }

  componentDidMount() {
    axios({
      url: "https://api.github.com/graphql",
      method: "post",
      headers: {
        Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
      },
      data: {
        query: `
        query{
          repositoryOwner(login: "matthewmahler") {
            ... on User {
              pinnedRepositories(first: 6) {
                edges {
                  node {
                    name
                    description
                    pushedAt
                    url
                    primaryLanguage {
                      name
                    }
                  }
                }
              }
            }
          }
        }`,
      },
    }).then(result => {
      this.setState({
        data: result.data.data.repositoryOwner.pinnedRepositories.edges,
        isLoading: false,
      })
    })
  }

  render() {
    return (
      <PortfolioContainer id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {this.state.isLoading === false ? (
                this.state.data.map((repo, i) => (
                  <PortfolioCard
                    key={i}
                    name={repo.node.name}
                    description={repo.node.description}
                    url={repo.node.url}
                    pushedAt={repo.node.pushedAt}
                    language={repo.node.primaryLanguage.name}
                  />
                ))
              ) : (
                <h2 className="loading">...LOADING...</h2>
              )}
            </div>
          </div>
        </div>
      </PortfolioContainer>
    )
  }
}

export default Portfolio
