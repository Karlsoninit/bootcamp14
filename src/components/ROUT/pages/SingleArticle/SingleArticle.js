import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './SingleArticle.module.css';
import { getAllNews, chooseCategory } from '../../API/API';
import Preloader from '../../Preloader/Preloader';
import articleModal from './articleModal.module.css';

class SingleArticle extends Component {
  state = {
    article: {},
    loader: true,
    isOpen: false,
  };

  componentDidMount() {
    console.log('params', this.props.location.state.category);
    console.log(this.props.location.state.category);
    if (this.props.location.state.category === 'null') {
      console.log(false);
    }

    if (this.props.location.state.category === 'null') {
      getAllNews().then(data =>
        this.setState({
          article: data.find(
            elem => elem.publishedAt === this.props.match.params.someArticle,
          ),
          loader: false,
          isOpen: true,
        }),
      );
    } else {
      chooseCategory(this.props.location.state.category).then(data =>
        this.setState({
          article: data.find(
            elem => elem.publishedAt === this.props.match.params.someArticle,
          ),
          loader: false,
          isOpen: true,
        }),
      );
    }
  }

  back = () => {
    this.props.history.push('/news');
  };

  render() {
    console.log('SingleArticle', this.props.match.params.someArticle);
    console.log(this.state.article);
    const { description, urlToImage, title } = this.state.article;
    const { isOpen } = this.state;
    return (
      <CSSTransition
        in={isOpen}
        classNames={articleModal}
        timeout={3000}
        unmountOnExit
      >
        <div className={css.container}>
          <div>{this.state.loader && <Preloader />}</div>
          <h2>{title}</h2>
          <img className={css.img} alt={urlToImage} src={urlToImage} />
          <p>{description}</p>
          <button onClick={this.back}>back to news</button>
        </div>
      </CSSTransition>
    );
  }
}

export default SingleArticle;
