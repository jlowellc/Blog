import React from "react"
import { Link } from "gatsby"
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utility"

const Post = ({ title, author, date, path, body, fluid, tags }) => {
  return (
    <Card>
      <Img className="card-image-top" fluid={fluid} />
      <CardBody>
        <CardTitle>
          <Link to={path}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> by{" "}
          <span className="text-info">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tags => (
            <li>
              <Link to={`/tag/${slugify(tags)}`}>
                <Badge color="primary" className="text-uppercase">
                  {tags}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={path} className="btn btn-outline-primary float-right">
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
