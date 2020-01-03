import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import { fetchMovies } from "../actions/moviesActions";

import MoviesCardList from "../components/MoviesCardList";

const styles = {
  root: {
    marginTop: 50
  }
};

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  handlePageChange(pageNumber) {
    this.props.fetchMovies(pageNumber);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h4" component="h1" gutterBottom>
          Popular Movies
        </Typography>
        <div className="row">
          <MoviesCardList movies={this.props.movies} cols={6} />

          {this.props.movies && this.props.movies.length ? (
            <div className="col-md-12 text-center">
              <Pagination
                activePage={this.props.page}
                itemsCountPerPage={20}
                totalItemsCount={this.props.totalResults}
                pageRangeDisplayed={5}
                innerClass="pagination"
                itemClass="page-item"
                linkClass="page-link"
                disabledClass="disabled"
                activeClass="active"
                onChange={this.handlePageChange.bind(this)}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { movies, loading, page, totalResults } = state.moviesStore;
  return { movies, loading, page, totalResults };
}

export default connect(
  mapStateToProps,
  { fetchMovies }
)(withStyles(styles)(HomePage));
