import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import data from '../../stub/blog_list.json';
import surf from '../../assets/surf.svg';
import uni from '../../assets/uni.svg';
import beach from '../../assets/beach.svg';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    var logo = (data) => {
      switch (data.logo) {
        case ("surf"):
          return <img src={surf} alt={"surf"} />
        case ("uni"):
          return <img src={uni} alt={"uni"} />
        case ("beach"):
          return <img src={beach} alt={"beach"} />
        default:
          return
      }
    };

    var posts = data.map((post, i) => {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date={new Date(post.date).toString()}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={logo(post)}
          key={i}
          position={(i % 2) ? "left" : "right"}
        >
          <h3 className="vertical-timeline-element-title">{post.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{post.author}</h4>
          <p>
            {post.content}
          </p>
        </VerticalTimelineElement>
      )
    })

    return (
      <VerticalTimeline>
        {posts}
      </VerticalTimeline>
    )
  }
}

export default Timeline;