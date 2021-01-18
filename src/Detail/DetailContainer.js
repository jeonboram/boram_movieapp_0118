import React from "react";
import { movieApi } from "api";
import DetailPresenter from "./DetailPresenter";


export default class extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    const { location: { pathname }} = props;
    this.state = {
      isLoading: true,
      results: null,
      error: null,
      isUpcoming: pathname.includes("/upcoming/")
    };
  }

  getDetails = async () => {
    const { match: { params : { id }}, history: { push }} = this.props;
    console.log(id, push);
    const { isUpcoming } = this.state;
    console.log(isUpcoming);
    let results = this.staste;
    try {
      if(!isUpcoming) {
        ({ data: results } = await movieApi.movieDetail(id));
      } else {
        ({ data: results } = await movieApi.movieDetail(id));
      }
    } catch {
      this.setState({ error: "Can't find Movie information"})
    } finally {
      this.setState({ isLoading: false, results })
      console.log(results);
    }
  };
    
  componentDidMount() {
    this.getDetails();
  };

  render() {
    const { isLoading, results, error } = this.state;
    return (
      <DetailPresenter 
        results={results}
        isLoading={isLoading}
        error={error}
      />
    );
  };
};
