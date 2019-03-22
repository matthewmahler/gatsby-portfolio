import PortfolioCard from "./PortfolioCard"
import axios from "axios"

import React, { Component } from "react"

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
      <section id="portfolio">
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
      </section>
    )
  }
}

export default Portfolio
