import React from 'react'
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle('Blogs');
  return (
    <div className="carousel w-[80%] h-[550px] mx-auto">
      <div className=" card mb-4">
      <div className="mb-4">
            <h1 className="font-bold mb-2">
              1. What is an access token and refresh token? How do they work and where should we store them on the client-side?.
            </h1>
            <p>
              <strong>Answer</strong>: Storing tokens in browser local storage provides persistence across page refreshes and browser tabs.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold mb-2">2. Compare SQL and NoSQL databases?

            </h1>
            <p>
              <strong>Answer</strong>: SQL databases are primarily called Relational Databases (RDBMS).These databases have fixed or static or predefined schema. NoSQL databases are
              Non-relational or distributed database system.They have a dynamic schema.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold mb-2">
              3. What is express js? What is Nest JS?
            </h1>
            <p>
              <strong>Answer</strong> : 
              Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
              NestJS is a framework for building efficient, scalable Node.js web applications.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold mb-2">4. What is MongoDB aggregate and how does it work?</h1>
            <p>
              <strong>Answer</strong> : The aggregation pipeline allows you to perform complex operations that will allow any range of insights into your collections. . 
            </p>
          </div>
      </div>
    </div>
  )
}

export default Blog