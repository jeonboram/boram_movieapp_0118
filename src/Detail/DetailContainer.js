import React from "react";
import api from "api";
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
    let results = null;
    try {
      if(!isUpcoming) {
        ({ data: results } = await api.get(`movie/${id}?api_key=0d32823bbea4b0889cdd7c4bce3b1dbc&language=en-US`));
      } else {
        ({ data: results } = await api.get(`movie/${id}?api_key=0d32823bbea4b0889cdd7c4bce3b1dbc&language=en-US`));
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
